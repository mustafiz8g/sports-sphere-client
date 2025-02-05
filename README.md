## 🏅 EquiSports - Sports Equipment Online Store  

### A dynamic e-commerce platform for sports accessories, allowing users to browse, purchase, and manage equipment across various sports categories. Built with the MERN stack, the platform ensures a smooth shopping experience with authentication and product management features.  

---

## 🌐 Live Demo  

🔗 **[EquiSports Live](#)** *(Replace with actual deployed URL)*  

- **Server Repository:** [GitHub Link](#) *(Replace with actual repository URL)*  

---

## 📖 Table of Contents  

- [Features](#-features)  
- [Technologies Used](#-technologies-used)  
- [Installation & Setup](#-installation--setup)  
- [Project Screenshots](#-project-screenshots)  
- [Environment Variables](#-environment-variables)  
- [API Endpoints](#-api-endpoints)  
- [Contributors](#-contributors)  
- [License](#-license)  

---

## ✨ Features  

✅ **User Authentication** (Email & Password, Google Sign-in)  

✅ **Dynamic Product Management** (Add, View, Update, Delete Equipment)  

✅ **Private Routes & Secure Data Handling**  

✅ **Sorting & Filtering by Price**  

✅ **Dark/Light Theme Toggle**  

✅ **Beautiful Animations using Lottie React & React Awesome Reveal**  

✅ **Mobile-Friendly & Fully Responsive UI**  

✅ **Error Handling with Toast/Sweet Alerts**  

---

## 🛠️ Technologies Used  

### **Frontend (Client)**  
- ⚛ **React.js**  
- 🚀 **React Router**  
- 🎨 **Tailwind CSS & DaisyUI**  
- 🔥 **Firebase Authentication**  
- 🔗 **Axios**  
- 🎉 **SweetAlert2 / React Toastify**  
- ✨ **Lottie React & React Awesome Reveal**  

### **Backend (Server)**  
- 🌐 **Node.js**  
- ⚡ **Express.js**  
- 🛢 **MongoDB (Mongoose)**  
- 🔑 **JSON Web Token (JWT)**  
- ☁ **Cloudinary (for Image Uploads)**  

### **Other Tools**  
- 🔐 **Dotenv for Environment Variables**  
- 🚀 **Vercel & Netlify for Deployment**  

---

## ⚙️ Installation & Setup  

### **1️⃣ Clone the Repository**  
```bash
git clone https://github.com/yourusername/equisports-client.git
git clone https://github.com/yourusername/equisports-server.git
2️⃣ Install Dependencies
Frontend:
bash
Copy
Edit
cd equisports-client
npm install
Backend:
bash
Copy
Edit
cd equisports-server
npm install
3️⃣ Configure Environment Variables
Create a .env file in both client and server directories with the required API keys.

Frontend (equisports-client/.env)
plaintext
Copy
Edit
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id
VITE_BACKEND_URL=http://localhost:5000
Backend (equisports-server/.env)
plaintext
Copy
Edit
MONGO_URI=your_mongodb_connection_uri
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
4️⃣ Start the Development Servers
Frontend:
bash
Copy
Edit
npm run dev
Backend:
bash
Copy
Edit
npm run start
🖼️ Project Screenshots
(Include relevant screenshots here to showcase the UI and features.)

🔌 API Endpoints
User Authentication
Method	Endpoint	Description
POST	/api/auth/signup	Register a new user
POST	/api/auth/login	User login & JWT generation
GET	/api/auth/user	Get logged-in user details
Sports Equipment
Method	Endpoint	Description
GET	/api/equipment	Get all sports equipment
POST	/api/equipment	Add new equipment (Private Route)
GET	/api/equipment/:id	Get equipment details
DELETE	/api/equipment/:id	Delete equipment (Private Route)
PUT	/api/equipment/:id	Update equipment details
Wishlist & Purchase
Method	Endpoint	Description
POST	/api/wishlist	Add equipment to wishlist
DELETE	/api/wishlist/:id	Remove from wishlist
POST	/api/purchase	Purchase equipment
GET	/api/purchase	Get purchase history
Reviews
Method	Endpoint	Description
POST	/api/reviews	Add a review
GET	/api/reviews/:equipmentId	Get reviews for equipment
DELETE	/api/reviews/:id	Delete review (Private Route)
