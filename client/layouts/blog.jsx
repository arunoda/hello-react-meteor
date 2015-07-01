BlogLayout = React.createClass({
  render() {
    return <div>
      <div className="navigation">
        <a href="/">Home</a> | 
        <a href="/blog">Blog</a>
      </div>
      <h1> My Blog </h1>
      {this.props.content}
    </div>;
  }
});