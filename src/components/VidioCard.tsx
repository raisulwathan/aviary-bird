"use client";

import { Video } from "@/types";

export default function VideoCard({ title, videoUrl, status }: Video) {
  return (
    <div className="bg-white overflow-hidden  hover:shadow-xl rounded-md border transition-all duration-300">
      <div className="relative w-full h-52 md:h-60 bg-black shadow-lg">
        <iframe className="w-full h-full" src={videoUrl} title={title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
      </div>
      <div className="p-2">
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
        <span className={`text-xs px-3 py-1 rounded-full mt-2 inline-block ${status === "Aktif" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>{status}</span>
      </div>
    </div>
  );
}
