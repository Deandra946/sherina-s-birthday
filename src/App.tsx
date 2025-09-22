import BirthdayHero from "./components/BirthdayHero";
import PhotoGallery from "./components/PhotoGallery";
import SpecialMessage from "./components/SpecialMessage";
import BirthdayFooter from "./components/BirthdayFooter";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100">
      <BirthdayHero />
      <PhotoGallery />
      <SpecialMessage />
      <BirthdayFooter />
    </div>
  );
}