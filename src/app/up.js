'use strict'
const path = require('path')
const exec = require('child_process').exec


/**
 * Startup kites application
 * 
 * @param {String} app name of the app created by @kites/cli
 */
function cmdUp(app) {

    const cwd = path.join(process.cwd(), (app || '.'))
    const pkg = require(path.join(cwd, 'package.json'))
    var script = pkg.scripts.start

    if (!script) {
        // default
        script = 'node app.js'
    }
    var devEnv = process.env
    devEnv.NODE_ENV = 'development'

    const child = exec(script, {
        cwd: cwd,
        env: devEnv
    })

    child.on('exit', function (code, signal) {
        console.log('kites: child process exited with ' +
            `code ${code} and signal ${signal}`)
    })

    child.stdout.pipe(process.stdout)
    child.stderr.pipe(process.stderr)

    return Promise.resolve({
        name: pkg.name,
        template: pkg.template,
        path: cwd
    })
}
module.exports = cmdUp