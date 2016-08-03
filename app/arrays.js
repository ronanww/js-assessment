exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  sum: function(arr) {
    var res = 0;
    for (i=0; i<arr.length; i++) {
      res += arr[i];
    }
    return res;
  },

  remove: function(arr, item) {
    var newArray = arr.slice();
    var index = newArray.indexOf(item);
    while (index !== -1) {
      newArray.splice(index, 1);
      index = newArray.indexOf(item);
    }
    return newArray;
  },

  removeWithoutCopy: function(arr, item) {
    var index = arr.indexOf(item);
    while (index !== -1) {
      arr.splice(index, 1);
      index = arr.indexOf(item);
    }
    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    return [item].concat(arr);
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    var count = 0;
    for (i=0; i<arr.length; i++) {
      if (arr[i] === item) {
        count++;
      }
    }
    return count;
  },

  duplicates: function(arr) {
    var results = [];
    for (i=0; i<arr.length; i++) {
      if((results.indexOf(arr[i]) == -1) && (arr.indexOf(arr[i], i + 1) != -1)) {
          results.push(arr[i]);
       }
    }
    return results;
  },

  square: function(arr) {
    for (i=0; i<arr.length; i++) {
      arr[i] = Math.pow(arr[i], 2);
    }
    return arr;
  },

  findAllOccurrences: function(arr, target) {
    var results = [];
    for (i=0; i<arr.length; i++) {
      if (arr[i] === target) {
        results.push(i);
      }
    }
    return results;
  }
};
