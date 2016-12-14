(function () {

  let $editForm = $('.furby-profile-info');
  let $deleteUserBtn = $('.delete-user-button');
  let $deleteFurbyBtn = $('.delete-furby-button');
  let $usernameInput = $('input[name="username"]');
  let $urlInput = $('input[name="image_url"]');

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

  $deleteUserBtn.click(function(event) {
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

  $deleteFurbyBtn.click(function(event) {
    let id = $(event.target).attr('data-id');
    let confirm = window.confirm('Delete this Furby???');
    if (confirm) {
      $.ajax({
        url: `/furbies/${id}`,
        method: 'DELETE',
        success: function (data) {
          window.location.reload();
        }
      });
    } else {
      return;
    }
  });

  $usernameInput.on('keyup', function(event) {
    $('.validation-error').text('');
  });

  $urlInput.on('keyup', function(event) {
    $('.validation-error').text('');
    $('.success-message').text('');
  });

})();
