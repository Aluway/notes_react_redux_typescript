import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Store/reducers/rootReducer";
import { modalAction } from "../../Store/actions/modalAction";

import { CustomButton } from "../../Components/CustomButton/CustomButton";
import SignleNote from "../../Components/SingleNote/SignleNote";

import { ReactComponent as Add } from "../../assets/icons/add.svg";
import "./Homepage.scss";

function Homepage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const notesList = useSelector((state: RootState) => state.notes);

  const handleClick = () => {
    dispatch(modalAction(true));
  };

  return (
    <div className="homepage__container">
      <div className="homepage__header">
        <div className="header__title">Заметки</div>
        <CustomButton additionalClass={"add__note"} handleClick={handleClick}>
          <Add className="button__icon" />
          Добавить заметку
        </CustomButton>
      </div>
      <div className="notes__wrapper">
        {notesList.length === 0 ? (
          <div className="notes__info">Пока что нет заметок.</div>
        ) : (
          notesList.map((note) => {
            return (
              <SignleNote
                onClick={() => navigate(`/note/${note.id}`)}
                key={note.id}
                noteDate={note.noteDate}
                noteTitle={
                  note.noteTitle.length > 40
                    ? note.noteTitle.slice(0, 39) + "..."
                    : note.noteTitle
                }
                additionalTitleClass={
                  note.noteTitle.length > 23 ? "long__word" : ""
                }
              />
            );
          })
        )}
      </div>
    </div>
  );
}

export default Homepage;
