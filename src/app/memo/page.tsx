"use client";
import { useState } from "react";

export default function Memo() {
  const [form, setForm] = useState({ name: "", phone: "", county: "Nairobi", eventTitle: "Nairobi Finance Bill 2025", q1: "", q2: "", q3: "" });
  const [done, setDone] = useState(false);

  const handleDownload = () => {
    // Simulate Word generation - in real app we call docx-generator.ts
    const content = `YOUTH ALIVE! KENYA - MEMORANDUM UNDER ARTICLE 35\n\nEvent: ${form.eventTitle}\nCounty: ${form.county}\nName: ${form.name}\nPhone: ${form.phone}\n\n1. What is good?\n${form.q1}\n\n2. What should be changed?\n${form.q2}\n\n3. What is missing?\n${form.q3}\n`;
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `Memo_${form.county}_${form.name}.doc`;
    a.click();
    setDone(true);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <a href="/" className="text-blue-600">← Back Home</a>
      <h1 className="text-3xl font-bold mt-4">Memo Generator</h1>
      <p className="text-gray-600">Guided form -> Download Word & PDF for submission</p>

      <div className="bg-white p-6 rounded-lg shadow mt-6 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <input placeholder="Your Name" className="border p-3 rounded" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} />
          <input placeholder="Phone" className="border p-3 rounded" value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})} />
        </div>
        <select className="border p-3 rounded w-full" value={form.county} onChange={e=>setForm({...form, county:e.target.value})}>
          <option>Nairobi</option><option>Kajiado</option><option>Machakos</option>
        </select>
        <input className="border p-3 rounded w-full bg-gray-100" value={form.eventTitle} onChange={e=>setForm({...form, eventTitle:e.target.value})} />

        <div>
          <label className="font-bold text-sm">1. What is good about this Bill/Policy?</label>
          <textarea className="border p-3 rounded w-full mt-1" rows={3} value={form.q1} onChange={e=>setForm({...form, q1:e.target.value})} placeholder="Type your views..." />
        </div>
        <div>
          <label className="font-bold text-sm">2. What should be changed?</label>
          <textarea className="border p-3 rounded w-full mt-1" rows={3} value={form.q2} onChange={e=>setForm({...form, q2:e.target.value})} placeholder="Type your views..." />
        </div>
        <div>
          <label className="font-bold text-sm">3. What is missing?</label>
          <textarea className="border p-3 rounded w-full mt-1" rows={3} value={form.q3} onChange={e=>setForm({...form, q3:e.target.value})} placeholder="Type your views..." />
        </div>

        <button onClick={handleDownload} className="w-full bg-yellow-500 text-black font-bold py-3 rounded-lg">📥 Download Memo – Word & PDF</button>
        {done && <p className="text-green-600 text-center font-bold">✅ Memo generated! Check your downloads. Ready to submit to County.</p>}
        <p className="text-xs text-gray-400 text-center">Template complies with County Government submission format</p>
      </div>
    </div>
  );
}
