"use client";

import SectionTitle from "@/components/SectionTitle";
import VideoCard from "@/components/VidioCard";
import { popularVideos } from "@/utils/Helper";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function PopularMonitoring() {
  return (
    <section id="popular-monitoring" className="mb-12 md:px-16">
      <SectionTitle title="Pemantauan Populer" />

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {popularVideos.map((video) => (
          <SwiperSlide key={video.id}>
            <div>
              <VideoCard {...video} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
