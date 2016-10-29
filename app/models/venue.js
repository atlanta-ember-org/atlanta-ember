import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  country:   attr('string'),
  city:      attr('string'),
  address1: attr('string'),
  name:      attr('string'),
  lat:       attr('number'),
  lon:       attr('number'),
  repinned:  attr('boolean'),
  events:     hasMany('event')
});
