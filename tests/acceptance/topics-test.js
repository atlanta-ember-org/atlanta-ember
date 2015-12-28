import { test } from 'qunit';
import moduleForAcceptance from 'atlantaember/tests/helpers/module-for-acceptance';

const doesInclude = function (string, substrings) {
  const statuses = substrings.map(function (substring) {
    if(string.indexOf(substring) > -1) {
      return true;
    } else {
      return false;
    }
  });

  return statuses.indexOf(false) < 0;
};

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

test('has a list of topics', function(assert) {
  visit('/topics');
  const topicNames = server.createList('topic', 3)
    .map(function (topic) {
      return topic.name;
    });

  andThen(function() {
    let string = this.$('.topics li').text();
    assert.ok(doesInclude(string, topicNames));
  });
});
