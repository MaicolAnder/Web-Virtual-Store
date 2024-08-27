export class Product {
    id: number | null;
    title: string | null;
    description: string| null;
    category: string| null;
    price: number| null;
    image?: string;
    rating?: Rating;

    constructor(){
        this.id = null;
        this.title = null;
        this.description = null
        this.category = null
        this.price = null
    }
}


export interface Rating {
    count: number| null;
    rate: number| null;
}
