# 🌿 Garden-Community

A community-themed social feed web application where users can share posts about gardening, sustainability, and community growth. Built as a front-end project to demonstrate dynamic DOM manipulation, event handling, and modular JavaScript design.

## 📖 Overview

Garden-Community is a single-page web application that simulates a real-time social feed. Users can publish their own posts, interact with content through a like system, and watch the community grow through automatically generated posts that appear at regular intervals.

The project was developed using **vanilla HTML, CSS, and JavaScript**, with no external libraries or frameworks, in order to demonstrate a solid understanding of core front-end fundamentals.

## ✨ Features

- **User authentication prompt** — users provide a custom username at the start of the session.
- **Post publishing** — users can compose and publish their own posts, which are visually distinguished from community posts.
- **Automated content generation** — community posts are generated every 4 seconds using randomized usernames, profile pictures, and message content.
- **Dynamic like system** — each post includes a toggleable like button with an automatic counter that simulates organic engagement growth over time.
- **Input validation** — empty submissions are prevented through user-facing alerts.
- **Responsive interactions** — hover and transition effects provide visual feedback across the interface.

## 🛠️ Technology Stack

| Layer        | Technology              |
|--------------|-------------------------|
| Structure    | HTML5                   |
| Styling      | CSS3 (Flexbox, transitions, hover effects) |
| Logic        | JavaScript (ES6, Vanilla) |

## 🧠 Technical Concepts Demonstrated

- **DOM manipulation:** dynamic creation and insertion of elements using `createElement`, `appendChild`, and `prepend`.
- **Event-driven programming:** click events for posting and liking, with state management via boolean flags.
- **Asynchronous timing:** `setInterval` used both for periodic content generation and for simulating organic like growth.
- **Functional decomposition:** reusable helper functions (`randomItem`, `generateUsername`, `generateText`) to keep the codebase modular and maintainable.
- **Conditional rendering:** ternary operators differentiate between user-authored and auto-generated posts.
- **CSS animations and transitions:** smooth hover effects on posts, like buttons, and the rotating logo.

## 📁 Project Structure
