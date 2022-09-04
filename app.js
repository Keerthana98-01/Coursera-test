(function () {
  'use strict'
  angular.module('LunchCheck',[])
  .controller('LunchCheckController',LunchCheckController);

  function LunchCheckController($scope){
    $scope.lunch_items="";
    $scope.message="";
    $scope.count_items=function (){
    let count=0;

if($scope.lunch_items==" " || ($scope.lunch_items=="")){
  count=0;
}else{
    let items=$scope.lunch_items.split(",");
    count=items.length;
}

      if($scope.message==" " || ($scope.message=="") || (count==0)){
        $scope.message="Please enter data first";

      }
      else if(count>=1 && count<=3){
        $scope.message="Enjoy!";

      }
      else if(count>3){
        $scope.message="Too much!";

      }
    }

  }
})();
