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
    let observer = new MutationObserver(mutations => {

      for(let mutation of mutations) {
        // examine new nodes, is there anything to highlight?

        for(let node of mutation.addedNodes) {
          // we track only elements, skip other nodes (e.g. text nodes)
          if (!(node instanceof HTMLElement)) continue;

          // check the inserted element for being a code snippet
          if (node.tagName.toLowerCase().startsWith('vpr-')) {
            console.log(node);
          }

        }
      }

});

observer.observe( doc.documentElement || doc.body, {childList: true, subtree: true});

})( window, document, Vapour);