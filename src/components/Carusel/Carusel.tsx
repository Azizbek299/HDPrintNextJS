"use client";

import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// 2 чи хил карусель размери кичик 50*100
// Бу карусел  about  сахифасида ишлатилади

const Carusel = (props: any) => {
  return (
    <div>
      <Carousel
        swipeable={false}
        draggable={false}
        // showDots={true}
        responsive={props.responsive}
        // ssr={true} // means to render carousel on server-side.
        additionalTransfrom={0}
        arrows={props.arrow}
        autoPlay
        autoPlaySpeed={props.autoPlaySpeed}
        centerMode={false}
        containerClass="container-with-dots"
        customTransition="all 1s linear"
        dotListClass=""
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        transitionDuration={props.transDuration}
      >
        {props?.img?.map((item: any) => {
          return (
            <div key={`${item.text}`} className={`${props.clNameContainer}`}>
              {item.text && (
                <div className={props.clNameImgText}>{item?.text}</div>
              )}
              <Image              
                src={item?.image}
                alt="trust"
                fill
                sizes={`${props.sizes}`}
                className={`${props.clNameImg}`}
              />
            </div>
          );
        })}

        {props?.img2?.map((item: any) => {
          return (
            <div key={`${item.text}`} className={`${props.clNameContainer}`}>
              {item.text && (
                <div className={props.clNameImgText}>{item?.text}</div>
              )}
              <Image              
                src={item?.image}
                alt="trust"
                fill
                sizes={`${props.sizes}`}
                className={`${props.clNameImg}`}
              />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Carusel;
