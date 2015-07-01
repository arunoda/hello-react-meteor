

  FlowRouter.route("/", {
    action: function() {
      ReactLayout.render(HomeLayout);
    }
  });

  FlowRouter.route("/blog", {
    action: function() {
      ReactLayout.render(BlogLayout, {
        content: <PostList />
      });
    }
  });

  FlowRouter.route("/blog/:id", {
    action: function(params) {
      ReactLayout.render(BlogLayout, {
        content: <PostPage id={params.id} />
      });
    }
  });