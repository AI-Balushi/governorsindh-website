// app/result/page.js

"use client"; // Ensure this is included at the top

export default function Result() {
    return (
        <div className="flex flex-col items-center justify-center h-screen p-5 bg-white">
            <h1 className="text-2xl font-bold text-[#002855] mb-4">Grand Entrance Exam Result</h1>
            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6 border border-gray-200">
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Registration Number *</label>
                    <input
                        type="text"
                        placeholder="Registration Number"
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">CNIC or B-Form Number *</label>
                    <input
                        type="text"
                        placeholder="CNIC or B-Form Number"
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    />
                </div>
                <button className="w-full bg-[#002855] text-white p-2 rounded-md hover:bg-[#001f3d]">
                    GET RESULT
                </button>
            </div>
        </div>
    );
}