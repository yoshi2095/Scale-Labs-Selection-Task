var app = angular.module('myapp', [])

app.controller('myCtrl', function($scope){
	var cards = [
		{
			img: "src/img/1.jpg",
			company: "Nike",
			type: "Men Runner Shoes",
			price: "$32"
		},
		{
			img: "src/img/1.jpg",
			company: "Nike",
			type: "Men Runner Shoes",
			price: "$32"
		},
		{
			img: "src/img/1.jpg",
			company: "Nike",
			type: "Men Runner Shoes",
			price: "$32"
		},
		{
			img: "src/img/1.jpg",
			company: "Nike",
			type: "Men Runner Shoes",
			price: "$32"
		},
		{
			img: "src/img/1.jpg",
			company: "Nike",
			type: "Men Runner Shoes",
			price: "$32"
		},
		{
			img: "src/img/1.jpg",
			company: "Nike",
			type: "Men Runner Shoes",
			price: "$32"
		},
		{
			img: "src/img/1.jpg",
			company: "Nike",
			type: "Men Runner Shoes",
			price: "$32"
		},
		{
			img: "src/img/1.jpg",
			company: "Nike",
			type: "Men Runner Shoes",
			price: "$32"
		}
	];

	$scope.cards = cards;

	console.log(cards);

	$scope.$watch('$viewContentLoaded', function(){
		var texts = ["Merchandising?", "Pricing?", "Buying?"];
		var l = texts.length;
		for(var i = 0; i<l; i++){
			var content = texts[i];
			//alert(content);
			$scope.type = "";
			var j = 0;

			var timer = setInterval(function(){
				if(j<content.length){
					$scope.type+=content[j];
				}
				j++;
				$scope.$apply();
			}, 500);
		}
	});



});