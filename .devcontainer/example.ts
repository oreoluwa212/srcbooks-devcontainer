// Cell 1: Define types for our data structure
interface SalesRecord {
    date: string;
    amount: number;
    category: string;
}

// Test data
const sales: SalesRecord[] = [
    { date: "2024-01-01", amount: 120.50, category: "Electronics" },
    { date: "2024-01-02", amount: 75.25, category: "Books" },
    { date: "2024-01-02", amount: 200.00, category: "Electronics" },
    { date: "2024-01-03", amount: 45.99, category: "Books" }
];

// Cell 2: Calculate total sales by category
const salesByCategory = sales.reduce((acc, sale) => {
    acc[sale.category] = (acc[sale.category] || 0) + sale.amount;
    return acc;
}, {} as Record<string, number>);

console.log("Sales by category:", salesByCategory);
