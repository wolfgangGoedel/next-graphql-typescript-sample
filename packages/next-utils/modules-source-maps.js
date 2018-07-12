module.exports = (...fromModules) => (nextConfig = {}) =>
  Object.assign({}, nextConfig, {
    webpack(config, options) {
      config.module.rules.push({
        test: /\.(js|jsx)$/,
        use: { loader: "source-map-loader" },
        include: fromModules.map(mod => new RegExp(`${mod}(?!.*node_modules)`)),
        enforce: "pre"
      });

      return nextConfig.webpack ? nextConfig.webpack(config, options) : config;
    }
  });
