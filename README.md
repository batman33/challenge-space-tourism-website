# Frontend Mentor - Space tourism website solution

This is a solution to the [Space tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information

### Screenshot

![](./preview.jpg)

### Links

- Solution URL: [Add solution URL here](https://github.com/batman33/challenge-space-tourism-website)
- Live Site URL: there no live site, didn't want to upload and search to something

## My process

First done all template with [Free Course](https://scrimba.com/learn/spacetravel), and after, I created app on a several frameworks: React, Vue, Angular, Next, Nuxt

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Vue](https://vuejs.org/) - The Progressive JavaScript Framework
- [Angular](https://angular.io/) - The web development framework
- [Next.js](https://nextjs.org/) - The React Framework for the Web
- [Nuxt.js](https://nuxtjs.org/) - The Intuitive Vue Framework

### What I learned

CSS variable in media

```css
@media (min-width: 35em) {
  :root {
    --fs-800: 5rem;
    ...
  }
}
```

clamp

```css
:root {
  --fs-900: clamp(5rem, 8vw + 1rem, 9.375rem);
}
```

Color variable with opacity settings

```css
.bg-dark { background-color: hsl(var(--clr-dark)); }
```

### Continued development

Need more practice with CSS variable, and HTML property like "aria-", also with Next Nuxt Concepts

### Useful resources

- [scrimba](https://scrimba.com/learn/spacetravel) - This helps with template all page
- all frameworks documentation 

## Author

- [Github](https://github.com/batman33?tab=repositories)
