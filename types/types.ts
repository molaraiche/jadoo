export interface LinksProps {
  id: number;
  path: string;
  label: string;
}

export interface langProps {
  id: number;
  language: string;
}
export interface servicesProps {
  id: number;
  image: string;
  title: string;
  content: string;
}

export interface bookingType {
  id: number;
  image: string;
  city: string;
  price: number;
  period: number;
}

export interface stepsType {
  id: number;
  image: string;
  title: string;
  content: string;
}

export interface sponsorTypes {
  id: number;
  image: string;
}
