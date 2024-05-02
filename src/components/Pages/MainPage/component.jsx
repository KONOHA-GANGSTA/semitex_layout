import { FifthSection } from "../../FifthSection/component";
import { FirstSection } from "../../FirstSection/component";
import { ForthSection } from "../../ForthSection/component";
import { Layout } from "../../Layout/component";
import { SecondSection } from "../../SecondSection/component";
import { ThirdSection } from "../../ThirdSection/component";

export const MainPage = () => {
  return (
    <Layout>
      <main>
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <ForthSection />
        <FifthSection />
      </main>
    </Layout>
  );
};
