import { ButtonDemo } from "@/components/Button";
import Logos from "@/assets/logos.png";

const App = () => {
  return (
    <div>
      <img className="w-28" src={Logos} alt="lgos" />
      <ButtonDemo />
    </div>
  );
};

export default App;
