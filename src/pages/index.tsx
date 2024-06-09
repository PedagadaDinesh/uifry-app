import {
  Advantages,
  Customizable,
  Features,
  FrequentlyAsked,
  GetStarted,
  HeroSection,
  Testimonial,
} from "@/components";
import { PublicLayout } from "@/layouts";

const HomeSection = () => {
  return (
    <PublicLayout ogImage="">
      <section className="overflow-hidden">
        <HeroSection />
        <Features />
        <Advantages />
        <Customizable />
        <Testimonial />
        <FrequentlyAsked />
        <GetStarted />
      </section>
    </PublicLayout>
  );
};

export default HomeSection;
