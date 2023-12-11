import Route from '@ember/routing/route';
import fetch from 'fetch';

export default class AppointmentsRoute extends Route {
  // @service fetch;

   async model() {
     try {
       const response = await fetch('http://localhost:3000/appointments');
      const model = await response.json();
      return model.appointments;
    } catch (error) {
      console.error('Error fetching appointments:', error);
      return []; // Return an empty array in case of an error
    }
  }
}