# Advance-Node.js
There are chat and ticket system app running with microservices, covering the below topics

# Meetup

Setting Up a Deployment Environment

1. Linux host (example: an EC2 instance with Ubuntu)
2. Install Node.js and PM2 (npm install -g pm2).
3. /home/nodejs/deploy owned by a user “nodejs”
4. Add local SSH public key to authorized_keys on server.
5. Push your project to a Git repository (example: GitHub).
6. Copy .env to the deployment directory.
7. Whitelist the server IP on MongoDB Atlas.

# Meetup Project Covers the below topics:

- Exploring Express components and APIs
- Important Express middleware
- Creating a template engine for Express
- Adding MongoDB and Mongoose to an Express project
- Creating a user schema for Mongoose
- Using bcrypt to hash and validate passwords
- Creating a user registration route
- Testing the form and reviewing the data in MongoDB
- Adding cookies and sessions to Express
- Serializing and deserializing users
- Adding Passport to Express
- Protecting routes
- Creating an image handling middleware
- Tuning Express performance: Further measures
- Add logging
- Using the Node.js cluster module
- Securing an Express application
- Deployment and operation with PM2
- Running behind a web server


# microservices
- PM2 
- Workers running with multiple instances
- Clustering and logging
- Decomposing in microservices and orchestration
- JSdoc
- Jest
- AWS

# chat-app
- socket.io
- ES6
- MongoDB
- Express
- API
- Frontend implementation of API
