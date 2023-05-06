import React from 'react'
import "./card.css"
import { BsFillForwardFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'



function FloorCard({ floor, device_num, floor_link }) {
    return (
        <div class="col-md-4 my-4">
            <div class="card text-center py-3 px-4">
                <div class="card-block">
                    <h4 class="card-title h4">{floor}</h4>

                    <h5 class="card-title h6" style={{fontWeight:"400"}}>{device_num} devices</h5>

                    <p class="card-text mt-3">
                        Floor contains all the devices which are connected to the internet, and can be used via web application
                    </p>

                    <Link to={floor_link} style={{backgroundColor:"#84f7b3", color:"white"}} className="btn mt-4 py-1 px-3 click-button">
                        <BsFillForwardFill size={25} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default FloorCard;