import { useState, useEffect } from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import Navbar from '../navbar/navbar';
import PreviousArrow from './previousArrow/previousArrow';
import NextArrow from './nextArrow/nextArrow';
import AirlinesContainer from './airlinesContainer/airlinesContainer';

const HomePage = () => {
  const [slide, setSlide] = useState(0);
  const staticAirlineList = [
    {
      name: 'Singapore Airlines',
      description: 'To us, travel is more than just being in motion. It’s being in with innovation.',
      imgSrc: 'https://logowik.com/content/uploads/images/singapore-airlines9257.jpg',
      fee: 500,
      optionToPurchase: 700,
      totalAmountPayable: 10000,
      socialMedia: [
        { url: 'https://www.facebook.com/singaporeair', image: FaFacebookF, name: 'facebook' },
        { url: 'https://twitter.com/singaporeair', image: FaTwitter, name: 'twitter' },
        { url: 'https://www.linkedin.com/company/singapore-airlines', image: FaLinkedinIn, name: 'linkedin' },
      ],
    },
    {
      name: 'Qatar Airways',
      description: 'A multiple award-winning airline, Qatar Airways was announced as the ‘Airline of the Year’ at the 2022 World Airline Awards',
      imgSrc: 'https://logowik.com/content/uploads/images/541_qatarairways.jpg',
      fee: 300,
      optionToPurchase: 500,
      totalamountPayable: 8000,
      socialMedia: [
        { url: 'https://www.facebook.com/qatarairways', image: FaFacebookF, name: 'facebook' },
        { url: 'https://twitter.com/qatarairways', image: FaTwitter, name: 'twitter' },
        { url: 'https://www.linkedin.com/company/qatar-airways', image: FaLinkedinIn, name: 'linkedin' },
      ],
    },
    {
      name: 'Emirates',
      description: 'Emirates connects the world to, and through, our global hub in Dubai.',
      imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Emirates_logo.svg/967px-Emirates_logo.svg.png',
      fee: 200,
      optionToPurchase: 400,
      totalamountPayable: 6000,
      socialMedia: [
        { url: 'https://www.facebook.com/Emirates', image: FaFacebookF, name: 'facebook' },
        { url: 'https://twitter.com/emirates', image: FaTwitter, name: 'twitter' },
        { url: 'https://www.linkedin.com/company/emirates', image: FaLinkedinIn, name: 'linkedin' },
      ],
    },
    {
      name: 'Turkish Airlines',
      description: 'Customer satisfaction is our top priority and we put the utmost care into ensuring that your journey runs as smoothly as possible.',
      imgSrc: 'https://logos-world.net/wp-content/uploads/2020/03/Turkish-Airlines-Logo.png',
      fee: 100,
      optionToPurchase: 300,
      totalamountPayable: 5000,
      socialMedia: [
        { url: 'https://www.facebook.com/TurkishAirlinesME', image: FaFacebookF, name: 'facebook' },
        { url: 'https://twitter.com/TurkishAirlines', image: FaTwitter, name: 'twitter' },
        { url: 'https://www.linkedin.com/company/turkish-airlines', image: FaLinkedinIn, name: 'linkedin' },
      ],
    },
    {
      name: 'Air France',
      description: 'Air France turns the flight into a moment of real pleasure in all its daily operations. Air France operates 1,500 daily flights in France, Europe and worldwide.',
      imgSrc: 'https://logos-world.net/wp-content/uploads/2020/03/Air-France-Logo.png',
      fee: 80,
      optionToPurchase: 250,
      totalamountPayable: 4500,
      socialMedia: [
        { url: 'https://www.facebook.com/airfrance', image: FaFacebookF, name: 'facebook' },
        { url: 'https://twitter.com/AirFrance', image: FaTwitter, name: 'twitter' },
        { url: 'https://www.linkedin.com/company/air-france', image: FaLinkedinIn, name: 'linkedin' },
      ],
    },
    {
      name: 'Cathay Pacific Airways',
      description: 'From a single plane to a world-leading airline and premium lifestyle brand, we celebrate the highlights of our journey so far.',
      imgSrc: 'https://logos-world.net/wp-content/uploads/2023/01/Cathay-Pacific-Logo.png',
      fee: 75,
      optionToPurchase: 200,
      totalamountPayable: 3000,
      socialMedia: [
        { url: 'https://www.facebook.com/cathaypacific', image: FaFacebookF, name: 'facebook' },
        { url: 'https://twitter.com/cathaypacific', image: FaTwitter, name: 'twitter' },
        { url: 'https://www.linkedin.com/company/cathay-pacific', image: FaLinkedinIn, name: 'linkedin' },
      ],
    },
    {
      name: 'EVA Air',
      description: 'Big Ideas, Attention to Smallest Details',
      imgSrc: 'https://logos-download.com/wp-content/uploads/2016/05/EVA_Air_logo_logotype.png',
      fee: 70,
      optionToPurchase: 150,
      totalamountPayable: 2500,
      socialMedia: [
        { url: 'https://www.facebook.com/evaairwayscorpen', image: FaFacebookF, name: 'facebook' },
        { url: 'https://twitter.com/EVAAirUS', image: FaTwitter, name: 'twitter' },
        { url: 'https://www.linkedin.com/company/eva-airways', image: FaLinkedinIn, name: 'linkedin' },
      ],
    },
    {
      name: 'Korean Air',
      description: 'To be a Respected Leader in the World Airline Community',
      imgSrc: 'https://logos-download.com/wp-content/uploads/2016/03/Korean_Air_website_logotype.png',
      fee: 65,
      optionToPurchase: 100,
      totalamountPayable: 2000,
      socialMedia: [
        { url: 'https://www.facebook.com/KoreanAir.global', image: FaFacebookF, name: 'facebook' },
        { url: 'https://twitter.com/koreanair_ke', image: FaTwitter, name: 'twitter' },
        { url: 'https://www.linkedin.com/company/korean-air', image: FaLinkedinIn, name: 'linkedin' },
      ],
    },
  ];
  const { length } = staticAirlineList;
  const resizeObserver = new ResizeObserver((entries) => {
    const entry = entries[0];
    if (entry.contentRect.width >= 1536) {
      return slide > length - 4 ? setSlide(length - 4) : setSlide(slide);
    }
    if (entry.contentRect.width >= 1024) {
      return slide > length - 3 ? setSlide(length - 3) : setSlide(slide);
    }
    if (entry.contentRect.width >= 900) {
      return slide > length - 2 ? setSlide(length - 2) : setSlide(slide);
    }
    return slide > length - 1 ? setSlide(length - 1) : setSlide(slide);
  });
  useEffect(() => {
    const pageContainer = document.querySelector('#page-container');
    resizeObserver.observe(pageContainer);
  }, [slide]);
  return (
    <main id="page-container" className="flex max-h-screen h-screen max-w-[100vw]">
      <Navbar />
      <section className="flex flex-col flex-auto">
        <h1 className="[word-spacing:4px] flex flex-col gap-y-2 justify-end text-center text-4xl tracking-wide font-bold basis-32 self-center font-['Repo']">
          Top Airlines
          <span className="text-xs tracking-wider text-[#b9b9b9]">Please select an Airline</span>
        </h1>
        <hr className="border-0 border-b-2 border-dotted w-28 mx-auto my-8 mb-10" />
        <div className="max-[250px]:relative static w-[100vw] sm:w-full mx-auto flex-auto gap-x-3 flex justify-center">
          <PreviousArrow setSlide={setSlide} slide={slide} />
          <AirlinesContainer staticAirlineList={staticAirlineList} slide={slide} length={length} />
          <NextArrow setSlide={setSlide} slide={slide} />
        </div>
      </section>
    </main>
  );
};

export default HomePage;
