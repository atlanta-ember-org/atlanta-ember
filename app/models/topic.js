import DS from 'ember-data';

export default DS.Model.extend({
  event: DS.belongsTo('event'),
  name: DS.attr('string'),
  description: DS.attr('string')
});
