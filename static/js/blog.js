// Show alert for adding and removing comments in a blog

if ($("#comment-deleted")) {
    $("#message-container").show();
        $("#comment-deleted").show();
        window.setTimeout(function () {
            $("#message-container").slideUp(500, function () {
                $("#message-container").hide();
            });
            $("#comment-deleted").slideUp(500, function () {
                $("#comment-deleted").hide();
             });
        }, 3000);


}
