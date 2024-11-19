# 3D Stories

3D Stories is a powerful tool designed to present 3D Models of historic garments from the textile collection at the Germanisches Nationalmuseum Nuremberg. Developed in collaboration with the Urban Complexity Lab of Potsdam, this tool provides an interactive and immersive experience for exploring historic textiles.

![Untitled](https://github.com/user-attachments/assets/e8b3b9da-e043-4c9e-be12-39fd98b82b02)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Applications Used](#applications-used)
- [How to Create Your 3D Story (Step-by-Step User Guide)](<https://github.com/uclab-potsdam/3dstories/wiki/How-to-Create-Your-3D-Story-(Step%E2%80%90by%E2%80%90Step-User-Guide)>)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Installation

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 22.9.0 or higher)
- [npm](https://www.npmjs.com/) (version 10.8.3 or higher)

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/3D-Stories.git
   cd 3D-Stories
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. To build under a specific path, e.g. `/3dstories` you also need to specify the full base url in the `VITE_URL` variable:

   ```bash
   VITE_URL=https://your-domain/3dstories  npm run build -- --base=/3dstories
   ```

4. Preview:

   ```bash
   npm run preview -- --base=/3dstories
   ```

## Usage

### Running the Application

To start the application, run the following command:

```bash
npm run dev
```

This will launch the development server and open the application in your default web browser.

## Features

- **Animated Storyline**: Animation of 3D objects based on a narrative that guides the user through the object's details.
- **Visual Consistency**: Link your presentation to a preferable position, rotation, or scale of the 3D/2D objects.
- **Flexible Navigation**:
  - Scrolling
  - Points of interest (the model exploration mode).
  - Fullscreen menu navigation
- **Orbit Tool**: Use the orbit tool to explore the 3D Model from different angles (Rotate, Zoom Out/In (Scale), Move).
- **Multiple Objects**: Animate and explore multiple objects within a single story.
- **Modal Windows**: Modal windows provide additional images and information related to the text.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Applications Used

- **React Vite**: For building a fast and modern web application.
- **React Three Fiber**: For rendering 3D graphics using Three.js in React.
- **Theatre JS**: For animation and interactive experiences.
- **Blender**: For converting 3D Models to glb/gltf format.

## [How to Create Your 3D Story (Step-by-Step User Guide)](<https://github.com/uclab-potsdam/3dstories/wiki/How-to-Create-Your-3D-Story-(Step%E2%80%90by%E2%80%90Step-User-Guide)>)

### Preview glTF Models

You can preview your glTF models using the following tools:

- [glTF Report](https://gltf.report/)
- [glTF Viewer from React Three Fiber](https://gltf.pmnd.rs/)
- [Simple glTF Viewer](https://gltf-viewer.donmccurdy.com/)

## Contributing

We welcome contributions! If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a Pull Request.

## License

This project is licensed under the GNU Affero General Public License. See the [AGPL-3.0 License](https://www.gnu.org/licenses/agpl-3.0.en.html) for details.

## Contact

If you have any questions or suggestions, please feel free to contact us at your-email@example.com.
