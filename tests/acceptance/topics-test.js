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

moduleForAcceptance('Acceptance | topic', function() {

});

test('visit /topics', function(assert) {
  const topicNames = server.createList('topic', 3).map((topic) => {
      return topic.name;
  });

  visit('/topics');

  andThen(() => {
    assert.equal(currentURL(), '/topics', 'it is the correct URL');
    assert.equal(find('h1.page-title').text().trim(), 'Topics', 'it has the right header');

    let content = find('.topics li').text();
    assert.ok(doesInclude(content, topicNames));
  });
});

test('can create a new topic', function (assert) {
  visit('/topics');

  fillIn('.new-topic .name', 'some name');
  click ('.new-topic .submit');

  andThen(() => {
    let string = find('.topics li').text();
    assert.ok(doesInclude(string, ['some name']));
  });

  fillIn('.new-topic .name', 'some other name');
  click ('.new-topic .submit');

  andThen(() => {
    let string = find('.topics li').text();
    assert.ok(doesInclude(string, ['some name', 'some other name']));
  });
});

// test('it shows errors from server validations', function (assert) {
//   const errors = {
//           errors: [
//             { detail: "can't be blank",
//               source: {
//                 pointer: "data/attributes/name"
//               }
//             }
//           ]
//         }

//   visit('/topics');
//   server.post('/topics', errors, 404);
//   click ('.new-topic .submit');

//   andThen(function() {
//     let string = this.$('.topics').text();
//     assert.ok(doesInclude(string, ["can't be blank"]));
//   });
// });
