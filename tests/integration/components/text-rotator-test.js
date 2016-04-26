/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'text-rotator',
  'Integration: TextRotatorComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#text-rotator}}
      //     template content
      //   {{/text-rotator}}
      // `);

      this.render(hbs`{{text-rotator}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
