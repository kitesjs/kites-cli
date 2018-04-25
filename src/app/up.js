'use strict'
const fs = require('fs')
const path = require('path')
const exec = require('child_process').exec


/**
 * Startup kites application
 * 
 * @param {String} app name of the app created by @kites/cli
 */
function cmdUp(app) {

    const cwd = path.join(process.cwd(), (app || '.'))
    const pkgInfo = path.join(cwd, 'package.json')

    if (!fs.existsSync(pkgInfo)) {
        return Promise.reject('Not Found: ' + pkgInfo)
    }

    const pkg = require(pkgInfo)
    var script = pkg.scripts.start
    var devEnv = process.env

    devEnv.NODE_ENV = 'development'

    if (!script) {
        // default
        script = 'node app.js'
    }

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