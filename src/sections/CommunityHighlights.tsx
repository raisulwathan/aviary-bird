// sections/CommunitySection.tsx
import CommunityCard from "@/components/CommunityCard";
import SectionTitle from "@/components/SectionTitle";
import { communityPeople } from "@/utils/Helper";

export default function CommunitySection() {
  return (
    <section id="Community" className="mb-12 mt-12 md:px-16">
      <SectionTitle title="Komunitas" />
      {communityPeople.map((person) => (
        <CommunityCard key={person.id} {...person} />
      ))}
    </section>
  );
}
