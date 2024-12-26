// (function($) {
//   'use strict';
//   $(function() {
//     $('[data-toggle="offcanvas"]').on("click", function() {
//       $('.sidebar-offcanvas').toggleClass('active')
//     });
//   });
// })(jQuery);



document.addEventListener('DOMContentLoaded', () => {
  const toggler = document.querySelector('.navbar-toggler');
  const sidebar = document.querySelector('.smallnav');

  // Create and append custom styles for scrollbar dynamically
  const style = document.createElement('style');
  style.textContent = `
    .smallnav::-webkit-scrollbar {
        width: 5px; /* Default width */
    }

    .smallnav::-webkit-scrollbar-thumb {
        background: linear-gradient(45deg, #fff, #AA62FF);
        border-radius: 10%;
    }

    .smallnav::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(45deg, #AA62FF, #6a11cb);
    }

    .smallnav::-webkit-scrollbar-track {
        background: transparent;
        border-radius: 10px;
    }

    /* Hidden scrollbar when collapsed */
    .smallnav.collapsed::-webkit-scrollbar {
        width: 0px; /* Set width to 0px when collapsed */
    }
  `;
  document.head.appendChild(style); // Add styles dynamically to the document head

  // Handle toggle click
  toggler.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed'); // Toggle collapsed class

    if (sidebar.classList.contains('collapsed')) {
      sidebar.style.backgroundColor = 'white';
      sidebar.style.overflowY = 'scroll'; // Enable scrollbar visibility
    } else {
      sidebar.style.backgroundColor = '';
      sidebar.style.overflowY = 'auto'; // Restore default scrollbar behavior
    }
  });
});
