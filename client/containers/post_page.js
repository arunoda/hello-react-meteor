import {composeWithTracker} from 'react-komposer';
import PostPage from '../components/post_page.jsx';

function composer(props, onData) {
  const handle = Meteor.subscribe('singlePost', props._id);
  if(handle.ready()) {
    const post = Posts.findOne({_id: props._id});
    onData(null, {post});
  }
};

export default composeWithTracker(composer)(PostPage);
