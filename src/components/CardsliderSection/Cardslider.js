// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import service_dedical_img from "../../images/service_medical_img1.jpg";
import service_family_img from "../../images/service_family_img2.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Cardslider.css";
import {useState} from "react";

// import required modules
import {Autoplay, Pagination, Navigation } from "swiper"; 
export default function CardSlider() {
  const [size, setsize] = useState (4);
  const resizefun = () =>{
    if(window.innerWidth > 700 ){
      setsize(4);
    }
    else{
      setsize(1);
    }
  }
 window.addEventListener("resize",resizefun)
  return (
    <>    
               <h1 className="blog-title">Our Latest Blog Posts</h1>

      <Swiper
        slidesPerView={size}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[ Autoplay,Pagination, Navigation]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="mySwiper" id="blogs"
      >

        <SwiperSlide>
                <div className="card">
                    <img src={service_dedical_img } alt="card images" />
                    <div className="card_title">
                    <span>March 18, 2021</span>
                     <p>Your Go-To Guide for Volunteering with Seniors.</p>
                      <a  href="/" className="link_title">See Details</a>
                    </div>
                </div>                     
        </SwiperSlide>
        <SwiperSlide>
                <div className="card">
                    <img src={service_family_img} alt="card images" />
                    <div className="card_title">
                    <span>March 18, 2021</span>
                     <p>Your Go-To Guide for Volunteering with Seniors.</p>
                      <a  href="/" className="link_title">See Details</a>
                    </div>
                </div>                     
        </SwiperSlide>
        <SwiperSlide>
                <div className="card">
                    <img src={service_dedical_img } alt="card images" />
                    <div className="card_title">
                    <span>March 18, 2021</span>
                     <p>Your Go-To Guide for Volunteering with Seniors.</p>
                      <a  href="/" className="link_title">See Details</a>
                    </div>
                </div>                     
        </SwiperSlide>
        <SwiperSlide>
                <div className="card">
                    <img src={service_family_img} alt="card images" />
                    <div className="card_title">
                    <span>March 18, 2021</span>
                     <p>Your Go-To Guide for Volunteering with Seniors.</p>
                      <a  href="/" className="link_title">See Details</a>
                    </div>
                </div>                     
        </SwiperSlide>
        <SwiperSlide>
                <div className="card">
                    <img src={service_dedical_img } alt="card images" />
                    <div className="card_title">
                    <span>March 18, 2021</span>
                     <p>Your Go-To Guide for Volunteering with Seniors.</p>
                      <a  href="/" className="link_title">See Details</a>
                    </div>
                </div>                     
        </SwiperSlide>
        <SwiperSlide>
                <div className="card">
                    <img src={service_family_img} alt="card images" />
                    <div className="card_title">
                    <span>March 18, 2021</span>
                     <p>Your Go-To Guide for Volunteering with Seniors.</p>
                      <a  href="/" className="link_title">See Details</a>
                    </div>
                </div>                     
        </SwiperSlide>
        <SwiperSlide>
                <div className="card">
                    <img src={service_dedical_img } alt="card images" />
                    <div className="card_title">
                    <span>March 18, 2021</span>
                     <p>Your Go-To Guide for Volunteering with Seniors.</p>
                      <a  href="/" className="link_title">See Details</a>
                    </div>
                </div>                     
        </SwiperSlide>
        <SwiperSlide>
                <div className="card">
                    <img src={service_family_img} alt="card images" />
                    <div className="card_title">
                      <span>March 18, 2021</span>
                     <p>Your Go-To Guide for Volunteering with Seniors.</p>
                      <a  href="/" className="link_title">See Details</a>
                    </div>
                </div>                     
        </SwiperSlide>
         
    
    
      </Swiper>
    </>
  );
}
