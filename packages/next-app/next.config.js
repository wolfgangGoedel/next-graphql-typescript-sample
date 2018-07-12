const withTM = require("@weco/next-plugin-transpile-modules");
const withTypeScript = require("@zeit/next-typescript");

module.exports = withTypeScript(
  withTM({
    transpileModules: ["@lh"],
    webpack(config, options) {
      config.module.rules.push({
        test: /\.(js|jsx)$/,
        use: { loader: "source-map-loader" },
        include: [/@lh(?!.*node_modules)/],
        enforce: "pre"
      });
      return config;
    }
  })
);
