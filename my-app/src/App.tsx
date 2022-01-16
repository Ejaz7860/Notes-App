// import axios from "axios";
import React, { useState, useEffect } from "react";
import Note from "./components/Note/Note";
import DUMMY_NOTES from "./DUMMY_NOTES";
import "./App.css";

const App = () => {
  const [noteList, setNotesList] = useState<Array<any>>([]);

  useEffect(() => {
    setNotesList(DUMMY_NOTES);
  }, []);

  return (
    <>
      <div className="app">
        <div className="text-box">
          <h1>
            <span className="spn-1">N</span>otes {" "}
            <span className="spn-2">A</span>pp
          </h1>
        </div>
        <div className="items">
          {noteList.map((item) => {
            return <Note note={item} key={item.id} />;
          })}
        </div>
      </div>
    </>
  );
};

export default App;
