BlogLayout = React.createClass({
  render() {
    return <div>
      <div className="navigation">
        <a href={FlowRouter.path('/')}>Home</a>
      </div>
      <h1> My Blog </h1>
      {this.props.content}
    </div>;
  }
});