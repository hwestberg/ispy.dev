"use strict";
(function(){
	var app = angular.module("ispyModule", []);
	// declaring controller and resetting scope
	app.controller("IspyController", ["$scope", function($scope){		
			$scope.riddles = [];
			$scope.images = [];
			$scope.title = "";
	// ajax request to pull puzzle data from external json file
			$.get("/js/ispyPuzzles.json").done(function(data){
				console.log("Ajax complete!");
				$scope.puzzles = data;
				console.log($scope.puzzles);
	// updating scope after ajax request is completed
				$scope.$apply();
	// getting puzzle pics & riddles from json file			
			 	$scope.getPuzzle = function(){
					$.each($scope.puzzles,function(i, puzzle){
						console.log("puzzle title is" + $scope.puzzleTitle.title);	
	// selecting only images and riddles from user-selected puzzle
						if (puzzle.title == $scope.puzzleTitle.title) {	
							$scope.riddles = puzzle.riddle;
							console.log(puzzle.riddle);
							$scope.images = puzzle.images;
							console.log(puzzle.images);
						}	
					});
				}

				$scope.isClicked = function(event){
					if ($(event.target).hasClass("clickable")){
						$(event.target).addClass("clicked");
						
					}
				}	

				}).fail(function(d, textstatus, error){
					console.log("There was an error loading your datas!" + textstatus + error);
			});
	}]);
})();

