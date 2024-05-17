# Backend Server Application for File Handling and Sentiment Analysis

This backend server application integrates a pre-trained machine learning model for sentiment analysis with a secure file handling system. It is built using Express.js and MongoDB.

## Table of Contents

- [Architecture](#architecture)
- [API Endpoints](#api-endpoints)
- [User Authentication](#user-authentication)
- [Local Setup](#local-setup)
- [Author](#author)
- [License](#license)

## Architecture

The application follows a typical MVC (Model-View-Controller) architecture:

- **Models**: Define the schema and interact with the MongoDB database.
- **Controllers**: Implement the business logic for handling requests and responses.
- **Routes**: Define the API endpoints and route requests to the appropriate controller functions.
- **Middleware**: Implement middleware functions such as authentication.

## API Endpoints

1. **File Handling**:

   - `POST /api/files/upload`: Uploads to file (audio, video, PDF) securely to the server.
   - **Request Payload**:
     ```form-data
     {
       "file": "<filepath>",
     }
     ```
   - `GET /api/files/:filename`: Retrieves a file from the server by filename.
   - `GET /api/files`: Retrieves metadata for all files stored on the server.

2. **User Authentication**:
   - `POST /api/auth/register`: Registers a new user.
   - `POST /api/auth/login`: Logs in an existing user.
   - `POST /api/auth/logout`: Logs out the authenticated user.

## User Authentication

### Register a New User

- **Endpoint**: `POST /api/auth/register`
- **Request Payload**:
  ```json
  {
    "username": "example_user",
    "password": "example_password"
  }
  ```

### Login User

- **Endpoint**: `POST /api/auth/login`
- **Request Payload**:
  ```json
  {
    "username": "example_user",
    "password": "example_password"
  }
  ```

### Sentiment Analysis

- **POST /api/sentiment**
  - **Description**: Analyzes the sentiment of the provided text.
  - **Request Body**:
    ```json
    {
      "text": "your text here"
    }
    ```
  - **Response**:
    ```json
    {
      "sentiment": "positive" | "negative" | "neutral"
    }
    ```

## Local Setup

To run this application locally, follow these steps:

### 1. Clone the Repository

```bash
git clone https://github.com/red-arrow-005/backend-app.git
cd backend-server
```

### 2. Install Dependencies

npm install

### 3. Set Environment Variables

PORT=5000
MONGODB_URI=mongodb://localhost:27017/backendDB
JWT_SECRET=55422c76ff12453c7d16b615

- **PORT**: The port number on which the server will run (default is 3000).
- **MONGODB_URI**: The connection URI for your MongoDB database.
- **JWT_SECRET**: A secret key for JWT token generation and verification.

### 4. Run the Application

npm start

### 5. Access API Endpoints

The server will start running at http://localhost:5000. You can use tools like Postman to test the API endpoints.

### Contact

For any inquiries, feedback, or support regarding this project, please feel free to reach out:

- **Full Name**: Karthik A
- **Email**: karthikanand22091999@gmail.com
- **LinkedIn**: https://www.linkedin.com/in/karthik-a-59006b228
- **GitHub**: https://github.com/red-arrow-005
