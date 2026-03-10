import { ButtonDemo } from "@/components/common/Button";
import { useProducts } from "@/hooks/useProducts";
import { Navbar } from "@/components";

const Home = () => {
  const { data, isLoading, error } = useProducts();

  if (isLoading) return <p>Yuklanmoqda...</p>;
  if (error) return <p>Xatolik yuz berdi</p>;

  return (
    <div>
      <Navbar />
      <ButtonDemo />
      <h1 className="font-display">Mahsulotlar</h1>
      <ul>
        {data?.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
