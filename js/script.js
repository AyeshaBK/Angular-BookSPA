var bookApp = angular.module('bookApp', ['ngRoute', 'xeditable']);

bookApp.config(function($routeProvider) {
  $routeProvider

    .when('/', {
    templateUrl: 'home.html',
    controller: 'mainController'
  })

  .when('/about', {
    templateUrl: 'about.html',
    controller: 'aboutController'
  })

  .when('/myBooks', {
    templateUrl: 'myBooks.html',
    controller: 'myBooksController'
  })

  .when('/bookManager', {
    templateUrl: 'bookManager.html',
    controller: 'bkManagerController'
  })


  .when('/contact', {
    templateUrl: 'contact.html',
    controller: 'contactController'
  })
});

<!------------------------------------------------------- MAIN CONTROLLER ------------------------------------------------------------>
bookApp.controller('mainController', function($scope) {
  $scope.message = "Bibliophile Home";
});
<!------------------------------------------------------- MAIN CONTROLLER ------------------------------------------------------------>


<!------------------------------------------------------- ABOUT CONTROLLER ----------------------------------------------------------->
bookApp.controller('aboutController', function($scope) {
  $scope.message = "About Biliophile";
});
<!------------------------------------------------------- ABOUT CONTROLLER ----------------------------------------------------------->


<!------------------------------------------------------- ABOUT CONTROLLER ----------------------------------------------------------->
bookApp.controller('myBooksController', function($scope) {
  $scope.message = "My Books";
});
<!------------------------------------------------------- ABOUT CONTROLLER ----------------------------------------------------------->


<!--------------------------------------------------- BOOK MANAGER CONTROLLER -------------------------------------------------------->
bookApp.controller('bkManagerController', function($scope) {

  $scope.message = "Book Manager";
  $scope.library = [{
    'title': 'Lair of Dreams',
    'author': 'Libba Bray',
    'description': '',
    'isbn': 0316126047
  }, {
    'title': 'The Girl in the Spiders Web',
    'author': 'David Lagercrantz, Stieg Larsson ',
    'description': '',
    'isbn': 0385354282
  }, {
    'title': 'The Night Sister',
    'author': 'Jennifer McMahon',
    'description': '',
    'isbn': 0385538510
  }, {
    'title': 'The Creeping',
    'author': 'Alexandra Sirowy',
    'description': '',
    'isbn': 1481418866
  }, {
    'title': 'The secrets of Lake Road',
    'author': '',
    'description': '',
    'isbn': ''
  }, ];

  $scope.addRow = function() {
    $scope.library.push({
      'title': $scope.title,
      'author': $scope.author,
      'description': $scope.description,
      'isbn': $scope.isbn
    });
    $scope.title = '';
    $scope.author = '';
    $scope.description = '';
    $scope.isbn = '';
  };
  $scope.removeRow = function(title) {
    var index = -1;
    var comArr = eval($scope.library);
    for (var i = 0; i < comArr.length; i++) {
      if (comArr[i].title === title) {
        index = i;
        break;
      }
    }
    if (index === -1) {
      alert("Something gone wrong");
    }
    $scope.library.splice(index, 1);
  };

});
<!--------------------------------------------------- BOOK MANAGER CONTROLLER -------------------------------------------------------->


<!------------------------------------------------------ CONTACT CONTROLLER ----------------------------------------------------------->
bookApp.controller('contactController', function($scope) {
  $scope.message = "Contact";
});
<!------------------------------------------------------ CONTACT CONTROLLER ----------------------------------------------------------->