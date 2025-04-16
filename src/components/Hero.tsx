export default function Hero() {
  return (
    <div
      className="relative bg-cover bg-center w-full"
      style={{
        backgroundImage: "url('/images/background.png')",
        height: "487px",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative h-full flex flex-col justify-end pb-8 md:px-16">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-2">Selamat Datang di Konservasi Burung</h1>
        <p className="text-base md:text-lg text-gray-800 max-w-3xl">Kami berkomitmen untuk melindungi burung yang terancam punah dan habitatnya. Bergabunglah dengan kami dalam upaya pelestarian ini.</p>
      </div>
    </div>
  );
}
