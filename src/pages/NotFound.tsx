import { Link, useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center px-6 py-12 text-center">
      <div className="relative mb-10">
        <h1 className="text-9xl font-extrabold text-black tracking-widest">
          404
        </h1>
        <div className="bg-white border border-gray-100 rounded shadow-md px-4 py-1 text-sm text-gray-700 font-medium absolute -bottom-3 left-1/2 transform -translate-x-1/2 rotate-6 hover:rotate-0 transition-transform duration-300">
          Oops! Sahifa topilmadi
        </div>
      </div>

      <div className="max-w-md mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 sm:text-4xl">
          Nimadir xato ketdi...
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Kechirasiz, siz qidirayotgan sahifa mavjud emas, o'chirilgan yoki
          manzili o'zgartirilgan bo'lishi mumkin.
        </p>
        <p className="text-sm text-gray-500 italic">
          Balki siz manzilni xato kiritgandirsiz? Yoki bu bizning xatoyimizdir.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          to="/"
          className="px-8 py-3 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-black focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 transition-colors duration-200"
        >
          Bosh sahifaga qaytish
        </Link>

        <button
          onClick={() => navigate(-1)}
          className="px-8 py-3 bg-white text-gray-800 font-semibold rounded-lg border border-gray-300 shadow hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-colors duration-200"
        >
          Oldingi sahifaga
        </button>
      </div>
    </div>
  );
};

export default NotFound;
