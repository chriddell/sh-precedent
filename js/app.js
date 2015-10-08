require.config({
  baseUrl: 'js/lib/',
  paths: {
    "shiv": "min/html5-shiv"
  }
});

require(["shiv"], function(){});