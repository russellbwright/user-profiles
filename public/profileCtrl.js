angular.module('userProfiles')
.controller('profileCtrl', function( $scope, friendService ) {
	friendService.getFriends().then(function( response ) {
		console.log(response)
				 $scope.currentUser = response.data.currentUser;
		  		 $scope.friends = response.data.friends;
		  });// FIX ME - assign values to $scope.currentUser and $scope.friends
});