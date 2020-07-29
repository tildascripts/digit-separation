$(document).ready(function() {
	$("input[type='text']").on("input", function(e) {
		e.target.value = String(e.target.value.replace(/\s/g, "")).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ");
	});

	//это не обязательно
	window.tcalc__changeVal = function(a, e, t) {
		e.html(t.toLocaleString("ru-RU"));
		a.find(".t-calc__hiddeninput").val(t)
	}
});