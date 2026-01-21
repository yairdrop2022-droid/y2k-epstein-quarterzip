import { useState } from 'react'

function App() {
  const [currentImage, setCurrentImage] = useState(0)

  const images = [
    {
      url: "/image_reference.jpg",
      alt: "Y2K Retro Quarterzip Epstein Hoodie on tropical beach"
    },
    {
      url: "/image_reference_2.jpg",
      alt: "Close-up Epstein embroidery pattern on navy quarterzip hoodie"
    },
    {
      url: "/logoemb.jpg",
      alt: "Detailed view of red embroidered JCE logo on navy hoodie"
    }
  ]

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-light-palm to-white">
      {/* Header avec logo + titre */}
      <header className="bg-deep-navy text-white py-10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <img 
            src="/bleu.png" 
            alt="Brand Logo" 
            className="h-28 w-auto mx-auto mb-6" 
          />
          <h1 className="text-4xl md:text-5xl font-bold">
            🌴 Y2K Retro Quarterzip Pullover Hoodie Epstein Embroidery Pattern 🌴
          </h1>
          <p className="text-2xl mt-4 font-semibold">
            Jeffrey Epstein Quarter Zip – Vintage American Streetwear
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Carousel + infos */}
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          {/* Carousel */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <div className="relative h-96 md:h-[500px]">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img.url}
                  alt={img.alt}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                    index === currentImage ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
            </div>

            {/* Flèches */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-4 rounded-full hover:bg-black/70 transition text-2xl"
            >
              ←
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-4 rounded-full hover:bg-black/70 transition text-2xl"
            >
              →
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-3">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-4 h-4 rounded-full transition-all ${
                    index === currentImage ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/70'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Bloc texte + prix + bouton */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-bold text-deep-navy mb-4">
              Y2K Retro Quarterzip Pullover Hoodie
            </h2>

            <div className="text-5xl font-extrabold text-logo-red mb-6">
              $21.05
            </div>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Y2K Retro Design: Embraces the iconic Y2K aesthetic for a nostalgic streetwear look.<br /><br />
              Quarterzip Pullover Hoodie: Offers convenient zip access while maintaining a cozy sweatshirt feel.<br /><br />
              Epstein Embroidery Pattern: Features a unique embroidered design for a standout vintage style.<br /><br />
              Casual Streetwear: Perfect for everyday wear with a stylish retro touch.<br /><br />
              Oversized Fit: Provides a relaxed, comfortable American vintage streetwear silhouette.
            </p>

            <a
              href="https://s.click.aliexpress.com/e/_c3Z3stSB"
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-block bg-logo-red hover:bg-red-800 text-white text-center py-5 px-12 rounded-xl font-bold text-xl shadow-lg transition transform hover:scale-105 w-full md:w-auto"
            >
              Buy Now
            </a>

            <p className="text-sm text-gray-500 mt-4 text-center">
              Affiliate link – We may earn a commission if you purchase (no extra cost to you)
            </p>
          </div>
        </div>

        {/* Avis clients */}
        <section className="bg-white rounded-2xl shadow-lg p-10">
          <h3 className="text-3xl font-bold text-deep-navy mb-8 text-center">
            Customer Reviews
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { stars: 5, text: "Amazing product! I've finally got a glowing complexion!", author: "Shopper", date: "20 Jan 2026", helpful: 2 },
              { stars: 5, text: "Excellent quality!!! Lfg! Shipping took about a month .... so there's that.", author: "S***m", date: "18 Jan 2026", helpful: 0 },
              { stars: 4, text: "Could you please give us your name…? Jeffrey epstein.", author: "L***d", date: "18 Jan 2026", helpful: 13 },
              { stars: 5, text: "Love the weight of this. It’s got that high-quality, heavy feel to it.", author: "b***r", date: "08 Jan 2026", helpful: 6 },
              { stars: 5, text: "This is my new go-to. High-quality fabric that doesn't shrink in the wash.", author: "d***r", date: "14 Jan 2026", helpful: 2 },
            ].map((r, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <div className="flex text-yellow-400 text-2xl mb-2">
                  {'★'.repeat(r.stars)}{'☆'.repeat(5 - r.stars)}
                </div>
                <p className="text-gray-800 mb-3">"{r.text}"</p>
                <div className="text-sm text-gray-600">
                  — {r.author} • {r.date}
                  {r.helpful > 0 && <span className="ml-2 text-blue-600">({r.helpful} helpful)</span>}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-deep-navy text-white py-8 text-center text-sm">
        <p>© 2026 Vintage Streetwear Selection • Affiliate links – We may earn a commission</p>
      </footer>
    </div>
  )
}

export default App
