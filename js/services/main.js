( function(angular){
	'use strict';
	angular.module('fzys.services.main',[])
		   .service('fzysService',['$window',function($window){
		   		 var storage = $window.localStorage;
      			 var todosFzys = storage['my_todo_list'] ? JSON.parse(storage['my_todo_list']) : [];
				function getId() {
					var id = Math.random();
					for (var i = 0; i < todosFzys.length; i++) {
						if (todosFzys[i].id === id) {
							id = getId();
							break;
						}
					}
					return id;
				}
				this.add = function(text) {
					todosFzys.push({
						id: getId(),
						text: text,
						completed: false
					});
					this.save();
				}
				this.get = function() {
					return todosFzys;
				};

				this.delete = function(id) {
					for (var i = 0; i < todosFzys.length; i++) {
						if (todosFzys[i].id === id) {
							todosFzys.splice(i, 1);
							break;
						}
					}
					this.save();
				};
				this.clearCompleted = function( id ) {
					var result = [];
					for (var i = 0; i < todosFzys.length; i++) {
						if (!todosFzys[i].completed) {
							result.push(todosFzys[i]);
						}
					}
					todosFzys = result;
					this.save();
					return todosFzys;
				}
				this.existCompleted = function() {
					for (var i = 0; i < todosFzys.length; i++) {
						if (todosFzys[i].completed) {						
							return true;
						}
					}
					return false;
				}
				this.update = function(id,target) {
					this.save();
				}
				this.save = function(){
					storage['my_todo_list'] = JSON.stringify(todosFzys);
				}
		      var now = true;
		      this.toggleAll = function() {
		        for (var i = 0; i < todosFzys.length; i++) {
		          todosFzys[i].completed = now;
		        }
		        now = !now;
		        this.save();
		      };
		   }]
		   )


})(angular)