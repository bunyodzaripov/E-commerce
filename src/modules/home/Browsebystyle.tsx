import { Category1, Category2, Category3, Category4 } from "@/assets";
import { Container, StyleCard, Title } from "@/components";

const styles = [
  { label: "Casual", image: Category1 },
  { label: "Formal", image: Category2 },
  { label: "Party", image: Category3 },
  { label: "Gym", image: Category4 },
];

export default function BrowseByStyle() {
  return (
    <Container className="mt-13 md:mt-20">
      <div className="bg-[#F0F0F0] rounded-[20px] lg:rounded-[40px] p-6 lg:p-16">
        <Title title="Browse by Dress Style" />

        {/* categories */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col md:flex-row gap-4 md:h-72.25">
            <div className="h-50 md:h-full lg:w-1/3">
              <StyleCard label={styles[0].label} image={styles[0].image} />
            </div>
            <div className="h-50 md:h-full lg:w-2/3">
              <StyleCard label={styles[1].label} image={styles[1].image} />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 md:h-72.25">
            <div className="h-50 md:h-full lg:w-2/3">
              <StyleCard label={styles[2].label} image={styles[2].image} />
            </div>
            <div className="h-50 md:h-full lg:w-1/3">
              <StyleCard label={styles[3].label} image={styles[3].image} />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
