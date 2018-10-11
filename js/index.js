/* eslint-disable */

new Luminous(document.querySelector('.schoolmap1'));
new Luminous(document.querySelector('.schoolmap2'));

$(window).ready(function() {
  $('.section')
    .scrollie({
      direction: 'up',
      scrollingToTheTop: function(elem) {
        elem
          .animate(
            { opacity: 1 },
            { queue: false, duration: 'slow' }
          );
      }
    });

  $('#top')
    .css('opacity', 0)
    .animate(
      { opacity: 1 },
      { queue: false, duration: 3000 }
    );
});
