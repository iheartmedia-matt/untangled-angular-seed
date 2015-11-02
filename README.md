# untangled-angular-seed - a minimal AngularJS 1.x seed app

This project provides all you need to get your AngularJS app started. The seed app:

- uses minimal boilerplate code so it gets out of your way
- uses a best practice architectural style so you can start writing your app knowing it's correct right from the start.
- provides a simple automated build that automatically minifies and concatenates your code without any configuration required
- provides automatically-generated sourcemaps of all your files, so you can debug _your_ code, not the minified version 
- provides a simple installation routine
- comes with its own development server out of the box, letting you run your app easily
- watches your app's files and live-reloads them on any change
- automatically compiles your directives' partials into their own Angular module and stores them in Angular's `$templateCache` for you.

# Main Features
- no lengthy install routine. `npm install` and done
- no messy configuration to get it running. `gulp serve` and done
- no manual script includes for each new file you create - it's all done for you
- no messy karma.config editing to get your tests running
- no need to add your test files to karam - they're added for you
- no fiddling around with directive templates for your tests - they're automatically available to your tests as soon as you start writing them
- no worrying about whether you're doing it right. Both the directory structure and the code follow best practice 

#Requirements
To install this app, you'll need [git](https://git-scm.com/) and [Node](https://nodejs.org/) installed.
    
#Installation

From the command line, clone the `untangled-angular-seed` repo into a directory of your choice. From the terminal, just type: 

`git clone git@github.com:bundance/untangled-angular-seed.git`

Change directory to the `untangled-angular-seed` directory git has just creeated for you, and do an npm install:

```
cd untangled-angular-seed
npm install
```

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
To run the app, type:

`gulp serve`
    
Once run, browse to `127.0.0.1:8080`

To change the port, just type:

`gulp serve --port=< your_port_number >`

For example, to serve the app on port 8000, type:

`gulp serve --port=8000`

Running `gulp serve` causes a live reload, so all your app's files are automatically rebuilt whenever you save your
changes (note: the library files aren't rebuilt - if you want those rebuilt, you'll need to run `gulp build` again).

# Running the tests
You run the tests using:

`karma start`

## Including your directives' partials in your tests
This app is setup to concatenate your directives' partials into one file, which is then turned into an Angular module and 
served to your app and your tests upon requests.
 
To do this, it searches the whole app for files called `*.tpl.html`. Accordingly, to ensure your directives' partials
are concatenated successfully, they _must_ end with `.tpl.html`.


#Deep Dive into the App

##Scaffolding HTML page (index.html)

Index.html is the main HTML scaffolding page. It's not a complete, production-ready page like the [HTML5 Boilerplate](https://html5boilerplate.com/)
template, but that's by design. By avoiding the heavy meta-data and deprecated-browser fallback techniques of such production-ready
pages, you can see the app's scaffolding structure and directives more clearly, without being distracted by HTML that's
not specific to the app itself.

Accordingly, `index.html` comprises:
- a custom header directive (`untangled-header`), featuring a simple way to provide top navigation menus 
- an `ng-view` directive in which your main content will be rendered according to the routing options
you provide in `scripts/app/appModule/app.routes.js`
- a static footer.

