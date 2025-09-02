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
  Mouse = 'Mouse',
  ControllerAny = 'Any Controller',
  PSController = 'PlayStation Controller',
  SwitchController = 'Nintendo Switch Controller',
  XboxController = 'Xbox Controller',
  SteamController = 'Steam Controller',
  OculusTouch = 'Oculus Touch',
  DualSense = 'DualSense Controller',
  JoyCon = 'Joy-Con',
  ProController = 'Nintendo Switch Pro Controller',
  Mobile = 'Mobile',
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
    screenshotsSubtitle?: string;
    background: string;
  };
  video: {
    shortVideo: string;
    embed?: string;
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
    id: '24h-antes-del-apocalipsis',
    name: '24h Antes del Apocalipsis',
    description:
      'A short story where choices matter written in Spanish.<br><br>Una madre muerta, un secreto familiar y un reloj que nunca se detiene. Elige tu camino y descubre cuál de los <strong>4 finales</strong> marcará el destino de Daniel y Adrián.<br>Tienes solo <strong>un día</strong> para cambiarlo todo.',
    redirectLinks: [],
    extraInfo: {
      title: '24h Antes del Apocalipsis',
      genre: 'Choices Matter & Text Adventure',
      developer: 'Yuuko Games Studio',
      publisher: 'Yuuko Games Studio',
      production: 'Yuuko Games Studio',
      releaseDate: new Date('2025-09-10'),
      pegi: '16',
      platforms: [Platform.ItchIo],
      controls: [Control.Mouse, Control.Mobile],
    },
    images: {
      logo: 'assets/img/games/24h-antes-del-apocalipsis/miniatura.webp',
      logoTransparent: 'assets/img/games/24h-antes-del-apocalipsis/logo.webp',
      background: 'assets/img/games/24h-antes-del-apocalipsis/background.webp',
      screenshotsSubtitle:
        '*Images generated with artificial intelligence just to illustrate the novel.',
      screenshots: [
        {
          url: 'assets/img/games/24h-antes-del-apocalipsis/screenshots/daniel.webp',
          alt: '',
        },
        {
          url: 'assets/img/games/24h-antes-del-apocalipsis/screenshots/escena.webp',
          alt: '',
        },
        {
          url: 'assets/img/games/24h-antes-del-apocalipsis/screenshots/madre.webp',
          alt: 'Sara, la nadre',
        },
      ],
    },
    video: {
      shortVideo: 'assets/videos/24h-trailer.mp4',
    },
    externalLink: 'https://yuukogames.itch.io/24h-antes-del-apocalipsis',
    otherLinks: [
      {
        text: 'Itch.io',
        url: 'https://www.yuukogames.com/24h-antes-del-apocalipsis',
        imageUrl: 'assets/img/socials/itch-io.svg',
      },
      {
        text: 'Website',
        url: 'https://www.yuukogames.com/games/24h-antes-del-apocalipsis',
        imageUrl: 'assets/img/socials/website.svg',
      },
    ],
  },
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
      pegi: '13',
      releaseDate: new Date('2025-05-10'),
      platforms: [Platform.ItchIo],
      controls: [Control.KeyboardAndMouse],
    },
    images: {
      logo: 'assets/img/games/the-forbidden-door/miniatura.webp',
      logoTransparent: 'assets/img/games/the-forbidden-door/logo.webp',
      background: 'assets/img/games/the-forbidden-door/background.webp',
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
      shortVideo: 'assets/videos/the-forbidden-door-trailer.mp4',
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
        url: 'https://www.yuukogames.com/games/the-forbidden-door',
        imageUrl: 'assets/img/socials/website.svg',
      },
    ],
  },
];
