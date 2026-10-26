
import { jest, describe, test, expect, afterAll } from "@jest/globals";
import request from "supertest";
import app from "../src/app.js";

afterAll(() => {
    jest.restoreAllMocks();
});

describe("CloudCart API", () => {
    test("GET /health returns healthy status", async () => {
        const response = await request(app).get("/health");

        expect(response.status).toBe(200);
        expect(response.body.status).toBe("ok");
        expect(response.body.service).toBe("cloudcart-api");
    });

    test("GET /api/products returns products", async () => {
        const response = await request(app).get("/api/products");

        expect(response.status).toBe(200);
        expect(response.body.success).toBe(true);
        expect(response.body.count).toBe(3);
        expect(response.body.data).toHaveLength(3);
    });

    test("GET /api/products/1 returns a product", async () => {
        const response = await request(app).get("/api/products/1");

        expect(response.status).toBe(200);
        expect(response.body.data.name).toBe("Mechanical Keyboard");
    });

    test("GET /api/products/999 returns 404", async () => {
        const response = await request(app).get("/api/products/999");

        expect(response.status).toBe(404);
        expect(response.body.message).toBe("Product not found");
    });

    test("Unknown endpoint returns 404", async () => {
        const response = await request(app).get("/does-not-exist");

        expect(response.status).toBe(404);
        expect(response.body.message).toBe("Route not found");
    });
});
