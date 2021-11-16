function makeBuffer() {
    var text = '';
    function buffer(part) {
      if (arguments.length == 0) {
        return text
      }
      text += part;
    };
    buffer.clear = function() {
      text = ""
    }
    return buffer
  }
  var buffer = makeBuffer()
buffer("test ");
buffer("won't eat you");
alert( buffer());
buffer.clear();
alert( buffer());