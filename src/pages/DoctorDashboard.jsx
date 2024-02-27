import React from 'react'
import DoctorPatient from '../components/Doctor/DoctorPatient'
import AddDrug from '../components/Admin/AddDrug'

const DoctorDashboard = ({contract}) => {
  return (
    <div className=' w-full flex flex-col justify-center items-center mt-24'>
        <DoctorPatient contract={contract}/>
        <AddDrug contract={contract}/>
    </div>
  )
}

export default DoctorDashboard