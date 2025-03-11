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
    description:
      '<b>The Forbidden Door</b> is a spine-chilling horror puzzle game where you step into an abandoned house once used by a coven to summon a demon. As you investigate its dark past, you’ll uncover cryptic clues, solve eerie puzzles, and experience terrifying encounters. But whatever you do — keep the door closed. If it opens, the devil may escape, and there will be no turning back.\n\n' +
      'Will you unravel the mystery, or will you become the next victim of the forbidden ritual?',
    redirectLinks: [
      'echoes-of-madness',
      'echoes-of-maddness',
      'whispers-of-insanity',
    ],
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
      logo: 'assets/img/games/the-forbidden-door/miniatura.webp',
      logoTransparent: 'assets/img/games/the-forbidden-door/logo.webp',
      screenshots: [
        {
          url: 'assets/img/games/the-forbidden-door/screenshots/estatua.webp',
          alt: 'A spooky house with a giant statue of a demon. At the back of the statue, a giant door is opening',
        },
        {
          url: 'assets/img/games/the-forbidden-door/screenshots/fire.webp',
          alt: 'A burning building with a demonic figure in the side',
        },
        {
          url: 'assets/img/games/the-forbidden-door/screenshots/llibre.webp',
          alt: 'A dim room with some books stacked on top of each other',
        },
      ],
    },
    video: {
      shortVideo: 'assets/videos/trailer.mp4',
      trailerYoutubeURL: 'https://youtu.be/Tq2OI6ME04A',
      embed: 'https://www.youtube.com/embed/Tq2OI6ME04A',
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
