function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('div#nested div.target')
}

function deepestChild() {
  var initialNode = document.querySelector('#grand-node')
  var nextNode = initialNode[0]
  while ()
  
}