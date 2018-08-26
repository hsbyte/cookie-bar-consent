$(function() {
	'use strict';

  var getCookie = function() {
    return document.cookie.replace(/(?:(?:^|.*;\s*)cookieReady\s*\=\s*([^;]*).*$)|^.*$/, '$1');
  };

  var setCookie = function() {
    document.cookie = 'cookieReady=1;';
  };

	/* render cookiebar */
	var cookiebarRender = function() {
		$.ajax({
      type: 'GET',
      url: 'cookiebar.dat',
      dataType: 'json',
			success: function(data) {
				$.each(data, function(index, item) {
					$.each(item.lang, function(i, lang) {

						var render = function(n) {
							var $consent = $('.cookiebar--consent');

							$consent.html(data[n].consent);
							$consent.next().html(data[n].learn);
							$consent.next().attr("href", data[n].url);
							$('.cookiebar').show();
						}

						if (navigator.language === lang) {
							render(index);
							next();
						}
						render(0);
					});
				});
			},
			error: function(err)  {
				console.log('error:', err);
			}
		});
	};
	if (getCookie() === '')
		cookiebarRender();

	/* hide cookiebar */
	$('.cookiebar__exit').on('click', function(e) {
		e.preventDefault();
		$('.cookiebar').remove();
		setCookie();
	});
})