import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";

function App(e) {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const array = useSelector((state) => state.array);

  const handleClick = () => {
    if (text) {
      dispatch({
        type: "add",
        payload: {
          text: text,
        },
      });
      setText("");
    }
  };
  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleDelete = (id) => {
    dispatch({
      type: "delete",
      payload: {
        id: id,
      },
    });
  };

  console.log(text);
  return (
    <div className="main">
      <div action="">
        <input type="text" onChange={handleChange} value={text} />
        <button onClick={handleClick}>Add</button>
      </div>
      <div className="container">
        {array.map((item, id) => {
          return (
            <div className="items" key={id}>
              {item.text}
              <button className="btn" onClick={() => handleDelete(id)}>
                x
              </button>
              <input type="checkbox"></input>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
