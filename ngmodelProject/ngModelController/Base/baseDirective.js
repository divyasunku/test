(function () {
    "use strict";
    angular
        .module("baseModule", [])
        .directive("smartTag", smartTag)
    // .directive("timeDuration", TimeDurationDirective);
    function smartTag() {
        var directive = {
            restrict: "E",
            require: "ngModel",
            template: "Name <input type='text' ng-model='directiveModel' /> <button ng-click='checkEmpty()'>Try if Empty</button>",
            scope: {
                directiveModel: "=ngModel"
            },
            link: link
        }
        return directive;
        function link(scope, element, attrs, ngModelController) {
            //ngModelController.$render = function () {
            //    //console.log("$render called!");
            //    switch (ngModelController.$modelValue) {
            //        case "1":
            //            //ngModelController.$viewValue = "Hi Harry"
            //            ngModelController.$setViewValue("Hi Harry");
            //            //scope.directiveModel = "Hi Harry"
            //            //ngModelController.$render()
            //            break;
            //        case "2":
            //            ngModelController.$setViewValue("Hi Ron");
            //            //scope.directiveModel = "Hi Ron"
            //            break;
            //        case "3":
            //            //ngModelController.$setViewValue("Hi Hermoine");
            //            scope.directiveModel = "Hi Hermoine"
            //            //ngModelController.$setDirty()
            //            break;
            //    }
            //    //scope.directiveModel = "Hi" + scope.directiveModel
            //    //if (ngModelController.$modelValue==="h")
            //    //ngModelController.$setViewValue("Hi Hermoine");
            //}
            scope.checkEmpty = function () {
                var isEmpty = ngModelController.$isEmpty(scope.directiveModel);
                if (isEmpty) {
                    scope.directiveModel = "It is Empty"
                    ngModelController.$setDirty()
                } else
                    ngModelController.$setPristine()

                //console.log('isEmpty' + isEmpty)
            }
            //ngModelController.$setViewValue("Hi Hermoine");
            var changeModel = function (value) {
                if (value) {
                    obj = {}
                    obj.val = value;
                    return obj;
                }
            }
            //ngModelController.$parsers.push(function (inputval) {
            //    console.log(inputval);
            //    console.log("Parser 1 called")
            //    return inputval;
            //})
            ngModelController.$parsers.push(function (value) {
                console.log("Parser 1 called")
                //if (value) {
                var obj = {}
                obj.val = value;
                //ngModelController.$modelValue = obj;
                //}
                return obj;
            })
            //ngModelController.$formatters.push(function (value) {
            //    console.log("Formatter 1 called")
            //    if (value) {
            //        return value.toUpperCase();
            //    }
            //    //return value;
            //})
        }
    }
})();

// function TimeDurationDirective() {
//     var tpl = "<div> \
//         <input type='text' ng-model='num' size='80' /> \
//         <select ng-model='unit'> \
//             <option value='secs'>Seconds</option> \
//             <option value='mins'>Minutes</option> \
//             <option value='hours'>Hours</option> \
//             <option value='days'>Days</option> \
//         </select> \
//     </div>";

//     return {
//         restrict: 'E',
//         template: tpl,
//         require: 'ngModel',
//         replace: true,
//         link: function (scope, iElement, iAttrs, ngModelCtrl) {
//             // Units of time
//             multiplierMap = { seconds: 1, minutes: 60, hours: 3600, days: 86400 };
//             multiplierTypes = ['seconds', 'minutes', 'hours', 'days']

//             ngModelCtrl.$formatters.push(function (modelValue) {
//                 var unit = 'minutes', num = 1, i, unitName;

//                 modelValue = parseInt(modelValue || 0);

//                 // Figure out the largest unit of time the model value
//                 // fits into. For example, 3600 is 1 hour, but 1800 is 30 minutes.
//                 for (i = multiplierTypes.length - 1; i >= 0; i--) {
//                     unitName = multiplierTypes[i];
//                     if (modelValue % multiplierMap[unitName] === 0) {
//                         unit = unitName;
//                         break;
//                     }
//                 }

//                 if (modelValue) {
//                     num = modelValue / multiplierMap[unit]
//                 }

//                 return {
//                     unit: unit,
//                     num: num
//                 };
//             });

//             ngModelCtrl.$parsers.push(function (viewValue) {
//                 var unit = viewValue.unit, num = viewValue.num, multiplier;
//                 multiplier = multiplierMap[unit];
//                 return num * multiplier;
//             });

//             scope.$watch('unit + num', function () {
//                 ngModelCtrl.$setViewValue({ unit: scope.unit, num: scope.num });
//             });

//             ngModelCtrl.$render = function () {
//                 if (!ngModelCtrl.$viewValue) ngModelCtrl.$viewValue = { unit: 'hours', num: 1 };

//                 scope.unit = ngModelCtrl.$viewValue.unit;
//                 scope.num = ngModelCtrl.$viewValue.num;
//             };
//         }
//     };
// };