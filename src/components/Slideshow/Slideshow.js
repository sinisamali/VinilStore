import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const Slideshow = () => {
  return (

      <Carousel autoPlay={true} showThumbs={false} infiniteLoop={true} showIndicators={false} swipeable={true} showStatus={false}>
                <div>
                    <img style={{height: "400px"}} className="slideImg" src="https://media.inquirer.com/storage/inquirer/projects/year-in-pictures-2019/photos/POY2019_RedC.JPG" alt="picture1" />
                </div>
                <div>
                    <img style={{height: "400px"}} className="slideImg" src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="picture2" />
                </div>
                <div>
                    <img style={{height: "400px"}} className="slideImg" src="https://media.inquirer.com/storage/inquirer/projects/year-in-pictures-2019/photos/POY2019_RedC.JPG" alt="picture3" />
                </div>
            </Carousel>

  )

}
export default Slideshow