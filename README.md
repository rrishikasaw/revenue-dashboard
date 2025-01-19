# Environment Setup

## Live Project URL

[http://example.com](http://example.com)

## Running this project locally

- First run this command to install packages

```sh
npm install
```

- Then run this project using this command:

```sh
npm run dev
```

## Building this project

- Run this after making sure packages are installed using above steps:

```sh
npm run build
```

This will build static HTML, CSS, JS and related assets.

- Finally run this to see the build preview:

```sh
npm run preview
```

# Project Explanation

## Tools & Technologies Used

This project uses the following tools and technologies:

  - **React**
  - **Redux** for state management
  - **Chart.js** using **React Charts 2** for graphs and charts
  - **Typescript** for type safety
  - **ESLint** for code quality
  - **Tailwind** as the CSS framework
  - **Vite** as the build tools

## Basic Explanation

- The project has `stores` folder which contains all the states of this application, currently it has only app as the main store with 2 values: `isDarkMode` and `isSideBarOpen`. App store also provides functions to changes these values

- The project follows mobile first approach for showing UI

- The Regular Components used are:
  - **SkeletonGraph:** This acts as the skeleton while loading of the graph data
  - **SideBar:** Sidebar menu for the application
  - **NavBar:** It contains the header with dropdown menus for notification and user avatar buttons
  - **ErrorBoundary:** it acts as the error catcher component for extra error safety at runtime
  - **ErrorPage:** It is the error component to be shown if graphs data are failed to load. Right now graphs loading is just the UI design with in such a way that it has 30% chance of showing this error component.
  - **List:** This is the Main data sets to be shown on dashboard page
  - **components/charts/\***: To show the graphs and charts on the dashboard page

- `index.css` contains some reusable classes build using tailwind reusable classes

- Currently the app shows dummy data and does not call any API but in real app it fetches data from any backend server

- You can also use bun instead of npm for faster performance

- The project uses postcss with tailwind so that it purges all unused classes of tailwind at build times

## Important Functionalities

- **Dark Mode:** Dark mode is saved in localstorage so that even on next visit it still renders in dark mode if it was previously set in that way
- **Data Range:** Data Range is also saved in localstorage so that even on next visit it still renders data as per the same data range date
- **Export Settings:** This option in user profile avatar dropdown exports all the current settings into a json file and downloads it immediately in the browser