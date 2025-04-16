import { Person } from "@/types";
import React from "react";

export default function CommunityCard({ imageSrc, title, description }: Person) {
  return (
    <div className="flex items-center p-4 transition-shadow duration-300 hover:shadow-xl">
      <img src={imageSrc} alt={title} className="object-cover w-16 h-16 mr-4 rounded-full" />
      <div>
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
}
