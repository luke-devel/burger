// creates function to render index.html
const render = function () {

	return `<div class=container>
	<div class="row">
		<div class="col-md-12">
			<img src="/assets/img/burger.png" class="img-responsive center-block" id="burger-img" alt="burger">
		</div>
    </div>`

};

// exports render function with index.html
exports.render = render;
