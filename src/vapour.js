/*
  FUNCTIONS FOR VAPOUR
 */
let Vapour = {
    getDataURL: function (currentURL){
       let pathname = currentURL.pathname.replace(/\.[^/.]+$/, '.json');
       if ( pathname.slice( (pathname.lastIndexOf(".") - 1 >>> 0) + 2) === '' )
       {
           return currentURL.protocol + "//" + currentURL.host + "/" + currentURL.pathname + currentURL.search
       }
       return currentURL.protocol + "//" + currentURL.host + "/" + pathname + currentURL.search
    }
};

// Lets start
(function ( win, doc, vpr, undef ){
    // Lets start by fetching the context data of the view
    alert( 'You need to pull: ' + vpr.getDataURL(window.location));

})( window, document, Vapour);