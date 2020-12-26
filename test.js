function resolve(button) {
  let ranSec = Math.random() * 300 + 500;
  return new Promise(resolve => {
    setTimeout(() => {
	    resolve(button.click())
  }, ranSec)})
}

async function asyncCall() {
  console.log('async start');
  let bts = document.getElementsByTagName('button');
  
  for (i = 0; i < bts.length; i++) {
    const result = await resolve(bts[i]);

    if (bts[i].innerHTML == '팔로우') {
      result;     
    }
  }
}

chrome.runtime.onMessage.addListener((msg) => {

})
asyncCall();
