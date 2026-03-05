# Astro Om Education & Research Website

A modern, responsive educational website built with React, TypeScript, and Tailwind CSS. This platform serves as the digital presence for **Astro Om Education & Research**, featuring course details, admission forms, result checking, and an interactive gallery.

## 🚀 Features

- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices.
- **Modern UI/UX**: Smooth animations and transitions powered by `framer-motion`.
- **Dynamic Navigation**: Sticky navbar with scroll progress indicator and mobile menu.
- **Result Portal**: Integrated with Google Sheets (via CSV export) to allow students to check their results using their Class and Registered Mobile Number.
- **Admission System**: Online admission enquiry form with file upload capabilities.
- **Gallery**: Categorized image gallery showcasing campus life and events.
- **Course Listings**: Detailed information about available classes and industrial training programs.

## 🛠️ Tech Stack

- **Frontend Framework**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Routing**: [React Router v7](https://reactrouter.com/)
- **Animations**: [Motion](https://motion.dev/) (Framer Motion)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Data Parsing**: [PapaParse](https://www.papaparse.com/) (for CSV data)
- **Build Tool**: [Vite](https://vitejs.dev/)

## 📂 Project Structure

```
/src
  ├── components/       # Reusable UI components (Navbar, Footer, Buttons, etc.)
  ├── pages/            # Page components (Home, About, Results, etc.)
  ├── assets/           # Static assets
  ├── App.tsx           # Main application component
  ├── main.tsx          # Entry point
  └── index.css         # Global styles and Tailwind configuration
/public                 # Public assets (logos, banners)
```

## ⚡ Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/yourusername/astro-om-website.git
    cd astro-om-website
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Start the development server:
    ```bash
    npm run dev
    ```

4.  Open your browser and navigate to `http://localhost:3000`.

### Building for Production

To create a production-ready build:

```bash
npm run build
```

The output will be in the `dist` directory.

## ⚙️ Configuration

### Google Sheets Integration (Results Page)

The Results page fetches data from a published Google Sheet in CSV format.

1.  Create a Google Sheet with the following headers:
    `student_name`, `father_name`, `class`, `batch`, `mobile`, `subject1`, `subject1_max`, `subject1_marks`, etc.
2.  Publish the sheet to the web as CSV.
3.  Update the CSV URL in `src/pages/Results.tsx`.

### Images

Place your logo and banner images in the `public` folder:
- `logo.png`: Main navbar logo.
- `logow.png`: White version of the logo for the footer.
- `banner.png`: Banner image for the Gallery/Admissions section.
- `aboutimage.png`: Image for the About Us section.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.
