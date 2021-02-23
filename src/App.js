import Comment from './Comment';
import './App.css';

function App() {
  //make variable before return
  const name = 'yomi';
  const post ={
    title: 'Dinosaurs are awesome',
    author: 'Stealthy Stegosaurus',
    body: 'Check out this body properity!',
   comments: ['First!', 'Great post', 'Hire this author now!']
  }

  const comments = post.comments.map(comment=> (<Comment text={comment}/>))
  return (
    <div className="App">
      {/* can use variable with curly braces*/}
      <p>{name}</p>
      <h1>{post.title}</h1>
      <p>by {post.author}</p>
      <p>{post.body}</p>
      <h3>Comments:</h3>
      <p>{post.comments[0]}</p>
      {comments}
    </div>
  );
}

export default App;
