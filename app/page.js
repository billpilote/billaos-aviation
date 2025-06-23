export default function BillaosAviation() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-900 to-black text-white font-sans">
      <header className="p-6 shadow-xl bg-opacity-80 backdrop-blur-sm bg-sky-900 sticky top-0 z-50">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-wider text-blue-300">BILLAOS AVIATION</h1>
          <nav className="space-x-4 text-lg">
            <a href="#home" className="hover:text-blue-400">Accueil</a>
            <a href="#simulator" className="hover:text-blue-400">Simulateur</a>
            <a href="#about" className="hover:text-blue-400">À propos</a>
            <a href="#contact" className="hover:text-blue-400">Contact</a>
          </nav>
        </div>
      </header>

      <section id="home" className="text-center py-20 px-4">
        <h2 className="text-5xl font-bold mb-4 text-blue-200">Bienvenue à bord de Billaos Aviation</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
          Découvre l'univers de l'aviation comme jamais auparavant. Vols simulés, apprentissage, passion, et communauté. Le ciel est à toi !
        </p>
        <a href="#simulator" className="bg-blue-500 hover:bg-blue-600 px-6 py-3 text-white rounded-full shadow-lg text-xl transition">Essayer le simulateur</a>
      </section>

      <section id="simulator" className="bg-black py-20 px-4 text-center">
        <h3 className="text-4xl font-bold text-blue-300 mb-6">Simulateur de vol en ligne</h3>
        <p className="mb-6 text-gray-400 max-w-xl mx-auto">
          Lance-toi dans une session de vol réaliste directement depuis ton navigateur. Clique ci-dessous pour décoller !
        </p>
        <div className="aspect-video w-full max-w-5xl mx-auto border-4 border-blue-400 rounded-2xl overflow-hidden shadow-2xl">
          <iframe
            src="https://www.geo-fs.com/geofs.php"
            title="Simulateur de vol Billaos"
            className="w-full h-full"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-sky-950 text-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-6 text-blue-300">À propos de Billaos Aviation</h3>
          <p className="text-lg leading-relaxed">
            Billaos Aviation est une plateforme dédiée à la formation, la passion et la découverte du monde aérien.
            Fondée par Bill Pilote, cette initiative vise à rendre l'aviation accessible à tous grâce à des outils modernes,
            des simulateurs interactifs et des contenus éducatifs de qualité.
          </p>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-black text-center">
        <h3 className="text-3xl font-bold text-blue-300 mb-6">Contact</h3>
        <p className="text-gray-400 mb-4">Tu as une question ? Envoie-nous un mail à :</p>
        <a href="mailto:flywithbillpilote@gmail.com" className="text-blue-400 hover:underline text-xl">
          flywithbillpilote@gmail.com
        </a>
        <div className="mt-10 space-x-4">
          <a href="https://www.youtube.com/@bill.pilote" className="text-blue-500 hover:underline" target="_blank">Chaîne YouTube</a>
          <a href="https://facebook.com" className="text-blue-500 hover:underline" target="_blank">Page Facebook</a>
        </div>
      </section>

      <footer className="bg-sky-950 text-center py-4 text-sm text-gray-500">
        © 2025 BILLAOS AVIATION. Tous droits réservés.
      </footer>
    </div>
  );
}
