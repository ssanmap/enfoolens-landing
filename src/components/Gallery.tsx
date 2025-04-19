import { useState, useEffect } from "react";
import { getProductos, getCategorias } from "../api/strapi";

interface Category {
  id: number;
  Name: string;
  Slug: string;
}

interface Product {
  id: number;
  titulo: string;
  precio: number;
  stock: number;
  destacado: boolean;
  discount?: number;
  imagen: Array<{ url: string }>;
  categoria: { id: number; Name: string; Slug: string };
}

export const Gallery: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [filter, setFilter] = useState<string>("all");
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    async function fetchAll() {
      try {
        const [cats, prods] = await Promise.all([
          getCategorias(),
          getProductos(),
        ]);
        setCategories(cats);
        setProducts(prods);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchAll();
  }, []);

  if (loading) {
    return (
      <div className="py-20 flex justify-center">
        <div className="animate-pulse text-enfoolens-purple">
          Cargando productos...
        </div>
      </div>
    );
  }

  const visibles =
    filter === "all"
      ? products
      : products.filter((p) => p.categoria.Slug === filter);

  return (
    <section id="galeria" className="py-16 bg-enfoolens-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-enfoolens-dark">
          Nuestros <span className="text-enfoolens-primary">Lentes</span>
        </h2>

        {/* filtros morados */}
        <div className="flex justify-center flex-wrap gap-3 mb-12">
          <button
            className={`px-4 py-2 rounded-full transition text-sm font-medium
              ${filter === "all"
                ? "bg-enfoolens-purple text-white shadow-lg"
                : "bg-white text-enfoolens-dark shadow hover:bg-enfoolens-purple/20"
            }`}
            onClick={() => setFilter("all")}
          >
            Todos
          </button>

          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`px-4 py-2 rounded-full transition text-sm font-medium
                ${filter === cat.Slug
                  ? "bg-enfoolens-purple text-white shadow-lg"
                  : "bg-white text-enfoolens-dark shadow hover:bg-enfoolens-purple/20"
              }`}
              onClick={() => setFilter(cat.Slug)}
            >
              {cat.Name}
            </button>
          ))}
        </div>

        {/* grid con detalles morados */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {visibles.map((p) => {
            const imgSrc = Array.isArray(p.imagen)
              ? `http://localhost:1337${p.imagen[0].url}`
              : p.imagen;

            return (
              <div
                key={p.id}
                className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-enfoolens-purple"
              >
                {/* imagen con overlay morado al hover */}
                <div
                  className="relative pt-[100%] overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage(imgSrc)}
                >
                  <img
                    src={imgSrc}
                    alt={p.titulo}
                    className="absolute top-0 left-0 w-full h-full object-cover transition-transform group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-enfoolens-purple/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  {p.discount && (
                    <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                      -{p.discount}%
                    </span>
                  )}
                  {p.destacado && (
                    <span className="absolute top-2 right-2 bg-enfoolens-primary text-white text-xs px-2 py-1 rounded">
                      ⭐ Popular
                    </span>
                  )}
                </div>

                {/* detalles */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-enfoolens-dark mb-2">
                    {p.titulo}
                  </h3>
                  <p className="text-enfoolens-purple font-bold text-lg mb-1">
                    ${p.precio.toLocaleString("es-CL")}
                  </p>
                  <p className="text-sm text-gray-500 mb-4">Stock: {p.stock}</p>
                  <button
                    className="bg-enfoolens-purple text-white px-6 py-2 rounded-full hover:bg-enfoolens-purple-dark transition w-full"
                    onClick={() =>
                      window.open(
                        `https://wa.me/123456789?text=Hola! Me interesa ${p.titulo}`,
                        "_blank"
                      )
                    }
                  >
                    Consultar
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <img
              src={selectedImage}
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
