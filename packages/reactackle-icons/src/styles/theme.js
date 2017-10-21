import { radiusDefault } from 'reactackle-core';

export default {
  borderWidth: 1,
  borderRadius: radiusDefault,

  color: {
    default: 'currentColor',
    light: 'rgba(255, 255, 255, 0.54)',
    dark: 'rgba(0, 0, 0, 0.54)',
  },

  size: {
    small: {
      borderWidth: 1,
      height: 18,
      width: null,
      imgSize: null,
      borderedImgSize: null,
      roundedImgSize: null,
    },

    normal: {
      borderWidth: 1,
      height: 24,
      width: null,
      imgSize: null,
      borderedImgSize: null,
      roundedImgSize: null,
    },

    large: {
      borderWidth: 2,
      height: 36,
      width: null,
      imgSize: null,
      borderedImgSize: null,
      roundedImgSize: null,
    },

    xlarge: {
      borderWidth: 2,
      height: 48,
      width: null,
      imgSize: null,
      borderedImgSize: null,
      roundedImgSize: null,
    },
  },
};
