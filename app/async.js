//

exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {

  async: function(value) {
    return Promise.resolve(value);
  },

  manipulateRemoteData: function(url) {
    /*var fs = require('fs');
    var obj;
    return fs.readFile('url', 'utf8', function (err, data) {
      if (err) throw err;
      obj = JSON.parse(data);
      return obj.people.sort(function(a,b) { return a.name > b.name})
    });*/

    var $ = require('jQuery');

    return $(function() {
      $.ajax({
        type: 'GET',
        url: url,

        contentType: "application/json",
        dataType: 'jsonp',
        success: function(data) {
          return data.people.sort(function(a,b) { return a.name > b.name});
        },
        error: function(e) {
          console.log(e.message);
        }
      });
    });
  }
};
