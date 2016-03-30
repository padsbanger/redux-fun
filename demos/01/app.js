'use strict'

var counter = function(state, action) {
  var state = state || 0

  switch(action.type) {
    case 'INC':
      return state + 1;
    case 'DESC':
      return state - 1;
    default:
      return state;
  }
},
  counterNode = document.querySelector('span'),
  incButton = document.querySelector('.counter-inc'),
  descButton = document.querySelector('.counter-desc')

var store = Redux.createStore(counter)

counterNode.innerText = store.getState()

// set init value
store.subscribe(function() {
  counterNode.innerText = store.getState()
})


incButton.addEventListener('click', function() {
  store.dispatch({type: 'INC'})
  counterNode.innerText = store.getState()
})

descButton.addEventListener('click', function() {
  store.dispatch({type: 'DESC'})
  counterNode.innerText = store.getState()
})
