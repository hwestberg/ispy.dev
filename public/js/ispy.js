"use strict";

(function(){
	var app = angular.module("ispyModule", []);

	// declaring controller and resetting scope
	app.controller("IspyController", ["$scope", function($scope){
			
			var puzzles = [];
			var puzzleTitle = "";
	
	// ajax request to pull puzzle data from external json file
			$.get("/js/ispyPuzzles.json").done(function(data){
				console.log("Ajax complete!");
				$scope.puzzles = data;
				console.log($scope.puzzles);
	
	// updating scope after ajax request is completed
				$scope.$apply();

	// getting puzzle pics from json file			
				
				var puzzlePics = "";

				var puzzleRiddle = "";

			 	$scope.getPuzzlePics = function(){
					$.each($scope.puzzles,function(i, puzzle){
						$.each(puzzle.images,  function(i){
					 		puzzlePics += "<img src=" + puzzle.images[i].src + ">";
						});
					});
					console.log("puzzlepic called");
					console.log(puzzlePics);
					$(".puzzle-container").html(puzzlePics);
				}

				$scope.getPuzzleRiddle = function(){
					$.each($scope.puzzles,function(i, puzzle){
					 		puzzleRiddle = "<p>" + puzzle.riddle + "</p>";	
					});
					console.log("puzzleriddle called");
					console.log(puzzleRiddle);
					$(".puzzle-riddle-container").html(puzzleRiddle);
				}
				

				}).fail(function(d, textstatus, error){
					console.log("There was an error loading your datas!" + textstatus + error);
			});
	}]);
})();
