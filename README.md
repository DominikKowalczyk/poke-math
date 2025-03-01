# Poke Math

Poke Math is a Chrome extension that replaces your new tab with a math challenge. It uses KaTeX for rendering math symbols and equations, providing an engaging experience every time you open a new tab.

## Project Structure

- **fonts/**  
  Contains the KaTeX font files and license text. See [fonts/OFL.txt](fonts/OFL.txt) for licensing details.

- **js/**  
  Contains JavaScript files including the main module for the extension.

- **katex.min.css**  
  The minified stylesheet for KaTeX. This file sets up the font faces using the font files in [fonts/](fonts/).

- **katex.min.js**  
  The minified JavaScript file for KaTeX.

- **manifest.json**  
  Defines the Chrome extension configuration (see [manifest.json](manifest.json)). It overrides the new tab page with [newtab.html](newtab.html).

- **newtab.html**  
  The main HTML file that is displayed when a new tab is opened.

- **styles.css**  
  The custom stylesheet for the extension.

## Usage

1. **Installation**  
   - Open [Chrome Extensions](chrome://extensions/).
   - Enable Developer Mode.
   - Click on "Load unpacked" and select the project folder.
   
2. **Operation**  
   - When you open a new tab in Chrome, Poke Math will display a math question by overriding the default new tab page.

3. **Customization**  
   - Modify [js/main.js](js/main.js) for extending the math challenges.
   - Update [styles.css](styles.css) to change the styling of the new tab content.

## License

The font files in the [fonts/](fonts/) directory are licensed under the SIL Open Font License, Version 1.1. See [fonts/OFL.txt](fonts/OFL.txt) for full details.

The rest of the project is provided as-is for educational and personal use.