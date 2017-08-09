angular.module('Book', [] )
  .service( 'bookService', [ '$q', '$http', function( $q, $http ){

    var getAllBooks = function(){
      var defer = $q.defer();
      var request = $http.get( '/books' );

      request.then(
        function( data ){
          defer.resolve( data.data );
        },
        function( error ){
          defer.reject( error );
        }
      );

      return defer.promise;
    };

    var getBook = function( id ){
      var defer = $q.defer();
      var request = $http.get( '/book/' + id );

      request.then(
        function( data ){
          defer.resolve( data.data );
        },
        function( error ){
          defer.reject( error );
        }
      );

      return defer.promise;
    };

    var addBook = function( book ){
      var defer = $q.defer();
      var request = $http.post( '/books', book );

      request.then(
        function( data ){
          defer.resolve( data.data );
        },
        function( error ){
          defer.reject( error );
        }
      );

      return defer.promise;
    };

    var updateBook = function( book ){
      var defer = $q.defer();
      var request = $http.put( '/book/' + book.id, book );

      request.then(
        function( data ){
          defer.resolve( data.data );
        },
        function( error ){
          defer.reject( error );
        }
      );

      return defer.promise;
    };

    var deleteBook = function( id ){
      var defer = $q.defer();
      var request = $http.delete( '/book/' + id );

      request.then(
        function( data ){
          defer.resolve( data.data );
        },
        function( error ){
          defer.reject( error );
        }
      );

      return defer.promise;
    };

    return {
      getAllBooks: getAllBooks,
      getBook: getBook,
      addBook: addBook,
      updateBook: updateBook,
      deleteBook: deleteBook
    };

  }
]);
