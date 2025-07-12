# Todo Application

A full-stack todo application built with React, Node.js, Express, and MongoDB. Features a modern UI with Tailwind CSS and real-time updates.

## Features

- ✅ Create new todo items
- 📅 Add due dates to todos
- ✔️ Mark todos as completed
- 🗑️ Delete todos
- 💾 Persistent storage with MongoDB
- 🎨 Modern UI with Tailwind CSS
- 📱 Responsive design

## Tech Stack

### Frontend
- React
- Tailwind CSS
- Vite

### Backend
- Node.js
- Express
- MongoDB
- Mongoose
- Cors

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB Atlas account
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/Kailramiya/Todo.git
cd Todo
```

2. **Install Backend Dependencies**
```bash
cd Todo-backend
npm install
```

3. **Configure Environment Variables**
Create a `.env` file in the backend directory:
```env
MONGODB_URI=your_mongodb_connection_string
PORT=3001
```

4. **Install Frontend Dependencies**
```bash
cd ../todo-frontend1
npm install
```

5. **Start the Backend Server**
```bash
cd ../Todo-backend
npm start
```

6. **Start the Frontend Development Server**
```bash
cd ../todo-frontend1
npm run dev
```

The application should now be running on:
- Frontend: `http://localhost:5173`
- Backend: `http://localhost:3001`

## API Endpoints

- `GET /api/todo` - Get all todos
- `POST /api/todo` - Create a new todo
- `PUT /api/todo/:id/completed` - Mark a todo as completed
- `DELETE /api/todo/:id` - Delete a todo

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file
