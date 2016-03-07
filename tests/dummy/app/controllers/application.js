import Ember from 'ember';
import base64Image from './base64-image';
import env from 'ember-blur-up/config/environment';

export default Ember.Controller.extend({
  base64Data: base64Image,

  init() {
    this.send('reloadImage');
  },

  actions: {
    reloadImage() {
      let randomNumber = Math.random();
      let originalURL = '/images/abstract.png';

      // Because of "ember-cli-github-pages"-bug
      // See: https://github.com/poetic/ember-cli-github-pages/issues/11
      if (env.environment === 'production') {
        originalURL = `/ember-blur-up${originalURL}`;
      }

      this.set('imageURL', `${originalURL}?t=${randomNumber}`);
    }
  }
});
