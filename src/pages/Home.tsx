import type { Product } from "@/@types";
import { Loading } from "@/components";
import { useGetProducts } from "@/hooks";
import { Navbar } from "@/modules";

const Home = () => {
  const { data, isLoading, error } = useGetProducts();

  if (isLoading) return <Loading />;
  if (error) return <p>Xatolik yuz berdi</p>;

  return (
    <div>
      <Navbar />
      <h1 className="font-display">Mahsulotlar</h1>
      <ul>
        {data?.products.map((product: Product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
