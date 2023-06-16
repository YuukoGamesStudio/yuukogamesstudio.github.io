export enum Platform {
  PS4 = 'PlayStation 4',
  PS5 = 'PlayStation 5',
  PC = 'PC',
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
    pegi?: string;
    platforms: Platform[];
    controls: Control[];
  };
  images: {
    logo: string;
    logoTransparent: string;
    screenshots: {
      url: string;
      alt: string;
    }[];
  };
  video: {
    trailerYoutubeURL: string;
    shortVideo: string;
    embed: string;
  };
  externalLink: string;
}

export const GAMES: Game[] = [
  {
    id: 'echoes-of-madness',
    name: 'Echoes of Madness',
    description:
      'Echoes of Madness is a spine-chilling horror game that will embark you into a terrifying and majestic experience. Set in a desolate and foreboding environment, the game combines elements of psychological horror and puzzle to create a truly immersive gameplay.\n\n' +
      "Prepare yourself for an unforgettable journey into the depths of madness, where your wits and sanity will be tested at every turn. Echoes of Madness is a game that will leave you questioning your own perception of reality and lingering in your thoughts long after you've finished playing.",
    extraInfo: {
      title: 'Echoes of Madness',
      genre: 'Psychological Puzzle Horror',
      developer: 'Yuuko Games Studio',
      publisher: 'Yuuko Games Studio',
      production: 'Yuuko Games Studio',
      pegi: 'TBC',
      platforms: [Platform.PC],
      controls: [Control.KeyboardAndMouse, Control.ControllerAny],
    },
    images: {
      logo: 'assets/img/games/echoes-of-madness/miniatura.png',
      logoTransparent: 'assets/img/games/echoes-of-madness/logo.png',
      screenshots: [
        {
          url: 'assets/img/games/echoes-of-madness/screenshots/car.png',
          alt: 'A police truck parked on the side of a road at night',
        },
        {
          url: 'assets/img/games/echoes-of-madness/screenshots/house.png',
          alt: 'A spooky house with lights open with two statues guarding the entrance',
        },
        {
          url: 'assets/img/games/echoes-of-madness/screenshots/grave.png',
          alt: 'A graveyard outside the house with creepy trees',
        },
      ],
    },
    video: {
      shortVideo: 'assets/videos/trailer.mp4',
      trailerYoutubeURL: 'https://youtu.be/LID7j7g_H04',
      embed: 'https://www.youtube.com/embed/LID7j7g_H04',
    },
    externalLink: 'https://yuukogames.itch.io/echoes-of-madness',
  },
];
