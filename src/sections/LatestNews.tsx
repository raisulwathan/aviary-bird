// sections/LatestNews.tsx
import SectionTitle from "@/components/SectionTitle";
import NewsItem from "@/components/NewsItem";
import { latestNews } from "@/utils/Helper";

export default function LatestNews() {
  return (
    <section id="Latest-news" className="mb-12 mt-12 md:px-16">
      <SectionTitle title="Berita Terbaru" />

      <div className="flex flex-col gap-6 mt-4">
        {latestNews.map((news) => (
          <NewsItem key={news.id} {...news} />
        ))}
      </div>
    </section>
  );
}
