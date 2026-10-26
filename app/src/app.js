
import express from "express";
import productRoutes from "./routes/productRoutes.js";

const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
    res.status(200).json({
        status: "ok",
        service: "cloudcart-api",
        timestamp: new Date().toISOString()
    });
});

app.use("/api/products", productRoutes);

// Handle unknown endpoints
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found"
    });
});

// Centralized error handler
app.use((err, req, res, next) => {
    console.error(err);

    res.status(500).json({
        success: false,
        message: "Internal server error"
    });
});

export default app;
