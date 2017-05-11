(function(angular) {
	'use strict';
	// Your starting point. Enjoy the ride!
	var app = angular.module("fzys", ['ngRoute','fzys.controller.main'])
		.config(['$routeProvider', function($routeProvider) {
			$routeProvider
			// /asdasda {status:asdasda}
				.when('/:status?', {
					controller: 'fzysController',
					templateUrl: 'fzys_tmpl'
				})
				.otherwise({
					redirectTo: '/'
				});
		}])
		// .controller("fzysController", ["$scope", "$routeParams","$route",function($scope, $routeParams,$route) {
		// 	function getId() {
		// 		var id = Math.random();
		// 		for (var i = 0; i < $scope.todosFzys.length; i++) {
		// 			if ($scope.todosFzys[i].id === id) {
		// 				id = getId();
		// 				break;
		// 			}
		// 		}
		// 		return id;
		// 	}
		// 	//文本框数据
		// 	$scope.text = "";
		// 	//初始化数据
		// 	$scope.todosFzys = [{
		// 		id: 0.3,
		// 		text: "吃饭",
		// 		completed: false
		// 	}, {
		// 		id: 0.4,
		// 		text: "睡觉",
		// 		completed: false
		// 	}, {
		// 		id: 0.5,
		// 		text: "打保罗",
		// 		completed: true
		// 	}]

		// 	$scope.add = function() {
		// 		if ($scope.text == "") {
		// 			return;
		// 		}
		// 		$scope.todosFzys.push({
		// 			id: getId(),
		// 			text: $scope.text,
		// 			completed: false
		// 		})
		// 		console.log( $scope.todosFzys );
		// 		$scope.text = "";
		// 	}
		// 	$scope.delete = function(id) {
		// 		for (var i = 0; i < $scope.todosFzys.length; i++) {
		// 			if ($scope.todosFzys[i].id === id) {
		// 				$scope.todosFzys.splice(i, 1);
		// 				break;
		// 			}
		// 		}
		// 	}
		// 	$scope.clear = function() {
		// 		var result = [];
		// 		for (var i = 0; i < $scope.todosFzys.length; i++) {
		// 			if (!$scope.todosFzys[i].completed) {
		// 				result.push($scope.todosFzys[i]);
		// 			}
		// 		}
		// 		$scope.todosFzys = result;
		// 	}
		// 	$scope.existCompleted = function() {
		// 		for (var i = 0; i < $scope.todosFzys.length; i++) {
		// 			if ($scope.todosFzys[i].completed) {
		// 				return true;
		// 			}
		// 		}
		// 		return false;
		// 	}
		// 	$scope.currentEditingId = -1;
		// 	$scope.editing = function(id) {
		// 		$scope.currentEditingId = id;
		// 	}
		// 	$scope.save = function() {
		// 		$scope.currentEditingId = -1;
		// 	}
		// 	var now = true;
		// 	$scope.toggle = function() {
		// 			for (var i = 0; i < $scope.todosFzys.length; i++) {
		// 				scope.todosFzys.completed = now;
		// 				now = !now;
		// 			}
		// 		}
		// 		// 状态筛选
		// 	$scope.selector = {}; // {} {completed:true} {completed:false}
		// 	var status = $routeParams.status;
		// 	console.log($routeParams.status);
		// 		switch (status) {
		// 			case 'active':
		// 				$scope.selector = {
		// 					completed: false
		// 				};
		// 				break;
		// 			case 'completed':
		// 				$scope.selector = {
		// 					completed: true
		// 				};
		// 				break;
		// 			default:
		// 				$route.updateParams({status:""});
		// 				$scope.selector = {};
		// 				break;
		// 		}

		// 	$scope.equalCompare = function(source, target) {
		// 		// console.log(source);
		// 		// console.log(target);
		// 		// return false;
		// 		return source === target;
		// 	};
		// }]);
})(angular);