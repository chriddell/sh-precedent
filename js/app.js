require.config({
  baseUrl: 'js/lib/',
  paths: {
    "shiv": "min/html5-shiv.min"
  }
});

require(["shiv"], function(){});