// script.js

// Function to open the sharing URLs in a new window
function openSharePopup(url) {
  window.open(
    url,
    '_blank',
    'toolbar=0,location=0,menubar=0,width=600,height=400'
  );
}

// Function to share on Facebook
document.getElementById('facebook-btn').addEventListener('click', function () {
  var url = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent('file:///C:/Users/user/Desktop/IVORYSTEELCONTRACTORS/index.html#');
  openSharePopup(url);
});

// Function to share on Twitter
document.getElementById('twitter-btn').addEventListener('click', function () {
  var url = 'https://twitter.com/intent/tweet?url=' + encodeURIComponent('file:///C:/Users/user/Desktop/IVORYSTEELCONTRACTORS/index.html#');
  openSharePopup(url);
});

// Function to share on LinkedIn
document.getElementById('linkedin-btn').addEventListener('click', function () {
  var url = 'https://www.linkedin.com/shareArticle?url=' + encodeURIComponent('file:///C:/Users/user/Desktop/IVORYSTEELCONTRACTORS/index.html#');
  openSharePopup(url);
});

// Function to share on WhatsApp
document.getElementById('whatsapp-btn').addEventListener('click', function () {
  var url = 'https://wa.me/?text=' + encodeURIComponent('file:///C:/Users/user/Desktop/IVORYSTEELCONTRACTORS/index.html#');
  openSharePopup(url);
});
