
import React from 'react';
import AppointmentShortList from '../AppointmentShortList/AppointmentShortList';

const AppointmentByDate = ({appointments}) => {
    console.log(appointments);
    return (
        <div>
            <h2>AppointmentByDate : {appointments.length}</h2>
            {
                appointments.length ?
                <AppointmentShortList appointments={appointments} ></AppointmentShortList>
               :
               <div className="p-5">
                   <h4 className="lead text-center">No Appointments for this Date</h4>
               </div>
            }
        </div>
    );
};

export default AppointmentByDate;