import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('topics/list-container', 'Integration | Component | topics/list container', {
  integration: true
});

test('renders each given topic', function(assert) {
  let topics = [
    { name: 'topic one' }
  ];
  this.set('topics', topics);
  this.render(hbs`{{topics/list-container topics=topics}}`);
  assert.equal(this.$('.topics li').length, 1);
  assert.equal(this.$('.topics li').text(), 'topic one\n');

  let moreTopics = [
    { name: 'topic one' },
    { name: 'topic two' }
  ];
  this.set('topics', moreTopics);
  assert.equal(this.$('.topics li').length, 2);
  assert.equal(this.$('.topics li').text(), 'topic one\ntopic two\n');
});
