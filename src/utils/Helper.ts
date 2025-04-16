// utils/helpers.ts
import { Video, News, Person } from "@/types";

export const popularVideos: Video[] = [
  {
    id: 1,
    title: "Cendrawasih Papua",
    videoUrl: "https://www.youtube.com/embed/YQCo9rWFgAY",
    status: "Sedang Live",
  },
  {
    id: 2,
    title: "Elang Jawa",
    videoUrl: "https://www.youtube.com/embed/YQCo9rWFgAY",
    status: "Aktif",
  },
  {
    id: 3,
    title: "Jalak Bali",
    videoUrl: "https://www.youtube.com/embed/YQCo9rWFgAY",
    status: "Sedang Live",
  },
  {
    id: 4,
    title: "Jalak Bali",
    videoUrl: "https://www.youtube.com/embed/YQCo9rWFgAY",
    status: "Sedang Live",
  },
  {
    id: 5,
    title: "Merpati",
    videoUrl: "https://www.youtube.com/embed/YQCo9rWFgAY",
    status: "Sedang Live",
  },
  {
    id: 6,
    title: "Gagak Hitam",
    videoUrl: "https://www.youtube.com/embed/YQCo9rWFgAY",
    status: "Sedang Live",
  },
];

export const latestNews: News[] = [
  {
    id: 1,
    title: "Patroli Hutan Terbaru",
    excerpt: "Tim kami baru saja menyelesaikan patroli hutan terakhir di Papua",
    imageUrl: "/images/berita01.png",
    date: "14 April 2025",
  },
  {
    id: 2,
    title: "Workshop Komunitas",
    excerpt: "Kami akan mengadakan workshop konservasi burung untuk masyarakat lokal.",
    imageUrl: "/images/berita02.png",
    date: "10 April 2025",
  },
  {
    id: 3,
    title: "Komunitas Burung Se-Kabupaten",
    excerpt: "Komunitas baru saja terbentuk di kabupaten kami!",
    imageUrl: "/images/berita03.png",
    date: "10 April 2025",
  },
  {
    id: 4,
    title: "Pembagian Bibit Tanaman",
    excerpt: "Komunitas akan membagikan bibit tanaman untuk mendukung habitat burung.",
    imageUrl: "/images/berita04.png",
    date: "10 April 2025",
  },
];

export const communityPeople: Person[] = [
  {
    id: 1,
    imageSrc: "/images/komunity1.png",
    title: "John Doe",
    description: "Aktivitas terbaru: Mengikuti patroli hutan di Papua",
  },
  {
    id: 2,
    imageSrc: "/images/komunity2.png",
    title: "Jane Smith",
    description: "Aktivitas terbaru: Membantu mendirikan stasiun pengamatan burung",
  },
];
