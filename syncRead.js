import fs from 'fs';

console.log('--- התחלת קריאה סינכרונית ---');
console.time('זמן ריצה סינכרוני');

try {
    // קריאת 3 הקבצים בצורה סינכרונית
    const data1 = fs.readFileSync('file1.txt', 'utf-8');
    const data2 = fs.readFileSync('file2.txt', 'utf-8');
    const data3 = fs.readFileSync('file3.txt', 'utf-8');

    // הדפסת נתונים על כל קובץ (כמות תווים ובדיקת מילה מסוימת)
    console.log(`מס' התווים בקובץ 1 הוא: ${data1.length}. האם מכיל את המילה "node"? ${data1.includes('node')}`);
    console.log(`מס' התווים בקובץ 2 הוא: ${data2.length}. האם מכיל את המילה "node"? ${data2.includes('node')}`);
    console.log(`מס' התווים בקובץ 3 הוא: ${data3.length}. האם מכיל את המילה "node"? ${data3.includes('node')}`);

} catch (error) {
    console.error('שגיאה בקריאת הקבצים:', error.message);
}

console.timeEnd('זמן ריצה סינכרוני');