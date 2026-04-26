import { motion } from "framer-motion";
import { Category1, Category2, Category3, Category4 } from "@/assets";
import { AnimatedSection, Container, StyleCard, Title } from "@/components";
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
      <AnimatedSection>
        <div className="bg-[#F0F0F0] dark:bg-[#1E1E1E] rounded-[20px] lg:rounded-[40px] p-6 lg:p-16">
          <Title title={t("styles.title")} />

          <div className="flex flex-col gap-4">
            {/* Yuqori qator */}
            <div className="flex flex-col md:flex-row gap-4 md:h-72.25">
              {/* Casual — chapdan */}
              <motion.div
                className="h-50 md:h-full lg:w-1/3"
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <StyleCard
                  label={styles[0].label}
                  image={styles[0].image}
                  slug={styles[0].slug}
                />
              </motion.div>

              {/* Formal — o'ngdan */}
              <motion.div
                className="h-50 md:h-full lg:w-2/3"
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                <StyleCard
                  label={styles[1].label}
                  image={styles[1].image}
                  slug={styles[1].slug}
                />
              </motion.div>
            </div>

            {/* Pastki qator */}
            <div className="flex flex-col md:flex-row gap-4 md:h-72.25">
              {/* Party — chapdan */}
              <motion.div
                className="h-50 md:h-full lg:w-2/3"
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                <StyleCard
                  label={styles[2].label}
                  image={styles[2].image}
                  slug={styles[2].slug}
                />
              </motion.div>

              {/* Gym — o'ngdan */}
              <motion.div
                className="h-50 md:h-full lg:w-1/3"
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <StyleCard
                  label={styles[3].label}
                  image={styles[3].image}
                  slug={styles[3].slug}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </Container>
  );
}
