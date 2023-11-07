import React from "react";
import { useSelector } from "react-redux";
import image from "../../assets/background.jpg";
import * as eventReducer from "../../redux/events/event.reducer";

let MyEvents = () => {
  let eventsInfo = useSelector((state) => {
    return state[eventReducer.eventFeaturesKey];
  });

  let { bookedEvents } = eventsInfo;

  return (
    <React.Fragment>
      
      <div className="container">
        <div className="pb-3 mb-10 text-2xl text-gray-700 flex justify-center border-b-2 border-gray-400">
          <p>Your Booked Events</p>
        </div>
        <div className="container">
          {bookedEvents.length > 0 ? (
            <React.Fragment>
              {bookedEvents.map((event) => {
                return (
                  <div className="my-3" key={event._id}>
                    <div className="grid grid-flow-col grid-cols-2 md:flex flex-col  border-2 border-gray-500 p-2 shadow-md shadow-gray-500 rounded-md ">
                      <img src={`${event.image}`} alt="" className=" md:h-60 " />
                      <div className="ml-3 md:flex justify-between items-center ">
                        <div>
                          <p className="text-xl mb-2 md:text-3xl">{`${event.name} `}</p>
                          <p className="text-sm md:text-lg">{`${event.date}`}</p>
                          <p className="text-sm md:text-lg mb-2">{` Rs.${event.price}/- only`}</p>
                        </div>
                        <div>
                          <span className="bg-red-500 text-white px-4 py-2 text-sm ">
                            Cancle
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </React.Fragment>
          ) : null}
        </div>
      </div>
    </React.Fragment>
  );
};

export default MyEvents;
