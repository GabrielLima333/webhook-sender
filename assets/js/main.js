$(function() {
	$('#send').click(function() {
		var url = $('#url').val();
		var avatar_url = $('#avatar_url').val();
		var username = $('#username').val();
		var content = $('#content').val();

		if (url == null || url == "", content == null || content == "") {
			alert("Please fill the all fields!");
			return false;
		}

		$.post(url, {
			"avatar_url": avatar_url,
			"username": username,
			"content": content
		});
	});
});