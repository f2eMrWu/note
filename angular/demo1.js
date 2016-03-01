function PhoneListCtrl($scope){

$scope.phones = [
 {"name":"Nokia", "Price":100},
 {"name":"MI", "Price":1000},
 {"name":"Apple", "Price":5100}
]

$scope.contacts = [
	{
		type:'phone',
		value:1
	},
	{
		type:'email',
		value: 1234
	},
	{
		type:'choose'
	}
];
$scope.name = 12;
$scope.greet= function(){
	alert($scope.name);
}
$scope.clearContact = function(contact){
	contact.type = '';
	contact.value = 'hehe'

}

$scope.removeContact = function(contact){
	var index = $scope.contacts.indexOf(contact);
	$scope.contacts.splice(index,1);
}

$scope.addContact = function(){
	$scope.contacts.push({})
}

}