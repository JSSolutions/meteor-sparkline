Package.describe({
  name: 'jss:sparkline',
  version: '2.1.2',
  summary: 'This jQuery plugin generates sparklines (small inline charts)',
  git: 'https://github.com/JSSolutions/meteor-sparkline',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use(['underscore', 'jquery', 'templating'], 'client');
  api.addFiles('jquery.sparkline.min.js', 'client');
});