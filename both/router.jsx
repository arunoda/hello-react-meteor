FlowRouter.route("/", {
  subscriptions: function() {
    var selector = {category: {$ne: "private"}};
    this.register('posts', Meteor.subscribe('posts', selector));
  },
  action: function() {
    ReactLayout.render(BlogLayout, {
      content: <PostList />
    });
  }
});

FlowRouter.route('/post/:_id', {
  name: 'post',
  subscriptions: function(params) {
    this.register('singlePost', Meteor.subscribe('singlePost', params._id));
  },
  action: function(params) {
    ReactLayout.render(BlogLayout, {
      content: <PostPage _id={params._id} />
    });
  }
});