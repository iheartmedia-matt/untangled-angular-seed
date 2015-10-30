# untangled-angular-seed - a minimal AngularJS seed app done correctly
This project provides all you need to get your AngularJS app started. The seed app:
- uses minimal boilerplate code so it gets out of your way
- uses the correct architectural styles and best practice so you can start writing your app knowing it's correct right from the start.
- provides simple automated-build tooling that automatically minifies and concatenates your code without any configuration required
- provides a simple installation routine
- comes with its own development server out of the box, letting you run your app easily
- automatically compiles your directives' partials into their own Angular module and stores them in `$templateCache` for you.

##Main Features
###Scaffolding HTML page (i.e index.html)

Index.html is the main HTML scaffolding page. It's not a complete, production-ready page like the (HTML5 Boilerplate)[https://html5boilerplate.com/]
template, but that's by design. By avoiding the heavy meta-data and old-browser fallbacks of such production-ready
pages, you can see the app's scaffolding structure and directives more clearly, without being distracted by HTML that's
not specific to the app itself.

Accordingly, `index.html` comprises:
-a custom header directive featuring a simple way to provide top navigation menus 
-an `ng-view` directive in which your main content will be rendered according to the routing options
you provide in `scripts/app/appModule/app.routes.js`
-a static footer.

Styling is minimal, and is provided by (Bootstrap 3.0)[http://getbootstrap.com/], and a small bit of custom CSS declared in
`main.css`, which keeps the footer sticking to the bottom of the page (see
(CSS-Tricks)[https://css-tricks.com/snippets/css/sticky-footer/] for more details).
    
##App structure<

The structure of the app has been written according to the inestimable John Papa's
(style guide)[https://github.com/johnpapa/angular-styleguide], with the main app folder comprising
the following components:

-the main appModule (config, run, constants, routes, etc,)
-layout components (header, footer and sidebar directives)
-routes (HTML templates and controllers needed for specific routes)

Each folder contains all files necessary for the component to render, run and be tested.

#Code Structure

The AngularJS code also complies fully with John's style recommendations, with `controllerAs` used
throughout, IIFE's enclosing component declarations to avoid globals, and the ViewModel represented as a
capture variable called `vm`.

#Requirements
To install this repo, you'll need (git)[https://git-scm.com/] and (Node)[https://nodejs.org/] installed.

#Installation

From the command line, clone the `untangled-angular-seed` repo into a directory of your choice. 

``` git clone git@github.com:bundance/untangled-angular-seed.git ```

Change directory to the untangled-angular-seed directory

``` cd untangled-angular-seed directory ```

Do an npm install:

``` npm install ```

And that's it! The app has now been installed, complete with the following dependencies:
 
- Gulp build tool
- Gulp connect (to serve your files)
- Karma test runner
- Karma-ng-html2js-preprocessor
- PhantomJS
- Jasmine testing framework
- Bower
- AngularJS
- Bootstrap 3.0
- JQuery
- Lodash

# Running the app
    ```gulp serve```
    
Once run, browse to `127.0.0.1:8080`

To change the port, just type

```gulp serve --port=< your_port_number >```

For example, to serve the app on port 8000, type

```gulp serve --port=8000```

Running `gulp serve` causes a live reload, so all your app's files are automatically rebuilt whenever you save your
changes (note: the library files aren't rebuilt - if you want those rebuilt, you'll need to call `gulp build` again).

# Testing the app
```karma start```

This seed app was created by Mike Evans of <a href="http://untangled.io">Untangled.io</a>. Feel free to use it
as you see fit. You can clone it, fork it, do whatever you want with it. If you use it as part of a tutorial
or course, though, I'd be grateful if you could provide a link to Untangled.io :)

Any questions or queries, feel free to send them to mike . evans at untangled . io.