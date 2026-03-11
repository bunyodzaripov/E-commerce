import { Loading } from "@components/index";
import { useProducts } from "@hooks/useProducts";
import Navbar from "@modules/navbar/Navbar";

const Home = () => {
  const { data, isLoading, error } = useProducts();

  if (isLoading) return <Loading />;
  if (error) return <p>Xatolik yuz berdi</p>;

  return (
    <div>
      <Navbar />
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
