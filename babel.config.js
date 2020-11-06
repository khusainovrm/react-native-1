module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    "env": {
      "development": {
        "plugins":
          ["@babel/plugin-transform-react-jsx-source",
            ["module-resolver",{
                "@": ["./src"],
                "alias": {
                  "tailwind": "./tailwind.js",
                  "components": "./src/components",
                }
              }
            ]
          ]
        }
      }
  };
};
