# Kites cli

Command line interface for Kites Framework

[![Join the chat at https://gitter.im/nodevn/kites](https://badges.gitter.im/nodevn/kites.svg)](https://gitter.im/nodevn/kites)
[![npm version](https://img.shields.io/npm/v/@kites/cli.svg?style=flat)](https://www.npmjs.com/package/@kites/cli)
[![npm downloads](https://img.shields.io/npm/dm/@kites/cli.svg)](https://www.npmjs.com/package/@kites/cli)

# Features

* Generate new kites applications
* Run application in development mode

# Usage

### Create a new kites application

```bash
# generate a new app
kites init my-project

# install dependencies and startup program
cd my-project
npm install
npm start
```

### Startup kites application

```bash
$ kites up app.js
```

### Options

```yaml
$ kites --help
Usage: kites [command] [options]

Options:
  -v, --version            output the version number
  -h, --help               output usage information

Commands:
  version
  init|i [options] [name]  Init a new kites project
  up [options] [script]    Startup kites project
  *
```

### Built-in templates:

* [x] [typescript-starter](https://github.com/kitesjs/typescript-starter) - Kites Project Starter with Typescript (default)
* [ ] [project-docs](https://github.com/vunb/kites) - Template for building project document
* [ ] [kites-template-cms](https://github.com/kitesjs/freecms) - Template for generating a Content Management System (CMS), *inprogress*
* [ ] [kites-template-chat](#) - Real-time Chat with RoomRTC, *inprogress*
* [ ] [kites-template-videocall](#) - Real-time Video Call with RoomRTC, *inprogress*

# License

MIT License

Copyright (c) 2018 Nhữ Bảo Vũ

<a rel="license" href="./LICENSE" target="_blank"><img alt="The MIT License" style="border-width:0;" width="120px" src="https://raw.githubusercontent.com/hsdt/styleguide/master/images/ossninja.svg?sanitize=true" /></a>
