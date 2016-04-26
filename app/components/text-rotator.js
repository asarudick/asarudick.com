import Ember from 'ember';

const md = new Remarkable('full', {
  html: true,
  linkify: true,
  typographer: true,
});

const delay = 1300;

export default Ember.Component.extend({

	classNames: [ 'text-rotator' ],
	options: [],
	item: '',

	didInsertElement () {
		this.set('item', md.render(`\`${this.get('options')[0]}\``));
		const rotator = this.get('rotate').bind(this)();
		setInterval(() => { rotator.next(); }, delay);
	},

	*rotate () {
		let index = 0;
		let loop = true;
		while (loop)
		{
			this.set('item', md.render(`\`${this.get('options')[index]}\``));
			index = (index + 1) % this.get('options').length;
			yield;
		}
	}

});
