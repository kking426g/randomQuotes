$(function(){
// Document is ready
var color = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
var currentQuote = '', currentAuthor = '';
function getQuote() {
	$.ajax({
		headers: {
			"X-Mashape-Key": "bjpm4tW4cumsh4KXY8gddR9Tb3szp1zQ3FDjsnZeahlEx9Vm18",
			Accept: "application/json",
			"Content-Type": "application/x-www-form-urlencoded"
		},
		url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',
		success: function(response){
			var r = JSON.parse(response);
			currentQuote = r.quote;
			currentAuthor = r.author;
			var c = Math.floor((Math.random() * color.length) + 0);
			$("#quote").text(r.quote);
			$("#author").text(r.author);
			$("html body").animate({
        		backgroundColor: color[c],
        		color: color[c]
      		}, 1000);
      		$("html body").css('background-color', color[c]);
		}

	})
}

	$("#change").on('click', getQuote);
});
