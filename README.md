# BizTrack

A modern, responsive small business management app built with React, Tailwind CSS, and Lucide Icons. This application provides a clean interface for managing e-commerce operations.

## Features

- 🎯 Responsive sidebar with collapsible navigation
- 🔍 Global search functionality
- 🔔 Notification system
- 👤 User profile management
- 📱 Mobile-friendly design with overlay menu
- 🎨 Clean and modern UI with dark theme
- ⚡ Fast and smooth transitions

## Core Components

- **Header**: Global navigation bar with search, notifications, and user profile
- **Sidebar**: Collapsible navigation menu with the following sections:
  - Dashboard
  - Products
  - Orders
  - Customers
  - Notes
  - Expenses
  - Support & Settings

## Tech Stack

- React
- React Router DOM
- Tailwind CSS
- Lucide Icons
- Vite

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Open your browser and visit `http://localhost:5173`

## Project Structure

```
src/
├── components/
│   ├── Header.jsx
│   ├── Sidebar.jsx
│   ├── Logo.jsx
│   └── EmptyState.jsx
├── pages/
│   ├── Dashboard.jsx
│   ├── Products.jsx
│   ├── Orders.jsx
│   ├── Customers.jsx
│   ├── Notes.jsx
│   ├── Expenses.jsx
│   ├── Help.jsx
│   ├── Contact.jsx
│   └── Settings.jsx
└── App.jsx
```

## Customization

The dashboard can be customized by:

- Modifying the Tailwind configuration
- Updating the color scheme in the CSS
- Adding new routes and components
- Customizing the sidebar navigation items

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - feel free to use this project for personal purposes only.
