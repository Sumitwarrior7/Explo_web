import React from 'react'
import Floor_comp from '../../components/floor_comps/floor_comp';
import speaker_img from "../../components/floor_comps/images/speaker.jpg"
import ac_img from "../../components/floor_comps/images/ac.jpg"
import tv_img from "../../components/floor_comps/images/tv.jpg"

function Remote() {
  return (
    <div className='m-5'>
      <h1 className="display-5 text-center mt-2"><b>Remote Controlled Activities</b></h1>
      <div className='row mx-5 mt-4'>
        <Floor_comp device_name="Air Conditioner" img_src={ac_img}/>
        <Floor_comp device_name="Television" img_src={tv_img}/>
        <Floor_comp device_name="Speaker" img_src={speaker_img}/>
    </div>
    </div>
  )
}

export default Remote;