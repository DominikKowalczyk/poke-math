#Pierre

Pierre is a Chrome extension that replaces your new tab with a math challenge. It uses KaTeX for rendering math symbols and equations, providing an engaging experience every time you open a new tab.

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
   - When you open a new tab in Chrome,Pierre will display a math question by overriding the default new tab page.

3. **Customization**  
   - Modify [js/main.js](js/main.js) for extending the math challenges.
   - Update [styles.css](styles.css) to change the styling of the new tab content.

## Roadmap

The goal is to evolve Pierre into a fully-fledged math challenge engine with programmatic question generation across various math topics and difficulty levels. Below are the key milestones and features planned for future development:

### Phase 1: Core Engine Enhancements
- **Dynamic Question Generation:**  
  Develop an engine to generate questions programmatically based on selected math topics.
  
- **Difficulty Levels:**  
  Integrate multiple difficulty tiers ranging from SAT-level challenges to Math Olympiad problems.
  
- **Topic Variety:**  
  - Algebra
  - Geometry
  - Calculus
  - Statistics
  - Number Theory

### Phase 2: User Interaction and Experience
- **Multi-Modal Input:**  
  Support for different input methods such as multiple-choice and free-text answers.
  
- **Adaptive Challenges:**  
  Implement an adaptive algorithm to adjust question difficulty based on user performance.
  
- **Enhanced Visual Feedback:**  
  Improve UI transitions and animations to provide dynamic feedback on user answers.

### Phase 3: Extensibility and Community
- **Plugin Architecture:**  
  Allow community contributions through plugins or modules to add new topics and question types.
  
- **Progress Tracking:**  
  Develop features for tracking user performance, including scores and progress over time.
  
- **Leaderboards and Challenges:**  
  Add competitive elements such as leaderboards and time-based challenges.

## License

The font files in the [fonts/](fonts/) directory are licensed under the SIL Open Font License, Version 1.1. See [fonts/OFL.txt](fonts/OFL.txt) for full details.

The rest of the project is provided as-is for educational and personal use.