const withTM = require("@weco/next-plugin-transpile-modules");
const withTypeScript = require("@zeit/next-typescript");

module.exports = withTypeScript(
  withTM({
    transpileModules: ["@lh"]
  })
);
