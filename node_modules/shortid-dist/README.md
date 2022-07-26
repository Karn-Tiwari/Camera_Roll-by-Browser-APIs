# shortid-dist

[![npm version](https://badge.fury.io/js/shortid-dist.svg)](https://www.npmjs.com/package/shortid-dist)

CDN friendly build of [shortid](https://www.npmjs.com/package/shortid).
The `shortid` function is exposed as a global.

## CDN

### Bundled + Minified

    <script src="https://unpkg.com/shortid-dist@1.0.4/dist/shortid-2.2.8.min.js"></script>

3 KB

### Bundled

    <script src="https://unpkg.com/shortid-dist@1.0.4/dist/shortid-2.2.8.js"></script>

31 KB

## Example

    alert(shortid());

See the [Live Demo](https://adamjarret.github.io/shortid-dist).

## Development

Follow these instructions to get a local copy of the project source code for development.

The **index.html** file in the project root can be opened directly in a browser (`file://` URL).

The CWD of the `npm` commands is assumed to be the project root folder.


### Installing

    git clone https://github.com/adamjarret/shortid-dist.git
    cd shortid-dist
    npm install

### Building

Bundle shortid with webpack (minified and unminified):

    npm run build

### Cleaning

Delete all generated files:

    npm run clean
    
## Built With

* [shortid](https://www.npmjs.com/package/shortid)
* [webpack](http://webpack.js.org)

## Contributing

Fork the repo and submit a pull request.

## Versioning

[SemVer](https://semver.org/) is used for versioning.
For the versions available, see the [tags on this repository](https://github.com/adamjarret/shortid-dist/tags). 

## Releasing

The `npm version` and `npm run links` commands both accept a semver argument:
`<newversion>|major|minor|patch` (where `<newversion>` is a standard version number, ex. 1.0.0).
See [npm-version](https://docs.npmjs.com/cli/version) for more information.

Examine what will be included in the npm bundle:

    npm run pack

Update the links in the **README.md** and **index.html** files (and commit the changes) _before_ running `npm version`:

    npm run links -- patch
    git add README.md index.html
    git commit -m "Updated links"

Bump the version number in **package.json** and create a git tag:

    npm version patch

Publish a new version:

    npm publish
    git push origin master --tags

## Author

[Adam Jarret](https://atj.me)

See the list of [contributors](https://github.com/adamjarret/shortid-dist/contributors)
who participated in this project.

## License

This project is licensed under the _BSD Zero Clause License_.
See the [LICENSE.txt](https://github.com/adamjarret/shortid-dist/blob/master/LICENSE.txt) file for details.

shortid is licensed under the _MIT +no-false-attribs License_.
See the [LICENSE.shortid.txt](https://github.com/adamjarret/shortid-dist/blob/master/dist/LICENSE.shortid.txt) file for details.
