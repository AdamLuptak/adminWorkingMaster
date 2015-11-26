angular.module('AdminGui')
.directive('chart',['$compile','$http','$templateCache',function($compile,$http,$templateCache) {
	
	var getTemplate = function(contentType) {
		var templateLoader,
		baseUrl = 'scripts/directives/chartDirective/',
		templateMap = {
			line: 'lineChartPlot.html',
			bar: 'barChartPlot.html',
			pie: 'pieChart.html',
			radar: 'radarChart.html',
			free: 'link.html',
			chat: 'chat.html',
			audio: 'audio.html',
			answer: 'answer.html'
		};
		var templateUrl = baseUrl + templateMap[contentType];
		templateLoader = $http.get(templateUrl, {cache: $templateCache});

		return templateLoader
	}

	var linker = function(scope, element, attrs) {


		var loader = getTemplate(scope.post);
		scope.line = scope.charData;
		var promise = loader.success(function(html) {
			element.html(html);
		}).then(function (response) {
			element.replaceWith($compile(element.html())(scope));
		});

		// scope.$watch('post', function(newValue, oldValue) {

		// 	if (newValue)
				
		// 	console.log("I see a data change!" + scope.post);
		// 	var loader = getTemplate(scope.post);
		// 	scope.line = scope.charData;
		// 	var promise = loader.success(function(html) {
		// 		element.html(html);
		// 	}).then(function (response) {
		// 		element.replaceWith($compile(element.html())(scope));
		// 	});

		// })
	}

	return {
		restrict: 'E',
		scope: {
			post:'@',
			charData:"="
		},
		link: linker
	};

	// return {
	// 	templateUrl: getHtml(),
	// 	restrict: 'E',
	// 	replace: true,
	// 	scope: {
 //        weatherDay: '@',
 //        line: '='
 //  },
 //  link: function(scope) {
 //  	console.log("zoscopu " + scope.weatherDay);
 //  	console.log("zoscopu " + scope.line.id);
 //  }
	// }

}]);


function getHtml(page){
	console.log("z gth html " + page)
	return 'scripts/directives/chartDirective/chartPlot.html';
}