import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ProgramsPage from "../pages/ProgramsPage";
import ProgramDetailsPage from "../pages/ProgramDetailsPage";
import MentorsPage from "../pages/MentorsPage";
import ProjectsPage from "../pages/ProjectsPage";
import TestimonialsPage from "../pages/TestimonialsPage";
import PricingPage from "../pages/PricingPage";
import EventsPage from "../pages/EventsPage";
import BlogPage from "../pages/BlogPage";
import BlogPostPage from "../pages/BlogPostPage";
import FAQPage from "../pages/FAQPage";
import ContactPage from "../pages/ContactPage";
import ApplyPage from "../pages/ApplyPage";
import CommunityPage from "../pages/CommunityPage";
import CareersPage from "../pages/CareersPage";
import ScholarshipsPage from "../pages/ScholarshipsPage";
import PrivacyPage from "../pages/PrivacyPage";
import TermsPage from "../pages/TermsPage";
import NotFoundPage from "../pages/NotFoundPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/programs" element={<ProgramsPage />} />
      <Route path="/programs/:slug" element={<ProgramDetailsPage />} />
      <Route path="/mentors" element={<MentorsPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/testimonials" element={<TestimonialsPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/events" element={<EventsPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/:slug" element={<BlogPostPage />} />
      <Route path="/faq" element={<FAQPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/apply" element={<ApplyPage />} />
      <Route path="/community" element={<CommunityPage />} />
      <Route path="/careers" element={<CareersPage />} />
      <Route path="/scholarships" element={<ScholarshipsPage />} />
      <Route path="/privacy" element={<PrivacyPage />} />
      <Route path="/terms" element={<TermsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
