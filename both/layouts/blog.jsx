BlogLayout = React.createClass({
  render() {
    return <div>
      <div className="navigation">
        <a href="/">Home</a>
      </div>
      <h1> My Blog </h1>
      {this.props.content}
    </div>;
  }
});