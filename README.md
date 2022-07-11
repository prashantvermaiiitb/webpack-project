# webpack-project

1. Just running "npm i" will provide the information for the package that needed to be installed or considered for upgrade
2. making the package as "private" with value true because we do not want to publish this accidently.If we remove all the other data points like name, bugs etc from package json then there will be warnings like 
   1. No Description
   2. No Licences
These will be removed by marking project as private.
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
10. Hot reloading is not there by default it's quick refreshing of the page. For hot reloading we have use {hot :true } config inside devserver. then reload will happen not refresh
11. Hot module replacement will be keeping the content if modified directly in DOM and just load the changes through socket connections and there will be no flashes.
12. 

