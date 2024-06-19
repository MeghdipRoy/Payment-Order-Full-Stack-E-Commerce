import React, { useEffect, useState } from 'react';
import image1 from '../assest/banner/img1.webp';
import image2 from '../assest/banner/img2.jpg';
import image3 from '../assest/banner/img3.webp';
import image4 from '../assest/banner/img4.jpg';
import image5 from '../assest/banner/img5.jpg';
import image6 from '../assest/banner/img6.webp';
import image7 from '../assest/banner/img7.jpg';
import image8 from '../assest/banner/img8.webp';
import image9 from '../assest/banner/img9.jpg';

import image1Mobile from '../assest/banner/img1_mobile.webp';
import image2Mobile from '../assest/banner/img2_mobile.jpg';
import image3Mobile from '../assest/banner/img3_mobile.jpg';
import image4Mobile from '../assest/banner/img4_mobile.png';
import image5Mobile from '../assest/banner/img5_mobile.jpg';

import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

const BannerProduct = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const desktopImages = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9
  ];

  const mobileImages = [
    image1Mobile,
    image2Mobile,
    image3Mobile,
    image4Mobile,
    image5Mobile,
  ];

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const images = isMobile ? mobileImages : desktopImages;
      if (images.length - 1 > currentImage) {
        setCurrentImage((prev) => prev + 1);
      } else {
        setCurrentImage(0);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [currentImage, isMobile]);

  const nextImage = () => {
    const images = isMobile ? mobileImages : desktopImages;
    if (images.length - 1 > currentImage) {
      setCurrentImage((prev) => prev + 1);
    } else {
      setCurrentImage(0);
    }
  };

  const prevImage = () => {
    if (currentImage !== 0) {
      setCurrentImage((prev) => prev - 1);
    }
  };

  const imagesToShow = isMobile ? mobileImages : desktopImages;

  return (
    <div className='container mx-auto px-4 rounded'>
      <div className='h-56 md:h-72 w-full bg-slate-200 relative'>
        <div className='absolute z-10 h-full w-full md:flex items-center hidden'>
          <div className='flex justify-between w-full text-2xl'>
            <button onClick={prevImage} className='bg-white shadow-md rounded-full p-1'>
              <FaAngleLeft />
            </button>
            <button onClick={nextImage} className='bg-white shadow-md rounded-full p-1'>
              <FaAngleRight />
            </button>
          </div>
        </div>

        {/* Desktop and tablet version */}
        <div className='hidden md:flex h-full w-full overflow-hidden'>
          {imagesToShow.map((imageURL, index) => (
            <div className='w-full h-full min-w-full min-h-full transition-all' key={index}>
              <img
                src={imageURL}
                className='w-full h-full'
                style={{ transform: `translateX(-${currentImage * 100}%)` }}
                alt={`Banner ${index}`}
              />
            </div>
          ))}
        </div>

        {/* Mobile version */}
        <div className='flex h-full w-full overflow-hidden md:hidden'>
          {imagesToShow.map((imageURL, index) => (
            <div className='w-full h-full min-w-full min-h-full transition-all' key={index}>
              <img
                src={imageURL}
                className='w-full h-full object-cover'
                style={{ transform: `translateX(-${currentImage * 100}%)` }}
                alt={`Banner ${index}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BannerProduct;
