import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  name:                attr('string', { defaultValue: '' }),
  description:         attr('string', { defaultValue: '' }),
  originallyCreatedAt: attr('date'),
  yesRsvpCount:        attr('number'),
  startsAt:            attr('date'),
  meetupId:            attr('string'),
  eventUrl:            attr('string'),
  venue:               belongsTo('venue'),
  topics:              hasMany('topic')
});
