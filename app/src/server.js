
import "dotenv/config";
import app from "./app.js";

const PORT = Number(process.env.PORT) || 3000;

const server = app.listen(PORT, "0.0.0.0", () => {
    console.log(`CloudCart API listening on port ${PORT}`);
});

function shutdown(signal) {
    console.log(`${signal} received. Shutting down...`);

    server.close((err) => {
        if (err) {
        console.error("Error closing server:", err);
        process.exitCode = 1;
        }

        process.exit();
    });
}

process.on("SIGTERM", () => shutdown("SIGTERM"));
process.on("SIGINT", () => shutdown("SIGINT"));
