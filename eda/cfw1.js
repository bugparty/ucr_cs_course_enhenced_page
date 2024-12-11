addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
    const url = 'https://www1.cs.ucr.edu/graduate/course-listings';
    const baseUrl = 'https://www1.cs.ucr.edu';

    try {
        const response = await fetch(url);
        const html = await response.text();

        const cheerio = require('cheerio');
        const $ = cheerio.load(html);

        // Update all relative URLs to absolute URLs
        $('a[href], link[href], script[src], img[src]').each((index, element) => {
            const attr = element.tagName === 'script' || element.tagName === 'img' ? 'src' : 'href';
            const url = $(element).attr(attr);

            if (url && !url.startsWith('http') && !url.startsWith('//')) {
                $(element).attr(attr, baseUrl + url);
            }
        });

        // Extract the course list part
        const courseList = $('table.table-tight').parent().html();

        return new Response(courseList, {
            headers: { 'content-type': 'text/html;charset=UTF-8' },
        });
    } catch (err) {
        return new Response('Error fetching or processing the HTML content: ' + err.message, {
            status: 500,
            headers: { 'content-type': 'text/plain;charset=UTF-8' },
        });
    }
}