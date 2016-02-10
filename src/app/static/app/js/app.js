$(function() {

	// load up switchery to correctly show switches and animations

    console.log("loading switches for use!");
    var elems = Array.prototype.slice.call(document.querySelectorAll('.js-switch'));
    elems.forEach(function(html) {
          var switchery = new Switchery(html, { size : 'small' });
        });
    console.log("switches loaded!");


    // set [YEAR] to current year in licensing-block

    var date = new Date();
	var year = date.getFullYear();
	$('.licensing-block').html($('.licensing-block').html().replace(/\[YEAR\]/g, year));


    // update licensing block with selected legal lines

    $(document).on('change', '.js-switch', function (event) {
        selection = event.currentTarget;
        $('.licensing-block #' + selection.id).toggle();
    });



    // // Copy and paste function - bring this back later...
    // document.getElementById("copyButton").addEventListener("click", function() {
    //     console.log(document.getElementById("copyTarget"));
    //     copyToClipboard(document.getElementById("copyTarget"));
    // });

    // function copyToClipboard(elem) {
    //       // create hidden text element, if it doesn't already exist
    //     var targetId = "_hiddenCopyText_";
    //     var isInput = elem.tagName === "INPUT" || elem.tagName === "TEXTAREA";
    //     var origSelectionStart, origSelectionEnd;
    //     if (isInput) {
    //         // can just use the original source element for the selection and copy
    //         target = elem;
    //         origSelectionStart = elem.selectionStart;
    //         origSelectionEnd = elem.selectionEnd;
    //     } else {
    //         // must use a temporary form element for the selection and copy
    //         target = document.getElementById(targetId);
    //         if (!target) {
    //             var target = document.createElement("textarea");
    //             target.style.position = "absolute";
    //             target.style.left = "-9999px";
    //             target.style.top = "0";
    //             target.id = targetId;
    //             document.body.appendChild(target);
    //         }
    //         target.textContent = elem.textContent;
    //     }
    //     // select the content
    //     var currentFocus = document.activeElement;
    //     target.focus();
    //     target.setSelectionRange(0, target.value.length);

    //     // copy the selection
    //     var succeed;
    //     try {
    //           succeed = document.execCommand("copy");
    //     } catch(e) {
    //         succeed = false;
    //     }
    //     // restore original focus
    //     if (currentFocus && typeof currentFocus.focus === "function") {
    //         currentFocus.focus();
    //     }

    //     if (isInput) {
    //         // restore prior selection
    //         elem.setSelectionRange(origSelectionStart, origSelectionEnd);
    //     } else {
    //         // clear temporary content
    //         target.textContent = "";
    //     }
    //     return succeed;
    // }
    //




});



