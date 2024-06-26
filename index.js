import scrapeData from './parse.js';
import { saveToFile } from './saveToFile.js';

import { FRUIT,VEGETABLES,MEAT_FISH,SNACKS,BEVERAGES,BREAD_BAKERY,DIABETIC,OIL } from './constants.js';


(async()=>{
    console.log('🏴‍☠️ Start parsing... 🏴‍☠️')

    const data = await scrapeData(FRUIT);

    saveToFile(data, FRUIT.jsonName);
})();

