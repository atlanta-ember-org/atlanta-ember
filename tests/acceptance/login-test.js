import { test } from 'qunit';
import moduleForAcceptance from 'atlantaember/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | login');

test('visiting /login', function(assert) {
  visit('/login');

  andThen(function() {
    assert.equal(currentURL(), '/login');
  });

  andThen(function() {
    assert.equal(find('h2').text(), 'not this');
  });
});
