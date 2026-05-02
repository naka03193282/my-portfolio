import Header from "./components/Header";
import Profile from "./components/Profile";
import Research from "./components/Research";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Header />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-10">
        <Profile />
        <Research />
        <Skills />
        <Works />
      </main>
      <Footer />
    </div>
  );
}
