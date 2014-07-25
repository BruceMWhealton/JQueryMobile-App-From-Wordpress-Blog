function listSemWebPosts(data) {
  var output = '<form class="ui-filterable"><input id="searchposts" data-type="search"></form>';

  output += '<ul data-role="listview" data-filter="true" data-input="#searchposts">';
$.each(data.posts, function(key, val) {

	var tempDiv = document.createElement("tempDiv");
    tempDiv.innerHTML = val.excerpt;
    $("a", tempDiv).remove();
    var excerpt = tempDiv.innerHTML;

   	var tempDiv = document.createElement("tempDiv");
    tempDiv.innerHTML = val.title;
    $("a", tempDiv).remove();
    var title = tempDiv.innerHTML;

    output += '<li>';
    output += '<a href="#singlePost" onclick = "showPost(' + val.id + ')">';
    output += (val.thumbnail) ?
      '<img src="' + val.thumbnail + '" alt="' + val.title_plain + '">':
      '<img src="images/logo.png" alt="Future Wave Logo">';
    output += '<h3>' + val.title_plain + "</h3>";
    output += '<p>' + excerpt + "</p>";
    output += '</a>';
    output += '</li>';
  }); //go through each post
	output +="</ul>";
	$('#semWebPostList').html(output);
} // listSemWebPosts

function showPost(id) {
	$.getJSON('http://futurewavewebdevelopment.com/wp/?json=get_post&post_id=' + id + '&callback=?', function(data) {
		var output = '<h3>' + data.post.title + '</h3>';
		output += data.post.content;
		$('#singlepost').html(output);
	});
}

function listTechNewsPosts(data) {
	var output = '<form class="ui-filterable"><input id="searchposts" data-type="search"></form>';
	output += '<ul data-role="listview" data-filter="true" data-input="#searchposts" data-inset="true">';
	$.each(data.posts, function(key, val) {

	var tempDiv = document.createElement("tempDiv");
    tempDiv.innerHTML = val.excerpt;
    $("a", tempDiv).remove();
    var excerpt = tempDiv.innerHTML;

		output += '<li>';
    	output += '<a href="#singlePost" onclick = "showPost(' + val.id + ')">';
		output += '<h3>' + val.title_plain + '</h3>';
		output += '<p>' + excerpt + '</p>';
		output += '</a>';
		output += '</li>';
	}); // go through each post
	output +='</ul>';
	$('#techNewsPostList').html(output);
} // listTechNewsPosts

function listAndroidNewsPosts(data) {
	var output = '<form class="ui-filterable"><input id="searchposts" data-type="search"></form>';
	output += '<ul data-role="listview" data-filter="true" data-input="#searchposts" data-inset="true">';
	$.each(data.posts, function(key, val) {

	var tempDiv = document.createElement("tempDiv");
    tempDiv.innerHTML = val.excerpt;
    $("a", tempDiv).remove();
    var excerpt = tempDiv.innerHTML;

		output += '<li>';
		output += '<a href="#singlePost" onclick = "showPost(' + val.id  + ')">';
		output += '<h3>' + val.title_plain + '</h3>';
		output += '<p>' + excerpt + '</p>';
		output += '</a>';
		output += '</li>';
	}); // go through each post
	output +='</ul>';
	$('#androidNewsPostList').html(output);
} // listComputingPosts

function listSwEngAndWebDevPosts(data) {
	var output = '<form class="ui-filterable"><input id="searchposts" data-type="search"></form>';
	output += '<ul data-role="listview" data-filter="true" data-input="#searchposts" data-inset="true">';

	$.each(data.posts, function(key, val) {

	var tempDiv = document.createElement("tempDiv");
    	tempDiv.innerHTML = val.excerpt;
    	$("a", tempDiv).remove();
    	var excerpt = tempDiv.innerHTML;

		output += '<li>';
		output += '<a href="#singlePost" onclick = "showPost(' + val.id  + ')">';
		output += '<h3>' + val.title_plain + '</h3>';
		output += '<p>' + excerpt + '</p>';
		output += '</a>';
		output += '</li>';
	}); // go through each post
	output +='</ul>';

	$('#swEngAndWebDevPostList').html(output);
} // listSwAndWebDevPosts

function listWebDevDesInfoPosts(data) {
	var output = '<form class="ui-filterable"><input id="searchposts" data-type="search"></form>';
	output += '<ul data-role="listview" data-filter="true" data-input="#searchposts" data-inset="true">';
	$.each(data.posts, function(key, val) {
		output += '<li>';
		output += '<a href="#singlePost" onclick = "showPost(' + val.id  + ')">';
		output += '<h3>' + val.title + '</h3>';
		output += '<p>' + val.excerpt + '</p>';
		output += '</a>';
		output += '</li>';
	}); // go through each post
	output +='</ul>';
	$('#webDevDesInfoPostList').html(output);
} // listWebDevDesInfoPosts