const initialState = false;

type modalAction = { type: "SHOW_MODAL"; payload: boolean };

export const modalReducer = (
  state: boolean = initialState,
  action: modalAction
) => {
  switch (action.type) {
    case "SHOW_MODAL":
      return action.payload;
    default:
      return state;
  }
};
