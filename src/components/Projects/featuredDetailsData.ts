import { FeaturedDetails } from '../../Types';

const featuredDetails : FeaturedDetails = {
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
    deployment: /*'https://outfit-forecast.vercel.app/'*/ '',
    images: ['Projects/projectImages/outfit.gif'],
    imageClass: '',
    containerClass: '',
    sliderClass: '',
  },

  'klime': {
    type: 'Team Project',
    technologies: ['React Native', 'Cypress', 'RESTful API', 'JavaScript', 'Circle CI'],
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
    deployment: '',
    images: ['Projects/projectImages/klime.gif', 'Projects/projectImages/klime-guide.PNG', 'Projects/projectImages/klime-home.PNG', 'Projects/projectImages/klime-problem.PNG', 'Projects/projectImages/klime-delete.PNG', 'Projects/projectImages/klime-save.PNG'],
    imageClass: 'portraitGif',
    containerClass: 'portrait-container',
    sliderClass: 'portrait-slider',
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
    deployment: 'https://pwa-stretch.vercel.app/',
    images: ['Projects/projectImages/boardgame.gif'],
    imageClass: '',
    containerClass: '',
    sliderClass: '',
  },

  'rancid-tomatillos': {
    type: 'Pair Project',
    technologies: ['React', 'Cypress'],
    description: 'Rancid Tomatillos is a React App that is designed to help movie enthusiasts search for movies, view their details, and rate them. It includes dynamic and asynchronous search functionality and utilizes Cypress for testing purposes.',
    features: [
      {
        feature: 'Movie Search',
        detail: 'Users can search for movies by title. The search functionality is dynamic and asynchronous, providing instant results as the user types.'
      },
      {
        feature: 'Movie Details',
        detail: 'Clicking on a movie in the search results displays detailed information about the selected movie, including the synopsis, release date, director, and ratings.'
      },
      {
        feature: 'Responsive Design',
        detail: 'The app\'s user interface is designed to be responsive and adapt to various screen sizes, ensuring a consistent and enjoyable experience on desktops, tablets, and mobile devices.'
      },
      {
        feature: 'Asynchronous Search',
        detail: 'The app displays movie search results without extra waiting time, allowing users to browse and discover with unparalleled speed.'
      },
      {
        feature: 'Testing with Cypress',
        detail: 'The app includes automated tests using Cypress, a JavaScript-based end-to-end testing framework. These tests ensure that the app functions correctly and reliably.'
      },
    ],
    github: 'https://github.com/Jade-ZS/rancid_tomatillos',
    deployment: 'https://rancid-tomatillos-topaz.vercel.app/',
    images: ['Projects/projectImages/rancid.gif'],
    imageClass: '',
    containerClass: '',
    sliderClass: '',
  },
};

export { featuredDetails };
