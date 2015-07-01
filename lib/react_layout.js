ReactLayout = {};
ReactLayout._currentLayoutClass;
ReactLayout._currentLayoutComp;

ReactLayout._getRootNode = function() {
  return $('#react-root').get(0);
};

ReactLayout.render = function(layoutClass, regions) {
  if(Meteor.isClient) {
    return ReactLayout.renderClient(layoutClass, regions);
  } else {
    return ReactLayout.renderServer(layoutClass, regions);
  }
};

ReactLayout.renderServer = function(layoutClass, regions) {
  var el = React.createElement(layoutClass, regions);
  var html = React.renderToString(el);

  if(Package['meteorhacks:flow-router']) {
    var FlowRouter = Package['meteorhacks:flow-router'].FlowRouter;
    var ssrContext = FlowRouter.ssrContext.get();
    ssrContext.setHtml(html);
  }
};

ReactLayout.renderClient = function(layoutClass, regions) {
  var self = this;
  self._ready(function() {
    var rootNode = self._getRootNode();
    if(self._currentLayoutClass !== layoutClass) {
      self._currentLayoutClass = layoutClass;
      var el = React.createElement(layoutClass, regions);
      var renderdComp = React.render(el, rootNode);
      self._currentLayoutComp = renderdComp;
    } else {
      self._currentLayoutComp.setProps(regions);
    }
  });
};

ReactLayout._ready = function(cb) {
  $(cb);
};