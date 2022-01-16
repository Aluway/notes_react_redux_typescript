import { guid } from "../../utility/guid";
import { dateCreator } from "../../utility/dateCreator";

type NoteType = {
  id: string;
  noteTitle: string;
  noteComment: string;
  noteDate: string;
};

type NoteAddActionType = {
  type: string;
  payload: {
    title: string;
    comment: string;
  };
};

type NoteDeleteActionType = {
  type: string;
  payload: {
    noteId: string;
  };
};

type NoteActionsType = NoteAddActionType & NoteDeleteActionType;

const initialState: NoteType[] = [];

export const notesReducer = (state = initialState, action: NoteActionsType) => {
  switch (action.type) {
    case "ADD_NOTE":
      let newId = guid();
      let currentDate = dateCreator();
      return [
        ...state,
        {
          id: newId,
          noteTitle: action.payload.title,
          noteComment: action.payload.comment,
          noteDate: currentDate,
        },
      ];
    case "DELETE_NOTE":
      return state.filter((note) => note.id !== action.payload.noteId);
    default:
      return state;
  }
};
