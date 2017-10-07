(function($) {
    
        $(document).ready(function() {
    
            //wszystkie elementy <div>, posiadające zarówno klasę “grid” oraz klasę “grid-12”
            var grid = $("div.grid, div.grid-12");

            console.log("div grid grid-12",grid);

            //wszystkie elementy <a>, których atrybut “href" zaczyna się na “http”, znajdujące się w elemencie o klasie “nav”
            var aHttp = $(".nav a[href^='http']");
    
            console.log("a zaczynające się http",aHttp);

            //wszystkie elementy <input>, których typ to “radio” lub “checkbox” oraz dodatkowo nie są aktualnie zaznaczone (checked).

            $("#inputy").on("click", function(e) {
                e.stopPropagation();
                var radioCheckbox = $("input:radio, input:checkbox").not(":checked");
                //var radioCheckboxNotChecked = radioCheckbox.not(":checked");
                console.log(radioCheckbox)
            })
        });
    
    })(jQuery);
    
    