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

  $("delete-burger").on("click", function (event) {
    const id = $(event.target).data("id");
    $.ajax("/api/burgers/" + id, {
      type: "DELETE",
    }).then(function () {
      location.reload();
    });
  });

  $(".create-form").on("submit", function (event) {
    event.preventDefault();

    var newBurger = {
      name: $("#bu").val().trim(),
      devoureded: $("[name=devoureded]:checked").val().trim(),
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(function () {
      location.reload();
    });
  });
});
