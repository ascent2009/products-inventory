export type ProductModel = {
    category?: string;
    description: string;
    id: number | string;
    image: string | HTMLImageElement | any;
    price: number;
    rating?: { count: number; rate: number };
    title: string;
};
