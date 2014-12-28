import Ember from 'ember';

export default Ember.Component.extend({
  regularStatus: 'not ready',
  memoryStatus: 'not ready',

  initializeDatabases: Ember.on('init', function() {
    var component = this;
    new PouchDB('regular').then(function() {
      component.set('regularStatus', 'success');
    }, function(error) {
      component.set('regularStatus', 'failure: ' + error.stack);
    });

    new PouchDB('memory', {adapter: 'memory'}).then(function() {
      component.set('memoryStatus', 'success');
    }, function(error) {
      component.set('memoryStatus', 'failure: ' + error.stack);
      console.log(error, error.stack);
    });
  })
});
