#!/usr/bin/env node

'use strict'
const _ = require('lodash')
const chalk = require('chalk')
const program = require('commander')
const init = require('../src/app/init.js')
const version = require('../package').version

var NOOP = function () {};
var help = function () {
    // Allow us to display help(), but omit the wildcard (*) command.
    program.commands = _.reject(program.commands, {
        _name: '*'
    })
    program.help()
}

/**
 * Normalize cli version argument, i.e.
 * 
 * $ kites -v
 * $ kites -V
 * $ kites --version
 * $ kites version
 */
program.version(version, "-v, --version")

// make '-v' option case-insensitive
process.argv = _.map(process.argv, function (arg) {
    return (arg === '-V') ? '-v' : arg;
});

// $ kites version (--version synonym)
program
    .command("version")
    .description("")
    .action(function () {
        program.emit("version")
    })

/*
 * Init a new kites project
 * */
program
    .command('init [name]')
    .option('-d --directory [dir]', 'app directory', '.')
    .option('-t --template [template]', 'template [api]', 'api')
    .description('Init a new kites project')
    .alias('i')
    .action(function (name, opts) {
        // init kites app
        init(name, opts.directory, opts.template).then((app) => {
            console.log(`
            $ kites init success!
                name: ${chalk.green(app.name)}            
                template: ${chalk.green(app.template)}            
                directory: ${chalk.green(app.path)}            
            `)
        }).catch((err) => {
            console.log(`
            $ Kites init got an error, please report with these information:
                @kite/cli (version): ${chalk.green(version)}
                template: ${chalk.yellow(opts.template)}
                directory: ${chalk.green(opts.directory)}
                detail: ${chalk.red(err)}
            `)
        })
    })
    .on("--help", function () {
        console.log('  Examples:');
        console.log(`
            Examples:
                $ kites init my-app -t chatbot
                $ kites init my-app -t chatbot -d path/to/working/directory
        `);
    })

program
    .command("*")
    .action(help);

/**
 * Kites cli
 */
program.parse(process.argv)

// NO_COMMAND_SPECIFIED 
if (!program.args.length) {
    program.help()
}