import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('navs/top-nav', 'Integration | Component | navs/top nav', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{navs/top-nav}}`);

  assert.equal(this.$(".navbar-header a").text().trim(), 'Login');
});
