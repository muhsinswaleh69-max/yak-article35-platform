"use client";

const events = [
  { id: 1, title: "Nairobi Finance Bill Public Hearing", county: "Nairobi", location: "City Hall", open: "2025-10-01", close: "2025-10-12", daysLeft: 3 },
  { id: 2, title: "Kajiado Climate Policy Forum", county: "Kajiado", location: "Kajiado Town Hall", open: "2025-10-05", close: "2025-10-20", daysLeft: 11 },
  { id: 3, title: "Machakos Youth Budget Discussion", county: "Machakos", location: "Machakos Stadium", open: "2025-09-25", close: "2025-10-10", daysLeft: 1 },
  { id: 4, title: "Nairobi County CIDP Review", county: "Nairobi", location: "Sub-County Offices", open: "2025-10-02", close: "2025-11-01", daysLeft: 23 },
];

export default function Participation() {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <a href="/" className="text-blue-600">← Back Home</a>
      <h1 className="text-3xl font-bold mt-4">Public Participation Hub</h1>
      <p className="text-gray-600">Track open forums in Nairobi, Kajiado, Machakos</p>

      <div className="grid md:grid-cols-2 gap-4 mt-6">
        {events.map(ev => {
          const status = ev.daysLeft <= 3? "Closing Soon" : ev.daysLeft <= 0? "Closed" : "Open";
          const color = status === "Closing Soon"? "bg-red-600" : status === "Closed"? "bg-gray-400" : "bg-green-600";
          return (
            <div key={ev.id} className="bg-white p-5 rounded-lg shadow">
              <div className="flex justify-between items-start">
                <h3 className="font-bold w-3/4">{ev.title}</h3>
                <span className={`text-xs text-white px-2 py-1 rounded ${color}`}>{status}</span>
              </div>
              <p className="text-sm text-gray-500 mt-2">{ev.county} - {ev.location}</p>
              <p className="text-sm mt-1">Closes: {ev.close} - <b>{ev.daysLeft} days left</b></p>
              <div className="mt-3 flex gap-2">
                <a href="/memo" className="text-sm bg-blue-600 text-white px-4 py-2 rounded">Submit Memo</a>
                <button className="text-sm border px-4 py-2 rounded">View Details</button>
              </div>
              {status === "Closing Soon" && <p className="text-xs text-red-600 mt-2 font-bold">⚠️ Act Now – Closes in {ev.daysLeft} days!</p>}
            </div>
          );
        })}
      </div>
    </div>
  );
}
