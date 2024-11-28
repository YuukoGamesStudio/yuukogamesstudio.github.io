export enum Platform {
  PS4 = 'PlayStation 4',
  PS5 = 'PlayStation 5',
  ItchIo = 'Itch.io',
  Steam = 'Steam',
  GOG = 'GOG',
  XboxOne = 'Xbox One',
  XboxSeriesX = 'Xbox Series X',
  NintendoSwitch = 'Nintendo Switch',
  iOS = 'iOS',
  Android = 'Android',
}

export enum Control {
  KeyboardAndMouse = 'Keyboard and Mouse',
  ControllerAny = 'Any Controller',
  PSController = 'PlayStation Controller',
  SwitchController = 'Nintendo Switch Controller',
  XboxController = 'Xbox Controller',
  SteamController = 'Steam Controller',
  OculusTouch = 'Oculus Touch',
  DualSense = 'DualSense Controller',
  JoyCon = 'Joy-Con',
  ProController = 'Nintendo Switch Pro Controller',
}

export interface Screenshot {
  url: string;
  alt: string;
}

export interface Game {
  id: string;
  name: string;
  description: string;
  extraInfo: {
    title: string;
    genre: string;
    developer: string;
    publisher: string;
    production: string;
    releaseDate?: Date;
    pegi: string;
    platforms: Platform[];
    controls: Control[];
  };
  images: {
    logo: string;
    logoTransparent: string;
    screenshots: Screenshot[];
  };
  video: {
    trailerYoutubeURL: string;
    shortVideo: string;
    embed: string;
  };
  externalLink: string;
  otherLinks: {
    text: string;
    url: string;
    imageUrl: string;
  }[];
}

export const GAMES: Game[] = [
  {
    id: 'whispers-of-insanity',
    name: 'Whispers of Insanity',
    description:
      '<b>Whispers of Insanity</b> is a spine-chilling horror game that will embark you into a terrifying and majestic experience. Set in a desolate and foreboding environment, the game combines elements of psychological horror and puzzle to create a truly immersive gameplay.\n\n' +
      "Prepare yourself for an unforgettable journey into the depths of insanity, where your wits and sanity will be tested at every turn. <b>Whispers of Insanity</b> is a game that will leave you questioning your own perception of reality and lingering in your thoughts long after you've finished playing.",
    extraInfo: {
      title: 'Whispers of Insanity',
      genre: 'Psychological Puzzle Horror',
      developer: 'Yuuko Games Studio',
      publisher: 'Yuuko Games Studio',
      production: 'Yuuko Games Studio',
      pegi: 'TBC',
      platforms: [Platform.Steam, Platform.ItchIo],
      controls: [Control.KeyboardAndMouse, Control.ControllerAny],
    },
    images: {
      logo: 'assets/img/games/whispers-of-insanity/miniatura.png',
      logoTransparent: 'assets/img/games/whispers-of-insanity/logo.png',
      screenshots: [
        {
          url: 'assets/img/games/whispers-of-insanity/screenshots/estatua.png',
          alt: 'A spooky house with a giant statue of a demon. At the back of the statue, a giant door is opening',
        },
        {
          url: 'assets/img/games/whispers-of-insanity/screenshots/fire.png',
          alt: 'A burning building with a demonic figure in the side',
        },
        {
          url: 'assets/img/games/whispers-of-insanity/screenshots/llibre.png',
          alt: 'A dim room with some books stacked on top of each other',
        },
        {
          url: 'assets/img/games/whispers-of-insanity/screenshots/car.png',
          alt: 'A police truck parked on the side of a road at night',
        },
        {
          url: 'assets/img/games/whispers-of-insanity/screenshots/house.png',
          alt: 'A spooky house with lights open with two statues guarding the entrance',
        },
        {
          url: 'assets/img/games/whispers-of-insanity/screenshots/grave.png',
          alt: 'A graveyard outside the house with creepy trees',
        },
      ],
    },
    video: {
      shortVideo: 'assets/videos/trailer.mp4',
      trailerYoutubeURL: 'https://youtu.be/LID7j7g_H04',
      embed: 'https://www.youtube.com/embed/LID7j7g_H04',
    },
    externalLink: 'https://yuukogames.itch.io/whispers-of-insanity',
    otherLinks: [
      {
        text: 'Itch.io',
        url: 'https://yuukogames.itch.io/whispers-of-insanity',
        imageUrl: 'assets/img/socials/itch-io.svg',
      },
      {
        text: 'Website',
        url: 'https://yuukogamesstudio.github.io/games/whispers-of-insanity',
        imageUrl: 'assets/img/socials/website.svg',
      },
    ],
  },
];
