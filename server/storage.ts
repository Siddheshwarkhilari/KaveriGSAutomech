import { 
  users, 
  products, 
  contactSubmissions,
  type User, 
  type InsertUser,
  type Product,
  type InsertProduct,
  type ContactSubmission,
  type InsertContact
} from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Product methods
  getProducts(): Promise<Product[]>;
  getProduct(id: number): Promise<Product | undefined>;
  getProductsByCategory(category: string): Promise<Product[]>;
  createProduct(product: InsertProduct): Promise<Product>;
  
  // Contact methods
  createContactSubmission(contact: InsertContact): Promise<ContactSubmission>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private products: Map<number, Product>;
  private contacts: Map<number, ContactSubmission>;
  private userIdCounter: number;
  private productIdCounter: number;
  private contactIdCounter: number;

  constructor() {
    this.users = new Map();
    this.products = new Map();
    this.contacts = new Map();
    this.userIdCounter = 1;
    this.productIdCounter = 1;
    this.contactIdCounter = 1;
    
    // Initialize with sample products
    this.initializeSampleProducts();
  }

  private initializeSampleProducts() {
    const sampleProducts: InsertProduct[] = [
      {
        name: "Heavy Duty Industrial Hinge",
        category: "hinges",
        description: "Premium quality stainless steel hinge designed for heavy industrial applications",
        features: ["Corrosion resistant", "Load capacity: 500kg", "Temperature range: -40°C to 200°C"],
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

    sampleProducts.forEach(product => {
      const id = this.productIdCounter++;
      const fullProduct: Product = { 
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

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userIdCounter++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }

  async getProduct(id: number): Promise<Product | undefined> {
    return this.products.get(id);
  }

  async getProductsByCategory(category: string): Promise<Product[]> {
    return Array.from(this.products.values()).filter(
      product => product.category === category
    );
  }

  async createProduct(insertProduct: InsertProduct): Promise<Product> {
    const id = this.productIdCounter++;
    const product: Product = { 
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

  async createContactSubmission(insertContact: InsertContact): Promise<ContactSubmission> {
    const id = this.contactIdCounter++;
    const contact: ContactSubmission = { 
      ...insertContact,
      id,
      phone: insertContact.phone || null,
      createdAt: new Date()
    };
    this.contacts.set(id, contact);
    return contact;
  }
}

export const storage = new MemStorage();
