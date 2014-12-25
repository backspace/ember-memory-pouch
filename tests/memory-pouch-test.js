module('memoryPouch');

test('can create a database', function() {
  stop();
  (new PouchDB('test')).then(function(db) {
    ok(db);
    start();
  }, function(error) {
    ok(false, "Could not create database");
    start();
  });
});
