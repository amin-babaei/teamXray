import React from "react";
import { SwiperSlide } from "swiper/react";
import Slider from "./common/Slider";

const Partners = () => {
  return (
    <section className="bg-black py-16">
      <h3 className="text-center text-3xl text-white">Partners</h3>
      <div className="containerr mt-14 contact">
        <Slider>
          <SwiperSlide>
            <div className="flex flex-col opacity-30 scale-75 curent cursor-pointer">
              <img src="/images/pcmod.png" alt="" />
              <p className="text-justify p-5 leading-8">
                PCMOD is a PC company that builds award winning custom PCs for
                gamers, enthusiasts, and professionals. We strive to offer every
                individual customer the best possible PC experience from start
                to finish no matter what PC they have purchased from us. Our
                mission is to create the absolute best custom PCs for every
                individual’s specific wants and needs.{" "}
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col opacity-30 scale-75 curent cursor-pointer">
              <img src="/images/twitch.png" alt="" />
              <p className="p-5 leading-8">
                Twitch is the leading video platform and community for gamers
                with more than 23 million visitors per month. We want to connect
                gamers around the world by allowing them to broadcast, watch,
                and chat from everywhere they play.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col opacity-30 scale-75 curent cursor-pointer">
              <img src="/images/reymit.png" alt="" />
              <p className="p-5 leading-8">
                Reymit is the most widely used platform by streamers to
                receiving donation in MENA region. we offers various features
                and tools that streamers can use to receive and show donation
                while streaming. Since Reymit's foundation in 2018, we helped
                over 50,000 users receive the equivalent of more than 2 million
                dollars, which we are very proud of.
              </p>
            </div>
          </SwiperSlide>
        </Slider>
      </div>
    </section>
  );
}

export default Partners;
