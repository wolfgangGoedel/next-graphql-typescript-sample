const withTM = require("@weco/next-plugin-transpile-modules");
const withTypeScript = require("@zeit/next-typescript");
const withModuleSourceMaps = require("@sfeir-next/next-utils/modules-source-maps");

module.exports = withTypeScript(
  withModuleSourceMaps("@sfeir-next")(
    withTM({
      transpileModules: ["@sfeir-next"]
    })
  )
);
