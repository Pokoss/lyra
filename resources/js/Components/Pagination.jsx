export default function Pagination({ current = 1, total = 10 }) {
    const pages = Array.from({ length: total }, (_, i) => i + 1);

    return (
        <div className="flex items-center justify-between border-t pt-3 mt-4">
            <div className="text-sm text-gray-500">Showing page {current} of {total}</div>
            <div className="inline-flex items-center space-x-1">
                <button className="px-3 py-1 rounded-md border bg-white text-sm text-gray-700 hover:bg-gray-50">Previous</button>
                <div className="hidden sm:flex items-center gap-1">
                    {pages.slice(Math.max(0, current - 3), Math.min(total, current + 2)).map((p) => (
                        <button key={p} className={`px-3 py-1 rounded-md text-sm ${p === current ? 'bg-red-700 text-white' : 'text-gray-700 bg-white hover:bg-gray-100 border'}`}>
                            {p}
                        </button>
                    ))}
                </div>
                <button className="px-3 py-1 rounded-md border bg-white text-sm text-gray-700 hover:bg-gray-50">Next</button>
            </div>
        </div>
    );
}
