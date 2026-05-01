export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="max-w-6xl mx-auto px-6 sm:px-8 py-5">
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-blue-600">Portfolio</span>
          <div className="flex gap-8 text-base font-medium">
            <a href="#profile" className="text-blue-600 border-b-2 border-blue-600 pb-0.5 transition">
              Profile
            </a>
            <a href="#research" className="text-gray-600 hover:text-blue-600 transition">
              Research
            </a>
            <a href="#works" className="text-gray-600 hover:text-blue-600 transition">
              Works
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
