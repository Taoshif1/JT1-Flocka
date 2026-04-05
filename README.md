# Flocka – Digital Agency Showcase

![Project Status](https://img.shields.io/badge/Status-Complete-brightgreen)
![React Version](https://img.shields.io/badge/React-19-61dafb)
![Styling](https://img.shields.io/badge/Tailwind-4.0-38b2ac)
![Animations](https://img.shields.io/badge/GSAP-3.14-green)

A premium, visually immersive digital agency landing page built as part of the **Taoshiflex Venture & Solution** ecosystem. This project showcases the intersection of high-performance frontend engineering and creative design, featuring advanced scroll-driven animations and 3D graphics.

---

## 🚀 Key Features

### 1. Dynamic Floating Navbar
* **Adaptive Glassmorphism:** A custom-engineered navigation bar that transitions from a transparent full-width layout to a centered, rounded "floating pill" upon scrolling.
* **Smart Visibility:** Implements real-time scroll listeners to invert colors (White to Black) and apply backdrop blurs (`backdrop-blur-xl`), ensuring legibility over dynamic hero videos and bento-grid sections.

### 2. High-Performance Animations (GSAP & Framer Motion)
* **Cinematic Hero:** Utilizes GSAP timelines for synchronized text reveals, skew-entry animations, and video-masking effects.
* **Interactive Footer:** Features a custom "Circular Text Path" badge that rotates based on the user's scroll progress using `Framer Motion` and `useTransform`.
* **Micro-interactions:** Staggered reveals for cards, accordions, and portfolio items to maintain a luxury agency feel.

### 3. 3D & Particle Systems
* **Interactive Scenes:** Powered by **React Three Fiber** and **Three.js** to render performant particle environments that respond to user interaction, adding depth to the visual storytelling.

### 4. Modular Component Architecture
* **Expertise Accordion:** A custom-styled accordion for services and capabilities.
* **Bento Portfolio:** High-density grid layout for showcasing professional projects.
* **Awards & Team:** Dedicated sections for social proof and technical team representation.

---

## 🛠️ Technical Stack

### **Frontend Core**
* **React 19:** Leveraging the latest concurrent rendering capabilities.
* **Vite:** Next-generation frontend tooling for ultra-fast HMR and optimized production builds.
* **Tailwind CSS 4.0:** Utilizing the newest utility engine for sophisticated layouts.
* **DaisyUI:** Integrated for consistent, accessible UI base components.

### **Animation & Graphics**
* **GSAP (@gsap/react):** Professional-grade timeline management and scroll-triggered animations.
* **Framer Motion:** Used for gesture-based interactions and complex SVG transformations.
* **Three.js:** Dedicated 3D rendering pipeline for the `ParticleScene`.

### **Icons & Routing**
* **Lucide React & React Icons:** A comprehensive set of lightweight, vector-based icons.
* **React Router Dom:** Handling seamless client-side navigation.

---


## 📂 Project Structure

```
JT1-Flocka
├─ eslint.config.js
├─ index.html
├─ package-lock.json
├─ package.json
├─ public
│  ├─ favicon.svg
│  └─ icons.svg
├─ README.md
├─ src
│  ├─ App.jsx
│  ├─ assets
│  │  ├─ heroVdo.mp4
│  │  ├─ image1.png
│  │  ├─ image2.png
│  │  ├─ image3.png
│  │  ├─ image4.png
│  │  └─ image5.png
│  ├─ components
│  │  ├─ About.jsx
│  │  ├─ AwardsSection.jsx
│  │  ├─ BlogSection.jsx
│  │  ├─ BrandCard.jsx
│  │  ├─ ContactSection.jsx
│  │  ├─ ExpertiseAccordion.jsx
│  │  ├─ FAQSection.jsx
│  │  ├─ Footer.jsx
│  │  ├─ FunFacts.jsx
│  │  ├─ HappyUsers.jsx
│  │  ├─ Hero.jsx
│  │  ├─ Logo.jsx
│  │  ├─ Navbar.jsx
│  │  ├─ ParticleScene.jsx
│  │  ├─ Portfolio.jsx
│  │  ├─ TeamSection.jsx
│  │  └─ UserFeedbacks.jsx
│  ├─ index.css
│  ├─ layouts
│  │  └─ MainLayout.jsx
│  ├─ main.jsx
│  └─ pages
│     └─ Home.jsx
└─ vite.config.js

```

---

## ⚙️ Setup & Installation

1.  **Clone the Project:**
    ```bash
    git clone [https://github.com/taoshif1/jt1-flocka.git](https://github.com/taoshif1/jt1-flocka.git)
    cd jt1-flocka
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    ```

3.  **Run Development Mode:**
    ```bash
    npm run dev
    ```

4.  **Production Build:**
    ```bash
    npm run build
    ```

---

## 📬 Contact & Collaboration

**Gazi Taoshif (Taoshiflex)** *Founder, Taoshiflex Venture & Solution*

* **LinkedIn:** [linkedin.com/in/taoshif1](https://linkedin.com/in/taoshif1)
* **Email:** taoshif2@gmail.com
* **Location:** Dhaka, Bangladesh

---

© 2026 **TAOSHIFLEX VENTURE & SOLUTION**. All rights reserved.
