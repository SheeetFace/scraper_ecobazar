import fetch from 'node-fetch';
import cheerio from 'cheerio';
import { uid } from 'uid';
import { getRandomDate } from './utils.js';
import { uploadImageToCloudinary } from './processImages.js';

export default async function scrapeData({ categoryName, urlMain, urlCategory, tag, jsonName }) {

    const maxItems = 15;

    try{
        const response = await fetch(urlCategory);
        const data = await response.text();
        const $ = cheerio.load(data);
        
        const results = [];
        const productLinks = [];
        const nameSet = new Set();

        const productItems = $('.product-item');
       
        for(let i = 0; i < maxItems; i++){
            const element = productItems[i];

            const title = $(element).find('.box-title .title a').text().trim();
            const nameKey = title.split(' ')[0];

            if(nameSet.has(nameKey)) continue;

            nameSet.add(nameKey);

            console.log(`parsed ${title} `)

            const priceText = $(element).find('.salecontainer .unit_price .from_price').text().trim();
            const price = parseFloat(priceText.replace('$', '').replace(',', '.'));
            let image = $(element).find('.collection-image a img').attr('data-src');
            const link = urlMain + $(element).find('.box-title .title a').attr('href');

            const id = uid();
            const rating = Math.floor(Math.random() * 5) + 1;
            const stock = Math.floor(Math.random() * 123) + 0;

            image = await uploadImageToCloudinary(image);

            const product = {
                name: title,
                id: id,
                src: image,
                currentCost: price.toFixed(2),
                oldCost: '',
                sale: '',
                rating: rating.toString(),
                promotedCategories: [],
                weight: '',
                color: '',
                type: 'Organic',
                category: categoryName[0].toUpperCase() + categoryName.slice(1),
                stockStatus: stock <= 25 ? '' : stock.toString(),
                date: getRandomDate(),
                tag: tag,
                description: ''
            };

            results.push(product);
            productLinks.push(link);
        }

        async function getProductDescription(link){
            console.log(`get descriptions`)
            try{
                const response = await fetch(link);
                const data = await response.text();
                const $ = cheerio.load(data);
                return $('div[data-position="description"] .rte-content p').text().trim();
            }catch(error){
                console.error(`Error when receiving a description for ${link}: ${error.message}`);
                return '';
            }
        }

        for (let i = 0; i < results.length; i++) {
            results[i].description = await getProductDescription(productLinks[i]);
        }

        const discountCount = Math.ceil(results.length * 0.15);
        const discountIndices = new Set();

        while (discountIndices.size < discountCount){
            discountIndices.add(Math.floor(Math.random() * results.length));
        }

        discountIndices.forEach(index => {
            const discount = Math.floor(Math.random() * 41) + 10;
            const currentCost = parseFloat(results[index].currentCost);
            const oldCost = currentCost / (1 - discount / 100);
            results[index].sale = `${discount}%`;
            results[index].oldCost = oldCost.toFixed(2);
        });

        return results;
    } catch (error) {
        console.error(`Error during data parsing: ${error.message}`);
    }
}



