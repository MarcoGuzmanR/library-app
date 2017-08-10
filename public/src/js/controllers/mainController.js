angular.module('mainPage', [])
  .controller( 'mainCtrl', [ '$scope', function( $scope ){
    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    $scope.slides = [
      {
        id: 0,
        text: 'You can find tons of books',
        image: '/src/images/hero-image-slider-1.png'
      },
      {
        id: 1,
        text: 'Awesome meeting rooms!',
        image: '/src/images/hero-image-slider-2.jpg'
      },
      {
        id: 2,
        text: 'Children and all family love being here',
        image: '/src/images/hero-image-slider-3.jpg'
      }
    ];
  }
]);
