const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const connectDB = require("./config/db");
const bookRoutes = require("./routes/bookRoutes");
const limiter = require("./middleware/limiter");
const errorHandler = require("./middleware/errorHandler");

// Load environment variables
dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(limiter);

// Routes
app.use("/api/books", bookRoutes);

// Error Handling Middleware
app.use(errorHandler);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
