"use strict";

(function(){
	var app = angular.module("ispyModule", []);

	// declaring controller and resetting scope
	app.controller("IspyController", ["$scope", function($scope){
			
			var puzzles = [];
	
	// ajax request to pull puzzle data from external json file
			$.get("/js/ispyPuzzles.json").done(function(data){
				console.log("Ajax complete!");
				$scope.puzzles = data;
				console.log($scope.puzzles);
	
	// updating scope after ajax request is completed
				$scope.$apply();

	// getting puzzle pics & riddels from json file			
				
				var puzzlePics = "";

				var puzzleRiddle = "";

			 	$scope.getPuzzle = function(){
					puzzlePics= "";
					$.each($scope.puzzles,function(i, puzzle){
						console.log($scope.puzzleTitle.title);
						puzzleRiddle = "<p>" + puzzle.riddle + "</p>";
						if (puzzle.title == $scope.puzzleTitle.title) {
							$.each(puzzle.images,  function(i){
	// adding clickable class on clickable puzzle items
						 		if (puzzle.images[i].clickable == true){
						 			console.log(puzzle.images[i].name + " clickable is " + puzzle.images[i].clickable);
						 			puzzlePics += "<img src=" + puzzle.images[i].src + " class='clickable'>";
						 			
						 		}else {
						 			puzzlePics += "<img src=" + puzzle.images[i].src + ">";
						 			console.log(puzzle.images[i].name + " clickable is " + puzzle.images[i].clickable);
						 		}
							});
							$(".puzzle-riddle-container").html(puzzleRiddle);
						}	
					});
					console.log("puzzlepic called");
					console.log(puzzlePics);
					$(".puzzle-container").html(puzzlePics);
				}

				}).fail(function(d, textstatus, error){
					console.log("There was an error loading your datas!" + textstatus + error);
			});
	}]);
})();
