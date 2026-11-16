# Audio Renamer

A lightweight web application that renames audio files based on their embedded metadata, making them easier to identify and organize.

**[Live Demo](https://audiorenamer.netlify.app/)**

## The Problem

Audio files downloaded from different sources sometimes have random, unreadable, or meaningless filenames, making them difficult to identify and organize.

I built Audio Renamer as a small utility to solve this problem by extracting existing metadata from audio files and using it to generate more meaningful filenames.

## How It Works

1. Upload an audio file with an unclear or randomly generated filename.
2. The application reads the file's embedded metadata using `music-metadata`.
3. It extracts information such as the track title and artist.
4. The file can then be downloaded with a more descriptive filename based on that information.

The application relies on metadata already embedded in the file rather than identifying songs through audio recognition.

## Technical Decisions

### Why React and TypeScript?

I chose React to build a simple, interactive interface for handling file uploads and downloads without introducing unnecessary complexity.

TypeScript was used to provide type safety when working with file objects, metadata structures, and application state.

### Why music-metadata?

Instead of implementing an audio metadata parser from scratch or relying on an external music identification API, I used the `music-metadata` library.

This allowed me to focus on the actual problem: extracting existing file information and generating meaningful filenames.

It also kept the implementation relatively lightweight and avoided the need for a separate song recognition service.

### Why Vite?

Vite was selected to provide a straightforward development environment with fast iteration and minimal configuration for this small React application.

## Tech Stack

- **React** — User interface
- **TypeScript** — Type safety
- **Vite** — Development and build tooling
- **music-metadata** — Audio metadata extraction
- **Tailwind CSS & SCSS** — Styling

## Running Locally

```bash
git clone https://github.com/nafasebra/audio-renamer.git
cd audio-renamer
npm install
npm run dev
```

## Project Status

This is a small, independently developed utility project, preserved as part of my software development portfolio.

The repository demonstrates a practical approach to solving a specific problem using existing browser capabilities and open-source libraries.

## License

MIT License.
