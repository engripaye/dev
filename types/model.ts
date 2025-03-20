export type statusEnum = "draft" | "publish" | "archive"
export type inventoryEnum = "instock" | "outstock" 
export type TypeProductModel = {
    // type of properties 
    featured: boolean,
    name: string,
    slug: string,
    description: string,
    additional?: string, 
    specification?: string,
    category: TypeCategoryModel,
    subCategories?: TypeSubCategoryModel[],
    collections?: TypeCollectionModel[],
    tags?: TypeTagModel[],
    brand: TypeBrandModel,
    reviews?: TypeReviewModel[],
    store: TypeStoreModel,
    productVariants: TypeProductVariantModel[],
    images: string[],
    price?: number,
    discount?: number,
    status?: statusEnum,
    seoTitle?: string,
    seoDescription?: string,
    seoSlug?: string,
    weight: number,
    unit: string,
    inventory: inventoryEnum,
    sku: string,
    user_id: string,
    views?: number,
    createdAt?: Date,
    updatedAt?: Date,

};

export type TypeProductVariantModel = {

};

export type TypeStoreModel = {
 
};

export type TypeReviewModel = {

};

export type TypeBrandModel= {

};

export type TypeTagModel = {

};

export type TypeCollectionModel = {

};

export type TypeSubCategoryModel = {

};

export type TypeCategoryModel = {
    // type of properties
    name: string,
    description?: string,
    slug: string,
    image: string,
    status?: statusEnum,
    user_id: string,
    subCategories: TypeSubCategoryModel[], 

};

export type TypeTokenModel = {
        // type of properties
        template: string,
        token: string,
        status?: statusEnum,
        user_id: string,

};