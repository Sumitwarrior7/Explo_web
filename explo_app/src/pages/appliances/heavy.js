import React from 'react'
import Floor_comp from '../../components/floor_comps/floor_comp';
import washing_machine_img from "../../components/floor_comps/images/washing_machine.jpg"
import refrigerator_img from "../../components/floor_comps/images/refrigerator.jpg"
import vaccum_cleaner_img from "../../components/floor_comps/images/vaccum_cleaner.jpg"
import gas_connection_img from "../../components/floor_comps/images/gas_connection.jpg"

function Heavy() {
  return (
    <div className='m-5'>
      <h1 className="display-5 text-center mt-2"><b>Heavy Appliances</b></h1>
      <div className='row mx-5 mt-4'>
        <Floor_comp device_name="Washing Machine" img_src={washing_machine_img}/>
        <Floor_comp device_name="Refrigerator" img_src={refrigerator_img}/>
        <Floor_comp device_name="Vaccum Cleaner" img_src={vaccum_cleaner_img}/>
        <Floor_comp device_name="Gas Connection" img_src={gas_connection_img}/>
    </div>
    </div>
  )
}

export default Heavy;