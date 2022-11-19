import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import React, {useState } from "react";
import Loading from "../../Shared/loading/Loading";
import BookingModal from "../BookingModal/BookingModal";
import AppointmentOption from "./AppointmentOption";

const AvailableAppointments = ({ selectedDate }) => {
//   const [appointmentOptions, setAppointmentOptions] = useState([]);
  const [treatment, setTreatment] = useState(null);
  const date = format(selectedDate, 'PP');

  const {data:appointmentOptions=[], refetch, isLoading} = useQuery({
    queryKey: ["appointmentOptions", date],


    // 1. normal fetch dia data load 
    // queryFn: () =>
    //   fetch("http://localhost:5000/appointmentOptions").then((res) =>
    //     res.json()
    //   ),


    // 2. async function dia data load 
    queryFn: async()=> {
        const res = await fetch(`http://localhost:5000/appointmentOptions?date=${date}`)
        const data = res.json();
        return data;
    }


  });

//   // mongodb data fetch
//   useEffect(() => {
//     fetch("http://localhost:5000/appointmentOptions")
//       .then((res) => res.json())
//       .then((data) => setAppointmentOptions(data));
//   }, []);

if(isLoading){
    return <Loading/>
}

  return (
    <section className="my-16">
      <p className="text-center text-secondary font-bold">
        Available Appointments on {format(selectedDate, "PP")}
      </p>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6">
        {appointmentOptions.map((option) => (
          <AppointmentOption
            key={option._id}
            appointmentOption={option}
            setTreatment={setTreatment}
          ></AppointmentOption>
        ))}
      </div>
      {treatment && (
        <BookingModal
          selectedDate={selectedDate}
          treatment={treatment}
          setTreatment={setTreatment}
          refetch={refetch}
        ></BookingModal>
      )}
    </section>
  );
};

export default AvailableAppointments;
