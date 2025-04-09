import { useState, useEffect } from "react";
import axios from "axios";

interface Product {
  _id: string;
  name: string;
  price: number;
  imageUrl: string;
}

export const Gallery = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get(
          "https://enfoolens-backend-production.up.railway.app/api/products"
        );
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return (
    <div className="py-20 flex justify-center">
      <div className="animate-pulse text-enfoolens-primary">Cargando productos...</div>
    </div>
  );

  return (
    <section id="galeria" className="py-16 bg-enfoolens-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-enfoolens-dark">
          Nuestros <span className="text-enfoolens-primary">Lentes</span>
        </h2>

        {/* Grid de productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <div 
              key={product._id} 
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all border border-enfoolens-light/20"
            >
              {/* Imagen clickeable */}
              <div 
                className="relative pt-[100%] overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(product.imageUrl)}
              >
                <img
                  src={`${product.imageUrl}?w=600&h=600&c=fill`}
                  alt={product.name}
                  className="absolute top-0 left-0 w-full h-full object-cover hover:opacity-90 transition-opacity"
                  loading="lazy"
                />
              </div>

              {/* Info del producto */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-enfoolens-dark mb-2">
                  {product.name}
                </h3>
                <p className="text-enfoolens-primary font-bold text-xl mb-4">
                  ${product.price.toLocaleString('es-CL')}
                </p>
                <button 
                  className="bg-enfoolens-primary text-white px-6 py-2 rounded-full hover:bg-enfoolens-primary-dark transition w-full"
                  onClick={() => window.open(`https://wa.me/message/EZCYJRKWLRGHB1?text=Hola, me interesan los ${product.name} (Código: ${product._id})`, '_blank')}
                >
                  Consultar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal para imagen ampliada */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-4xl w-full">
            <img
              src={`${selectedImage}?w=1200&q=90`}
              alt="Vista ampliada"
              className="w-full h-auto max-h-[80vh] object-contain"
            />
            <button 
              className="absolute top-4 right-4 text-white text-2xl bg-black/50 rounded-full w-10 h-10 flex items-center justify-center"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
};