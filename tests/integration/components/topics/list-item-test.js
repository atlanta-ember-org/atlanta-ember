import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('topics/list-item', 'Integration | Component | topics/list item', {
  integration: true
});

test('displays the topic name', function(assert) {
  let topic = { name: 'topic one' };
  this.set('topic', topic);
  this.render(hbs`{{topics/list-item topic=topic}}`);
  assert.equal(this.$('.topic').text(), 'topic one\n');
});
