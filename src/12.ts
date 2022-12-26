// Generics

// Generics Functions
interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

async function findOne<DataType>(path: string, id: number): Promise<DataType> {
  const response = await fetch(`https://dummyjson.com/${path}/${id}`);
  return response.json();
}

findOne<Product>("products", 1)
  .then((product: Product) => {
    console.log(product);
  })
  .catch((error: any) => {
    console.log(error);
  });
