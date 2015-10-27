// if(Meteor.isServer) {
//   return;
// }

FlowRouter.route("/", {
  action: function() {
    ReactLayout.render(BlogLayout, {
      content: <PostList />
    });
  }
});

FlowRouter.route('/post/:_id', {
  name: 'post',
  action: function(params) {
    ReactLayout.render(BlogLayout, {
      content: <PostPage _id={params._id} />
    });
  }
});