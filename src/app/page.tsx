// app/page.tsx

import PopularMonitoring from "@/sections/PopularMonitoring";
import LatestNews from "@/sections/LatestNews";
import CommunityHighlights from "@/sections/CommunityHighlights";

export default function Home() {
  return (
    <div className="px-4 md:px-10">
      <PopularMonitoring />
      <div className="flex flex-col md:flex-row gap-8 mt-8">
        <div className="w-full md:w-1/2">
          <LatestNews />
        </div>

        <div className="w-full md:w-1/2 mb-12">
          <CommunityHighlights />
        </div>
      </div>
    </div>
  );
}
