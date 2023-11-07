import * as eventActions from "./event.action";

export const eventFeaturesKey = "events";

let initialState = {
  loading: false,
  events: [],
  bookedEvents: [],
  errorMessage: "",
};

export const reducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case eventActions.UPLOAD_EVENT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case eventActions.UPLOAD_EVENT_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case eventActions.UPLOAD_EVENT_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessage: payload,
      };
    //get alL events
    case eventActions.GET_ALL_EVENTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case eventActions.GET_ALL_EVENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        events: payload.event,
      };
    case eventActions.GET_ALL_EVENTS_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessage: payload,
      };

    //book event
    case eventActions.BOOK_EVENT_SUCCESS:
      let isExist = state.bookedEvents.find(
        (event) => event._id === payload.event._id
      );
      if (isExist) return state;

      return {
        ...state,
        bookedEvents: [...state.bookedEvents, payload.event],
      };

    case eventActions.BOOK_EVENT_FAILURE :
        return {
            ...state,
            errorMessage : payload.error
          };

          
    default:
      return state;
  }
};
