import dotenv from 'dotenv';

dotenv.config();

const URL = process.env.URL_SITE;

export const tagFruit = ['Vitamins', 'Kid foods', 'Low fat', 'Vegetarian', 'Healthy', 'Fruit'];
export const tagVegetables = ['Vegetarian', 'Low fat', 'Healthy', 'Vitamins'];
export const tagMeatFish = ['Meat', 'Low fat', 'Healthy', 'Protein'];
export const tagSnacks = ['Snacks', 'Low fat', 'Healthy', 'Kid foods'];
export const tagBeverages = ['Healthy', 'Low fat', 'Vitamins'];
export const tagBreadBakery = ['Bread', 'Low fat', 'Healthy', 'Vegetarian'];
export const tagDiabetic = ['Low fat', 'Healthy', 'Diabetic'];
export const tagOil = ['Healthy', 'Low fat'];


export const FRUIT = {
    categoryName: 'fruit',
    urlMain: URL,
    urlCategory: URL+'/collections/fruit',
    tag: tagFruit,
    jsonName: 'fruit.json',
};

export const VEGETABLES = {
    categoryName: 'vegetables',
    urlMain: URL,
    urlCategory: URL+'/collections/vegies',
    tag: tagVegetables,
    jsonName: 'vegetables.json',
};

export const MEAT_FISH = {
    categoryName: 'meat&fish',
    urlMain: URL,
    urlCategory: URL+'/collections/butcher', //! seafood
    tag: tagMeatFish,
    jsonName: 'meat-fish.json',
};

export const SNACKS = {
    categoryName: 'snacks',
    urlMain: URL,
    urlCategory: URL+'/collections/chips-snacks',
    tag: tagSnacks,
    jsonName: 'snacks.json',
};

export const BEVERAGES = {
    categoryName: 'beverages',
    urlMain: URL,
    urlCategory: URL+'/collections/drinks-exclude-milk',
    tag: tagBeverages,
    jsonName: 'beverages.json',
};

export const BREAD_BAKERY = {
    categoryName: 'bread&bakery',
    urlMain: URL,
    urlCategory: URL+'/collections/bakery',
    tag: tagBreadBakery,
    jsonName: 'bread-bakery.json',
};

export const DIABETIC = {
    categoryName: 'diabetic',
    urlMain: URL,
    urlCategory: URL+'/collections/grocery-gluten-free',
    tag: tagDiabetic,
    jsonName: 'diabetic.json',
};

export const OIL = {
    categoryName: 'oil',
    urlMain: URL,
    urlCategory: URL+'/search?q=oil',
    tag: tagOil,
    jsonName: 'oil.json',
};