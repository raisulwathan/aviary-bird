// types/index.ts
export interface Video {
  id: number;
  title: string;
  videoUrl: string;
  status: string;
}

export type News = {
  id: number;
  title: string;
  excerpt: string;
  imageUrl: string;
  date: string;
};

export interface Person {
  id: number;
  imageSrc: string;
  title: string;
  description: string;
}
