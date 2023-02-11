export default {
  messageStyle: 'none',
  extensions: [
    'tex2jax.js',
    'mml2jax.js',
    'MathMenu.js',
    'MathZoom.js',
    'AssistiveMML.js',
    'a11y/accessibility-menu.js',
  ],
  jax: ['input/TeX', 'output/HTML-CSS'],
  tex2jax: {
    inlineMath: [
      ['$', '$'],
      ['\\(', '\\)'],
    ],
    displayMath: [
      ['$$', '$$'],
      ['\\[', '\\]'],
    ],
    processEscapes: true,
  },
  TeX: {
    extensions: [
      'AMSmath.js',
      'AMSsymbols.js',
      'noErrors.js',
      'noUndefined.js',
    ],
  },
};
