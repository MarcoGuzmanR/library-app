angular.module('firstPage', [] )
  .controller( 'mainCtrl', [ '$scope', '$uibModal', 'bookService', function( $scope, $uibModal, bookService ){

    bookService.getAllBooks().then(function( data ){
      $scope.books = data.books;
    });

    $scope.addBookModal = function(){
      $scope.newBook = {};

      $uibModal.open({
        templateUrl: 'views/addModal.html',
        controller: 'modalCtrl',
        scope: $scope
      });
    };

    $scope.editBookModal = function( id ){
      $scope.bookId = id;

      $uibModal.open({
        templateUrl: 'views/editModal.html',
        controller: 'modalCtrl',
        scope: $scope
      });
    };

    $scope.deleteBookModal = function( id ){
      $scope.bookId = id;

      $uibModal.open({
        templateUrl: 'views/deleteModal.html',
        controller: 'modalCtrl',
        scope: $scope
      });
    };

  }])

  .controller( 'modalCtrl', [ '$scope', 'bookService',  function( $scope, bookService ){

    $scope.popup = {
      opened: false
    };

    if ( $scope.bookId ){
      bookService.getBook( $scope.bookId ).then(function( data ){
        $scope.selectedBook = data.book;
      });
    }

    $scope.addBook = function(){
      bookService.addBook( $scope.newBook ).then(function( data ){
        if ( data ){
          window.location.reload();
        }
      });
    };

    $scope.updateBook = function(){
      bookService.updateBook( $scope.selectedBook ).then(function( data ){
        if ( data ){
          window.location.reload();
        }
      });
    };

    $scope.deleteBook = function(){
      bookService.deleteBook( $scope.selectedBook.id ).then(function( data ){
        $scope.books = data.books;
      });
    };

    $scope.dateOptions = {
      formatYear: 'yy',
      maxDate: new Date(2020, 5, 22),
      minDate: new Date(),
      startingDay: 1
    };

    $scope.openCalendar = function() {
      $scope.popup.opened = true;
    };

  }]);
