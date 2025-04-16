// components/SectionTitle.tsx
type SectionTitleProps = {
  title: string;
};

export default function SectionTitle({ title }: SectionTitleProps) {
  return <h2 className=" text-2xl font-semibold  mb-4 mt-2 ">{title}</h2>;
}
