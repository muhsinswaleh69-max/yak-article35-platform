"use client";
import { useState } from "react";

const documents = [
  { id: 1, title: "Nairobi Finance Bill 2025", county: "Nairobi", year: "2025", category: "Bill", status: "Published" },
  { id: 2, title: "Kajiado Climate Change Policy", county: "Kajiado", year: "2025", category: "Policy", status: "Published" },
  { id: 3, title: "Machakos Youth Budget 2025/26", county: "Machakos", year: "2025", category: "Budget", status: "Published" },
  { id: 4, title: "Nairobi Public Participation Act", county: "Nairobi", year: "2024", category: "Bill", status: "Published" },
  { id: 5, title: "Kajiado County Gazette Notice", county: "Kajiado", year: "2025", category: "Gazette", status: "Draft - Pending Review" },
  { id: 6, title: "Machakos Health Policy Draft", county: "Machakos", year: "2024", category: "Policy", status: "Published" },
];

export default function Repository() {
  const [county, setCounty] = useState("All");
  const filtered = county === "All" ? documents : documents.filter(d => d.county === county);
  
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <a href="/" className="text-blue-600">← Back Home</a>
      <h1 className="text-3xl font-bold mt-4">Governance Repository</h1>
      <p className="text-gray-600">Filter by County - Nairobi, Kajiado, Machakos</p>
      
      <div className="flex gap-2 mt-6">
        {["All", "Nairobi", "Kajiado", "Machakos"].map(c => (
          <button key={c} onClick={() => setCounty(c)} className={`px-4 py-2 rounded ${county===c ? "bg-blue-600 text-white" : "bg-white border"}`}>{c}</button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-4 mt-6">
        {filtered.map(doc => (
          <div key={doc.id} className="bg-white p-5 rounded-lg shadow border-l-4 border-blue-600">
            <h3 className="font-bold">{doc.title}</h3>
            <p className="text-sm text-gray-500 mt-1">{doc.county} | {doc.year} | {doc.category}</p>
            <span className={`text-xs px-2 py-1 rounded mt-2 inline-block ${doc.status.includes("Draft") ? "bg-yellow-200" : "bg-green-100"}`}>{doc.status}</span>
            <div className="mt-3 flex gap-2">
              <button className="text-sm bg-black text-white px-3 py-1 rounded">Download PDF</button>
              <button className="text-sm border px-3 py-1 rounded">Summarize with AI</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
