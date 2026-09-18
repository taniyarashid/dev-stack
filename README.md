# Dev Stack

Dev Stack is a responsive React website where users can explore different web development technologies and build their own technology stack. Users can add technologies to their stack, remove them, and manage their selected technologies.

## Technologies Used

* React
* Vite
* JavaScript
* HTML
* CSS
* React-Toastify

## Features

1. **Explore Technologies** — Browse different technologies with their category, description, rating, and difficulty.
2. **Build Your Stack** — Add technologies to your personal stack and remove them whenever needed.
3. **Responsive Design** — The website works smoothly on desktop, tablet, and mobile screens.

## React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX is a syntax that allows us to write HTML-like code inside JavaScript. React uses JSX to make it easier to create and understand UI components.

### 2. What is the difference between props and state?

Props are data passed from a parent component to a child component. State is data managed inside a component that can change over time.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` lets a React component store and update data. I used it to manage the selected technology stack, the technology list, the loading state, and button states.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` runs code after a component renders. I used it to load the technology JSON data and manage the loading state when the data is being loaded.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

A unique `key` helps React identify each item in a list. It allows React to efficiently update the correct item when the list changes.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI depending on a condition. I used it to show an empty stack message when there are no technologies in the user's stack.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data to a child using props. A child can send information back by calling a function that the parent passes to it as a prop.
