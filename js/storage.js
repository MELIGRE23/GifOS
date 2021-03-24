function getStorage () {
  return localStorage.getItem('data')
}

function saveStorage (item) {
  localStorage.setItem('data',item)
}

function removeStorage () {
  localStorage.removeItem('data')
}