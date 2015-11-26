adminGui.directive('ngErrorLogin', function() {
  return {
    restrict: 'A',
    template: '<div class="alert alert-danger" role="alert">Bad name or password</div>',
    replace: true
  }
});