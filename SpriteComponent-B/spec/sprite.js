/* global sprite, describe, it, expect, should */

describe('sprite()', function () {
  'use strict';

  it('Check that an object can be created', function () {
    expect(Sprite).to.be.a('function');

  });

  it("Check that the global bounds can be gotten", function () {
    expect(Sprite.getGlobalBounds()).to.be.a('function');
  });


  // Add more assertions here
});