Styling is minimal, and is provided by [Bootstrap 3.0](http://getbootstrap.com/), and a small bit of custom CSS declared in
`main.css`, which keeps the footer sticking to the bottom of the page (see
[CSS-Tricks](https://css-tricks.com/snippets/css/sticky-footer/) for more details).

The main body of the HTML page (without CSS classnames) looks as follows:

```
<!-- Bootstrap the app by name -->
<body ng-app="app">
    <!-- Declare the main app controller -->
    <div ng-controller="appController as appCtrl">
            <div>
                <!-- custom header directive -->
                <untangled-header untangled-title="Untangled Seed App" untangled-menu-items="appCtrl.menuItems"></untangled-header>
            </div>
        </div>
        <div>
            <!-- main content -->
            <div ng-view=""></div>
        </div>
    </div>
    <!-- Sticky footer -->
    <footer>
        <div>Angular Seed App by Untangled.io</div>
    </footer>
</body>
```
    
##App structure

The structure of the app has been written according to the inestimable John Papa's
[style guide](https://github.com/johnpapa/angular-styleguide), widely regarded by the Angular community as _the_ best
way to create an Angular app. 
 
The main app folder comprises the following components:

- the main appModule components (config, run, constants, routes, etc.)
- layout components (header, footer and sidebar directives)
- routes (HTML templates and controllers needed for specific routes)

## Folder structure organization
The app's folder structure is organized by component, not by component type. Each folder therefore contains all files 
necessary for the component to render, run and be tested. That is, all files - controllers, services, html, tests, etc. - 
specific to a particular component are all contained within the same folder, named after that component.
 
### Folder structure in detail

```
.bowerrc                                         <-- bower settings
.git/                                            <-- git folder
.gitignore                                       <-- git ignore file
README.md                                        <-- this file
bower.json                                       <-- bower component settings (e.g. list of library files to install)
bower_components/                                <-- bower components (the files that become lib.min.js)
dist/                                            <-- compiled files for distribution
gulpfile.js                                      <-- gulp tasks for building and running the app
karma-conf.js                                    <-- karma test runner config
node_modules/                                    <-- node modules (the files that are used to build and run the app)
package.json                                     <-- node module settings (e.g. list of build files to install)
scripts/                                         <-- the app's code (finally!)
------ app/        
       |--- appModule/                          <-- components needed by the app)
       |    |--- app.config.js                  <-- app configuration (currently sets HTML5 mode)              
       |    |--- app.constants.js               <-- put app-specific constants here (currently sets app's title)
       |    |--- app.controller.js              <-- main controller for the app
       |    |--- app.module.js                  <-- register the app and its module dependencies
       |    |--- app.routes.js                  <-- define the app's routes and their corresponding controllers and templates
       |    |--- app.run.js                     <-- put any code that needs to be run before the app itself starts here
       |    |--- app.values.js                  <-- app-specific, non-constant values (menu-items are currently defined here)
       |--- layout/                             <-- main layout components (header, footer, etc.) 
       |    |--- footer/       
       |    |    |--- footer.directive.js       <-- footer directive definition 
       |    |    |--- footer.directive.spec.js  <-- footer directive test
       |    |    |--- footer.directive.spec.js  <-- footer directive template
       |    |--- header/       
       |    |    |--- header.directive.js       <-- header directive definition 
       |    |    |--- header.directive.spec.js  <-- header directive test
       |    |    |--- header.directive.spec.js  <-- header directive template
       |--- routes/                             <-- app route definitions (controllers and templates)
       |    |--- about/
       |    |    |--- about.html                <-- html template for about page
       |    |--- home/
       |    |    |--- home.html                 <-- html template for home page
       |    |    |--- home.controller.js        <-- controller for home page
static/                                         <-- static files
      |--- assets/                                 
      |          |--- styles/                   <-- CSS style declarations
      |                      |--- bootstrap.css <-- Bootstrap 3.0 styles        
      |                      |--- main.css      <-- custom app-specific styles
--- index.html                                  <-- index file (scaffolding HTML page)
```


###Code Structure

The app's code also complies fully with John Papa's style recommendations, with `controllerAs` used
throughout, IIFEs enclosing component declarations to avoid globals, and the ViewModel represented as a
capture variable called `vm`.

#### Controllers
There are no `ng-controllers` used in pages other than the main index.html, with directives being used as components
with their own controllers.

The only other controllers used are those associated with a specific route. These are defined within the 
`app.routes.js` file.

#### Directives
Directives act as a single component, and so are given their own folder. Note that for a directive's partial to be compiled into 
a single module (and thus be available automatically for testing), its name needs to be appended with `.tpl.html`.  

#Credits
This seed app was created by Mike Evans of [Untangled.io](http://untangled.io). Feel free to use it
as you see fit. You can clone it, fork it, do whatever you want with it. If you use it as part of a tutorial
or course, though, I'd be grateful if you could provide a link to [Untangled.io](http://untangled.io) :)

