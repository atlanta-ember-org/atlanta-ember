import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string', { defaultValue: '' }),
  description: DS.attr('string', { defaultValue: '' }),
  originallyCreatedAt: DS.attr('date'),
  yesRsvpCount:        DS.attr('number'),
  startsAt:            DS.attr('date'),
  meetupId:            DS.attr('string'),
  eventUrl:            DS.attr('string'),
  venue:               DS.belongsTo('venue'),
  topics: DS.hasMany('topic')
});
