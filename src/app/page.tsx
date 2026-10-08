export default function Home() {
  return (
    <main className="p-6 max-w-5xl mx-auto">
      <div className="bg-white p-8 rounded-xl shadow">
        <h1 className="text-4xl font-bold text-blue-700">Article 35 Platform</h1>
        <p className="mt-2 text-gray-600">Youth Alive! Kenya - Access to Information for Nairobi, Kajiado, Machakos</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <a href="/repository" className="p-6 bg-blue-600 text-white rounded-lg font-bold text-center">📚 Repository</a>
          <a href="/participation" className="p-6 bg-green-600 text-white rounded-lg font-bold text-center">🗳️ Participation Hub</a>
          <a href="/memo" className="p-6 bg-yellow-500 text-black rounded-lg font-bold text-center">📝 Memo Generator</a>
          <a href="/tracker" className="p-6 bg-purple-600 text-white rounded-lg font-bold text-center">📊 Response Tracker</a>
        </div>
      </div>
    </main>
  )
}
