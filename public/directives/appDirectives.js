angular.module("app.directives",[])
.directive('unorderedList', function (){
  return function (scope, element, attrs){
    var data = scope[attrs['unorderedList']];
    var propertyExpression = attrs['listProperty'];

    if(angular.isArray(data)){
      var listElem = angular.element("<ul>").appendTo(element);

      for (var i = 0; i < data.length; i++) {
        (function (){
          var index = i;
          var itemElement =angular.element("<li>").appendTo(listElem);
          var watcherFunction = function (watchScope){
            return watchScope.$eval(propertyExpression, data[index]);
          }

          scope.$watch(watcherFunction, function (newValue, oldValue){
            itemElement.text(newValue);
          });
        }());
      }
    }
  }
})
.directive("checkPosition" , function ($window){
  return function (scope, element, attrs){
   angular.element($window).bind("scroll", function() {
    alert("i am scrolled");

    scope.$apply();
   });
  };
});