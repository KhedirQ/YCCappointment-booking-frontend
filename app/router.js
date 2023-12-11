// app/router.js

import EmberRouter from '@ember/routing/router';
import config from 'appointment-booking-frontend/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('appointments');
  // ... other routes if needed
});
// app/templates/appointments.hbs
