import React, { useState } from "react";

import plusIcon from "../../assets/plus.png";
import deleteIcon from "../../assets/deletenew.png";
import "./Sidebar.css";

function Sidebar(props) {
  const colors = ["#fe9b72", "#fec971", " #00d4fe", "#b693fd", "#e4ee91"];

  const [listOpen, setListOpen] = useState(false);
  const { addNote, notes, setNotes } = props;
  const addItem = (item) => {
    if (notes.length !== 0 && notes[notes.length - 1].text === "") {
      alert("Last note is Empty!");
      return;
    }
    addNote(item);
  };
  return (
    <div className="sidebar">
      <img src={plusIcon} alt="Add" onClick={() => setListOpen(!listOpen)} />
      <ul className={`sidebar_list ${listOpen ? "sidebar_list_active" : ""}`}>
        {colors.map((item, index) => (
          <li
            key={index}
            className="sidebar_list_item"
            style={{ backgroundColor: item }}
            onClick={() => addItem(item)}
          />
        ))}
      </ul>

      {notes.length ? (
        <img src={deleteIcon} alt="Delete All" onClick={() => setNotes([])} />
      ) : null}
    </div>
  );
}

export default Sidebar;
