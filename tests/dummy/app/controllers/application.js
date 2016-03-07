import Ember from 'ember';
import base64Image from './base64-image';

export default Ember.Controller.extend({
  base64Data: base64Image,

  init() {
    this.send('reloadImage');
  },

  actions: {
    reloadImage() {
      let randomNumber = Math.random();
      const originalURL = '/images/abstract.png';

      this.set('imageURL', `${originalURL}?t=${randomNumber}`);
    }
  }
});
