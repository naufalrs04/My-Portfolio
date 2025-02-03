"use client";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-black via-indigo-900 to-black py-16 text-white text-center overflow-hidden">
      {/* Efek Bintang */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-80"
            style={{
              width: `${Math.random() * 3}px`,
              height: `${Math.random() * 3}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `twinkle ${
                Math.random() * 5 + 3
              }s infinite alternate ease-in-out`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 px-4">
        <p className="mt-4 text-md">
          &copy; {new Date().getFullYear()} Naufal Rizki. All rights reserved.
        </p>
        <p className="mt-4 text- text-gray-400">
          Made with ❤️ by Naufal Rizki.
        </p>
      </div>

      {/* CSS */}
      <style jsx>{`
        @keyframes twinkle {
          0% {
            opacity: 0.5;
            transform: scale(1);
          }
          100% {
            opacity: 1;
            transform: scale(1.3);
          }
        }
      `}</style>
    </footer>
  );
}
