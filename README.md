# APT-replay

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

---

## Table of Contents

- [Project Structure](#project-structure)
- [Features & Components](#features--components)
- [Getting Started](#getting-started)
- [Learn More](#learn-more)
- [Deploy on Vercel](#deploy-on-vercel)

---

## Project Structure

```
src/
  app/
    components/
      FacultyComponent.js
      HomepageComponent1.js
      LectureComponent.js
      LectureComponent2.js
      SubjectComponents.js
      SubjectComponents2.js
    pages/
      FacultyPage.js
      HomePage.js
      LectureHeader.js
      LecturesPage.js
      Navbar.js
      SubjectPage.js
```

---

## Features & Components

### Main Pages

- **HomePage**  
  Main landing page. Shows course intro, summary stats, and featured instructors.

- **FacultyPage**  
  Highlights featured faculty and lists all faculty members.

- **LecturesPage**  
  Lists all lectures with video previews, titles, descriptions, durations, and test info.

- **SubjectPage**  
  Lists all subjects with details like lectures, duration, test series, and notes.

- **LectureHeader**  
  Header for lecture/subject pages, includes stats and enroll button.

- **Navbar**  
  Top navigation bar.

### Main Components

- **HomepageComponent1**  
  Displays summary stats (subjects, lectures) with icons.

- **FacultyComponent**  
  Renders a list of faculty members with images, names, qualifications, and experience.

- **LectureComponent**  
  Shows lecture/test/notes stats with icons.

- **LectureComponent2**  
  Lists lectures with video previews, titles, descriptions, durations, and test info.

- **SubjectComponents / SubjectComponents2**  
  Show subject cards with details like lectures, duration, test series, and notes.

---

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

---

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

---

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.