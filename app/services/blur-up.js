/*
 * Based on this tutorial:
 * https://css-tricks.com/the-blur-up-technique-for-loading-background-images/
 */

import Ember from 'ember';

const {
  Service,
  RSVP: { Promise },
  String: { htmlSafe },
  inject: { service },
  computed: { reads },
} = Ember;

const DEFAULT_OPTS = {
  blur: 100,
  width: 1500,
  height: 823
};

export default Service.extend({

  getBlur(base64URI, opts = {}) {
    if (!base64URI) return false;

    let SVGImage = this._getSVG(base64URI, opts);
    let uri = escape(SVGImage);
    uri = `data:image/svg+xml;charset=utf-8,${uri}`;
    return this._getCSS(uri);
  },

  getImage(URL) {
    return new Promise((resolve, reject) => {
      if (!URL) return reject("Missing URL!");

      if (typeof FastBoot !== 'undefined') return;

      let newImg = new Image();
      newImg.src = URL;

      newImg.onload = () => {
        resolve(this._getCSS(URL));
      };
    });
  },

  _getSVG(base64URI, opts) {
    let blurLevel = opts.blur || DEFAULT_OPTS.blur;
    let width = opts.width || DEFAULT_OPTS.width;
    let height = opts.height || DEFAULT_OPTS.height;

    return `
    <svg 
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink" 
      width="${width}" height="${height}" 
      viewBox="0 0 ${width} ${height}">

      <filter 
        id="blur" 
        filterUnits="userSpaceOnUse" 
        color-interpolation-filters="sRGB">

        <feGaussianBlur 
          stdDeviation="${blurLevel} ${blurLevel}" 
          edgeMode="duplicate"/>

        <feComponentTransfer>
          <feFuncA type="discrete" tableValues="1 1"/>
        </feComponentTransfer>
        
      </filter>

      <image 
        filter="url(#blur)" 
        xlink:href="${base64URI}" 
        x="0" y="0" 
        height="100%" width="100%"/>
    </svg>`;
  },

  _getCSS(url) {
    let css = `background-image: url(${url});`;
    return htmlSafe(css);
  }
});
