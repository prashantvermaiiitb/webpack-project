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
27. 
    

