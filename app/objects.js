exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
    var altered = {
        name: obj.name,
        greeting: obj.greeting,
        sayIt: fn
    };
    return altered.sayIt();

  },

  alterObjects: function(constructor, greeting) {
    return constructor.prototype.greeting = greeting;
  },

  iterate: function(obj) {
    var result = [];
    for (var property in obj) {
      if (obj.hasOwnProperty(property)) {
        result.push(property + ': ' + obj[property]);
      }
    }

    return result;
  }
};
