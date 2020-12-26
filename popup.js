let test = document.getElementById('test');

test.onclick = function() {
chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
      chrome.tabs.executeScript(      
        tabs[0].id,
        {file: './' +'test' + '.js'} );
      chrome.tabs.sendMessage(
        tabs[0].id,
	      {flag: 'start'}
      );
    });

}

let stopFollowers = document.getElementById('stopF');

stopFollowers.onclick = function() {
chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
      chrome.tabs.sendMessage(
        tabs[0].id,
	      {flag: 'stopF'}
      );
    });

}
