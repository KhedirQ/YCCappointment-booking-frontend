//app/services/appointment.js

import Service from '@ember/service';
import { inject as service } from '@ember/service';

export default class AppointmentService extends Service {
  @service fetch;

  async getAppointments() {
    try {
      // Fetch available dates and times
      const availableAppointments = await this.fetch('/api/appointments').then(
        (response) => response.json(),
      );
      console.log('Available Appointments:', availableAppointments);

      // Add other API calls as needed

      return availableAppointments;
    } catch (error) {
      console.error('Error fetching appointments:', error);
      throw error;
    }
  }

  async bookAppointment(appointmentData) {
    try {
      // Book an appointment
      const bookedAppointment = await this.fetch('/api/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(appointmentData),
      }).then((response) => response.json());
      console.log('Booked Appointment:', bookedAppointment);

      // Add other API calls as needed

      return bookedAppointment;
    } catch (error) {
      console.error('Error booking appointment:', error);
      throw error;
    }
  }

  // Add other methods for modifying and canceling appointments as needed
}
