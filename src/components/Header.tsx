// src/components/Header.js

const Header = () => {
  return (
    <header className="bg-sky-500 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-6 text-center">
        <h1 className="text-2xl sm:text-3xl font-bold">
          SpaceX Launch Tracker 🚀
        </h1>

        <div className="mt-2 relative">
            <p className="text-sm sm:text-base text-white/90">
              React Hooks + API Data Practice
            </p>
            <p className="absolute right-0 top-1/2 -translate-y-1/2 text-xs sm:text-sm opacity-90">by River</p>
        </div>
      </div>
      
    </header>
  );
};

export default Header;
