export default function Home() {
  return (
    <main className="p-6">
      <h1 className="text-4xl font-bold">Article 35 Platform</h1>
      <p className="mt-2">Access to Information for Nairobi, Kajiado, Machakos</p>
      <div className="grid grid-cols-2 gap-4 mt-6">
        <a href="/repository" className="p-6 bg-blue-600 text-white rounded">Repository</a>
        <a href="/participation" className="p-6 bg-green-600 text-white rounded">Participation Hub</a>
        <a href="/memo" className="p-6 bg-yellow-600 text-black rounded">Memo Generator</a>
        <a href="/tracker" className="p-6 bg-red-600 text-white rounded">Response Tracker</a>
      </div>
    </main>
  )
}
