// stack overflow winning

function dec2hex (dec) {
  return dec.toString(16).padStart(2, "0")
}

function stringutil (len) {
  var arr = new Uint8Array((len || 40) / 2)
  window.crypto.getRandomValues(arr)
  return Array.from(arr, dec2hex).join('')
}
document.title = stringutil(1000)