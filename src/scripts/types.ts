

export interface House {
    id: string,
    listed_price: number,
    address: string,
    address2: string,
    city: string,
    state: string,
    zip: string,
    sq_footage: number,
    amount_of_bedrooms: number,
    amount_of_bathrooms: number,
    year_built: number,
    long_desc: string,
    main_img: string,
    images: string[],
}