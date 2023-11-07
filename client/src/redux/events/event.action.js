import Axios from "axios";

export const UPLOAD_EVENT_REQUEST = "UPLOAD_EVENT_REQUEST";
export const UPLOAD_EVENT_SUCCESS = "UPLOAD_EVENT_SUCCESS";
export const UPLOAD_EVENT_FAILURE = "UPLOAD_EVENT_FAILURE";

export const GET_ALL_EVENTS_REQUEST = "GET_ALL_EVENTS_REQUEST";
export const GET_ALL_EVENTS_SUCCESS = "GET_ALL_EVENTS_SUCCESS";
export const GET_ALL_EVENTS_FAILURE = "GET_ALL_EVENTS_FAILURE";

export const BOOK_EVENT_SUCCESS = "BOOK_EVENT_SUCCESS";
export const BOOK_EVENT_FAILURE = "BOOK_EVENT_FAILURE";

//upload events
export const uploadEvent = (event, navigate) => {
  return async (dispatch) => {
    try {
      dispatch({ type: UPLOAD_EVENT_REQUEST });
      let dataUrl = "/api/events/upload";
      let response = await Axios.post(dataUrl, event);
      dispatch({ type: UPLOAD_EVENT_SUCCESS, payload: response.data });
      navigate("/");
    } catch (error) {
      dispatch({ type: UPLOAD_EVENT_FAILURE, payload: error });
    }
  };
};

//get all events
export const getAllEvents = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: GET_ALL_EVENTS_REQUEST });
      let dataUrl = "/api/events/all";
      let response = await Axios.get(dataUrl);
      dispatch({ type: GET_ALL_EVENTS_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: GET_ALL_EVENTS_FAILURE, payload: error });
    }
  };
};

//book event

export const bookTheEvent = (event, navigate) => {
  return async (dispatch) => {
    try {
      dispatch({ type: BOOK_EVENT_SUCCESS, payload: { event: event } });
      navigate("/events/my-event");
    } catch (error) {
      console.log(error);
      dispatch({ type: BOOK_EVENT_FAILURE, payload: { error: error } });
    }
  };
};
