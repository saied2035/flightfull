import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import Airline from './airline/airline';

const AirlineList = () => {
  const staticAirlineList = [
    {
      name: 'Singapore Airlines',
      description: 'To us, travel is more than just being in motion. It’s being in with innovation.',
      imgSrc: 'https://logowik.com/content/uploads/images/singapore-airlines9257.jpg',
      fee: '500',
      optionToPurchase: '700',
      totalAmountPayable: '10000',
      socialMedia: [
        { url: 'https://www.facebook.com/singaporeair', image: FaFacebookF, name: 'facebook' },
        { url: 'https://twitter.com/singaporeair', image: FaTwitter, name: 'twitter' },
        { url: 'https://www.linkedin.com/company/singapore-airlines/', image: FaLinkedinIn, name: 'linkedin' },
      ],
    },
    {
      name: 'Qatar Airways',
      description: 'A multiple award-winning airline, Qatar Airways was announced as the ‘Airline of the Year’ at the 2022 World Airline Awards',
      imgSrc: 'https://logowik.com/content/uploads/images/541_qatarairways.jpg',
      fee: '300',
      optionToPurchase: '500',
      totalamountPayable: '8000',
      socialMedia: [
        { url: 'https://www.facebook.com/qatarairways', image: FaFacebookF, name: 'facebook' },
        { url: 'https://twitter.com/qatarairways', image: FaTwitter, name: 'twitter' },
        { url: 'https://www.linkedin.com/company/qatar-airways/', image: FaLinkedinIn, name: 'linkedin' },
      ],
    },
    {
      name: 'Emirates',
      description: 'Emirates connects the world to, and through, our global hub in Dubai.',
      imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Emirates_logo.svg/967px-Emirates_logo.svg.png',
      fee: '200',
      optionToPurchase: '400',
      totalamountPayable: '6000',
      socialMedia: [
        { url: 'https://www.facebook.com/Emirates/', image: FaFacebookF, name: 'facebook' },
        { url: 'https://twitter.com/emirates', image: FaTwitter, name: 'twitter' },
        { url: 'https://www.linkedin.com/company/emirates/', image: FaLinkedinIn, name: 'linkedin' },
      ],
    },
  ];
  return staticAirlineList.map((airline) => (
    <Airline
      key={airline.name}
      name={airline.name}
      description={airline.description}
      imgSrc={airline.imgSrc}
      socialMedia={airline.socialMedia}
    />
  ));
};

export default AirlineList;
