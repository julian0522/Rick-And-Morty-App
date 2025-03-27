export interface Respuesta<T> {
  info:    Info;
  results: T[];
}

export interface Info {
  count: number;
  pages: number;
  next:  string;
  prev:  null;
}

export interface Character {
  id:       number;
  name:     string;
  status:   Status;
  species:  Species;
  type:     string;
  gender:   Gender;
  origin:   Location;
  location: Location;
  image:    string;
  episode:  string[];
  url:      string;
  created:  Date;
}

export enum Gender {
  Female = "Female",
  Male = "Male",
  Unknown = "unknown",
}

export enum Species {
  Alien = "Alien",
  Human = "Human",
}

export enum Status {
  Alive = "Alive",
  Dead = "Dead",
  Unknown = "unknown",
}

export interface RespuestaMap<T> {
  info:    InfoMap;
  results: T[];
}

export interface InfoMap {
  count: number;
  pages: number;
  next:  number | null;
  prev:  number | null;
}

export interface Location {
  id:        number;
  name:      string;
  type:      string;
  dimension: string;
  residents: string[];
  url:       string;
  created:   Date;
}

export interface Episode {
  id:         number;
  name:       string;
  air_date:   string;
  episode:    string;
  characters: string[];
  url:        string;
  created:    Date;
}

