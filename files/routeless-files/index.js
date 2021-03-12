/* eslint-disable ember/avoid-leaking-state-in-ember-objects */

'use strict';

const EngineAddon = require('ember-engines/lib/engine-addon');

module.exports = EngineAddon.extend({
  name: '<%= dasherizedModuleName %>',

  lazyLoading: {
    enabled: <%= isLazy %>,
    includeRoutesInApplication: <%= includeRoutesInApplication %>,
  },
});
