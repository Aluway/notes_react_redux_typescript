import React, { useState } from "react";

import { CustomButton } from "../CustomButton/CustomButton";

import { useDispatch } from "react-redux";
import { modalAction } from "../../Store/actions/modalAction";
import { addNote } from "../../Store/actions/notesAction";

import { ReactComponent as Close } from "../../assets/icons/close.svg";
import { ReactComponent as Bold } from "../../assets/icons/format_bold.svg";
import { ReactComponent as Italic } from "../../assets/icons/format_italic.svg";
import { ReactComponent as Underline } from "../../assets/icons/format_underlined.svg";
import { ReactComponent as Numbered } from "../../assets/icons/format_list_numbered.svg";
import { ReactComponent as Bulleted } from "../../assets/icons/format_list_bulleted.svg";
import { ReactComponent as Replay } from "../../assets/icons/replay.svg";

import "./AddNoteModal.scss";

function AddNoteModal() {
  const dispatch = useDispatch();

  const [header, setHeader] = useState("");
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const submitNote = () => {
    dispatch(addNote(header, comment));
    setSubmitted(true);
    setHeader("");
    setComment("");
  };

  const closeModal = () => {
    dispatch(modalAction(false));
    setSubmitted(false);
  };

  return (
    <div className="modal__wrapper">
      <div className={`modal__container ${submitted ? "submitted" : ""}`}>
        <div className="overlay" />
        <div className="modal__close">
          <Close onClick={closeModal} className="modal__icon" />
        </div>
        {submitted ? (
          <div className="modal__info__wrapper">
            <div className="info__text">Заметка добавлена!</div>
            <CustomButton
              type={"button"}
              additionalClass={"modal__button"}
              handleClick={closeModal}
            >
              Закрыть
            </CustomButton>
          </div>
        ) : (
          <div className="modal__content__wrapper">
            <div className="modal__title">Добавить заметку</div>
            <ul className="modal__panel__wrapper">
              <li className="panel__element">
                <Bold className="modal__icon" />
              </li>
              <li className="panel__element">
                <Italic className="modal__icon" />
              </li>
              <li className="panel__element">
                <Underline className="modal__icon" />
              </li>
              <li className="panel__element">
                <Numbered className="modal__icon" />
              </li>
              <li className="panel__element">
                <Bulleted className="modal__icon" />
              </li>
              <li className="panel__element">
                <Replay className="modal__icon" />
              </li>
            </ul>
            <label className="header__input" htmlFor="note__header">
              Название заметки *
              <input
                autoComplete="off"
                onChange={(e) => setHeader(e.target.value)}
                type="text"
                name="note__header"
                placeholder="Введите название заметки"
              />
            </label>
            <label className="comments__input" htmlFor="note__header">
              Комментарий
              <textarea
                onChange={(e) => setComment(e.target.value)}
                name="note__comments"
                placeholder="Введите комментарий"
                value={comment}
              />
            </label>
            <CustomButton
              disabled={header.length < 1}
              additionalClass={"modal__button"}
              handleClick={submitNote}
            >
              Добавить
            </CustomButton>
          </div>
        )}
      </div>
    </div>
  );
}

export default AddNoteModal;
