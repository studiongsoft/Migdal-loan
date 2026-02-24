# Migdal Keshet - Setup Instructions

## Image Setup (Required)

The project uses images exported from the Pencil design file. You need to copy them to the `public/images` folder:

### From the existing exports:
```bash
# Copy the main hero illustration
cp "/Users/moran.feldman/Desktop/migdal ide/Main image.svg" "./public/images/main-image.svg"
cp "/Users/moran.feldman/Desktop/migdal ide/Main image.png" "./public/images/main-image.png"
```

### Export the background illustration:
1. Open the design file in Pencil: `/Users/moran.feldman/Desktop/migdal keseht.pen`
2. Select the "Background" frame (node id: `DKLLf`) or the inner "Layer_1" frame (node id: `pMudu`)
3. Export as SVG to: `./public/images/background-illustration.svg`

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
migdal-keshet/
├── public/
│   └── images/
│       ├── main-image.svg          # Hero rainbow + coins illustration
│       └── background-illustration.svg  # Warehouse illustration
├── src/
│   ├── app/
│   │   ├── globals.css    # CSS variables & Tailwind
│   │   ├── layout.tsx     # RTL Hebrew layout
│   │   └── page.tsx       # Main landing page
│   └── components/
│       ├── Button.tsx     # CTA buttons
│       ├── Header.tsx     # Header with Migdal logo
│       ├── HeroSection.tsx # Hero content
│       ├── HeroIllustration.tsx    # Uses main-image.svg
│       └── FooterIllustration.tsx  # Uses background-illustration.svg
```

## Colors Used

- Primary Dark Blue: `#020140`
- Accent Green: `#a2eb9a`
- Light Blue 1: `#dee9f5`
- Light Blue 2: `#b8d3ee`
- Light Blue 3: `#f0f5fb`
