# Types Directory

Directory of all DefinitelyTyped types

## Install

`npm i types-directory`

## Usage

The module exports an array of all the types available

```js
const { types } = require('types-directory')

console.log(types) // Array of all the types available
```

## Related

- [Install Types](https://github.com/ClearTax/install-types) - Auto install (uninstall) typings for your package dependencies.

## Contributing

Want to update the directory?

Follow these easy steps

```sh
# clone this repository
$ git clone https://github.com/maddhruv/types-directory

$ cd types-directory
# clone the DefinitelyTyped repository
$ git clone https://github.com/DefinitelyTyped/DefinitelyTyped --depth 1
# collect the types into the directory
$ npm start
# add the changes made to `directory.json`
$ git add directory.json
# commit the changes
$ git commit -m "update: directory :green_book:"
# git push and raise a pull request
```

Thanks in advance for contributing to types-directory. Now you can leave publishing on me.
