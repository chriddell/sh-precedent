require.config({
  baseUrl: 'js/lib/',
  paths: {
    "shiv": "min/html5-shiv.min",
    "jquery": "https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min"
  }
});

require(["shiv", "jquery", "modules/min/slide.min"], function(){});