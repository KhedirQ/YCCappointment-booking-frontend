## Executive Summary:
YCC (Yezidi Cultural Center)Appointment Scheduling App
The YCC Appointment Scheduling App is a web-based application built using Ember.js in the frontend to allows users (clients)to view the office calendar, book new appointments, change existing appointments, and cancel appointments. It provides a user-friendly interface for clients to manage their appointments and offers efficient scheduling capabilities for a small office with two employees.In backend the app uses node.js and MongoDB local to allow administrator to create,read,update and delete appointments as well as save the user information.
## Installation

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [MongoDB](https://fastdl.mongodb.org/windows/mongodb-windows-x86_64-7.0.4-signed.msi)
* [Ember CLI](https://cli.emberjs.com/release/)
* [Google Chrome](https://google.com/chrome/)


## License 
This project is licensed under (MIT) License
## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://cli.emberjs.com/release/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
## Getting Started:

*git clone <repository-url>` this repository
* open command prompt and type in mongod to run the MongoDB server
* cd ycc-schedulingbackend and run the command prompt then type in node server.js
* cd ycc-schedulingfrontend and run the command prompt then type in ember serve
* Visit your backend app at [http://localhost:3000](http://localhost:3000).
* Visit your frontend app at [http://localhost:4200](http://localhost:4200).
  
## User Stories
## User Story 1:
As a YCC user, I want to schedule an appointment, so that I can talk with YCC leadership.

## Acceptance Criteria 1:
1. The user login to YCC calander page, the user can view available appointment slots.
2. User can click on a date to see the available time slots for that day.
3. After viewing the available time slots, the member can select a date and time to book an appointment.
Once booked, the appointment will appear on the members's dashboard.
4. member will receive a confirmation email with the appointment details.


## User Story 2: 
As a registered user, I want to be able to change an existing appointment so I can reschedule it to a different time.

## Acceptance Criteria 3:
1. The YCC system has a user dashboard for registered, signed-in, users.
2. The user dashboard displays a list of existing appointments.
3. Clicking an appointment in the dashboard takes the user to a detailed appointment page.
4. The detailed appointment page contains the time and date. It also contains change appointment button.
5. When the user clicks the change appointment button, a model pops up with "yes change" and "no dont change" buttons.
6. If the user clicks "yes change" the system changes the appointment from the database and find an available alternative up the slot in the calendar.
7. If the user clicks "no dont change" they are taken back to the appointment detail page.


## User Story 4: 
As a registered user, I want to cancel an appointment so I can free up that time slot.

## Acceptance Criteria 4:
1. The YCC system has a user dashboard for registered, signed-in, users.
2. The user dashboard displays a list of existing appointments.
3. Clicking an appointment in the dashboard takes the user to a detailed appointment page.
4. The detailed appointment page contains the time and date. It also contains a cancel appointment button.
5. When the user clicks the cancel appointment button, a model pops up with "yes. cancel" and "no dont cancel" buttons.
6. If the user clicks "yes cancel" the system deletes the appointment from the database and frees up the slot in the calendar.
7. If the user clicks "no dont cancel" they are taken back to the appointment detail page.
   
## User Story 5:
As a system administrator, I want to manage user accounts and access control to ensure the security and integrity of the system.

## Acceptance Criteria 5:
1. YCC has administrator dashboard that  manages user accounts.
2. YCC admin can view, edit, or delete user accounts.
3. YCC Admin can set user roles and permissions, including admin roles.
4. YCC admin can access logs and reports to monitor user activities.

## User Story 6:
As an unregistered user, I want to sign up for an account so I can access the appointment scheduling system.

## Acceptance Criteria 6:
1. YCC allows non- registered users to login to the YCC page and view appointments page.
2. New user can use sign up button to register.
3. New user click on signup button, a new pop-up windows appears and asks user to enter name and valid email address.
4. New user enters the required info and click on sign up button.
5. Upon successful registration, the new user receives a confirmation email with an activation link.



## Mis-User Stories
1.	Mis-User Story 1: As an attacker, I want to gain unauthorized access to the YCC admin panel so I can manipulate user data.

2.	Mis-User Story 2: As a malicious user, I want to disrupt the scheduling system so appointments can't be booked by using malicios code input like sql injection or buffer overflow and take over the system.

## Mitigation Criteria 1:
•	Strong Authentication: Implement robust authentication mechanisms for admin access, such as multi-factor authentication (MFA) and strong password policies such as 
  o	Enforcing complex password requirements, such as a mix of uppercase and lowercase letters, numbers, and special characters.
  o	Enabling account lockout mechanisms after a certain number of failed login attempts


## Mitigation Criteria 2:
•	Logging and Monitoring: Implement comprehensive logging and monitoring of admin panel activities. Log login attempts, successful and unsuccessful, and regularly review these logs for unusual or suspicious activities.
•	Input Validation: Implement strict input validation to ensure that user-submitted data is within expected ranges and formats. This helps prevent injection attacks and data 
Mitigation Criteria 3:
•	Secure APIs: If your scheduling system uses APIs, ensure that they are secured and include rate limiting and authentication mechanisms. Verify API requests to prevent abuse.

•	Data Backups: Regularly back up appointment data and critical system components to ensure data recovery in case of an attack or system disruption.

Mockup Diagram 
Home Page

![image](https://github.com/KhedirQ/YCC-Appointment-Booking/assets/79780374/3b46f91a-4b68-4636-a888-afec7aa28f15)
Blog page

![image](https://github.com/KhedirQ/YCC-Appointment-Booking/assets/79780374/79ae31b3-c7f1-487b-a387-96a9ed05434c)

Reservation Review info page 

![image](https://github.com/KhedirQ/YCC-Appointment-Booking/assets/79780374/057842bc-0573-4168-a46b-529f4679fbc7)

C4 Modeling 
Context Diagram 

![image](https://github.com/KhedirQ/YCC-Appointment-Booking/assets/79780374/3f5e369b-92f1-4994-bb9a-6d9f35b3f84e)

Container Diagram

![image](https://github.com/KhedirQ/YCC-Appointment-Booking/assets/79780374/57d88032-761f-4cd8-888c-7105d21ae013)

Component Diagram 

![image](https://github.com/KhedirQ/YCC-Appointment-Booking/assets/79780374/6b3de3ce-4644-4400-a9cf-4fc1fb539b35)


