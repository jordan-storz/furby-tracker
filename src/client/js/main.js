(function () {

  let $editForm = $('.furby-profile-info');

  $editForm.on('submit', function(event) {
    event.preventDefault();
    console.log(event.target);
    let body = {
      nickname: $('input[name="nickname"]').val(),
      id: $('input[name="id"]').val()
    }
    $.ajax({
      url: `/furbies/${body.id}`,
      method: 'PUT',
      data: body,
      success: function (data) {
        if (data.message = "Furby updated!") {
          window.location.href = data.redirectUrl;
        }
      }
    });
  });

})();
