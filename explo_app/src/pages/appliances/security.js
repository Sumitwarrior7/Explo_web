import React from 'react'
import Floor_comp from '../../components/floor_comps/floor_comp';
import room_lock_img from "../../components/floor_comps/images/room_lock.jpg"
import main_door_img from "../../components/floor_comps/images/main_door.jpg"
import gate_img from "../../components/floor_comps/images/gate.jpg"

function Security() {
  return (
    <div className='m-5'>
      <h1 className="display-5 text-center mt-2"><b>Security Appliances</b></h1>
      <div className='row mx-5 mt-4'>
        <Floor_comp device_name="Room Lock" img_src={room_lock_img}/>
        <Floor_comp device_name="Main Door" img_src={main_door_img}/>
        <Floor_comp device_name="Gate" img_src={gate_img}/>
    </div>
    </div>
  )
}

export default Security;