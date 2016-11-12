SystemJS.config({
  baseURL: "/",
  "paths": {
    "npm:": "jspm_packages/npm/",
    "github:": "jspm_packages/github/",
    "app/": "src/"
  },
  transpiler: "plugin-babel",
  packages: {
    "app": {
      "main": "index.js",
      "format": "esm",
      "meta": {
        "*.js": {
          "babelOptions": {
            "plugins": [
              "babel-plugin-transform-react-jsx"
            ],
            "presets": [
              "babel-preset-stage-3"
            ]
          },
          "loader": "plugin-babel"
        }
      }
    }
  }
});
