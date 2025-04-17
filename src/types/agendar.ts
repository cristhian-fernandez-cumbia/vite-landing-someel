export type Day = 'Lu' | 'Ma' | 'Mi' | 'Ju' | 'Vi' | 'Sa' | 'Do';
export type TimeSlot = '08:00AM'| '09:00AM'| '10:00AM'|'11:00AM'| '12:00PM'| '01:00PM'|'02:00PM'| '03:00PM'| '04:00PM'|'05:00PM'| '06:00PM'| '07:00PM'| '08:00PM';
export type Theme = 'Ciencia Ficción'|'Romántico'|'Histórico'|'Fantasía'|'Misterio'|'Autoayuda'|'Biográfico'|'Biblico';

export interface Companion {
  id: number;
  imageUrl: string;
  name: string;
  daysReading: Day[];
  hoursReading: TimeSlot[];
  hoursBusy: TimeSlot[];
  themes: Theme[];
}

export interface Schedule {
  day: Day;
  time: TimeSlot;
}

export interface UserData {
  name: string;
  email: string;
  whatsapp: string;
}