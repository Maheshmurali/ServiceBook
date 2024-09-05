import React, { useContext, useState } from "react";
import Complaints from "../Complaints/Complaints";
import { v4 as uuidv4 } from "uuid";
import { FirebaseContex } from "../../Store/FirebaseContext";
import { useNavigate } from "react-router-dom";
function NewRegistration() {
  const navigate = useNavigate();
  function jobId() {
    const uniqueId = uuidv4().split("-")[3];
    return `Y-${uniqueId}`;
  }
  const { firebase } = useContext(FirebaseContex);
  const JobId = jobId().toLocaleUpperCase();
  const [serviceName, setServiceName] = useState("");
  const [date, setDate] = useState("");
  const [jobid, setJobid] = useState(JobId);
  const [customername, setcustomername] = useState("");
  const [location, setLocation] = useState("");
  const [contactdetails, setContactDetails] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [model, setModel] = useState("");
  const [Warranty, setWarrenty] = useState("");
  const [installed, setInstalled] = useState("");
  const [productage, setProductage] = useState("");
  const [serialnumber, setSerialNumber] = useState("");
  const [customerVoice, setCustomerVoice] = useState("");

  const formHandle = (e) => {
    e.preventDefault();
    firebase
      .firestore()
      .collection("Complaints")
      .add({
        Id: jobid,
        ComplaintType: serviceName,
        CustomerName: customername,
        Location: location,
        contactdetails: contactdetails,
        WhatsAppNumber: whatsapp,
        CustomerVoice: customerVoice,
        installedBy: installed,
        ProductAge: productage,
        Warrenty: Warranty,
        Model: model,
        SerialNumber: serialnumber,
        regDate: date,
      })
      .then(() => {
        alert(`Register Success With Ticket Number ${jobid}`) && <Complaints />;
        
      });
    setSerialNumber("");
    setServiceName("");
    setDate("");
    setLocation("");
    setContactDetails("");
    setWhatsapp("");
    setCustomerVoice("");
    setInstalled("");
    setProductage("");
    setWarrenty("");
    setModel("");
    setJobid("");
    setcustomername("");
  };
  return (
    <div className="col-span-7 md:col-span-8 row-span-7 px-12 md:px-0">
      <div className="text-center md:text-2xl text-lg mt-8 underline font-medium">
        <h1>Complaint Registration</h1>
      </div>
      <form action="" onSubmit={formHandle}>
        <div
          className="grid grid-rows-2 md:grid-cols-3 row-span-3 mt-2"
          id="head"
        >
          <div className="grid grid-rows-2 w-25 pl-8">
            <span className="mt-2">Complaint Type</span>
            <select
              onChange={(e) => setServiceName(e.target.value)}
              name=""
              id=""
              className="border-1 rounded-lg"
            >
              <option value="">Select</option>
              <option value="CCTV">C C T V</option>
              <option value="Inverter">INVERTER</option>
              <option value="Solar">SOLAR</option>
              <option value="Gate">GATE</option>
              <option value="Computer&printer">COMPUTER&PRINTERS</option>
            </select>
          </div>
          <div className="w-25 ml-8 mt-2">
            <span>Date</span>
            <input
              className="rounded-lg border-1 p-1"
              type="Date"
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="w-25 ml-8 mt-2">
            <span>Job_Id</span>
            <input
              className="rounded-lg border-1 p-1 bg-gray-200 md:w-62 w-36"
              type="text"
              value={jobid}
              readOnly
              onChange={(e) => setJobid(e.target.value)}
            />
          </div>
        </div>
        <div className="grid grid-rows">
          <div className="md:flex md:justify-evenly">
            <div className="md:flex px-6 my-4 gap-2">
              <h3>Customer Name</h3>
              <input
                className="border-1 rounded-lg mt-2 md:mt-0 px-2"
                type="text"
                onChange={(e) => setcustomername(e.target.value)}
              />
            </div>
            <div className="md:flex px-6 gap-2 my-4">
              <h3>Location</h3>
              <input
                className="border-1 rounded-lg mt-2 md:mt-0  px-2"
                type="text"
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div className="md:flex px-6 gap-1 my-4">
              <h3>ContactDetails</h3>
              <input
                className="border-1 rounded-lg mt-2 md:mt-0  px-2"
                type="text"
                onChange={(e) => setContactDetails(e.target.value)}
              />
            </div>
          </div>
          <div className="md:flex md:justify-evenly">
            <div className="md:flex px-6 md:my-4 gap-2">
              <h3>WhatsAppNumber</h3>
              <input
                className="border-1 rounded-lg mt-2 md:mt-0  px-2"
                type="text"
                onChange={(e) => setWhatsapp(e.target.value)}
              />
            </div>
            <div className="md:flex px-6 gap-2 my-4">
              <h3>Model</h3>
              <input
                className="border-1 rounded-lg mt-2 md:mt-0  px-2"
                type="text"
                onChange={(e) => setModel(e.target.value)}
              />
            </div>
            <div className="md:flex px-6 gap-1 my-4">
              <h3>Warranty</h3>
              <select
                onChange={(e) => setWarrenty(e.target.value)}
                name=""
                id=""
                className="border-1 rounded-xl w-3/4 mt-2 md:mt-0"
              >
                <option value="">Select</option>
                <option value="Warrenty">Warranty</option>
                <option value="OutOfWarrenty">Out Of Warranty</option>
              </select>
            </div>
          </div>
          <div className="md:flex md:justify-evenly">
            <div className="md:flex  md:my-4 gap-2">
              <h3 className="">Installed By</h3>
              <select
                onChange={(e) => setInstalled(e.target.value)}
                name=""
                id=""
                className="border-1 px-12 rounded-xl mt-2 w-3/4"
              >
                <option value="">Select</option>
                <option value="InHouse">In House</option>
                <option value="By Others">By Others</option>
              </select>
            </div>
            <div className="md:flex px-6 gap-2 my-4">
              <h3>Product Age</h3>
              <input
                className="border-1 rounded-lg mt-2 md:mt-0  px-2"
                type="Number"
                onChange={(e) => setProductage(e.target.value)}
              />
            </div>
            <div className="md:flex px-6 gap-1 my-4">
              <h3>Serial Number</h3>
              <input
                className="border-1 rounded-lg mt-2 md:mt-0  px-2"
                type="text"
                onChange={(e) => setSerialNumber(e.target.value)}
              />
            </div>
          </div>
          <div className="md:flex w-full md:px-14 md:mt-8 md:gap-8 px-4 ">
            <h3>Customer Voice</h3>
            <textarea
              onChange={(e) => setCustomerVoice(e.target.value)}
              className="border-1 rounded-xl md:w-6/12 w-3/4 mt-2"
              name=""
              id=""
            ></textarea>
          </div>
        </div>
        <div className="w-full flex justify-center md:mt-8">
          <button className="bg-blue-700 p-2 rounded-xl text-white">
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewRegistration;
