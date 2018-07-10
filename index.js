function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('div#nested div.target')
}

function deepestChild() {
  var nodeList = document.querySelector('dev#grand-node div')
  
  while (nodeList.querySelector('div')) {
    nodeList = nodeList.querySelector('div')
  }
  return nodeList.innerHTML
}