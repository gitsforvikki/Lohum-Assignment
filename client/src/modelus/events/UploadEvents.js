import React, { useState } from "react";
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import * as eventAction from '../../redux/events/event.action';

let UploadEvents = () => {

  let dispatch = useDispatch();
    let navigate = useNavigate();

    let [event , setEvent] = useState({
        name : '',
        image :'',
        date:'',
        type:'',
        price :'',
        info:''
    });
    let updateInput =(e)=>{
        setEvent({
            ...event,
            [e.target.name] : e.target.value
        })
    };

    let submitUpload=(e)=>{
        e.preventDefault();
        dispatch(eventAction.uploadEvent(event , navigate));
    }


    

  return (
    <React.Fragment>
      
      <div className="h-screen bg-gray-100 flex flex-col  items-center">
        <div className=" container w-full">
        <div className=" flex justify-center border-b-2 py-3 border-indigo-200">
          <div className="text-3xl text-gray-700">Upload an Event</div>
        </div>

          <div className="container">
            <div className="bg-indigo-400 h-2 mt-5 rounded-t-md"></div>
            <div className="shadow-md hover:shadow-2xl">
              <form onSubmit={submitUpload} className="px-8 py-6 bg-white text-gray-500 flex  flex-col  gap-y-4">
                <div>
                  {/* event name */}
                  <input
                    type="text"
                    name="name"
                    value={event.name}
                    onChange={updateInput}
                    className="w-full border-2 px-4 py-2 rounded hover:outline-none  
                   focus:outline-none focus:ring-1 focus:ring-indigo-400 "
                    placeholder="Event Name"
                    required
                  />
                </div>

                <div>
                  {/* image url */}
                  <input
                    type="url"
                    name="image"
                    value={event.image}
                    onChange={updateInput}
                    className=" w-full border-2 px-4 py-2 rounded hover:outline-none 
                  focus:outline-none focus:ring-1 focus:ring-indigo-400"
                    placeholder="Event Image Url"
                    required
                  />
                </div>
                <div>
                  {/* Event Data */}
                  <input
                    type="date"
                    name="date"
                    value={event.date}
                    onChange={updateInput}
                    className=" w-full border-2 px-4 py-2 rounded hover:outline-none 
                  focus:outline-none focus:ring-1 focus:ring-indigo-400"
                    placeholder=""
                    required
                  />
                </div>

                {/* select category */}
                <div className="min-w-max grow ">
                  <select
                    name="type"
                    value={event.type}
                    onChange={updateInput}
                    required
                    className=" w-full border-2 px-4 py-2 rounded hover:outline-none 
                  focus:outline-none focus:ring-1 focus:ring-indigo-400"
                  >
                    <option>Select Type </option>
                    <option value="FREE">Free Events </option>
                    <option value="PRO">Pro Events</option>
                  </select>
                </div>

                {/* Price */}
                <div>
                  <input
                    type="number"
                    name="price"
                    value={event.price}
                    onChange={updateInput}
                    className=" w-full border-2 px-4 py-2 rounded hover:outline-none 
                  focus:outline-none focus:ring-1 focus:ring-indigo-400"
                    placeholder="Price"
                    required
                  />
                </div>

                {/* Information */}
                <div>
                  <textarea
                    rows="4"
                    name="info"
                    value={event.info}
                    onChange={updateInput}
                    className=" w-full border-2 px-4 py-2 rounded hover:outline-none 
                  focus:outline-none focus:ring-1 focus:ring-indigo-400"
                    placeholder="Information"
                    required
                  />
                </div>

                <div className="my-6 flex justify-between items-baseline">
                  <button
                    type="submit"
                    className="bg-indigo-500 px-4 py-2 text-white rounded hover:bg-indigo-600  hover:shadow-indigo-500 hover:shadow-4lg"
                  >
                    Upload
                  </button>
                  <a href="#" className="text-sm hover:underline">
                    Reset
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default UploadEvents;
