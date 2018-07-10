function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('div#nested div.target')
}

function deepestChild() {
  var initialNode = document.querySelector('#grand-node')
  var nextNode = initialNode.children[0]
  while (nextNode.children[0]) {
    nextNode = nextNode.children[0]
  }
  return nextNode
}

function increaseRankBy(n) {
  var rankedList = document.querySelectorAll('ul.ranked-list li')
  for (var i=0; i<rankedList.length; i++) {
    rankedList[i].innerHTML = parseInt(rankedList[i].innerHTML) + n
  }
  return rankedList
}