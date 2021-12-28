'use strict';

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'orange';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
