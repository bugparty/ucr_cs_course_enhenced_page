const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

// Read the HTML file
const inputFilePath = path.join(__dirname, '2024csgrad.html');
const outputFilePath = path.join(__dirname, '2024csgrad_modified.html');
const baseUrl = 'https://www1.cs.ucr.edu';

fs.readFile(inputFilePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }

    // Load the HTML content into cheerio
    const $ = cheerio.load(data);

    // Update all relative URLs to absolute URLs
    $('a[href], link[href], script[src], img[src]').each((index, element) => {
        const attr = element.tagName === 'script' || element.tagName === 'img' ? 'src' : 'href';
        const url = $(element).attr(attr);

        if (url && !url.startsWith('http') && !url.startsWith('//')) {
            $(element).attr(attr, baseUrl + url);
        }
    });

    // Write the modified HTML content to a new file
    fs.writeFile(outputFilePath, $.html(), 'utf8', (err) => {
        if (err) {
            console.error('Error writing the file:', err);
            return;
        }
        console.log('File has been successfully modified and saved as', outputFilePath);
    });
});