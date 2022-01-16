import React from "react";
import ReactDOM from "react-dom";

import { useSelector } from "react-redux";
import { RootState } from "./Store/reducers/rootReducer";

import AddNoteModal from "./Components/AddNoteModal/AddNoteModal";
import Homepage from "./Pages/Homepage/Homepage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Notepage from "./Pages/Notepage/Notepage";

function App() {
  const showModal = useSelector((state: RootState) => state.modal);
  return (
    <BrowserRouter>
      {showModal &&
        ReactDOM.createPortal(
          <AddNoteModal />,
          document.getElementById("modal")!
        )}
      <Routes>
        <Route element={<Homepage />} path="/" />
        <Route element={<Notepage />} path="/note/:noteId" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
