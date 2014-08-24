// exports browsers and tests

exports.name = 'ES5';
exports.target_file = 'es5/index.html';
exports.skeleton_file = 'es5/skeleton.html';

exports.browsers = {
  ie7: {
    full: 'Internet Explorer 7',
    short: 'IE 7',
    obsolete: true
  },
  ie8: {
    full: 'Internet Explorer 8',
    short: 'IE 8',
    obsolete: true
  },
  ie9: {
    full: 'Internet Explorer 9',
    short: 'IE 9',
    obsolete: false
  },
  ie10: {
    full: 'Internet Explorer 10, 11',
    short: 'IE 10+',
    obsolete: false
  },

  firefox3: {
    full: 'Firefox 3',
    short: 'FF 3',
    obsolete: true
  },
  firefox3_5: {
    full: 'Firefox 3.5, Firefox 3.6',
    short: 'FF 3.5, 3.6',
    obsolete: true
  },
  firefox4: {
    full: 'Firefox 4-20',
    short: 'FF 4-20',
    obsolete: true
  },
  firefox21: {
    full: 'Firefox 21+',
    short: 'FF 21+',
    obsolete: false
  },

  safari3: {
    full: 'Safari 3.2',
    short: 'SF 3.2',
    obsolete: true
  },
  safari4: {
    full: 'Safari 4.0.5',
    short: 'SF 4',
    obsolete: true
  },
  safari5: {
    full: 'Safari 5.0.5',
    short: 'SF 5',
    obsolete: true
  },
  safari51: {
    full: 'Safari 5.1.4',
    short: 'SF 5.1.4',
    obsolete: true
  },
  safari6: {
    full: 'Safari 6.0, Safari 7.0',
    short: 'SF 6+',
    obsolete: false
  },
  webkit: {
    full: 'Webkit r120398 (June 20, 2012)',
    short: 'WebKit',
    obsolete: false
  },

  chrome5: {
    full: 'Chrome 5 (5.0.375.127)',
    short: 'CH 5',
    obsolete: true
  },
  chrome6: {
    full: 'Chrome 6 (6.0.472.55)',
    short: 'CH 6',
    obsolete: true
  },
  chrome7: {
    full: 'Chrome 7 (7.0.517.5), Chrome 8, Chrome 9 (9.0.587.0 dev), Chrome 10, Chrome 11, Chrome 12 (12.0.742.91)',
    short: 'CH 7-12',
    obsolete: true
  },
  chrome13: {
    full: 'Chrome 13 (13.0.782.107 beta), Chrome 14 (14.0.835.8 dev), Chrome 15, Chrome 16 (16.0.891.0 dev)',
    short: 'CH 13-16',
    obsolete: true
  },
  chrome19: {
    full: 'Chrome 19 (19.0.1084.56 stable), Chrome 22',
    short: 'CH 19-22',
    obsolete: true
  },
  chrome23: {
    full: 'Chrome 23+, Opera 15+',
    short: 'CH 23+,<br>OP 15+',
    obsolete: false
  },

  opera10_10: {
    full: 'Opera 10.10',
    short: 'OP 10.1',
    obsolete: true
  },
  opera10_50: {
    full: 'Opera 10.50, Opera 10.62 (build 8437), Opera 10.70 (build 9044), Opera 11 (build 1156), Opera 11.10 (build 2048), Opera 11.11 (build 2109), Opera 11.50 (build 1074)',
    short: 'OP 10.50-11.50',
    obsolete: true
  },
  opera12: {
    full: 'Opera 12 (build 1065)',
    short: 'OP 12',
    obsolete: true
  },
  opera12_10: {
    full: 'Opera 12.15',
    short: 'OP 12.10',
    obsolete: false
  },

  konq43: {
    full: 'Konqueror 4.3',
    short: 'Konq 4.3',
    obsolete: true
  },
  konq49: {
    full: 'Konqueror 4.9',
    short: 'Konq 4.9',
    obsolete: true
  },
  konq413: {
    full: 'Konqueror 4.13',
    short: 'Konq 4.13',
    obsolete: false
  },

  besen: {
    full: 'Bero\'s EcmaScript Engine (version 1.0.0.489)',
    short: 'BESEN',
    link: 'http://besen.sourceforge.net/',
    obsolete: false
  },

  rhino: {
    full: 'Rhino 1.7 release 3 PRERELEASE 2010 01 14',
    short: 'Rhino 1.7',
    obsolete: false
  },

  phantom: {
    full: 'PhantomJS 1.9.7 AppleWebKit/534.34',
    short: 'Phantom',
    obsolete: false
  },

  ejs: {
    full: 'Echo JS',
    short: 'EJS',
    obsolete: false
  }
};

