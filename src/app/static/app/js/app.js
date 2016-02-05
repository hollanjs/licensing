$(function() {
    console.log("loading switches for use!");

    var elems = Array.prototype.slice.call(document.querySelectorAll('.js-switch'));

    elems.forEach(function(html) {
          var switchery = new Switchery(html, { size : 'small' });
        });

    // var init = new Switchery(elem, { size : 'small' });

    console.log("switches loaded!");
});