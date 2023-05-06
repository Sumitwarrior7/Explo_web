import React, { useEffect, useState } from 'react';
import HorizontalCard from '../components/homecard';
import FloorCard from '../components/card';
import "./home.css"

function Home() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className='mb-5'>
      <div class="wrapper">
        <section class="hero mb-5">
          <div class="jumbotron jumbotron-fluid ">
            <div class="container mt-5">
              <div class="row justify-content-center text-center">
                <div class="col-md-10 col-lg-6">
                  <h1 className={`display-5 ${visible ? 'fade-in' : ''}`}><b>Welcome to Home</b></h1>

                  <p class="lead">A house is made of walls and beams, a home is built with love and dreams.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="sec-pricing" class="sec-pricing mt-5 py-3">
          <div class="container">
            {/* <h1 class="h4 text-center">Your home only have those floors</h1> */}
            <div class="row justify-content-center">
              <FloorCard device_num="6" appliance="Floor Activities" floor_link="/floor-activities"/>
              <FloorCard device_num="3" appliance="Remote Controlled Activities" floor_link="/remote"/>
              <FloorCard device_num="4" appliance="Heavy Applications" floor_link="/heavy-appliances"/>
              <FloorCard device_num="3" appliance="Security Appliances" floor_link="/security-appliances"/>
              <FloorCard device_num="3" appliance="Virtual Appliances" floor_link="/virtual-appliances"/>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}

export default Home;