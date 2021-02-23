
import './App.css';

function App() {
  //make variable before return
  const name = 'yomi';
  const post ={
    title: 'Dinosaurs are awesome',
    author: 'Stealthy Stegosaurus',
    body: 'Check out this body properity!',
    comments: 'First!'
   // comments: ['First!', 'Great post', 'Hire this author now!']
  }

  return (
    <div className="App">
      {/* can use variable with curly braces*/}
      <p>{name}</p>
      <p>{post.title}</p>
      <p>{post.author}</p>
      <p>{post.body}</p>
      <p>{post.comments}</p>
    </div>
  );
}

export default App;
