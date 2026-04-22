import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useLogin } from "@/hooks";

export default function LoginPage() {
  const { mutate, isPending } = useLogin();

  const [form, setForm] = useState({ username: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    if (!form.username || !form.password) {
      toast.info("Please fill in all fields!");
      return;
    }
    try {
      mutate(form);
    } catch {
      console.log("error");
    }
  };

  return (
    <div className="min-h-screen flex">
      <div className="hidden md:flex w-1/2 bg-black flex-col justify-between p-12">
        <Link to="/" className="flex items-center gap-2">
          <ShoppingBag className="w-6 h-6 text-white" />
          <span
            className="text-white text-2xl font-black uppercase tracking-tight"
            style={{ fontFamily: "'Arial Black', 'Arial Bold', sans-serif" }}
          >
            Shop.co
          </span>
        </Link>

        <div className="flex flex-col gap-6">
          <h1
            className="text-5xl font-black text-white uppercase leading-tight"
            style={{ fontFamily: "'Arial Black', 'Arial Bold', sans-serif" }}
          >
            Find Clothes
            <br />
            That Match
            <br />
            Your Style
          </h1>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality.
          </p>
        </div>

        <div className="flex gap-8">
          {[
            { value: "200+", label: "Brands" },
            { value: "2,000+", label: "Products" },
            { value: "30,000+", label: "Customers" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <span className="text-white text-2xl font-black">
                {stat.value}
              </span>
              <span className="text-gray-500 text-xs">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center px-6 md:px-16 bg-white">
        <div className="w-full max-w-md flex flex-col gap-8">
          <Link to="/" className="flex md:hidden items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-black" />
            <span
              className="text-black text-xl font-black uppercase"
              style={{ fontFamily: "'Arial Black', 'Arial Bold', sans-serif" }}
            >
              Shop.co
            </span>
          </Link>

          <div className="flex flex-col gap-2">
            <h2
              className="text-3xl md:text-4xl font-black text-black uppercase"
              style={{ fontFamily: "'Arial Black', 'Arial Bold', sans-serif" }}
            >
              Welcome Back
            </h2>
            <p className="text-sm text-gray-400">
              Sign in to your account to continue
            </p>
          </div>

          {/* Form */}
          <div className="flex flex-col gap-4">
            {/* Username */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-black">Username</label>
              <Input
                name="username"
                placeholder="Enter your username"
                value={form.username}
                onChange={handleChange}
                className="h-12 rounded-xl border-gray-200 bg-gray-50 focus:bg-white transition-all"
              />
            </div>

            {/* Password */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-black">Password</label>
              <div className="relative">
                <Input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={form.password}
                  onChange={handleChange}
                  onKeyDown={(e) => e.key === "Enter" && handleLogin()}
                  className="h-12 rounded-xl border-gray-200 bg-gray-50 focus:bg-white pr-12 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Login button */}
            <Button
              onClick={handleLogin}
              disabled={isPending}
              className="w-full h-12 rounded-full bg-black text-white hover:bg-gray-900 font-semibold text-base mt-2 transition-all duration-300"
            >
              {isPending ? "Signing in..." : "Sign In"}
            </Button>
          </div>

          {/* Demo credentials */}
          <div className="bg-gray-50 rounded-2xl p-4 flex flex-col gap-1">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Demo credentials
            </p>
            <p className="text-sm text-gray-600">
              Username: <span className="font-semibold text-black">emilys</span>
            </p>
            <p className="text-sm text-gray-600">
              Password:{" "}
              <span className="font-semibold text-black">emilyspass</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
