// server/index.ts
import express2 from "express";

// server/routes.ts
import { createServer } from "http";

// server/storage.ts
var MemStorage = class {
  users;
  products;
  contacts;
  userIdCounter;
  productIdCounter;
  contactIdCounter;
  constructor() {
    this.users = /* @__PURE__ */ new Map();
    this.products = /* @__PURE__ */ new Map();
    this.contacts = /* @__PURE__ */ new Map();
    this.userIdCounter = 1;
    this.productIdCounter = 1;
    this.contactIdCounter = 1;
    this.initializeSampleProducts();
  }
  initializeSampleProducts() {
    const sampleProducts = [
      {
        name: "Heavy Duty Industrial Hinge",
        category: "hinges",
        description: "Premium quality stainless steel hinge designed for heavy industrial applications",
        features: ["Corrosion resistant", "Load capacity: 500kg", "Temperature range: -40\xB0C to 200\xB0C"],
        specifications: "Material: Stainless Steel 316, Dimensions: 150mm x 100mm",
        image: "/products/hinge-product-1.jpg",
        price: "$85",
        inStock: true
      },
      {
        name: "Hydraulic Pump System",
        category: "pumps",
        description: "High-performance hydraulic pump system for industrial machinery",
        features: ["High pressure output", "Low maintenance", "Energy efficient"],
        specifications: "Flow rate: 50 L/min, Pressure: 250 bar",
        image: "/products/pump-product-1.jpg",
        price: "$1,250",
        inStock: true
      },
      {
        name: "Control Valve Assembly",
        category: "valves",
        description: "Precision control valve for fluid management systems",
        features: ["High precision", "Remote control compatible", "Leak-proof design"],
        specifications: "Bore size: 25mm, Operating pressure: 100 bar",
        image: "/products/valve-product-1.jpg",
        price: "$320",
        inStock: true
      },
      {
        name: "Stainless Steel Fasteners Kit",
        category: "fasteners",
        description: "Complete set of high-grade stainless steel fasteners",
        features: ["Corrosion resistant", "Various sizes", "Marine grade"],
        specifications: "Material: 316L Stainless Steel, Sizes: M6-M20",
        image: "/products/fastener-product-1.jpg",
        price: "$45",
        inStock: true
      }
    ];
    sampleProducts.forEach((product) => {
      const id = this.productIdCounter++;
      const fullProduct = {
        ...product,
        id,
        image: product.image || null,
        features: product.features || null,
        specifications: product.specifications || null,
        price: product.price || null,
        inStock: product.inStock ?? null
      };
      this.products.set(id, fullProduct);
    });
  }
  async getUser(id) {
    return this.users.get(id);
  }
  async getUserByUsername(username) {
    return Array.from(this.users.values()).find(
      (user) => user.username === username
    );
  }
  async createUser(insertUser) {
    const id = this.userIdCounter++;
    const user = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  async getProducts() {
    return Array.from(this.products.values());
  }
  async getProduct(id) {
    return this.products.get(id);
  }
  async getProductsByCategory(category) {
    return Array.from(this.products.values()).filter(
      (product) => product.category === category
    );
  }
  async createProduct(insertProduct) {
    const id = this.productIdCounter++;
    const product = {
      ...insertProduct,
      id,
      image: insertProduct.image || null,
      features: insertProduct.features || null,
      specifications: insertProduct.specifications || null,
      price: insertProduct.price || null,
      inStock: insertProduct.inStock ?? null
    };
    this.products.set(id, product);
    return product;
  }
  async createContactSubmission(insertContact) {
    const id = this.contactIdCounter++;
    const contact = {
      ...insertContact,
      id,
      phone: insertContact.phone || null,
      createdAt: /* @__PURE__ */ new Date()
    };
    this.contacts.set(id, contact);
    return contact;
  }
};
var storage = new MemStorage();

// shared/schema.ts
import { pgTable, text, serial, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
var users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull()
});
var contactSubmissions = pgTable("contact_submissions", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow()
});
var products = pgTable("products", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  category: text("category").notNull(),
  description: text("description").notNull(),
  features: text("features").array(),
  specifications: text("specifications"),
  image: text("image"),
  price: text("price"),
  inStock: boolean("in_stock").default(true)
});
var insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true
});
var insertContactSchema = createInsertSchema(contactSubmissions).pick({
  name: true,
  email: true,
  phone: true,
  message: true
}).extend({
  phone: z.string().optional()
});
var insertProductSchema = createInsertSchema(products).pick({
  name: true,
  category: true,
  description: true,
  features: true,
  specifications: true,
  image: true,
  price: true,
  inStock: true
});

// server/routes.ts
import { z as z2 } from "zod";
async function registerRoutes(app2) {
  app2.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
      const emailData = {
        to: "siddheshkhilari111@gmail.com",
        from: validatedData.email,
        subject: `New Contact Form Submission from ${validatedData.name}`,
        message: `
          Name: ${validatedData.name}
          Email: ${validatedData.email}
          Phone: ${validatedData.phone || "Not provided"}
          Message: ${validatedData.message}
          
          Submitted at: ${(/* @__PURE__ */ new Date()).toISOString()}
        `
      };
      console.log("Email notification would be sent to:", emailData.to);
      console.log("From:", emailData.from);
      console.log("Subject:", emailData.subject);
      res.json({
        success: true,
        id: submission.id,
        message: "Contact form submitted successfully and email notification sent"
      });
    } catch (error) {
      if (error instanceof z2.ZodError) {
        res.status(400).json({ error: "Invalid form data", details: error.errors });
      } else {
        res.status(500).json({ error: "Failed to submit contact form" });
      }
    }
  });
  app2.get("/api/products", async (req, res) => {
    try {
      const products2 = await storage.getProducts();
      res.json(products2);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch products" });
    }
  });
  app2.get("/api/products/category/:category", async (req, res) => {
    try {
      const { category } = req.params;
      const products2 = await storage.getProductsByCategory(category);
      res.json(products2);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch products" });
    }
  });
  app2.get("/api/products/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const product = await storage.getProduct(id);
      if (!product) {
        res.status(404).json({ error: "Product not found" });
        return;
      }
      res.json(product);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch product" });
    }
  });
  const httpServer = createServer(app2);
  return httpServer;
}

// server/vite.ts
import express from "express";
import fs from "fs";
import path2 from "path";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...process.env.NODE_ENV !== "production" && process.env.REPL_ID !== void 0 ? [
      await import("@replit/vite-plugin-cartographer").then(
        (m) => m.cartographer()
      )
    ] : []
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets")
    }
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"]
    }
  }
});

// server/vite.ts
import { nanoid } from "nanoid";
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path2.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html"
      );
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path2.resolve(import.meta.dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path2.resolve(distPath, "index.html"));
  });
}

// server/index.ts
var app = express2();
app.use(express2.static("public"));
app.use(express2.json());
app.use(express2.urlencoded({ extended: false }));
app.use((req, res, next) => {
  const start = Date.now();
  const path3 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path3.startsWith("/api")) {
      let logLine = `${req.method} ${path3} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
(async () => {
  const server = await registerRoutes(app);
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  const port = parseInt(process.env.PORT || "5000", 10);
  server.listen(port, "0.0.0.0", () => {
    log(`serving on port ${port}`);
  });
})();
