$(document).ready(function () {
  let currentIndex = 0;
  const items = $(".carousel-item");
  const itemCount = items.length;

  function showItem(index) {
    items.hide();
    items.eq(index).show();
  }

  $(".next").click(function () {
    currentIndex = (currentIndex + 1) % itemCount;
    showItem(currentIndex);
  });

  $(".prev").click(function () {
    currentIndex = (currentIndex - 1 + itemCount) % itemCount;
    showItem(currentIndex);
  });

  showItem(currentIndex);
});
