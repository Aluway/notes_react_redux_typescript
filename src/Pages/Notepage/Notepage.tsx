import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

import { CustomButton } from "../../Components/CustomButton/CustomButton";

import { ReactComponent as Back } from "../../assets/icons/back.svg";
import { ReactComponent as Delete } from "../../assets/icons/delete.svg";
import { ReactComponent as Edit } from "../../assets/icons/edit.svg";

import "./Notepage.scss";
import { RootState } from "../../Store/reducers/rootReducer";
import { deleteNote } from "../../Store/actions/notesAction";

function Notepage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const params = useParams();
  const singleNoteId = params.noteId;

  const notesList = useSelector((state: RootState) => state.notes);
  let singleNote = notesList.find((note) => note.id === singleNoteId);

  const handleDelete = () => {
    dispatch(deleteNote(singleNoteId!));
    navigate("/");
  };

  return (
    <div className="notepage__container">
      <Back
        onClick={() => navigate("/")}
        className="notepage__icon back__icon"
      />
      <div className="notepage__header">
        <div className="notepage__title">{singleNote?.noteTitle}</div>
        <CustomButton
          handleClick={() =>
            console.log(
              "Тут должно вылазить меню редактирования, наверное, но я решил оставить так"
            )
          }
          additionalClass={"notepage__button"}
        >
          <Edit className="button__icon" />
          Править заметку
        </CustomButton>
      </div>
      <div className="notepage__comments">{singleNote?.noteComment}</div>
      <div className="notepage__footer">
        <div className="notepage__date">{singleNote?.noteDate}</div>
        <div className="notepage__delete">
          <Delete onClick={handleDelete} className="notepage__icon" />
        </div>
      </div>
    </div>
  );
}

export default Notepage;
