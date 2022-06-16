function getObjects(array, key, value) {
    var objects = [];
    for (var i in array) {
      if (array[i][key] === value) {
        objects.push(array[i]);
      }
    }
    return objects;
  }

 