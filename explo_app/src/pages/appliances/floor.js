import React from 'react'
import Floor_comp from '../../components/floor_comps/floor_comp';
import fan_img from "../../components/floor_comps/images/fan.jpg"
import ac_img from "../../components/floor_comps/images/ac.jpg"
import heater_img from "../../components/floor_comps/images/heater.jpg"
import light_img from "../../components/floor_comps/images/light.jpg"
import door_img from "../../components/floor_comps/images/door.jpg"
import curtain_img from "../../components/floor_comps/images/curtain.jpg"
import window_img from "../../components/floor_comps/images/window.jpg"
import lamp_img from "../../components/floor_comps/images/lamp.jpg"


function Floor() {
  return (
    <div className='m-5'>
      <h1 className="display-5 text-center mt-2"><b>Floor Activities</b></h1>
      <div className='row mx-5 mt-4'>
        <Floor_comp device_name="Door" img_src={door_img}/>
        <Floor_comp device_name="Window" img_src={window_img}/>
        <Floor_comp device_name="Curtain" img_src={curtain_img}/>
        <Floor_comp device_name="Light" img_src={light_img}/>
        <Floor_comp device_name="Fan" img_src={fan_img}/>
        <Floor_comp device_name="Lamp" img_src={lamp_img}/>
    </div>
    </div>
  )
}

export default Floor;