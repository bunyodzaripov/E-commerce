import { Category1, Category2, Category3, Category4 } from "@/assets";
import { Container, StyleCard, Title } from "@/components";
import { useTranslation } from "react-i18next";

export default function BrowseByStyle() {
  const { t } = useTranslation();

  const styles = [
    { label: t("styles.casual"), image: Category1, slug: "casual" },
    { label: t("styles.formal"), image: Category2, slug: "formal" },
    { label: t("styles.party"), image: Category3, slug: "party" },
    { label: t("styles.gym"), image: Category4, slug: "gym" },
  ];
  return (
    <Container className="mt-13 md:mt-20">
      <div className="bg-[#F0F0F0] rounded-[20px] lg:rounded-[40px] p-6 lg:p-16">
        <Title title={t("styles.title")} />

        {/* categories */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col md:flex-row gap-4 md:h-72.25">
            <div className="h-50 md:h-full lg:w-1/3">
              <StyleCard
                label={styles[0].label}
                image={styles[0].image}
                slug={styles[0].slug}
              />
            </div>
            <div className="h-50 md:h-full lg:w-2/3">
              <StyleCard
                label={styles[1].label}
                image={styles[1].image}
                slug={styles[1].slug}
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 md:h-72.25">
            <div className="h-50 md:h-full lg:w-2/3">
              <StyleCard
                label={styles[2].label}
                image={styles[2].image}
                slug={styles[2].slug}
              />
            </div>
            <div className="h-50 md:h-full lg:w-1/3">
              <StyleCard
                label={styles[3].label}
                image={styles[3].image}
                slug={styles[3].slug}
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
