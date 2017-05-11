(function(angular) {
	'use strict';
	angular.module("fzys.controller.main", ['fzys.services.main'])
		   .controller("fzysController", [
		   	"$scope",
		   	"$routeParams",
		   	"$route",
		   	"fzysService",
		   	function($scope, $routeParams, $route,fzysService) {
				//文本框数据
				$scope.text = "";
				//初始化数据
				$scope.todosFzys = fzysService.get();
				$scope.add = function() {
					if ($scope.text == "") {
						return;
					}
					fzysService.add($scope.text);
					console.log($scope.todosFzys);
					$scope.text = "";
				}
				$scope.delete = fzysService.delete;
				$scope.clear = function(){
					var newTodosFzys = fzysService.clearCompleted();
					$scope.todosFzys = newTodosFzys;
				}
				$scope.existCompleted = fzysService.existCompleted;
				$scope.currentEditingId = -1;
				$scope.editing = function(id) {
					$scope.currentEditingId = id;
				}
				$scope.save = function() {
					$scope.currentEditingId = -1;
				}
				$scope.toggle = fzysService.toggle;
					// 状态筛选
				$scope.selector = {}; // {} {completed:true} {completed:false}
				var status = $routeParams.status;
				console.log($routeParams.status);
				switch (status) {
					case 'active':
						$scope.selector = {
							completed: false
						};
						break;
					case 'completed':
						$scope.selector = {
							completed: true
						};
						break;
					default:
						$route.updateParams({
							status: ""
						});
						$scope.selector = {};
						break;
				}

				$scope.equalCompare = function(source, target) {
					// console.log(source);
					// console.log(target);
					// return false;
					return source === target;
				};
				$scope.toggleAll = fzysService.toggleAll;
				$scope.toggle = function() {
					fzysService.save();
				}
			}]);
})(angular)