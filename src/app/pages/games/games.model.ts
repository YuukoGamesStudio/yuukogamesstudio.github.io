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
  redirectLinks: string[];
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
    id: 'the-forbidden-door',
    name: 'The Forbidden Door',
    description: '<b>The Forbidden Door</b> is a spine-chilling horror puzzle game where you step into an abandoned house once used by a coven to summon a demon. As you investigate its dark past, you’ll uncover cryptic clues, solve eerie puzzles, and experience terrifying encounters. But whatever you do — keep the door closed. If it opens, the devil may escape, and there will be no turning back.\n\n' +
    'Will you unravel the mystery, or will you become the next victim of the forbidden ritual?',
    redirectLinks: ['echoes-of-madness', 'echoes-of-maddness', 'whispers-of-insanity'],
    extraInfo: {
      title: 'The Forbidden Door',
      genre: 'Psychological Puzzle Horror',
      developer: 'Yuuko Games Studio',
      publisher: 'Yuuko Games Studio',
      production: 'Yuuko Games Studio',
      platforms: [Platform.ItchIo],
      controls: [Control.KeyboardAndMouse],
    },
    images: {
      logo: 'assets/img/games/the-forbidden-door/miniatura.png',
      logoTransparent: 'assets/img/games/the-forbidden-door/logo.png',
      screenshots: [
        {
          url: 'assets/img/games/the-forbidden-door/screenshots/estatua.png',
          alt: 'A spooky house with a giant statue of a demon. At the back of the statue, a giant door is opening',
        },
        {
          url: 'assets/img/games/the-forbidden-door/screenshots/fire.png',
          alt: 'A burning building with a demonic figure in the side',
        },
        {
          url: 'assets/img/games/the-forbidden-door/screenshots/llibre.png',
          alt: 'A dim room with some books stacked on top of each other',
        },
        {
          url: 'assets/img/games/the-forbidden-door/screenshots/car.png',
          alt: 'A police truck parked on the side of a road at night',
        },
        {
          url: 'assets/img/games/the-forbidden-door/screenshots/house.png',
          alt: 'A spooky house with lights open with two statues guarding the entrance',
        },
        {
          url: 'assets/img/games/the-forbidden-door/screenshots/grave.png',
          alt: 'A graveyard outside the house with creepy trees',
        },
      ],
    },
    video: {
      shortVideo: 'assets/videos/trailer.mp4',
      trailerYoutubeURL: 'https://youtu.be/LID7j7g_H04',
      embed: 'https://www.youtube.com/embed/LID7j7g_H04',
    },
    externalLink: 'https://yuukogames.itch.io/the-forbidden-door',
    otherLinks: [
      {
        text: 'Itch.io',
        url: 'https://yuukogames.itch.io/the-forbidden-door',
        imageUrl: 'assets/img/socials/itch-io.svg',
      },
      {
        text: 'Website',
        url: 'https://yuukogamesstudio.github.io/games/the-forbidden-door',
        imageUrl: 'assets/img/socials/website.svg',
      },
    ],
  },
];
