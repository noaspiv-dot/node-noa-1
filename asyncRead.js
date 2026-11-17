import fs from 'fs';

console.log('--- התחלת קריאה אסינכרונית ---');
console.time('זמן ריצה אסינכרוני');

// קריאת קובץ 1
fs.readFile('file1.txt', 'utf-8', (err1, data1) => {
    if (err1) {
        console.error('שגיאה בקריאת קובץ 1:', err1.message);
        return;
    }
    console.log(`[קובץ 1] מס' התווים הוא: ${data1.length}`);

    // קריאת קובץ 2
    fs.readFile('file2.txt', 'utf-8', (err2, data2) => {
        if (err2) {
            console.error('שגיאה בקריאת קובץ 2:', err2.message);
            return;
        }
        console.log(`[קובץ 2] מס' התווים הוא: ${data2.length}`);

        // קריאת קובץ 3
        fs.readFile('file3.txt', 'utf-8', (err3, data3) => {
            if (err3) {
                console.error('שגיאה בקריאת קובץ 3:', err3.message);
                return;
            }
            console.log(`[קובץ 3] מס' התווים הוא: ${data3.length}`);

            // קריאת קובץ שלא קיים (לבדיקת טיפול בשגיאות)
            fs.readFile('not-exists.txt', 'utf-8', (err4, data4) => {
                if (err4) {
                    console.error('שגיאה צפויה (קובץ לא קיים):', err4.message);
                } else {
                    console.log(data4);
                }

                // עצירת הטיימר לאחר סיום כל הקריאות
                console.timeEnd('זמן ריצה אסינכרוני');
            });
        });
    });
});