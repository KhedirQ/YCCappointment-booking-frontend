import { module, test } from 'qunit';
import { setupTest } from 'appointment-booking-frontend/tests/helpers';

module('Unit | Route | appointments', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:appointments');
    assert.ok(route);
  });
});
