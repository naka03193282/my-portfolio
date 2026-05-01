export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-12 mt-10">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-lg font-semibold text-white">中嶋 康太郎</p>
            <p className="text-sm text-gray-400 mt-1">大阪公立大学大学院 / 情報工学専攻</p>
          </div>
          <div className="flex items-center gap-8 text-base">
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              GitHub
            </a>
            <a href="mailto:nakaji319@icloud.com" className="text-gray-400 hover:text-white transition">
              Mail
            </a>
            <span className="text-gray-500 text-sm">© 2025 Nakajima Kotaro</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
