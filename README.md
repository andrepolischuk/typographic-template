# typographic-template [![Build Status](https://travis-ci.org/andrepolischuk/typographic-template.svg?branch=master)](https://travis-ci.org/andrepolischuk/typographic-template)

  > Replace all :keys in text with given options

## Install

```sh
npm install --save typographic-template
```

## Usage

```js
var template = require('typographic-template');

template('Hello :name!', {name: 'Ivan'}); // Hello Ivan!
```

  With [textr](https://github.com/shuvalov-anton/textr)

```js
var textr = require('textr');
var template = require('typographic-template');

var tf = textr({name: 'Ivan'})
  .use(template);

tf('Hello :name!'); // Hello Ivan!
```

## License

  MIT
