const mobile_links = document.querySelector('.mobile-links');
const mobile_button = document.querySelector('.mobile-button');


mobile_button.addEventListener('click', function() {
   mobile_links.classList.toggle('hidden');
})

setInterval(() => {
   if (window.innerWidth > 1024) {
      mobile_links.classList.add('hidden');
   }
}, 1000);

