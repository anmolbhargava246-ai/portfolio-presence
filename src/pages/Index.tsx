import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { ContactCTA } from "@/components/home/ContactCTA";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturedProjects />
      <ServicesPreview />
      <ContactCTA />
    </Layout>
  );
};

export default Index;
