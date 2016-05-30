import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  os_version: attr('string'),
  os: attr('string'),
  lon: attr('number'),
  lat: attr(),
  last_update: attr('date'),
  ip: attr('string'),
});
