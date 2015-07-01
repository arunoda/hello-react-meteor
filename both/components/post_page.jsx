PostPage = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      post: Posts.findOne({_id: this.props._id})
    }
  },
  render() {
    return <div>
      <a href="/">Back</a>
      <h3>{this.data.post.title}</h3>
      <p>{this.data.post.content}</p>
    </div>;
  }
});