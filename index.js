function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function deepestChild(){
  let node = document.querySelector('#grand-node')

  while (node.children[0]){
    node = node.children[0]
  }
return node
}

function increaseRankBy(n){
 let lis = document.querySelectorAll('.ranked-list')

   for (let i = 0; i < lis.length; i++) {
     let children = lis[i].children
     for (let e = 0; e < children.length; e++){
       console.log(children[e].innerHTML = parseInt(children[e].innerHTML) + n)
     }
  }
}
