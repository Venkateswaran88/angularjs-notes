# `angularjs-notes` — Simple CRUD operation for in AngularJS app.

The project contains a sample AngularJS (Notes CRUD) application and is preconfigured to install the AngularJS
framework.

## Getting Started

To get you started you can simply clone the `angularjs-notes` repository and install the dependencies:

### Prerequisites

You need git to clone the `angularjs-notes` repository. You can get git from [here][git].

We also use a number of Node.js tools to initialize and test `angularjs-notes`. You must have Node.js
and its package manager (npm) installed. You can get them from [here][node].

### Clone `angularjs-notes`

Clone the `angularjs-notes` repository using git:

```
git clone https://github.com/Venkateswaran88/angularjs-notes.git
cd angularjs-notes
```

### Install Dependencies

We have two kinds of dependencies in this project: tools and AngularJS framework code. The tools
help us manage and test the application.

We get the tools we depend upon and the AngularJS code via `npm`, the [Node package manager][npm].

We have preconfigured `npm` to automatically copy the downloaded AngularJS files so we
can simply do:

```
npm install
```

```
gulp
```

Above command copies the AngularJS files and
other front end dependencies. After that, you should find out that you have two new directories in
your project.

* `node_modules` - contains the npm packages for the tools we need
* `build` - contains the AngularJS framework files and other front end dependencies

*Note copying the AngularJS files from `node_modules` to `build` makes it easier to serve the files by a web server.*

### Development Mode

```
gulp cw
```

Above command useful for development phase, if you change any files (sass, ng-app) it will update lateset
changes to `build` folder.


### Run the Application

```
sudo npm install -g http-server
```

Then you can start your own development web server to serve static files from any folder by running:

```
http-server -a localhost -p 8000
```

Now browse to the app at [`localhost:8000/login.html`][local-app-url].

[angularjs]: https://angularjs.org/
[git]: https://git-scm.com/
[http-server]: https://github.com/indexzero/http-server
[jasmine]: https://jasmine.github.io/
[jdk]: https://wikipedia.org/wiki/Java_Development_Kit
[jdk-download]: http://www.oracle.com/technetwork/java/javase/downloads
[karma]: https://karma-runner.github.io/
[local-app-url]: http://localhost:8000/login.html
[node]: https://nodejs.org/
[npm]: https://www.npmjs.org/
[protractor]: http://www.protractortest.org/
[selenium]: http://docs.seleniumhq.org/
[travis]: https://travis-ci.org/
[travis-docs]: https://docs.travis-ci.com/user/getting-started
