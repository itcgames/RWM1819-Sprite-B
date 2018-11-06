/* global sprite, describe, it, expect, should */

describe('sprite()', function () {
  'use strict';

  it('Check that an object can be created', function () {
    expect(Sprite).to.be.a('function');

  });

  it("Check that the x position can be gotten", function () {
    expect(Sprite.getGlobalBounds().x).to.be.a('number');
  });


  // Add more assertions here
});
