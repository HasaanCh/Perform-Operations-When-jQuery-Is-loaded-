(async () => {
    console.log("waiting for jQuery");

  
    


    // Promise Resolving
    while (!window.hasOwnProperty("jQuery")) {
        await new Promise(resolve => setTimeout(resolve, 100));
    }

    // Jquery Loaded All Pending operations under
    console.log("jQuery is loaded.");

})();