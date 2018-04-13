var recipes = {breakfast: 'scrambled eggs'}

function updateObjectWithKeyAndValue(object, key, value) {
  return object.assign({}, object, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  var newObj = Object.assign(object, {key: value});
  return newObj;
}

function deleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  
}