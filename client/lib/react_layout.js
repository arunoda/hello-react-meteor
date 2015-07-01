ReactLayout = {};
ReactLayout._currentLayoutClass;
ReactLayout._currentLayoutComp;

ReactLayout._getRootNode = function() {
  return $('body').get(0);
};

ReactLayout.render = function(layoutClass, regions) {
  var self = this;
  self._ready(function() {
    var rootNode = self._getRootNode();
    if(self._currentLayoutClass !== layoutClass) {
      self._currentLayoutClass = layoutClass;
      var el = React.createElement(layoutClass);
      var renderdComp = React.render(el, rootNode);
      self._currentLayoutComp = renderdComp;
    }

    self._currentLayoutComp.setProps(regions);
  });
};

ReactLayout._ready = function(cb) {
  $(cb);
};