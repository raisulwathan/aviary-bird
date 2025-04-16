// components/NewsItem.tsx
import Image from "next/image";
import { News } from "@/types";

export default function NewsItem({ title, excerpt, imageUrl, date }: News) {
  return (
    <div className="flex flex-col md:flex-row gap-4 items-start mb-4 hover:shadow-lg">
      <div className="relative w-full h-[200px] md:w-[245px] md:h-[130px] flex-shrink-0 overflow-hidden rounded-lg">
        <Image src={imageUrl} alt={title} fill className="object-cover" />
      </div>

      <div className="flex flex-col justify-between">
        <h3 className="text-base font-semibold">{title}</h3>
        <p className="mt-1 text-sm text-gray-600 line-clamp-2">{excerpt}</p>
        <span className="mt-2 text-xs text-gray-400">{date}</span>
      </div>
    </div>
  );
}
