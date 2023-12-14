// app/models/user.js

import Model, { attr } from '@ember-data/model';

export default class UserModel extends Model {
  @attr('string') username;
  // Add other user attributes as needed
}
