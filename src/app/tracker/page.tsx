export default function Tracker() {
  const memos = [
    { id: "MEMO-001", title: "Nairobi Finance Bill", county: "Nairobi", date: "2025-10-06", status: "Submitted" },
    { id: "MEMO-002", title: "Kajiado Climate Policy", county: "Kajiado", date: "2025-10-05", status: "Acknowledged" },
    { id: "MEMO-003", title: "Machakos Youth Budget", county: "Machakos", date: "2025-10-01", status: "Accepted" },
    { id: "MEMO-004", title: "Nairobi CIDP", county: "Nairobi", date: "2025-09-28", status: "Partially Adopted" },
  ];

  const cols = ["Submitted", "Acknowledged", "Accepted", "Rejected", "Partially Adopted"];
  const colors: any = { "Submitted": "border-blue-500", "Acknowledged": "border-yellow-500", "Accepted": "border-green-500", "Rejected": "border-red-500", "Partially Adopted": "border-purple-500" };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <a href="/" className="text-blue-600">← Back Home</a>
      <h1 className="text-3xl font-bold mt-4">Response Tracker</h1>
      <p className="text-gray-600">Track what government did with your memo</p>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-6">
        {cols.map(col => (
          <div key={col} className={`bg-white rounded-lg shadow p-3 border-t-4 ${colors[col]}`}>
            <h3 className="font-bold text-sm mb-3">{col}</h3>
            {memos.filter(m=>m.status===col).map(m=>(
              <div key={m.id} className="bg-gray-50 p-3 rounded mb-2 text-sm">
                <p className="font-bold">{m.id}</p>
                <p>{m.title}</p>
                <p className="text-xs text-gray-500">{m.county} | {m.date}</p>
              </div>
            ))}
            {memos.filter(m=>m.status===col).length===0 && <p className="text-xs text-gray-400">No memos</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
