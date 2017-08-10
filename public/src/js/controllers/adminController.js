angular.module('adminPage', [] )
  .controller( 'adminCtrl', [ '$scope', '$uibModal', 'bookService', function( $scope, $uibModal, bookService ){

    $scope.selectedCategory = {};

    bookService.getAllBooks().then(function( data ){
      $scope.allBooks     = data.books;
      $scope.booksPerPage = $scope.allBooks;

      $scope.totalItems = $scope.booksPerPage.length;
      $scope.currentPage = 1;
      $scope.itemsPerPage = 10;
    });

    $scope.addBookModal = function(){
      $scope.newBook = {
          publishedDate: Date.now()
      };

      $scope.selectedCategory.id = 1;

      var modalInstance = $uibModal.open({
        templateUrl: 'views/addModal.html',
        controller: 'modalCtrl',
        scope: $scope
      });
    };

    $scope.editBookModal = function( book ){
      $scope.bookId = book.id;
      $scope.selectedCategory.id = book.category_id;

      var modalInstance = $uibModal.open({
        templateUrl: 'views/editModal.html',
        controller: 'modalCtrl',
        scope: $scope
      });
    };

    $scope.statusBookModal = function( book ){
      $scope.bookId = book.id;
      $scope.selectedCategory.id = book.category_id;

      var modalInstance = $uibModal.open({
        templateUrl: 'views/statusModal.html',
        controller: 'modalCtrl',
        scope: $scope
      });
    };

    $scope.deleteBookModal = function( id ){
      $scope.bookId = id;

      var modalInstance = $uibModal.open({
        templateUrl: 'views/deleteModal.html',
        controller: 'modalCtrl',
        scope: $scope
      });
    };

    $scope.setBooksForPage = function(){
      $scope.booksPerPage = $scope.allBooks.slice( ( $scope.currentPage - 1 ) * $scope.itemsPerPage, $scope.currentPage * $scope.itemsPerPage );
    };

  }])

  .controller( 'modalCtrl', [ '$scope', '$uibModalInstance', 'bookService', 'categoryService', function( $scope, $uibModalInstance, bookService, categoryService ){

    categoryService.getAllCategories().then(function( data ){
      $scope.categories = data.categories;
    });

    $scope.popup = {
      opened: false
    };

    if ( $scope.bookId ){
      bookService.getBook( $scope.bookId ).then(function( data ){
        $scope.selectedBook = data.book;
      });
    }

    $scope.addBook = function(){
      $scope.newBook.category_id = $scope.selectedCategory.id;
      $uibModalInstance.close();

      bookService.addBook( $scope.newBook ).then(function( data ){
        if ( data ){
          window.location.reload();
        }
      });
    };

    $scope.updateBook = function(){
      $scope.selectedBook.category_id = $scope.selectedCategory.id;
      $uibModalInstance.close();

      bookService.updateBook( $scope.selectedBook ).then(function( data ){
        if ( data ){
          window.location.reload();
        }
      });
    };

    $scope.lendOrUnlendBook = function(){
      $scope.selectedBook.user = $scope.selectedBook.available ? $scope.selectedBook.user : '';
      $scope.selectedBook.available = !$scope.selectedBook.available;
      $uibModalInstance.close();

      bookService.updateBook( $scope.selectedBook ).then(function( data ){
        if ( data ){
          window.location.reload();
        }
      });
    };

    $scope.deleteBook = function(){
      $uibModalInstance.close();
      bookService.deleteBook( $scope.selectedBook.id ).then(function( data ){
        window.location.reload();
      });
    };

    $scope.cancel = function(){
      $uibModalInstance.close();
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
