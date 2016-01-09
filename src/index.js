var React = require("react");
var ReactDOM = require("react-dom");
var CommentBox = require("./comment_box");

ReactDOM.render(
  <CommentBox url='http://localhost:4567/api/comments' pollInterval={2000} />,
  document.getElementById('root')
);
