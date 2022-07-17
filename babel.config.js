/**
 * Only enabling the plugin when the environment is Development.
 * In production react/refresh will not work, else error will be appearing while building.
 */
const plugins = [];
if (process.env.NODE_ENV !== 'production') {
    plugins.push("react-refresh/babel");
}
module.exports = {
    presets: ["@babel/preset-env", ["@babel/preset-react", { runtime: 'automatic' }]],
    plugins
}