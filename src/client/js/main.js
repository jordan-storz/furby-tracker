(function () {

  let $editForm = $('.furby-profile-info');
  let $deleteBtn = $('.delete-button');

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

  $deleteBtn.click(function(event) {
    let id = $(event.target).attr('data-id');
    event.preventDefault();
    let confirm = window.confirm('Delete user?');
    if (confirm) {
      $.ajax({
        url: `/users/${id}`,
        method: 'DELETE',
        success: function (data) {
          window.location.href = data.redirectUrl;
        }
      });
    } else {
      return;
    }
  });

})();
