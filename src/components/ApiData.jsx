// fetching data from a public API
import { useState, useEffect } from "react";

const ApiData = () => {
  const [data, setData] = useState([]);        // store fetched data
  const [loading, setLoading] = useState(true); // handle loading state
  const [error, setError] = useState(null);     // handle errors
  const [search, setSearch] = useState("");     // search query

  // Fetch data when component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!res.ok) throw new Error("Failed to fetch data");
        const result = await res.json();
        setData(result.slice(0, 15)); // only first 15 for demo
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Filtered data based on search query
  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">📦 API Data</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search posts..."
        className="w-full p-2 mb-4 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Data Grid */}
      <div className="grid md:grid-cols-2 gap-4">
        {filteredData.map((item) => (
          <div
            key={item.id}
            className="border border-gray-200 p-4 rounded-lg shadow hover:shadow-md transition"
          >
            <h2 className="font-semibold text-lg text-blue-600">{item.title}</h2>
            <p className="text-gray-600 mt-2">{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApiData;
