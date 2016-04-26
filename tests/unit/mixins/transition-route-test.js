/* jshint expr:true */
import { expect } from 'chai';
import {
  describe,
  it
} from 'mocha';
import Ember from 'ember';
import TransitionRouteMixin from 'portfolio/mixins/transition-route';

describe('TransitionRouteMixin', function() {
  // Replace this with your real tests.
  it('works', function() {
    let TransitionRouteObject = Ember.Object.extend(TransitionRouteMixin);
    let subject = TransitionRouteObject.create();
    expect(subject).to.be.ok;
  });
});
