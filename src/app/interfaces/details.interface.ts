export interface Details {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: string[];
  status: string;
  runtime: number;
  premiered: string;
  officialSite: string;
  schedule: Schedule;
  rating: { average?: string };
  weight: number;
  network?: string | null;
  webChannel: Webchannel;
  externals: Externals;
  image: Image;
  summary: string;
  updated: number;
  _links: {
    self: Href;
    previousepisode: PreviousEpisode;
  };
}
export interface Schedule {
  time?: string;
  days: string[];
}
export interface Webchannel {
  id: number;
  name: string;
  country: Country;
}
export interface Country {
  name: string;
  code: string;
  timezone: string;
}
export interface Externals {
  tvrage?: string | null;
  thetvdb: number;
  imdb: string;
}
export interface Image {
  medium: string;
  original: string;
}
export interface Href {
  href: string;
}
export interface PreviousEpisode {
  href: string;
}