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
            <h1 class="h4 text-center">Your home only have those floors</h1>
            <div class="row justify-content-center">
              <FloorCard device_num="5" floor="Ground Floor" floor_link="/groundfloor"/>
              <FloorCard device_num="2" floor="First Floor" floor_link="/firstfloor"/>
              <FloorCard device_num="4" floor="Second Floor" floor_link="/secondfloor"/>
              <FloorCard device_num="5" floor="Third Floor" floor_link="/thirdfloor"/>
              <FloorCard device_num="8" floor="Fourth Floor" floor_link="/fourthfloor"/>
              <FloorCard device_num="6" floor="Fifth Floor" floor_link="/fifthfloor"/>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}

export default Home;