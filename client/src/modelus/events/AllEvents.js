import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import image from "../../assets/background.jpg";
import * as eventAction from "../../redux/events/event.action";
import * as eventReducer from "../../redux/events/event.reducer";
import spinner from "../../assets/spinner.gif";


let AllEvents = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();

  useEffect(() => {
    dispatch(eventAction.getAllEvents());
  }, []);

  let eventInfo = useSelector((state) => {
    return state[eventReducer.eventFeaturesKey];
  });

  let { events, loading , bookedEvents } = eventInfo;

  let clickToBookEvent =(event , navigate)=>{
    dispatch(eventAction.bookTheEvent(event , navigate));
  }

  return (
    <React.Fragment>
      
      <div className="container">
        {/* header */}
        <div className=" flex justify-center border-b-2 py-3 border-gray-400">
          <div className="text-3xl text-gray-700">All Available Events</div>
        </div>

        {loading ? spinner : null}

        {/* All events */}
        <div className="container">
          {loading ? (
            <spinner />
          ) : (
            <React.Fragment>
              {events.length > 0 ? (
                <React.Fragment>
                  {events.map((event) => {
                    return (
                      <div className="my-6" key={event._id}>
                        <div className="flex flex-col gap-y-3 border-2 text-gray-700 border-gray-300 shadow-md hover:shadow-lg rounded-lg ">
                          <img
                            src={`${event.image}`}
                            alt=""
                            className="w-full rounded-lg"
                          />
                          <div className="p-2 bg-gray-200  ">
                            <span className="flex justify-between">
                              <span className="text-2xl">{`${event.name}`}</span>
                              <Link
                                onClick={clickToBookEvent.bind(this, event)}
                                to="/"
                                className="py-2 px-4 bg-violet-500 text-white"
                              >
                                Book Show
                              </Link>
                            </span>
                            <span className="text-sm">{`Date: ${event.date}`}</span>
                            <br />
                            <span className="text-sm">{`Price: Rs. ${event.price}/- Only`}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </React.Fragment>
              ) : null}
            </React.Fragment>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default AllEvents;
