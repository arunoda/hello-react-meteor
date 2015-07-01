PostList = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      posts: Posts.find({}, {sort: {_id: 1}}).fetch()
    };
  },
  render() {
    return <div>
      This is the post list
      <ul>
        {this.data.posts.map(function(task) {
          var path = FlowRouter.path('post', {_id: task._id})
          return <li key={task._id}><a href={path}>{task.title}</a></li>
        })}
      </ul>
    </div>;
  }
});