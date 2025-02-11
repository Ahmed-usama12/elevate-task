import React from 'react';
import { Star } from "lucide-react";
import Link from 'next/link';
export default async function Products() {
    async function getProducts() {
        let response = await fetch('https://fakestoreapi.com/products');
        response = await response.json();
        return response;
    }

    let products = await getProducts();

    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <Link href={`/products/${product.id}`} key={product.id}>
                            <div className="bg-white p-4 shadow-lg rounded-lg flex flex-col items-center border border-transparent hover:border-blue-500 transition cursor-pointer min-h-[400px]">
                                <img src={product.image} alt={product.title} className="w-32 h-32 object-contain mb-4" />
                                <h3 className="text-lg font-semibold text-gray-700 text-center flex-grow">{product.title}</h3>
                                <div className="flex justify-between w-full mt-2 text-gray-600">
                                    <span className="text-lg font-bold text-blue-600">${product.price}</span>
                                    <span className="text-sm flex items-center gap-1">
                                        <Star className="w-4 h-4 text-yellow-500" /> {product.rating.rate}
                                    </span>
                                </div>
                                <p className="text-sm text-gray-500 text-center mt-2 flex-grow">
                                    {product.description.length > 70 ? product.description.substring(0, 90) + "...." : product.description}

                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
