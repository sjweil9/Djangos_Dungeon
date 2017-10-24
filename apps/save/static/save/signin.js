$(document).ready(function(){
    $('.message a').click(function(){
        $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
    });
    $('.btn-danger').click(function(e){
        e.preventDefault();
        var name = $(this).data('name');
        var confstring = "Are you sure you want to delete " + name + "?";
        if (confirm(confstring)) {
            var url = $(this).data('href');
            window.location = url;
        }
    });
});