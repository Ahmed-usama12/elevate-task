import Link from "next/link";
import { ShoppingCart } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-900">
      <ShoppingCart className="w-16 h-16 text-blue-600 mb-4" />
      <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-center">
        Welcome to Our Store!
      </h1>
      <p className="text-lg sm:text-xl text-gray-600 mb-6 text-center">
        Discover the latest products at the best prices with exclusive deals!
      </p>
      <Link href={'/products'}>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg text-lg font-semibold flex items-center gap-2 transition hover:bg-blue-700">
          <ShoppingCart className="w-5 h-5" />
          Browse Products
        </button>
      </Link>
    </div>
  );
}
