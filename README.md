
# Diabetes-Management-Application

The aim of this project is to design and prototype a mobile health (mHealth) application to support individuals with type 2 diabetes, particularly in low- and middle-income countries (LMICs). The app will focus on improving blood sugar control, medication adherence, and digital literacy, especially for middle-aged users with limited experience using mobile technology. The system will be multilingual, lightweight, and capable of functioning offline. 

## Offline Functionality

The application is designed to support offline usage, which is important for users in areas with unstable internet connectivity.
When a user saves data while offline, the information is stored locally and added to a queue. Once the device reconnects to the internet, queued operations are replayed and synchronised with the backend automatically.
  
When the device is offline, the system will: 
1. Store UI state in localStorage 
2. Queue API mutation in IndexedDB 
3. Automatically synchronise when the connection is restored 
4. Prevent duplicate submissions using idempotency keys

   
## Environment Setup

This project requires a `.env` file to run the backend locally. Before running the project, create a `.env` file in the root directory and add the following variables:

<pre> ```env
MONGO_URI = mongodb+srv://user12345:team24dma@cluster0.eadmv9n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
PORT = 3000
JWT_SECRET = yourjwtsecret``` <\pre>

Note that JWT_SECRET should be a long, random string for security (each member has their own one)

 
