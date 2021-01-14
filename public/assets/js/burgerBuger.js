$(function () {
  $(".change-devoured").on("click", function (event) {
    var id = $(this).data("id");
    var newBurger = $(this).data("newBurger");
    var newdevoured = {
      devoureded: newBurger,
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newdevoured,
    }).then(function () {
      location.reload();
    });
  });



});
