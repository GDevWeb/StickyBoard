import "../sass/postIt.scss";
function PostIt({ text, style, handleDelete }) {
  return (
    <div id="postIt" style={style}>
      <div id="deletePostItButtonContainer">
      <button id="deletePostItButton" onClick={handleDelete}>❌</button>
      </div>
      <div id="content">
      <p>{text}</p>
      </div>
    </div>
  );
}

export default PostIt;
