$(function() {

    console.log("loading switches for use!");
    var elems = Array.prototype.slice.call(document.querySelectorAll('.js-switch'));
    elems.forEach(function(html) {
          var switchery = new Switchery(html, { size : 'small' });
        });
    console.log("switches loaded!");

    // sel_licensors = [];

    $(document).on('change', '.js-switch', function (event) {
    	selection = event.currentTarget;
    	$('.licensing-block #' + selection.id).toggle();
    });



});