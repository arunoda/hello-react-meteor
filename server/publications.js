Meteor.publish('posts', function(selector) {
  return Posts.find(selector);
});

Meteor.publish('singlePost', function(_id) {
  return Posts.find({_id: _id});
});