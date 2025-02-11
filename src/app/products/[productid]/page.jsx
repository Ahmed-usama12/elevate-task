'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Star } from 'lucide-react';
import Link from 'next/link';

export default function ProductDetails() {
    const { productid } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchProduct() {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${productid}`);
                const data = await response.json();
                setProduct(data);
            } catch (error) {
                console.error('Error fetching product:', error);
            } finally {
                setLoading(false);
            }
        }
        if (productid) {
            fetchProduct();
        }
    }, [productid]);

    if (loading) {
        return <div className="min-h-screen flex justify-center items-center text-gray-700">Laoding...</div>;
    }

    if (!product) {
        return <div className="min-h-screen flex justify-center items-center text-red-500">No Product Founded...</div>;
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="bg-white p-6 shadow-lg rounded-lg max-w-2xl w-full">
                <img src={product.image} alt={product.title} className="w-64 h-64 object-contain mx-auto mb-4" />
                <h1 className="text-2xl font-bold text-gray-800 text-center">{product.title}</h1>
                <p className="text-gray-600 text-center mt-2">{product.category}</p>
                <div className="flex justify-between items-center mt-4">
                    <span className="text-2xl font-bold text-green-600">${product.price}</span>
                    <span className="flex items-center gap-1 text-gray-600">
                        <Star className="w-5 h-5 text-yellow-500" /> {product.rating.rate} ({product.rating.count} )
                    </span>
                </div>
                <p className="text-gray-700 mt-4 text-center">{product.description}</p>
                <div className="mt-6 flex justify-center">
                    <Link href={'/products'}>
                        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg text-lg font-semibold flex items-center gap-2 transition hover:bg-blue-700">
                            Back
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
