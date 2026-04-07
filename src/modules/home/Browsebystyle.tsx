import { Category1, Category2, Category3, Category4 } from "@/assets";
import { Container } from "@/components";

const styles = [
  { label: "Casual", image: Category1 },
  { label: "Formal", image: Category2 },
  { label: "Party", image: Category3 },
  { label: "Gym", image: Category4 },
];

export default function BrowseByStyle() {
  return (
    <Container className="my-20">
      <div className="bg-[#F0F0F0] rounded-[40px] p-6 md:p-16">
        <h2 className="text-3xl md:text-5xl font-bold text-black text-center uppercase mb-7 md:mb-16 tracking-tight">
          Browse by Dress Style
        </h2>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:max-w-101.5 flex-1">
              <StyleCard label={styles[0].label} image={styles[0].image} />
            </div>
            <div className="max-w-171 flex-1">
              <StyleCard label={styles[1].label} image={styles[1].image} />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="max-w-171 flex-1">
              <StyleCard label={styles[2].label} image={styles[2].image} />
            </div>
            <div className="w-full md:max-w-101.5 flex-1">
              <StyleCard label={styles[3].label} image={styles[3].image} />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

function StyleCard({ label, image }: { label: string; image: string }) {
  return (
    <div className="relative rounded-[20px] overflow-hidden bg-white cursor-pointer group">
      <span className="absolute top-4 left-8 z-10 text-[24px] md:text-[36px] font-bold text-black">
        {label}
      </span>

      <img
        src={image}
        alt={label}
        className="w-full h-auto max-h-55 md:max-h-65 object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </div>
  );
}
