// components/VideoCarousel.tsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Video } from "@/types";
import VideoCard from "./VidioCard";

interface Props {
  videos: Video[];
}

export default function VideoCarousel({ videos }: Props) {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={20}
      navigation
      pagination={{ clickable: true }}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      {videos.map((video) => (
        <SwiperSlide key={video.id}>
          <VideoCard {...video} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
