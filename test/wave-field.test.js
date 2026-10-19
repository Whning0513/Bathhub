import test from 'node:test';
import assert from 'node:assert/strict';
import { WaveField } from '../src/wave-field.js';

test('reset clears the height and velocity fields', () => {
  const field = new WaveField(81);
  field.step(1 / 120, 1);
  assert.ok(field.peak() > 0);

  field.reset();

  assert.equal(field.peak(), 0);
  assert.ok(field.height.every((value) => value === 0));
  assert.ok(field.velocity.every((value) => value === 0));
});
