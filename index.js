'use strict'

class SpawnWebpackPlugin {
  constructor ({ command, spawn, sync } = {}) {
    this.command = command
    this.sync = sync || false
    this.spawn = spawn || require('child_process').spawn

    this.emit = (compilation, callback) => {
      this.exec(this.command)
      return typeof callback === 'function' && callback()
    }
  }

  apply (compiler) {
    const event = this.sync ? 'compilation' : 'emit'
    compiler.plugin(event, this.emit)
  }

  exec (command) {
    return new Promise((resolve, reject) => {
      const [program, ...params] = command.split(' ')
      const cmd = this.spawn(program, params, { stdio: 'inherit' })
      cmd.on('close', resolve)
      cmd.on('error', reject)
    })
  }
}

module.exports = SpawnWebpackPlugin
