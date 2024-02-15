import { useState } from "react";
import PostIt from "../components/PostIt";

function PostItForm() {
  const [inputValue, setInputValue] = useState("");
  const [postItList, setPostItList] = useState([]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 1.Gestion des erreurs :
    // a.Si false :
    if (inputValue.trim() === "" || inputValue.length === 0) {
      alert(`Veuillez correctement remplir le champ "Texte"`);
    } else {
      // b.Si true, création du post-it :
      const newPostIt = {
        id: new Date().getTime(),
        text: inputValue,
      };
      setPostItList([...postItList, newPostIt]);

      // Reset de l'input :
      setInputValue("");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="inputGroup">
          <label htmlFor="inputPostIt">Texte du post-it</label>
          <input
            type="text"
            id="inputPostIt"
            name="inputPostIt"
            value={inputValue}
            onChange={handleChange}
          />
          <button>Créer</button>
        </div>
      </form>

      <div id="board">
        {postItList.map((postIt) => {
          return <PostIt key={postIt.id} text={postIt.text} />;
        })}
      </div>
    </>
  );
}

export default PostItForm;
