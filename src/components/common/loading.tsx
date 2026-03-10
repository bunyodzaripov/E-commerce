const Loading = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#09090b]">
      {/* Fon uchun yumshoq radial gradient (vizual chuqurlik beradi) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-zinc-800/20 via-transparent to-transparent"></div>

      <div className="relative flex flex-col items-center">
        {/* Asosiy Spinner */}
        <div className="relative h-20 w-20">
          {/* Tashqi aylanuvchi xalqa */}
          <div className="absolute inset-0 rounded-full border-2 border-zinc-800"></div>

          {/* Harakatlanuvchi qism */}
          <div className="absolute inset-0 rounded-full border-t-2 border-blue-500 animate-spin shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>

          {/* Markazdagi pulsatsiya qiluvchi nuqta */}
          <div className="absolute inset-[35%] rounded-full bg-zinc-100 animate-pulse shadow-[0_0_20px_rgba(255,255,255,0.2)]"></div>
        </div>

        {/* Yuklanish matni */}
        <div className="mt-8 flex flex-col items-center gap-2">
          <h2 className="text-zinc-100 text-xl font-medium tracking-widest uppercase animate-pulse">
            Yuklanmoqda
          </h2>

          {/* Progress bar simulyatsiyasi (ixtiyoriy) */}
          <div className="h-1 w-32 overflow-hidden rounded-full bg-zinc-800">
            <div className="h-full w-full origin-left animate-[loading_1.5s_infinite_linear] bg-linear-to-r from-transparent via-blue-500 to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
