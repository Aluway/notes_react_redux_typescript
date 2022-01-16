export const addNote = (noteTitle: string, noteComment: string) => {
  return {
    type: "ADD_NOTE",
    payload: {
      title: noteTitle,
      comment: noteComment,
    },
  };
};

export const deleteNote = (noteId: string) => {
  return {
    type: "DELETE_NOTE",
    payload: { noteId },
  };
};
