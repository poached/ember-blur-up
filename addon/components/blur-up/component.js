import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout: layout,

  blurUp: Ember.inject.service('blur-up'),
  attributeBindings: ['blurredCoverCSS:style'],
  classNames: ['ember-blur-up'],

  didReceiveAttrs() {
    let base64Data = this.get('base64');
    let imageURL   = this.get('url');
    let opts       = this.get('opts');

    // Set the blurry image first
    let blurCSS = this.get('blurUp').getBlur(base64Data, opts);
    this.set('blurredCoverCSS', blurCSS);

    // Now, fetch the real one!
    this.get('blurUp').getImage(imageURL)
    .then((css) => {
      this.set('coverCSS', css); 
    }, (err) => {
      console.log(err);
    });
  }
});

