# UCR CS Grad Courses

This project is a Cloudflare Worker script that fetches and processes the UCR CS graduate course listings, modifies the HTML content to update relative URLs to absolute URLs, and serves the modified HTML content.

## Project Structure

- `src/index.js`: The main entry point of the Worker script.
- `src/template.js`: Contains the HTML template used to display the course listings.
- `eda/transform.js`: A script that reads an HTML file, updates relative URLs to absolute URLs, and writes the modified content to a new file.
- `wrangler.toml`: Configuration file for the Cloudflare Worker.

## Technologies Used

- JavaScript
- npm
- Cloudflare Workers
- Cheerio (for HTML parsing and manipulation)

## Setup

1. **Install Dependencies**: Ensure you have `npm` installed. Run the following command to install the required packages:
    ```sh
    npm install
    ```

2. **Configure Wrangler**: Ensure you have the Cloudflare Wrangler CLI installed and configured. Follow the [Wrangler documentation](https://developers.cloudflare.com/workers/wrangler/get-started/) for setup instructions.

## Usage

### Running the Worker

To start the Cloudflare Worker, use the following command:
```sh
wrangler dev
```

### Transforming HTML

To run the `eda/transform.js` script, use the following command:
```sh
node eda/transform.js
```

## File Descriptions

### `src/index.js`

This file contains the main logic for the Cloudflare Worker. It fetches the UCR CS graduate course listings, processes the HTML to update relative URLs, and serves the modified HTML content.

### `src/template.js`

This file contains the HTML template used to display the course listings. The course list is dynamically inserted into this template.

### `eda/transform.js`

This script reads an HTML file (`2024csgrad.html`), updates all relative URLs to absolute URLs, and writes the modified content to a new file (`2024csgrad_modified.html`).

### `wrangler.toml`

This is the configuration file for the Cloudflare Worker. It includes settings such as the script name, entry point, and compatibility date.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.