exports.tests = [
{
  name: 'Object.create',
  exec: function () {
    return typeof Object.create == 'function';
  },
  res: {
    ie7: false,
    ie8: false,
    ie9: true,
    ie10: true,

    firefox3: false,
    firefox3_5: false,
    firefox4: true,
    firefox21: true,

    safari3: false,
    safari4: false,
    safari5: true,
    safari51: true,
    safari6: true,
    webkit: true,

    chrome5: true,
    chrome6: true,
    chrome7: true,
    chrome13: true,
    chrome19: true,
    chrome23: true,

    opera10_10: false,
    opera10_50: false,
    opera12: true,
    opera12_10: true,

    konq43: false,
    konq49: false,
    konq413: true,

    besen: true,
    rhino: true,
    phantom: true,
    ejs: true
  }
},
{
  name: 'Object.defineProperty',
  exec: function () {
    return typeof Object.defineProperty == 'function';
  },
  res: {
    ie7: false,
    ie8: {
      val: true,
      note_id: 'define-property-ie',
      note_html: 'In Internet Explorer 8 <code>Object.defineProperty</code> only accepts DOM objects ' +
        '(<a href="http://msdn.microsoft.com/en-us/library/dd548687(VS.85).aspx">MSDN reference</a>).'
    },
    ie9: true,
    ie10: true,

    firefox3: false,
    firefox3_5: false,
    firefox4: true,
    firefox21: true,

    safari3: false,
    safari4: false,
    safari5: {
      val: true,
      note_id: 'define-property-webkit',
      note_html: 'In some versions of Safari 5, <code>Object.defineProperty</code> does <b>not</b> work with DOM objects.'
    },
    safari51: true,
    safari6: true,
    webkit: true,

    chrome5: true,
    chrome6: true,
    chrome7: true,
    chrome13: true,
    chrome19: true,
    chrome23: true,

    opera10_10: false,
    opera10_50: false,
    opera12: true,
    opera12_10: true,

    konq43: false,
    konq49: false,
    konq413: true,

    besen: true,
    rhino: true,
    phantom: true,
    ejs: true
  }
},
{
  name: 'Object.defineProperties',
  exec: function () {
    return typeof Object.defineProperties == 'function';
  },
  res: {
    ie7: false,
    ie8: false,
    ie9: true,
    ie10: true,

    firefox3: false,
    firefox3_5: false,
    firefox4: true,
    firefox21: true,

    safari3: false,
    safari4: false,
    safari5: true,
    safari51: true,
    safari6: true,
    webkit: true,

    chrome5: true,
    chrome6: true,
    chrome7: true,
    chrome13: true,
    chrome19: true,
    chrome23: true,

    opera10_10: false,
    opera10_50: false,
    opera12: true,
    opera12_10: true,

    konq43: false,
    konq49: false,
    konq413: true,

    besen: true,
    rhino: true,
    phantom: true,
    ejs: true
  }
},
{
  name: 'Object.getPrototypeOf',
  exec: function () {
    return typeof Object.getPrototypeOf == 'function';
  },
  res: {
    ie7: false,
    ie8: false,
    ie9: true,
    ie10: true,

    firefox3: false,
    firefox3_5: true,
    firefox4: true,
    firefox21: true,

    safari3: false,
    safari4: false,
    safari5: true,
    safari51: true,
    safari6: true,
    webkit: true,

    chrome5: true,
    chrome6: true,
    chrome7: true,
    chrome13: true,
    chrome19: true,
    chrome23: true,

    opera10_10: false,
    opera10_50: false,
    opera12: true,
    opera12_10: true,

    konq43: false,
    konq49: true,
    konq413: true,

    besen: true,
    rhino: true,
    phantom: true,
    ejs: true
  }
},
{
  name: 'Object.keys',
  exec: function () {
    return typeof Object.keys == 'function';
  },
  res: {
    ie7: false,
    ie8: false,
    ie9: true,
    ie10: true,

    firefox3: false,
    firefox3_5: false,
    firefox4: true,
    firefox21: true,

    safari3: false,
    safari4: false,
    safari5: true,
    safari51: true,
    safari6: true,
    webkit: true,

    chrome5: true,
    chrome6: true,
    chrome7: true,
    chrome13: true,
    chrome19: true,
    chrome23: true,

    opera10_10: false,
    opera10_50: false,
    opera12: true,
    opera12_10: true,

    konq43: false,
    konq49: true,
    konq413: true,

    besen: true,
    rhino: true,
    phantom: true,
    ejs: true
  }
},
{
  name: 'Object.seal',
  exec: function () {
    return typeof Object.seal == 'function';
  },
  res: {
    ie7: false,
    ie8: false,
    ie9: true,
    ie10: true,

    firefox3: false,
    firefox3_5: false,
    firefox4: true,
    firefox21: true,

    safari3: false,
    safari4: false,
    safari5: false,
    safari51: true,
    safari6: true,
    webkit: true,

    chrome5: false,
    chrome6: true,
    chrome7: true,
    chrome13: true,
    chrome19: true,
    chrome23: true,

    opera10_10: false,
    opera10_50: false,
    opera12: true,
    opera12_10: true,

    konq43: false,
    konq49: false,
    konq413: true,

    besen: true,
    rhino: true,
    phantom: true,
    ejs: true
  }
},
{
  name: 'Object.freeze',
  exec: function () {
    return typeof Object.freeze == 'function';
  },
  res: {
    ie7: false,
    ie8: false,
    ie9: true,
    ie10: true,

    firefox3: false,
    firefox3_5: false,
    firefox4: true,
    firefox21: true,

    safari3: false,
    safari4: false,
    safari5: false,
    safari51: true,
    safari6: true,
    webkit: true,

    chrome5: false,
    chrome6: true,
    chrome7: true,
    chrome13: true,
    chrome19: true,
    chrome23: true,

    opera10_10: false,
    opera10_50: false,
    opera12: true,
    opera12_10: true,

    konq43: false,
    konq49: false,
    konq413: true,

    besen: true,
    rhino: true,
    phantom: true,
    ejs: true
  }
},
{
  name: 'Object.preventExtensions',
  exec: function () {
    return typeof Object.preventExtensions == 'function';
  },
  res: {
    ie7: false,
    ie8: false,
    ie9: true,
    ie10: true,

    firefox3: false,
    firefox3_5: false,
    firefox4: true,
    firefox21: true,

    safari3: false,
    safari4: false,
    safari5: false,
    safari51: true,
    safari6: true,
    webkit: true,

    chrome5: false,
    chrome6: true,
    chrome7: true,
    chrome13: true,
    chrome19: true,
    chrome23: true,

    opera10_10: false,
    opera10_50: false,
    opera12: true,
    opera12_10: true,

    konq43: false,
    konq49: false,
    konq413: true,

    besen: true,
    rhino: true,
    phantom: true,
    ejs: true
  }
},
{
  name: 'Object.isSealed',
  exec: function () {
    return typeof Object.isSealed == 'function';
  },
  res: {
    ie7: false,
    ie8: false,
    ie9: true,
    ie10: true,

    firefox3: false,
    firefox3_5: false,
    firefox4: true,
    firefox21: true,

    safari3: false,
    safari4: false,
    safari5: false,
    safari51: true,
    safari6: true,
    webkit: true,

    chrome5: false,
    chrome6: true,
    chrome7: true,
    chrome13: true,
    chrome19: true,
    chrome23: true,

    opera10_10: false,
    opera10_50: false,
    opera12: true,
    opera12_10: true,

    konq43: false,
    konq49: false,
    konq413: true,

    besen: true,
    rhino: true,
    phantom: true,
    ejs: true
  }
},
{
  name: 'Object.isFrozen',
  exec: function () {
    return typeof Object.isFrozen == 'function';
  },
  res: {
    ie7: false,
    ie8: false,
    ie9: true,
    ie10: true,

    firefox3: false,
    firefox3_5: false,
    firefox4: true,
    firefox21: true,

    safari3: false,
    safari4: false,
    safari5: false,
    safari51: true,
    safari6: true,
    webkit: true,

    chrome5: false,
    chrome6: true,
    chrome7: true,
    chrome13: true,
    chrome19: true,
    chrome23: true,

    opera10_10: false,
    opera10_50: false,
    opera12: true,
    opera12_10: true,

    konq43: false,
    konq49: false,
    konq413: true,

    besen: true,
    rhino: true,
    phantom: true,
    ejs: true
  }
},
{
  name: 'Object.isExtensible',
  exec: function () {
    return typeof Object.isExtensible == 'function';
  },
  res: {
    ie7: false,
    ie8: false,
    ie9: true,
    ie10: true,

    firefox3: false,
    firefox3_5: false,
    firefox4: true,
    firefox21: true,

    safari3: false,
    safari4: false,
    safari5: false,
    safari51: true,
    safari6: true,
    webkit: true,

    chrome5: false,
    chrome6: true,
    chrome7: true,
    chrome13: true,
    chrome19: true,
    chrome23: true,

    opera10_10: false,
    opera10_50: false,
    opera12: true,
    opera12_10: true,

    konq43: false,
    konq49: false,
    konq413: true,

    besen: true,
    rhino: true,
    phantom: true,
    ejs: true
  }
},
{
  name: 'Object.getOwnPropertyDescriptor',
  exec: function () {
    return typeof Object.getOwnPropertyDescriptor == 'function';
  },
  res: {
    ie7: false,
    ie8: {
      val: true,
      note_id: 'get-own-property-descriptor-ie',
      note_html: 'In Internet Explorer 8 <code>Object.getOwnPropertyDescriptor</code> only accepts DOM objects ' +
        '(<a href="http://msdn.microsoft.com/en-us/library/dd548687(VS.85).aspx">MSDN reference</a>).'
    },
    ie9: true,
    ie10: true,

    firefox3: false,
    firefox3_5: false,
    firefox4: true,
    firefox21: true,

    safari3: false,
    safari4: false,
    safari5: true,
    safari51: true,
    safari6: true,
    webkit: true,

    chrome5: true,
    chrome6: true,
    chrome7: true,
    chrome13: true,
    chrome19: true,
    chrome23: true,

    opera10_10: false,
    opera10_50: false,
    opera12: true,
    opera12_10: true,

    konq43: false,
    konq49: false,
    konq413: true,

    besen: true,
    rhino: true,
    phantom: true,
    ejs: true
  }
},
{
  name: 'Object.getOwnPropertyNames',
  exec: function () {
    return typeof Object.getOwnPropertyNames == 'function';
  },
  res: {
    ie7: false,
    ie8: false,
    ie9: true,
    ie10: true,

    firefox3: false,
    firefox3_5: false,
    firefox4: true,
    firefox21: true,

    safari3: false,
    safari4: false,
    safari5: true,
    safari51: true,
    safari6: true,
    webkit: true,

    chrome5: true,
    chrome6: true,
    chrome7: true,
    chrome13: true,
    chrome19: true,
    chrome23: true,

    opera10_10: false,
    opera10_50: false,
    opera12: true,
    opera12_10: true,

    konq43: false,
    konq49: true,
    konq413: true,

    besen: true,
    rhino: true,
    phantom: true,
    ejs: true
  },
  separator: 'after'
},
{
  name: 'Date.prototype.toISOString',
  exec: function () {
    return typeof Date.prototype.toISOString == 'function';
  },
  res: {
    ie7: false,
    ie8: false,
    ie9: true,
    ie10: true,

    firefox3: false,
    firefox3_5: true,
    firefox4: true,
    firefox21: true,

    safari3: false,
    safari4: true,
    safari5: true,
    safari51: true,
    safari6: true,
    webkit: true,

    chrome5: true,
    chrome6: true,
    chrome7: true,
    chrome13: true,
    chrome19: true,
    chrome23: true,

    opera10_10: false,
    opera10_50: true,
    opera12: true,
    opera12_10: true,

    konq43: false,
    konq49: false,
    konq413: true,

    besen: true,
    rhino: true,
    phantom: true,
    ejs: false
  }
},
{
  name: 'Date.now',
  exec: function () {
    return typeof Date.now == 'function';
  },
  res: {
    ie7: false,
    ie8: false,
    ie9: true,
    ie10: true,

    firefox3: true,
    firefox3_5: true,
    firefox4: true,
    firefox21: true,

    safari3: false,
    safari4: true,
    safari5: true,
    safari51: true,
    safari6: true,
    webkit: true,

    chrome5: true,
    chrome6: true,
    chrome7: true,
    chrome13: true,
    chrome19: true,
    chrome23: true,

    opera10_10: false,
    opera10_50: true,
    opera12: true,
    opera12_10: true,

    konq43: true,
    konq49: true,
    konq413: true,

    besen: true,
    rhino: true,
    phantom: true,
    ejs: true
  }
},
{
  name: 'Array.isArray',
  exec: function () {
    return typeof Array.isArray == 'function';
  },
  res: {
    ie7: false,
    ie8: false,
    ie9: true,
    ie10: true,

    firefox3: false,
    firefox3_5: false,
    firefox4: true,
    firefox21: true,

    safari3: false,
    safari4: false,
    safari5: true,
    safari51: true,
    safari6: true,
    webkit: true,

    chrome5: true,
    chrome6: true,
    chrome7: true,
    chrome13: true,
    chrome19: true,
    chrome23: true,

    opera10_10: false,
    opera10_50: true,
    opera12: true,
    opera12_10: true,

    konq43: false,
    konq49: true,
    konq413: true,

    besen: true,
    rhino: true,
    phantom: true,
    ejs: true
  }
},
{
  name: 'JSON',
  exec: function () {
    return typeof JSON == 'object';
  },
  res: {
    ie7: false,
    ie8: true,
    ie9: true,
    ie10: true,

    firefox3: false,
    firefox3_5: true,
    firefox4: true,
    firefox21: true,

    safari3: false,
    safari4: true,
    safari5: true,
    safari51: true,
    safari6: true,
    webkit: true,

    chrome5: true,
    chrome6: true,
    chrome7: true,
    chrome13: true,
    chrome19: true,
    chrome23: true,

    opera10_10: false,
    opera10_50: true,
    opera12: true,
    opera12_10: true,

    konq43: false,
    konq49: true,
    konq413: true,

    besen: true,
    rhino: true,
    phantom: true,
    ejs: true
  }
},
{
  name: 'Function.prototype.bind',
  exec: function () {
    return typeof Function.prototype.bind == 'function';
  },
  res: {
    ie7: false,
    ie8: false,
    ie9: true,
    ie10: true,

    firefox3: false,
    firefox3_5: false,
    firefox4: true,
    firefox21: true,

    safari3: false,
    safari4: false,
    safari5: false,
    safari51: true,
    safari6: true,
    webkit: true,

    chrome5: false,
    chrome6: false,
    chrome7: true,
    chrome13: true,
    chrome19: true,
    chrome23: true,

    opera10_10: false,
    opera10_50: false,
    opera12: true,
    opera12_10: true,

    konq43: false,
    konq49: false,
    konq413: true,

    besen: true,
    rhino: true,
    phantom: false,
    ejs: true
  }
},
{
  name: 'String.prototype.trim',
  exec: function () {
    return typeof String.prototype.trim == 'function';
  },
  res: {
    ie7: false,
    ie8: false,
    ie9: true,
    ie10: true,

    firefox3: false,
    firefox3_5: true,
    firefox4: true,
    firefox21: true,

    safari3: false,
    safari4: false,
    safari5: true,
    safari51: true,
    safari6: true,
    webkit: true,

    chrome5: true,
    chrome6: true,
    chrome7: true,
    chrome13: true,
    chrome19: true,
    chrome23: true,

    opera10_10: false,
    opera10_50: true,
    opera12: true,
    opera12_10: true,

    konq43: false,
    konq49: true,
    konq413: true,

    besen: true,
    rhino: true,
    phantom: true,
    ejs: true
  },
  separator: 'after'
},
{
  name: 'Array.prototype.indexOf',
  exec: function () {
    return typeof Array.prototype.indexOf == 'function';
  },
  res: {
    ie7: false,
    ie8: false,
    ie9: true,
    ie10: true,

    firefox3: true,
    firefox3_5: true,
    firefox4: true,
    firefox21: true,

    safari3: true,
    safari4: true,
    safari5: true,
    safari51: true,
    safari6: true,
    webkit: true,

    chrome5: true,
    chrome6: true,
    chrome7: true,
    chrome13: true,
    chrome19: true,
    chrome23: true,

    opera10_10: true,
    opera10_50: true,
    opera12: true,
    opera12_10: true,

    konq43: true,
    konq49: true,
    konq413: true,

    besen: true,
    rhino: true,
    phantom: true,
    ejs: true
  }
},
{
  name: 'Array.prototype.lastIndexOf',
  exec: function () {
    return typeof Array.prototype.lastIndexOf == 'function';
  },
  res: {
    ie7: false,
    ie8: false,
    ie9: true,
    ie10: true,

    firefox3: true,
    firefox3_5: true,
    firefox4: true,
    firefox21: true,

    safari3: true,
    safari4: true,
    safari5: true,
    safari51: true,
    safari6: true,
    webkit: true,

    chrome5: true,
    chrome6: true,
    chrome7: true,
    chrome13: true,
    chrome19: true,
    chrome23: true,

    opera10_10: true,
    opera10_50: true,
    opera12: true,
    opera12_10: true,

    konq43: true,
    konq49: true,
    konq413: true,

    besen: true,
    rhino: true,
    phantom: true,
    ejs: true
  }
},
{
  name: 'Array.prototype.every',
  exec: function () {
    return typeof Array.prototype.every == 'function';
  },
  res: {
    ie7: false,
    ie8: false,
    ie9: true,
    ie10: true,

    firefox3: true,
    firefox3_5: true,
    firefox4: true,
    firefox21: true,

    safari3: true,
    safari4: true,
    safari5: true,
    safari51: true,
    safari6: true,
    webkit: true,

    chrome5: true,
    chrome6: true,
    chrome7: true,
    chrome13: true,
    chrome19: true,
    chrome23: true,

    opera10_10: true,
    opera10_50: true,
    opera12: true,
    opera12_10: true,

    konq43: true,
    konq49: true,
    konq413: true,

    besen: true,
    rhino: true,
    phantom: true,
    ejs: true
  }
},
{
  name: 'Array.prototype.some',
  exec: function () {
    return typeof Array.prototype.some == 'function';
  },
  res: {
    ie7: false,
    ie8: false,
    ie9: true,
    ie10: true,

    firefox3: true,
    firefox3_5: true,
    firefox4: true,
    firefox21: true,

    safari3: true,
    safari4: true,
    safari5: true,
    safari51: true,
    safari6: true,
    webkit: true,

    chrome5: true,
    chrome6: true,
    chrome7: true,
    chrome13: true,
    chrome19: true,
    chrome23: true,

    opera10_10: true,
    opera10_50: true,
    opera12: true,
    opera12_10: true,

    konq43: true,
    konq49: true,
    konq413: true,

    besen: true,
    rhino: true,
    phantom: true,
    ejs: true
  }
},
{
  name: 'Array.prototype.forEach',
  exec: function () {
    return typeof Array.prototype.forEach == 'function';
  },
  res: {
    ie7: false,
    ie8: false,
    ie9: true,
    ie10: true,

    firefox3: true,
    firefox3_5: true,
    firefox4: true,
    firefox21: true,

    safari3: true,
    safari4: true,
    safari5: true,
    safari51: true,
    safari6: true,
    webkit: true,

    chrome5: true,
    chrome6: true,
    chrome7: true,
    chrome13: true,
    chrome19: true,
    chrome23: true,

    opera10_10: true,
    opera10_50: true,
    opera12: true,
    opera12_10: true,

    konq43: true,
    konq49: true,
    konq413: true,

    besen: true,
    rhino: true,
    phantom: true,
    ejs: true
  }
},
{
  name: 'Array.prototype.map',
  exec: function () {
    return typeof Array.prototype.map == 'function';
  },
  res: {
    ie7: false,
    ie8: false,
    ie9: true,
    ie10: true,

    firefox3: true,
    firefox3_5: true,
    firefox4: true,
    firefox21: true,

    safari3: true,
    safari4: true,
    safari5: true,
    safari51: true,
    safari6: true,
    webkit: true,

    chrome5: true,
    chrome6: true,
    chrome7: true,
    chrome13: true,
    chrome19: true,
    chrome23: true,

    opera10_10: true,
    opera10_50: true,
    opera12: true,
    opera12_10: true,

    konq43: true,
    konq49: true,
    konq413: true,

    besen: true,
    rhino: true,
    phantom: true,
    ejs: true
  }
},
{
  name: 'Array.prototype.filter',
  exec: function () {
    return typeof Array.prototype.filter == 'function';
  },
  res: {
    ie7: false,
    ie8: false,
    ie9: true,
    ie10: true,

    firefox3: true,
    firefox3_5: true,
    firefox4: true,
    firefox21: true,

    safari3: true,
    safari4: true,
    safari5: true,
    safari51: true,
    safari6: true,
    webkit: true,

    chrome5: true,
    chrome6: true,
    chrome7: true,
    chrome13: true,
    chrome19: true,
    chrome23: true,

    opera10_10: true,
    opera10_50: true,
    opera12: true,
    opera12_10: true,

    konq43: true,
    konq49: true,
    konq413: true,

    besen: true,
    rhino: true,
    phantom: true,
    ejs: true
  }
},
{
  name: 'Array.prototype.reduce',
  exec: function () {
    return typeof Array.prototype.reduce == 'function';
  },
  res: {
    ie7: false,
    ie8: false,
    ie9: true,
    ie10: true,

    firefox3: true,
    firefox3_5: true,
    firefox4: true,
    firefox21: true,

    safari3: false,
    safari4: true,
    safari5: true,
    safari51: true,
    safari6: true,
    webkit: true,

    chrome5: true,
    chrome6: true,
    chrome7: true,
    chrome13: true,
    chrome19: true,
    chrome23: true,

    opera10_10: false,
    opera10_50: true,
    opera12: true,
    opera12_10: true,

    konq43: true,
    konq49: true,
    konq413: true,

    besen: true,
    rhino: true,
    phantom: true,
    ejs: true
  }
},
{
  name: 'Array.prototype.reduceRight',
  exec: function () {
    return typeof Array.prototype.reduceRight == 'function';
  },
  res: {
    ie7: false,
    ie8: false,
    ie9: true,
    ie10: true,

    firefox3: true,
    firefox3_5: true,
    firefox4: true,
    firefox21: true,

    safari3: false,
    safari4: true,
    safari5: true,
    safari51: true,
    safari6: true,
    webkit: true,

    chrome5: true,
    chrome6: true,
    chrome7: true,
    chrome13: true,
    chrome19: true,
    chrome23: true,

    opera10_10: false,
    opera10_50: true,
    opera12: true,
    opera12_10: true,

    konq43: true,
    konq49: true,
    konq413: true,

    besen: true,
    rhino: true,
    phantom: true,
    ejs: true
  },
  separator: 'after'
},
{
  name: 'Getter in property initializer',
  exec: function () {
    try {
      return eval('({ get x(){ return 1 } }).x === 1');
    } catch (e) {
      return false;
    }
  },
  res: {
    ie7: false,
    ie8: false,
    ie9: true,
    ie10: true,

    firefox3: true,
    firefox3_5: true,
    firefox4: true,
    firefox21: true,

    safari3: true,
    safari4: true,
    safari5: true,
    safari51: true,
    safari6: true,
    webkit: true,

    chrome5: true,
    chrome6: true,
    chrome7: true,
    chrome13: true,
    chrome19: true,
    chrome23: true,

    opera10_10: true,
    opera10_50: true,
    opera12: true,
    opera12_10: true,

    konq43: true,
    konq49: true,
    konq413: true,

    besen: true,
    rhino: true,
    phantom: true,
    ejs: true
  }
},
{
  name: 'Setter in property initializer',
  exec: function () {
    try {
      var value;
      eval('({ set x(v){ value = v; } }).x = 1');
      return value === 1;
    } catch (e) {
      return false;
    }
  },
  res: {
    ie7: false,
    ie8: false,
    ie9: true,
    ie10: true,

    firefox3: true,
    firefox3_5: true,
    firefox4: true,
    firefox21: true,

    safari3: true,
    safari4: true,
    safari5: true,
    safari51: true,
    safari6: true,
    webkit: true,

    chrome5: true,
    chrome6: true,
    chrome7: true,
    chrome13: true,
    chrome19: true,
    chrome23: true,

    opera10_10: true,
    opera10_50: true,
    opera12: true,
    opera12_10: true,

    konq43: true,
    konq49: true,
    konq413: true,

    besen: true,
    rhino: true,
    phantom: true,
    ejs: true
  },
  separator: 'after'
},
{
  name: 'Property access on strings',
  exec: function () {
    return "foobar"[3] === "b";
  },
  res: {
    ie7: false,
    ie8: true,
    ie9: true,
    ie10: true,

    firefox3: true,
    firefox3_5: true,
    firefox4: true,
    firefox21: true,

    safari3: true,
    safari4: true,
    safari5: true,
    safari51: true,
    safari6: true,
    webkit: true,

    chrome5: true,
    chrome6: true,
    chrome7: true,
    chrome13: true,
    chrome19: true,
    chrome23: true,

    opera10_10: true,
    opera10_50: true,
    opera12: true,
    opera12_10: true,

    konq43: true,
    konq49: true,
    konq413: true,

    besen: true,
    rhino: true,
    phantom: true,
    ejs: true
  }
},
{
  name: 'Reserved words as property names',
  exec: function () {
    try {
      var obj = { };
      eval('obj = ({ if: 1 })');
      return obj['if'] === 1;
    } catch (e) {
      return false;
    }
  },
  res: {
    ie7: false,
    ie8: false,
    ie9: true,
    ie10: true,

    firefox3: true,
    firefox3_5: true,
    firefox4: true,
    firefox21: true,

    safari3: false,
    safari4: false,
    safari5: false,
    safari51: true,
    safari6: true,
    webkit: true,

    chrome5: false,
    chrome6: false,
    chrome7: true,
    chrome13: true,
    chrome19: true,
    chrome23: true,

    opera10_10: false,
    opera10_50: false,
    opera12: true,
    opera12_10: true,

    konq43: false,
    konq49: false,
    konq413: true,

    besen: true,
    rhino: false,
    phantom: true,
    ejs: true
  },
  separator: 'after'
},
{
  name: 'Zero-width chars in identifiers',
  exec: function () {
    try {
      return eval('_\u200c\u200d = true');
    } catch (e) { }
  },
  res: {
    ie7: false,
    ie8: false,
    ie9: true,
    ie10: true,

    firefox3: false,
    firefox3_5: false,
    firefox4: {
      val: true,
      note_id: 'zero-width-char',
      note_html: 'Firefox 4 &amp; 5 fail this test'
    },
    firefox21: true,

    safari3: false,
    safari4: false,
    safari5: false,
    safari51: false,
    safari6: true,
    webkit: true,

    chrome5: false,
    chrome6: false,
    chrome7: false,
    chrome13: false,
    chrome19: true,
    chrome23: true,

    opera10_10: false,
    opera10_50: false,
    opera12: false,
    opera12_10: true,

    konq43: false,
    konq49: false,
    konq413: false,

    besen: true,
    rhino: true,
    phantom: false,
    ejs: true
  }
},
{
  name: 'parseInt() ignores leading zeros',
  exec: function () {
    return parseInt('010') === 10;
  },
  res: {
    ie7: false,
    ie8: false,
    ie9: true,
    ie10: true,

    firefox3: false,
    firefox3_5: false,
    firefox4: false,
    firefox21: true,

    safari3: false,
    safari4: false,
    safari5: false,
    safari51: false,
    safari6: true,
    webkit: true,

    chrome5: false,
    chrome6: false,
    chrome7: false,
    chrome13: false,
    chrome19: false,
    chrome23: true,

    opera10_10: false,
    opera10_50: false,
    opera12: false,
    opera12_10: false,

    konq43: false,
    konq49: false,
    konq413: false,

    besen: true,
    rhino: false,
    phantom: false,
    ejs: true
  }
},
{
  name: 'Immutable undefined',
  exec: function () {
    var result;
    try {
      undefined = 12345;
      result = typeof undefined == 'undefined';
      undefined = void 0;
    } catch (e) { }

    return result;
  },
  res: {
    ie7: false,
    ie8: false,
    ie9: true,
    ie10: true,

    firefox3: false,
    firefox3_5: false,
    firefox4: true,
    firefox21: true,

    safari3: false,
    safari4: false,
    safari5: true,
    safari51: true,
    safari6: true,
    webkit: true,

    chrome5: false,
    chrome6: false,
    chrome7: false,
    chrome13: false,
    chrome19: true,
    chrome23: true,

    opera10_10: false,
    opera10_50: false,
    opera12: true,
    opera12_10: true,

    konq43: false,
    konq49: true,
    konq413: true,

    besen: true,
    rhino: true,
    phantom: true,
    ejs: false
  }
},
{
  name: 'Strict mode',
  link: '../strict-mode/',
  exec: function () {
    "use strict";
    return !this;
  },
  res: {
    ie7: false,
    ie8: false,
    ie9: false,
    ie10: {
      val: true,
      note_id: 'strict-mode-ie10',
      note_html: 'IE10 PP2 has a bug with strict mode which makes the following expression "fail", even though strict mode is more or less supported: <code>(function(){ "use strict"; return !this })()</code>'
    },

    firefox3: false,
    firefox3_5: false,
    firefox4: true,
    firefox21: true,

    safari3: false,
    safari4: false,
    safari5: false,
    safari51: true,
    safari6: true,
    webkit: true,

    chrome5: false,
    chrome6: false,
    chrome7: false,
    chrome13: true,
    chrome19: true,
    chrome23: true,

    opera10_10: false,
    opera10_50: false,
    opera12: true,
    opera12_10: true,

    konq43: false,
    konq49: false,
    konq413: false,

    besen: true,
    rhino: false,
    phantom: true,
    ejs: true
  }
}
];
