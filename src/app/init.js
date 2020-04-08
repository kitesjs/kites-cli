'use strict'
const path = require('path')
const chalk = require('chalk')
const download = require('download-git-repo')
const templates = require('./templates')

/**
 * Initialize a new project with Kites Framework
 * By extract templates on the registry @vunb/kites
 *
 * @param {String} name application name
 * @param {String} dir location of application will be installed
 * @param {String} template type of application that supported (api|spa|chatbot|videocall)
 */
function initKites(name, dir, template) {
  // validate template as a git branch
  if (!templates[template]) {
    return Promise.reject('Kites does not support template: ' + template)
  }
  const cwd = process.cwd()
  const appName = name || 'my-app'
  const gitRepo = templates[template]
  const downloadPath = path.join(cwd, dir || './', appName)

  // download kites templates
  return new Promise((resolve, reject) => {
    download(gitRepo, downloadPath, function (err) {
      if (err) {
        reject(err)
      } else {
        resolve({
          name: appName,
          path: downloadPath,
          template: template
        })
      }
    })
  })
}
module.exports = initKites
