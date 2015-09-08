import DS from 'ember-data';

export default DS.Model.extend({
  country:   DS.attr('string'),
  city:      DS.attr('string'),
  address_1: DS.attr('string'),
  name:      DS.attr('string'),
  lat:       DS.attr('number'),
  lon:       DS.attr('number'),
  repinned:  DS.attr('boolean'),
  event:     DS.hasMany('event')
});
