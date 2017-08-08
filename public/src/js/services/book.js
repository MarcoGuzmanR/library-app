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

    return {
      getAllBooks: getAllBooks
    };

  }
]);
