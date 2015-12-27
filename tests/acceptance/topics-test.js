import { test } from 'qunit';
import moduleForAcceptance from 'atlantaember/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | topic');

test('visiting /topics', function(assert) {
  visit('/topics');

  andThen(function() {
    assert.equal(currentURL(), '/topics');
  });
});

test('has a title', function(assert) {
  visit('/topics');

  andThen(function() {
    assert.equal(this.$('h1.page-title').text().trim(), 'Topics');
  });
});
