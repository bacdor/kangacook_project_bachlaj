# Favorite Animals Web Application

![image](https://github.com/user-attachments/assets/e2b542e8-f38a-4db5-8e1c-7c5be5b125a0)

## Overview

This project is a web application for managing a list of favorite animals. It is built with Django for the backend and React for the frontend, styled with Tailwind CSS for a modern and responsive design.

## Features

- **Add Animal**: Users can add new animals to the list.
- **View Animals**: Users can view a list of animals with their details.
- **Delete Animal**: Users can delete animals from the list.
- **Responsive Design**: The application is styled with Tailwind CSS to ensure a responsive and user-friendly interface.

## Technologies Used

- **Backend**: Django
- **Frontend**: React
- **Styling**: Tailwind CSS
- **Database**: SQLite (default for Django)

## Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js** and **npm** (or **Yarn**)
- **Python** and **pip**

## Setup

### 2. Set Up the Backend (Django)

1. **Create and Activate a Virtual Environment**

   ```bash
   python -m venv env
   source env/bin/activate  # On Windows, use `env\Scripts\activate`
   
2. **Install Django and Other Dependencies**

   ```bash
   pip install -r backend/requirements.txt
   Run Migrations

3. **Install Django and Other Dependencies**

   ```bash
   python backend/manage.py migrate
   Start the Django Server

4. **Install Django and Other Dependencies**

   ```bash
   python backend/manage.py runserver

The backend server will start on http://localhost:8000.

## 3. Set Up the Frontend (React)

1. **Navigate to the Frontend Directory**

   ```bash
   cd frontend
   Install Frontend Dependencies
   
2. **Install Frontend Dependencies**

   ```bash
   npm install  # or `yarn install` if you use Yarn
   Start the React Development Server

3. **Start the React Development Server**

   ```bash
   npm start  # or `yarn start`
   The frontend server will start on http://localhost:3000.

## Configuration

- **Django Settings**: Ensure CORS is configured to allow requests from the React frontend.
- **API Endpoints**:
  - **GET** `/api/app/`: Retrieve the list of animals.
  - **POST** `/api/app/`: Add a new animal.
  - **DELETE** `/api/app/<id>/`: Delete an animal.

## Usage

- **Add Animals**: Use the form on the React frontend to add animals to the list.
- **View Animals**: The list of animals will be displayed in a table on the frontend.
- **Delete Animals**: Click the "X" button next to an animal to remove it from the list.

## Styling

The project uses [Tailwind CSS](https://tailwindcss.com/) for styling. You can customize the design by editing the Tailwind configuration files.

## Contributing

To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a Pull Request.

Ensure your code adheres to the project's style guidelines and includes appropriate tests.
Happy hacking!

