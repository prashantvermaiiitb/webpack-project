# webpack-project

1. Just running "npm i" will provide the information for the package that needed to be installed or considered for upgrade
2. making the package as "private" with value true because we do not want to publish this accidently.If we remove all the other data points like name, bugs etc from package json then there will be warnings like 
   1. No Description
   2. No Licences
   3. Not Public
These will be removed by marking project as private because we do not want this package to get published automatically.
3. after this same "npm i" will give lesser packages with warnings are now gone.
4. Reason for ignoring dist is : so adding that in .gitignore
   1. it should be repeatable 
   2. it should be freshly generated
5. If you set devtool : false then generated JS file will be very simple and all webpack transpilation may be removed. For readable output files we have to make the devtool as false.
6. Sourcemap can be used in the devtool to see the function calls from the console mapped to generated distributable code.
7. hot module reloading works with webpack.config.js being setup.
8. For CSS we can use 
   1. Style loader : will inject CSS in the JS bundles for critical CSS 
   2. mini CSS extract plugin : will create resources and create CSS files for CSS bundles to avoid formation of gigantic JS bundles.
9. Better to use combination of both.
10. live reloading will not work unless you have webpack.config.js file defined.
11. Hot reloading is not there by default it's quick refreshing of the page. For hot reloading we have use {hot :true } config inside devserver. then reload will happen not refresh
12. Hot module replacement will be keeping the content if modified directly in DOM and just load the changes through socket connections and there will be no flashes.
13. 'webpack serve' is the new way to start the webpack dev server.
14. 'fsevent' warning we do not have to worry about if we get because that's needed for the mac or other operating system.
15. babel transpilation is pretty expensive so we need to exclude node_modules from the rules [].
16. import in Scss will do the global scoping while use @<name> will be doing local scoping.
17. If we do all the setting changes for the .scss in the webpack.config.js for scss handling then we will be able to build but in the compiled css file we will be having only @global nothing else since we have not used any proper loader.
18. for that we are going to use sass and sass-loader as the dev depenedency.
19. Adding post-css and post-css-env for browser compatibility and post-css-loader will utilise it. This is used for putting vendor prefixes like --webkit, --moz in the source map.
20. After running the build now, fallback css is added to the CSS now.
21. Browserlistrc file can be added to support multiple browsers, when our site is having traffic on the older browser then this will be handy. We will be getting updates in the main.css file with vendor prefixes with backward support. we have to test this can't trust blindly and caniuse (https://caniuse.com/?search=flexbox) should be used. This is being read by both babel and postcss loader.
22. CanIuse can be used for JS as well like preset-env for babel, postcss
23. There is a bug in webpack-dev-server for the browserlist we have to set target in webpack config as a fix for this.
24. ["@babel/preset-react", { runtime: 'automatic' }] By this when you are using only JSX there is no need for import react. this is done by react coordinating with babel. this will be efficient when you are using state / lifecycle methods then you need the react import. this is applicable from react-17.
25. When we are just adding .jsx file and running the build then it will fail because we have to let webpack know about this new extension, so will be adding resolve() in this case to share the extension, even after that we are not able compile because we have to set the loader. Since our bael loader is already setup we just have to enable jsx? there in the webpack config. Also correct file paths for other css files.
26. After this it will compile, and a licence will be added in the dist folder.
27. For the example to handle images we have 
    1.  jpeg: used for background image
    2.  svg: for the bullet points 
    3.  gif: on the page with image tag
    4.  png: on the page with image tag
28. Just building this without any setting in webpack.config.js is not giving any error and working fine.
29. In the past we were using fileloader or url loader for loading the images that's now not needed in webpack-5, there is a built in way to do this w/o any extra packages to be installed, so within the CSS webpack5 is able to get the image and put it in the bundle but not within source code.
30. We will now try to create the <img> tag within the code and see. this is NOT WORKING. because we are importing the SVG in the JS code and asking webpack to compile and run.
31. Now we are making the handling in webpack.config.js to see what's extra we are going to get 
    1.  <img> should work with this -- yes 
    2.  <img> with src having svg in that are working 
32. There was an error for MiniCSSExtractPlugin that's not coming in our code by using asset/resource with that.
33. If index.html is not there in the dist folder you will be seeing the directory structure on doing https://localhost:8080
34. 'assetModuleFilename' is the property for the files to be copied from the src folder to the dist folder.
35. There are 3 types for the image asset handling 
    1.  asset/resource : with setting in webpack.config.js it will create images folder or path within dist and copy all the images 
    2.  asset/inline : this will put the images in source code which are less than threshold defined in webpack, though we can increase this with 'parser {dataUrlCondition:{maxSize}}' setting in webpack but not an optimum choice. You will be told in the console with warnings !! We can just have smaller svg within code for the quick load.
    3.  asset: this will decide automatically what to do with the images whether to put inline or separate file, threshold is 8KB
36. Automated cleanup and template generation for the project 
    1.  html-webpack-plugin : 
        1.  for template support for generating HTML, we just moved that to src and see that after integrating the html-webpack plugin. 
        2.  Index.html will be created by this plugin and will be adding in the dist folder with main.css and main.js 
        3.  We can define the template object for this, it will take the HTML and add in the head the scripts with defer attribute while leaving all other static html as well even the old script & CSS rel tags included as well.
    2.  Clean-webpack-plugin :
        1.  Now we want to do clean-up in all the commands, so instead of adding this to all the commands we should use clean-webpack plugin.
        2.  With this plugin we should define the output path, if there is none then there is a warning for plugin disabled while building. This should be defined. 
        3.  It should also be on the top of the list of the plugin list.
        4.  ouput/path should be an absolute path.
37. Running node command on the terminal will let you run all other functions as well.
    1.  >node
    2.  >path.resolve()
    3.  >cd - will let you in the last directory you were in
    4.  __dirname is the name of the directory from which you are running the command while path.resolve() is going to give you the absolute path to that directory, so you have to combine both these situations. what's the absolute path to directory for building. This resolve() will work on all the OS universally.
38. 
    

