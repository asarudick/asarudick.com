import Ember from 'ember';

export default Ember.Mixin.create({
    actions: {
		willTransition () {
			Ember.$('#content')
				.removeClass('fadeAndSlide')
				.addClass('fadeIn-before');
		},
        didTransition () {
            Ember.run.next(() => {
                Ember.$('#content')
					.addClass('fadeAndSlide')
					.removeClass('fadeIn-before');
            });
        }
    }
});
