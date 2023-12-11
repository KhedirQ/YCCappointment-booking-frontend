import { module, test } from 'qunit';
import { setupTest } from 'appointment-booking-frontend/tests/helpers';

module('Unit | Service | appointment', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:appointment');
    assert.ok(service);
  });
});
