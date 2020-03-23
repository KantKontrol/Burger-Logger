

    $(document).on("click", ".submit-button", function(event){

        let id = event.target.id;

        $.ajax("/api/burgers/" + id,
        {
            type: 'PUT',
            data: {id: id}
        }).then((res) => {
            location.reload();
        });
    });

    $(document).on("click", "#burger-submit", function(event){

        let burgerName = $("#burgerName").val();

        $.ajax("/api/burgers",
        {
            type: 'POST',
            data: {burger_name: burgerName}
        }).then((res)=> {
            location.reload();
        });
    });