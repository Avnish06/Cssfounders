import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Destinations from "@/components/Destinations";
import Recommend from "@/components/Recommend";
import TourPackages from "@/components/TourPackages";
import VideoCTA from "@/components/VideoCTA";
import BookingSteps from "@/components/BookingSteps";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <TopBar />
      <Navbar />
      <Hero />
      <Destinations />
      <Recommend />
      <TourPackages />
      <VideoCTA />
      <BookingSteps />
      <WhyChooseUs />
      <Testimonials />
      <Blog />
      <CTABanner />
      <Footer />
    </main>
  );
}
