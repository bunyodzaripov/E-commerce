import { ButtonDemo } from "@/components/Button";
import Logos from "@/assets/logos.png";
import { useProducts } from "@/hooks/useProducts";

const App = () => {
  const { data, isLoading, error } = useProducts();

  if (isLoading) return <p>Yuklanmoqda...</p>;

  if (error) return <p>Xatolik yuz berdi</p>;

  return (
    <div>
      <img className="w-28" src={Logos} alt="lgos" />
      <ButtonDemo />

      <ul>
        {data?.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
