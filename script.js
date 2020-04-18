/** Add any JavaScript you need to this file. */
/**script to stop hover events when scrolling the page */
var body = document.body,
  timer;
window.addEventListener(
  'scroll',
  function() {
    clearTimeout(timer);
    if (!body.classList.contains('disable-hover')) {
      body.classList.add('disable-hover');
    }
    timer = setTimeout(function() {
      body.classList.remove('disable-hover');
    }, 500);
  },
  false
);
function hide(id) {
  var container = document.getElementById(id);
  container.style.display = 'none';
}
function show(id) {
  var container = document.getElementById(id);
  container.style.display = 'block';
}

var showAll = document.getElementById('products-ref');
var showShirts = document.getElementById('bed-ref');
var showBeans = document.getElementById('throw-ref');
var showPants = document.getElementById('body-ref');

window.onload = function() {
  showAll.addEventListener('click', function() {
    show('category1');
    show('category2');
    show('category3');
  });

  showShirts.addEventListener('click', function() {
    show('category1');
    hide('category2');
    hide('category3');
  });
  showBeans.addEventListener('click', function() {
    hide('category1');
    show('category2');
    hide('category3');
  });
  showPants.addEventListener('click', function() {
    hide('category1');
    hide('category2');
    show('category3');
  });
};
