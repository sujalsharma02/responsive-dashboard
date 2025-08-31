# React Responsive Frontend Dashboard

A responsive frontend dashboard built with React.js featuring API integration, state management with Context API, and client-side routing.

## Features

-   Login page with form validation.
-   Dashboard page with a sidebar, top navbar, and data visualization cards.
-   User Profile page displaying user details from a mock API.
-   State management using React's Context API.
-   Responsive design for both desktop and mobile views.
-   Protected routes to prevent access to the dashboard without logging in.

## Project Setup

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have Node.js and npm installed on your machine.

-   [Node.js](https://nodejs.org/) (which includes npm)

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/responsive-dashboard.git
    cd responsive-dashboard
    ```

2.  **Install NPM packages:**
    ```sh
    npm install
    ```

3.  **Run the application:**
    ```sh
    npm start
    ```
    This runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### How to Use

-   On the login page, use the email `user@example.com` and any password to log in.
-   The application will redirect you to the dashboard, where you can see a list of mock users.
-   Navigate between the Dashboard and Profile pages using the sidebar.
-   Click the "Logout" button to return to the login screen.

## Dependencies Used

-   **[React](https://reactjs.org/)**: A JavaScript library for building user interfaces.
-   **[React Router](https://reactrouter.com/)**: For declarative routing in the React application.
-   **[Axios](https://axios-http.com/)**: A promise-based HTTP client for making API requests.
-   **[Styled Components](https://styled-components.com/)**: For component-level CSS styling.
![alt text](<Screenshot (73)-1.png>)