angular.module('Category', [] )
  .service( 'categoryService', [ '$q', '$http', function( $q, $http ){

    var getAllCategories = function(){
      var defer = $q.defer();
      var request = $http.get( '/categories' );

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
      getAllCategories: getAllCategories
    };

  }
]);
