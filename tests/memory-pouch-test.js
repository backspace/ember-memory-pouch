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

test('can create an in-memory database', function() {
  stop();
  (new PouchDB('memory-test', {adapter: 'memory'})).then(function(db) {
    ok(db);
    start();
  }, function(error) {
    ok(false, "Could not create in-memory database: " + error.stack);
    start();
  });
});
