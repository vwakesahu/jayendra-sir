import React from 'react'
import AddDrugForm from '../components/Admin/AddDrug'

const SupplierDashboard = ({contract}) => {
  return (
    <div className=' flex items-center justify-center'>
        <AddDrugForm contract={contract}/>
    </div>
  )
}

export default SupplierDashboard