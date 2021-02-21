export interface Movies {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  type: string;
  airdate: string;
  airtime: string;
  airstamp: string;
  runtime: number;
  image?: string | null;
  summary?: string | null;
  _links: { self: Href };
  _embedded: { show: Show };
}
export interface Href {
  href: string;
}
export interface Show {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres?: string[] | null;
  status: string;
  runtime?: number | null;
  premiered: string;
  officialSite?: string | null;
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
    nextepisode: NextEpisode;
  };
}
export interface Schedule {
  time: string;
  days: string[];
}
export interface Webchannel {
  id: number;
  name: string;
  country?: string | null;
}
export interface Externals {
  tvrage: string;
  thetvdb: number;
  imdb?: string | null;
}
export interface Image {
  medium: string;
  original: string;
}
export interface PreviousEpisode {
  href: string;
}
export interface NextEpisode {
  href: string;
}