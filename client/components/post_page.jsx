PostPage = React.createClass({
  render() {
    return <div>
      <a href="/blog">Back</a>
      <p>This is the post page: {this.props.id}</p>
    </div>;
  }
});