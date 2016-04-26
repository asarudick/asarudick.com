import Ember from 'ember';

export default Ember.Component.extend({
	panel: null,
	tagName: 'aside',
	didInsertElement () {
		var slideout = new Slideout({
			'panel': Ember.$(this.get('panel'))[0],
			'menu': this.get('element'),
			'tolerance': 70,
			'side': 'right'
		});

		document.querySelector('.slideout-toggle').addEventListener('click', () => {
			slideout.toggle();
		});

		slideout.on('beforeopen', () => {
			document.querySelector('.fixed').classList.add('fixed-open');
		});

		slideout.on('beforeclose', () => {
			document.querySelector('.fixed').classList.remove('fixed-open');
		});

		Ember.$(this.get('element')).find('a').on('click', () => {
			slideout.toggle();
		});
	}
});
