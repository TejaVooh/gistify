import { useState } from 'react';
import './App.css';

function App() {
  const [url, setUrl] = useState('');
  const [submittedUrl, setSubmittedUrl] = useState('');

  const handleGistify = () => {
    if (url.trim()) {
      setSubmittedUrl(url);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-start p-6">
      <h1 className="text-4xl font-bold text-green-400 mt-12 mb-8">
        🧠 Gistify
      </h1>

      <div className="w-full max-w-xl flex gap-2 mb-8">
        <input
          type="text"
          placeholder="Paste a video/image/post URL..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="flex-grow p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button
          onClick={handleGistify}
          className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition"
        >
          Gistify
        </button>
      </div>

      {submittedUrl && (
        <div className="w-full max-w-xl space-y-6">
          <section className="bg-gray-800 p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-green-300 mb-2">About</h2>
            <p className="text-gray-300">Submitted URL: {submittedUrl}</p>
          </section>

          <section className="bg-gray-800 p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-green-300 mb-2">Gist</h2>
            <p className="text-gray-300">🔍 Summary will appear here...</p>
          </section>

          <section className="bg-gray-800 p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-green-300 mb-2">Related To</h2>
            <p className="text-gray-300">🔗 Related topics/content will appear here...</p>
          </section>
        </div>
      )}
    </div>
  );
}

export default App;

