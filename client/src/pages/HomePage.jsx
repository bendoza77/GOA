import HeroSection from "../sections/home/HeroSection";
import ProgramsOverviewSection from "../sections/home/ProgramsOverviewSection";
import WhyGoaSection from "../sections/home/WhyGoaSection";
import LearningJourneySection from "../sections/home/LearningJourneySection";
import FeaturedProgramsSection from "../sections/home/FeaturedProgramsSection";
import MentorsPreviewSection from "../sections/home/MentorsPreviewSection";
import ProjectsPreviewSection from "../sections/home/ProjectsPreviewSection";
import TestimonialsPreviewSection from "../sections/home/TestimonialsPreviewSection";
import EventsPreviewSection from "../sections/home/EventsPreviewSection";
import FAQPreviewSection from "../sections/home/FAQPreviewSection";
import CTASection from "../components/shared/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProgramsOverviewSection />
      <WhyGoaSection />
      <LearningJourneySection />
      <FeaturedProgramsSection />
      <MentorsPreviewSection />
      <ProjectsPreviewSection />
      <TestimonialsPreviewSection />
      <EventsPreviewSection />
      <FAQPreviewSection />
      <CTASection />
    </>
  );
}
