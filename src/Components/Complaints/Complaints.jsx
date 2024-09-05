import React,{  useContext, useEffect, useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { AdminPageContext } from "../../Store/AdminPageContext";
import firebase from "firebase/compat/app";

function Complaints() {
  const tableTitlses = [
    "Job_Id",
    "Customer_Name",
    "Location",
    "Contact_Number",
  ];
  const { setPage } = useContext(AdminPageContext);
  const [complaints,setComplaints] = useState([])
  useEffect(()=>{
    firebase.firestore().collection('Complaints').get().then((snap)=>{
      const allComplaints = snap.docs.map((complaint)=>{
        return{
          ...complaint.data(),
          id:complaint.id
        }
      })
      setComplaints(allComplaints)
    },[])
  })
  return (
    <div className="col-span-7 md:col-span-8 row-span-7">
      <div
        id="creation"
        className=" col-span-4 md:mt-12 md:p-8 p-2 flex  justify-end"
      >
        <button
          onClick={(e) => setPage(e.target.value)}
          value="newcomplaint"
          className="bg-blue-600 p-2  rounded-xl md:text-xl text-white flex hover:cursor-pointer"
        >
          <sapn className="mt-1 mr-1 md:mr-2 ">
            <IoIosAddCircleOutline />
          </sapn>
          New Complaint
        </button>
      </div>
      <div className="bg-slate-100 p-2 rounded-xl mt-4 m-2 w-full flex justify-evenly gap-2">
        {tableTitlses.map((items) => {
          return (
            <div key={items} className="truncate w-24 md:w-auto">
              <span className="md:text-lg text-xs md:font-semibold">
                {items}
              </span>
            </div>
          );
        })}
      </div>
      { complaints.map(complaint=>{
        return <div className="grid truncate grid-cols-4 gap-2 justify-evenly md:ml-6 mt-4 text-center border-1 hover:bg-slate-200 rounded-xl p-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 hover:shadow-xl">
          <div className="md:text-lg text-xs md:font-semibold mr-4 truncate">
            <p>{complaint.Id}</p>
          </div>
          <div>
            <p className="md:text-lg text-xs md:font-semibold mr-4 truncate">
              {complaint.CustomerName}
            </p>
          </div>
          <div>
            <p className="md:text-lg text-xs md:font-semibold mr-4 truncate">
              {complaint.Location}
            </p>
          </div>
          <div>
            <p className="md:text-lg text-xs md:font-semibold mr-4 truncate">
              {complaint.contactdetails}
            </p>
          </div>
        </div>
        
      })
      }

    </div>
  );
}

export default Complaints;
