(function($) {
    
        $(document).ready(function() {
    
            //wszystkie elementy <div>, posiadające zarówno klasę “grid” oraz klasę “grid-12”
            var grid = $("div.grid, div.grid-12");

            console.log("div grid grid-12",grid);

            //wszystkie elementy <a>, których atrybut “href" zaczyna się na “http”, znajdujące się w elemencie o klasie “nav”
            var aHttp = $(".nav a[href^='http']");
    
            console.log("a zaczynające się http",aHttp);

        });
    
    })(jQuery);
    
    