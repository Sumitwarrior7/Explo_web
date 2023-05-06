import React from 'react'
import Floor_comp from '../../components/floor_comps/floor_comp';
import alexa_img from "../../components/floor_comps/images/alexa.jpg"
import google_home_img from "../../components/floor_comps/images/google_home.jpg"
import assistant_img from "../../components/floor_comps/images/google_assistant.jpg"

function Virtual() {
  return (
    <div className='m-5'>
      <h1 className="display-5 text-center mt-2"><b>Virtual Appliances</b></h1>
      <div className='row mx-5 mt-4'>
        <Floor_comp device_name="Amazon Alexa" img_src={alexa_img}/>
        <Floor_comp device_name="Google Home" img_src={google_home_img}/>
        <Floor_comp device_name="Assistant" img_src={assistant_img}/>
    </div>
    </div>
  )
}

export default Virtual;