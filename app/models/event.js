import DS from 'ember-data';

const { attr, belongsTo, hasMany, Model } = DS;

export default Model.extend({
  created: attr('number'),
  name: attr('string', { defaultValue: '' }),
  status: attr('string'),
  time: attr('number'),
  updated: attr('number'),
  utcOffset: attr('number'),
  yesRsvpCount: attr('number'),
  waitlistCount: attr('number'),
  description: attr('string'),
  venue: belongsTo('venue', { async: false }),
  visibility: attr('string')
  // name:                attr('string', { defaultValue: '' }),
  // description:         attr('string', { defaultValue: '' }),
  // originallyCreatedAt: attr('date'),
  // yesRsvpCount:        attr('number'),
  // startsAt:            attr('date'),
  // meetupId:            attr('string'),
  // eventUrl:            attr('string'),
  // venue:               belongsTo('venue'),
  // topics:              hasMany('topic')
});
