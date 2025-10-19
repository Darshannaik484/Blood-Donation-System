<script>
function redirectToDonate() {
  alert("You are redirecting to Donate Blood page...");
  setTimeout(function() {
    window.location.href = "../src/html/DonatorHome.html";
  }, 2000); // 2-second delay
}

function redirectToRequest() {
  alert("You are redirecting to Request Blood page...");
  setTimeout(function() {
    window.location.href = "../src/html/ReceiverHome.html";
  }, 2000); // 2-second delay
}
</script>
