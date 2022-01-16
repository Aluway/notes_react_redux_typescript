import React from "react";

import { ReactComponent as Forward } from "../../assets/icons/forward.svg";

import "./SignleNote.scss";

interface singleNoteProps {
  onClick: () => void;
  noteTitle: string;
  noteDate: string;
  additionalTitleClass?: string;
}

function SignleNote({
  onClick,
  noteTitle,
  noteDate,
  additionalTitleClass,
}: singleNoteProps) {
  return (
    <div onClick={onClick} className="note__container">
      <div className={`note__title ${additionalTitleClass}`}>{noteTitle}</div>
      <div className="note__date">{noteDate}</div>
      <div className="icon__container">
        <Forward className="note__icon" />
      </div>
    </div>
  );
}

export default SignleNote;
