$(function() {

	// load up switchery to correctly show switches and animations

    console.log("loading switches for use!");
    var elems = Array.prototype.slice.call(document.querySelectorAll('.js-switch'));
    elems.forEach(function(html) {
          var switchery = new Switchery(html, { size : 'small' });
        });
    console.log("switches loaded!");


    // update licensing block with selected legal lines

    $(document).on('change', '.js-switch', function (event) {
    	selection = event.currentTarget;
    	$('.licensing-block #' + selection.id).toggle();
    });

    // set [YEAR] to current year in licensing-block

    var date = new Date();
	var year = date.getFullYear();
	$('.licensing-block').html($('.licensing-block').html().replace('[YEAR]', year));

});