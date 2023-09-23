import './Projects.css';
import ProjectCard from '../ProjectCard/ProjectCard';
import MiniCard from '../MiniCard/MiniCard';
import { useState } from 'react';

const featuredDetails = {
  'outfit-forecast': {
    type: 'Solo Project',
    technologies: ['React', 'Context API', 'Cypress', 'JavaScript', 'HTML', 'CSS'],
    description: 'Outfit Forecast is a feature-rich web application built with React that empowers fashion-conscious travelers to plan their outfits wisely based on real-time weather forecasts. By seamlessly integrating Google Maps Geocode API and OpenWeather\'s Weather API, users can easily search for weather information in different locations and save preferred destinations for instant weather updates.',
    features: [
      {
        feature: 'Real-Time Weather Forecasts',
        detail: 'Utilize the power of OpenWeather\'s Weather API to fetch accurate and up-to-date weather data for any desired location.'
      },
      {
        feature: 'Location Search',
        detail: 'Users can conveniently search for weather information in various locations using Google Maps Geocode API, making trip planning a breeze.'
      },
      {
        feature: 'Saved Locations',
        detail: 'Allow users to save and unsave preferred locations to receive instant weather updates without having to search repeatedly.'
      },
      {
        feature: 'Responsive Design',
        detail: 'Outfit Forecast boasts a responsive user interface that adapts flawlessly to different devices, ensuring a seamless experience across smartphones, tablets, and desktops.'
      },
      {
        feature: 'Error Handling',
        detail: 'Implemented an error handling page to provide users with a friendly interface in case of any unexpected issues.'
      },
      {
        feature: 'Cypress Testing',
        detail: 'Comprehensive end-to-end testing with Cypress ensures app reliability and robustness.'
      },
    ],
    github: 'https://github.com/Jade-ZS/Outfit_Forecast',
    deploymnet: 'https://vercel.com/jade-zs/outfit-forecast',
    images: [],
  },

  'klime': {
    type: 'Team Project',
    technologies: ['React Native', 'Cypress', 'RESTful API', 'JavaScript'],
    description: 'Klime is a React Native iOS application designed for rock climbers to create and design their own climbing problems by adding circles to existing climbing wall images. With Klime, users can save, name, and select difficulty levels for their climbing problems. Additionally, upcoming features will allow users to upload pictures and edit created problems.',
    features: [
      {
        feature: 'Climbing Problem Design',
        detail: 'Create and design climbing problems by adding circles to climbing wall images.'
      },
      {
        feature: 'Problem Saving',
        detail: 'Save your created problems for future reference.'
      },
      {
        feature: 'Problem Naming',
        detail: 'Give unique names to your climbing problems.'
      },
      {
        feature: 'Difficulty Selection',
        detail: 'Assign difficulty levels to your problems.'
      },
      {
        feature: 'Upcoming Features',
        detail: 'Stay tuned for the ability to upload pictures, edit created problems and other cool features!'
      },
    ],
    github: 'https://github.com/Jade-ZS/klime_fe',
    deploymnet: '',
    images: [],
  },

  'boardgame-gathering': {
    type: 'Team Project',
    technologies: ['React', 'PWA', 'Cypress', 'JavaScript', 'HTML', 'CSS'],
    description: 'Boardgame Gathering offers an extensive collection of both classic and modern board games, big and small. With just a few clicks, users can easily search for games by name or browse through our curated selection of featured games in the pop-out menu. We also offer three carousel options for easy navigation.',
    features: [
      {
        feature: 'Browse Boardgames',
        detail: 'Explore a vast collection of boardgames with ease.'
      },
      {
        feature: 'Asyncronous Search',
        detail: 'Quickly search for specific boardgames using the search functionality.'
      },
      {
        feature: 'Filter Options',
        detail: 'Narrow down your choices by applying filters based on criteria such as genre, player count, or difficulty level.'
      },
      {
        feature: 'Offline Mode',
        detail: 'Boardgame Gathering can be used offline, making it a reliable companion for board game enthusiasts on the go.'
      },
      {
        feature: 'Responsive Design',
        detail: 'The app is designed to work seamlessly on various devices, including desktop and mobile.'
      },
    ],
    github: 'https://github.com/Jade-ZS/Boardgame_Gathering',
    deploymnet: 'https://pwa-stretch.vercel.app/',
    images: [],
  },

  'rancid-tomatillos': {
    type: 'Pair Project',
    technologies: ['React', 'Cypress'],
    description: '',
    github: 'https://github.com/Jade-ZS/rancid_tomatillos',
    deploymnet: 'https://rancid-tomatillos-topaz.vercel.app/',
    images: [],
  },
};

export default function Projects() {
  const [expand, setExpand] = useState(false);
  const [hover, setHover] = useState(false);
  const [clicked, setClicked] = useState(false);
  const toggleExpand = () => {
    setExpand(prev => !prev);
    setClicked(prev => !prev);
  };
  const toggleHover = () => {
    setHover(prev => !prev);
  };
  const toggleFilled = () => {
    if (hover && !clicked || !hover && clicked) {
      return 'arrow-right-filled';
    } else {
      return 'arrow-right';
    }
  };

  const description = 'Lorem ipsum dolor sit amet,  Integer quis auctor elit sed vulputate mi sit amet mauris.';
  return (
    <div className='projects-container' id='projects'>
      <div style={{ height: '2rem' }} />
      <h1 className='portfolio-header'>Projects</h1>
      <ProjectCard
        projectName='Outfit Forecast'
        description={'A React application that allows users to search simultaneous weather by location and get outfit recommendations'}
        imgName='weather-bg'
      />
      <ProjectCard
        projectName='Klime'
        description={'A React Native iOS mobile app that allows users to create and design their own climbing problems by photo-editing'}
        imgName='klime-bg'
      />
      <ProjectCard
        projectName='Boardgame Gathering'
        description={'A Progressive Web Application that allows users to search and browse through a selection of featured games'}
        imgName='game-bg'
      />
      <ProjectCard
        projectName='Rancid Tomatillos'
        description={'A React application designed to help movie enthusiasts search for movies, view their details, and rate them.'}
        imgName='movie-bg'
      />
      <div className='more-projects'>
        <div className='expand-bar'>
          <h4>{expand ? 'HIDE' : 'VIEW'} MORE PROJECTS</h4>
          <img
            onClick={toggleExpand}
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}
            className={`arrow-icon ${(expand && 'toRight')}`}
            src={require(`../../Assets/${toggleFilled()}.png`)}
            alt='arrow'
          />
        </div>
        <div className={`accordion ${!expand && 'hidden'}`}>
          <MiniCard />
          <MiniCard />
          <MiniCard />
          <MiniCard />
          <MiniCard />
          <MiniCard />
          <MiniCard />
          <MiniCard />
          <MiniCard />
          <MiniCard />
          <MiniCard />
          <MiniCard />
          <MiniCard />
          <MiniCard />

        </div>
      </div>
    </div>
  );
}