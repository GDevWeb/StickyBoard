import { useState } from "react";
import PostIt from "../components/PostIt";
import "../sass/postItForm.scss";

function PostItForm() {
  const [inputValue, setInputValue] = useState("");
  const [postItList, setPostItList] = useState([]);

  /**
   *
   * @param {*} e écouteur d'évents sur l'input
   */
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const getRandomColor = () => {
    const randomColorTab = ["blue", "crimson", "green", "orange", "yellow"];

    const randomIndex = Math.floor(Math.random() * randomColorTab.length);
    return randomColorTab[randomIndex];
  };

  /**
   *
   * @param {*} e écouteur d'évents sur le formulaire
   */
  const handleSubmit = (e) => {
    e.preventDefault();

    // 1.Gestion des erreurs :
    // a.Si false :
    if (inputValue.trim() === "" || inputValue.length === 0) {
      alert(`Veuillez correctement remplir le champ "Texte"`);
    } else {
      // b.Si true, création du post-it :
      const randomColor = getRandomColor();
      const newPostIt = {
        id: new Date().getTime(),
        text: inputValue,
        color: randomColor,
      };
      setPostItList([...postItList, newPostIt]);

      // Reset de l'input :
      setInputValue("");
    }
  };

  /**
   * 
   * @param {*} postItId suppression du postIt par l'id
   */
  
const handleDelete = (postItId) => {
  setPostItList(postItList.filter(postIt => postIt.id !== postItId))
}  
  return (
    <>
      <form id="postItForm" onSubmit={handleSubmit}>
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
          return (
            <PostIt
            key={postIt.id}
            handleDelete={() => handleDelete(postIt.id)}
            text={postIt.text}
            style={{backgroundColor : postIt.color}}
            />
          );
        })}
      </div>
    </>
  );
}

export default PostItForm;
