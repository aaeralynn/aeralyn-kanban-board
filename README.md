### **Aeralyn Kanban Board**  

## **Description**  
This Kanban Board Application allows users to securely manage their tasks through a user-friendly interface. The application features a secure login page that utilizes JSON Web Tokens (JWT) for authentication, ensuring that users can only access their tasks after logging in.  

## **Features**  
### **Secure Login Page:**  
- Users can log in using their username and password.  

### **JWT Authentication:**  
- Upon successful login, users receive a JWT that is stored securely in local storage for subsequent requests.  

### **Error Handling:**  
- Users receive appropriate error messages for incorrect credentials.  

### **Session Management:**  
- The application automatically logs out users after a defined period of inactivity, invalidating the JWT.  

### **Redirects:**  
- Users are redirected to the login page if they attempt to access the Kanban board without being authenticated.  

## **User Story**  
**AS A** member of an agile team  
**I WANT** a Kanban board with a secure login page  
**SO THAT** I can securely access and manage my work tasks  

## **Acceptance Criteria**  
### **Login Page:**  
- When the login page loads, users are presented with form inputs for username and password.  

### **Authentication:**  
- When valid credentials are entered, users are authenticated using JWT and redirected to the main Kanban board page.  
- When invalid credentials are entered, an error message is displayed indicating that the credentials are incorrect.  

### **JWT Storage:**  
- Upon successful login, a JWT is stored securely in the client's local storage for subsequent authenticated requests.  

### **Logout Functionality:**  
- When users log out, the JWT is removed from local storage, and they are redirected to the login page.  

### **Access Control:**  
- If users attempt to access the Kanban board page without being authenticated, they are redirected to the login page.  

### **Session Expiration:**  
- If users remain inactive for a defined period, their session expires, the JWT is invalidated, and they are redirected to the login page upon their next action.  

## **Installation**  
### **Clone the repository:**  
```sh
git clone https://github.com/yourusername/kanban-board.git  
cd kanban-board  
```  

### **Install dependencies:**  
```sh
npm install  
```  

### **Create a `.env` file** in the root directory and add your environment variables:  
```
DATABASE_NAME=your_database_name  
DATABASE_USERNAME=your_database_username  
DATABASE_PASSWORD=your_database_password  
JWT_SECRET=your_jwt_secret  
```  

### **Start the application:**  
```sh
npm run start  
```  

## **Usage**  
1. Navigate to the login page.  
2. Enter your username and password to log in.  
3. Manage your tasks on the Kanban board after successful authentication.  
4. Log out to end your session.  

## **Technologies Used**  
- **Frontend:** React (with TypeScript, if applicable)  
- **Backend:** Node.js, Express.js  
- **Database:** PostgreSQL  
- **Authentication:** JSON Web Tokens (JWT)

## **Link to deployed application**
Was unable to deploy.

## **Sources Utilized**  
- Xpert Live Assistant for guidance and support during development.  

## **License**  
This project is licensed under the **MIT License** - see the LICENSE file for details.# aeralyn-kanban-board
