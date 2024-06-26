import fs from 'fs';

export function saveToFile(data, jsonName) {
    let existingData = [];

    if (fs.existsSync(jsonName)) {
        const fileData = fs.readFileSync(jsonName, 'utf-8');
        existingData = JSON.parse(fileData);
    }

    const updatedData = existingData.concat(data);
    fs.writeFileSync(jsonName, JSON.stringify(updatedData, null, 2));
    console.log(`The data was successfully written to ${jsonName} - its ${updatedData.length} objects`);
}
