export interface Member {
  name: string;
  job: string;
  profilePicture: string;
}

export const MEMBERS: Member[] = [
  {
    name: 'Aleix Ferré',
    job: 'Game Designer & Programmer',
    profilePicture: 'assets/img/profiles/aleix.webp',
  },
  {
    name: 'Joaquín Villena',
    job: '2D & 3D Artist',
    profilePicture: 'assets/img/profiles/joaquin.webp',
  },
  {
    name: 'Arnau Albertí',
    job: 'Game Designer & Programmer',
    profilePicture: 'assets/img/profiles/arnau.webp',
  },
];

export const PETS: Member[] = [
  {
    name: 'Aiko',
    job: 'She is so cute',
    profilePicture: 'assets/img/profiles/aiko.webp',
  },
  {
    name: 'Yuumi',
    job: 'She likes fish',
    profilePicture: 'assets/img/profiles/yuumi.webp',
  },
];
