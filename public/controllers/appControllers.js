angular.module("app.controllers",[])
.controller("homeController", function($scope, $location){
  $scope.name = "kibu";
  $scope.products = [
                    { name: "Apples", category: "Fruit", price: 1.20, expiry: 10 },
                    { name: "Bananas", category: "Fruit", price: 2.42, expiry: 7 },
                    { name: "Pears", category: "Fruit", price: 2.02, expiry: 6 }
                    ];

    $scope.slides = [
            {image: './img/clubimg.jpg', description: 'Image 00'},
            {image: './img/clubimg2.jpg', description: 'Image 01'},
            {image: './img/clubimg.jpg', description: 'Image 02'},
            {image: './img/clubimg2.jpg', description: 'Image 03'},
            {image: './img/clubimg.jpg', description: 'Image 04'}
        ];                  

    $scope.checkActive = function(activePath){
        return activePath === $location.path();
      }; 
    })
.controller('startController', function($scope){
  $scope.events = [
            {
              image: 'https://cdn.thinglink.me/api/image/646965349278810113/1240/10/scaletowidth',
              name:"DJ AVICCI",
              time:"FRIDAY, 21ST AUGUST 10.30PM",
              description:"HipHop & RnB"
            },
            {
              image: 'https://d23sy9fe9womrt.cloudfront.net/8/25318_1_idris-elba-remixes-skeptas-shutdown-_ban.jpg',
              name:"DJ KIBU",
              time:"FRIDAY, 21ST OCTOBER 10.30PM",
              description:"Afro beat, HipHop & RnB"
            },
            {image: '../img/davidguetta.jpg', 
              name:"DAVID GUETTA",
              time:"FRIDAY, 21ST NOVEMBER 10.30PM",
              description:"Dance hall, HipHop & RnB"}
            // },
            // {image: 'http://myy.haaga-helia.fi/~a1401050/homeSlide/tiesto.png', 
            //   name:"TIESTO",
            //   time:"FRIDAY, 21ST AUGUST 10.30PM",
            //   description:"HipHop & RnB"
            // },
            // {
            //   image: 'http://myy.haaga-helia.fi/~a1401050/homeSlide/calvinharris.jpg', 
            //   name:"CALVIN HARRIS",
            //   time:"FRIDAY, 21ST AUGUST 10.30PM",
            //   description:"HipHop & RnB"
            // },
            // {
            //   image: 'http://myy.haaga-helia.fi/~a1401050/homeSlide/calvinharris.jpg',
            //   name:"DJ AVICCI",
            //   time:"FRIDAY, 21ST AUGUST 10.30PM",
            //   description:"HipHop & RnB"
            // }
        ];  
});