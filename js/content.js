// content.js
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      var firstHref = $("a[href^='http']").eq(0).attr("href");

      function pages(){
        if(firstHref === "https://www.facebook.com/"){
            console.log("i see you!");
            alert("i see you!");
        } else {
            console.log("no, nada");
        }
      }

      pages();
      console.log(firstHref);

      // function userCheated() {
        // The user cheated by leaving this window (e.g opening another window)
        // Do something
      //   alert("You can't cheat!");
      // }

      //  window.onblur = userCheated;

      // // This line is new!
      // chrome.runtime.sendMessage({"message": "open_new_tab", "url": firstHref});
    }
  }
);
