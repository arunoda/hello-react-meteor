PostList = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    var selector = {category: {$ne: "private"}};
    var handle = Meteor.subscribe('posts', selector);
    var data = {};
    if(handle.ready()) {
      data.posts = Posts.find({}, {sort: {_id: 1}}).fetch();
    }
 
    return data;
  },
  getList() {
    return <ul>
      {this.data.posts.map(function(task) {
        var path = FlowRouter.path('post', {_id: task._id})
        return <li key={task._id}><a href={path}>{task.title}</a></li>
      })}
    </ul>;
  },
  render() {
    return <div>
      This is the post list
      {(this.data.posts)? this.getList() : "loading..."}
    </div>;
  }
});