import RESTAdapter from 'ember-data/adapters/rest';
import ENV from "../config/environment";

export default RESTAdapter.extend({
  host: ENV.apiURL,
});
