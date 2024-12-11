import { template } from './template.js';
// This is the main entry point of the Worker script
export default {
    async fetch(request, env, ctx) {
        return handleRequest(env.request);
    },
}

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
        const courseList = $('table.table-tight').html();
       // console.log(courseList);
        // Insert the course list into the template
        const finalHtml = template.replace('<!-- Table content will be inserted here -->', courseList);
        return new Response(finalHtml, {
            headers: { 'content-type': 'text/html;charset=UTF-8' },
        });
    } catch (err) {
        return new Response('Error fetching or processing the HTML content: ' + err.message, {
            status: 500,
            headers: { 'content-type': 'text/plain;charset=UTF-8' },
        });
    }
}