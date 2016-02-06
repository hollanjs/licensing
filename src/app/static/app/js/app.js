$(function() {

    console.log("loading switches for use!");
    var elems = Array.prototype.slice.call(document.querySelectorAll('.js-switch'));
    elems.forEach(function(html) {
          var switchery = new Switchery(html, { size : 'small' });
        });
    console.log("switches loaded!");

    sel_licensors = [];

    $(document).on('change', '.js-switch', function (event) {

    	selection = event.currentTarget
    	licensingText = $(#licensing-block);

    	console.log(licensingText.html);

    	if (selection.checked == true) {

    		sel_licensors.push(selection.id);
    		console.log(sel_licensors);

    	} else if (selection.checked == false) {

    		index = sel_licensors.indexOf(selection.id)

    		if (index > -1) {
	    		sel_licensors.splice(index,1);
	    	}

    		console.log(sel_licensors);

    	}
    });



});