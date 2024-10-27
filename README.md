
# Urafied - Job Assessment Application

*Urafied* is a Node.js-based job assessment application designed to provide a seamless experience for applicants and an efficient admin panel for assessment management.

## Features

### User Side
1. **Personal Details**: 
   - Users start by entering their personal information on the home page at `http://localhost:8080/`.

2. **Assessment Test**:
   - After entering details, users are redirected to the test page to complete their assessment.
   - **Bonus Features**:
     - **Auto-Submit on Time Expiration**: The test automatically submits once time expires.
     - **Time Reminder**: Users receive a reminder as time runs low.
     - **Mark Questions for Review**: Users can mark questions to review them before final submission.
     - **Navigation Between Questions**: Users can navigate between questions to ensure all answers are accurate.
   - Based on test results:
     - **Passing**: The user progresses to complete the application with additional details and uploads a resume.
     - **Failing**: The user is redirected to the home page, and their application is marked as rejected.

3. **Application Completion**:
   - After passing, users complete additional details, upload their resume, and submit the application for final review.

### Admin Panel
1. **Question Management**:
   - Admins can create, edit, and manage questions for assessments at `http://localhost:3000/`.

2. **Application Review**:
   - Admins can view a summary of applications, focusing on those who successfully passed the test.

## Setup and Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/vk401426/Assessment-App.git
   ```
2. **Navigate to the project directory**:
   ```bash
   cd urafied
   ```
3. **Install dependencies**:
   ```bash
   npm install express ejs mysql2 multer fs uuid method-override
   ```
4. **Run the application**:
   ```bash
   node index.js
   ```

## Usage

1. **User Interface**: 
   - Access the user portal at `http://localhost:8080/`.
   
2. **Admin Interface**:
   - Access the admin panel at `http://localhost:3000/`.

## License

This project is licensed under the MIT License.
