var app = angular.module('myapp', [])

app.controller('myCtrl', function($scope){
	var cards = [
		{
			img: "src/img/1.jpg",
			company: "Nike",
			type: "Men Runner Shoes",
			price: "$30"
		},
		{
			img: "src/img/2.jpg",
			company: "Nike",
			type: "Men Runner Shoes",
			price: "$45"
		},
		{
			img: "src/img/3.jpg",
			company: "Nike",
			type: "Men Runner Shoes",
			price: "$60"
		},
		{
			img: "src/img/4.jpg",
			company: "Nike",
			type: "Men Runner Shoes",
			price: "$85"
		},
		{
			img: "src/img/5.jpg",
			company: "Nike",
			type: "Men Runner Shoes",
			price: "$25"
		},
		{
			img: "src/img/6.jpg",
			company: "Nike",
			type: "Men Runner Shoes",
			price: "$40"
		},
		{
			img: "src/img/7.jpg",
			company: "Nike",
			type: "Men Runner Shoes",
			price: "$55"
		},
		{
			img: "src/img/8.jpg",
			company: "Nike",
			type: "Men Runner Shoes",
			price: "$123"
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