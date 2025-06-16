import { useState } from "react";

export default function Portfolio() {
  const [active, setActive] = useState("Projects");

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-56 bg-white border-r border-gray-200 p-4 flex flex-col justify-between">
        <div>
          <div className="mb-10 text-3xl font-semibold text-center"> 
            <span className="inline-block">
              <svg className="mx-auto w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4 2h6v6H4V2zm0 8h6v6H4v-6zm0 8h6v4H4v-4zm10-8h6v6h-6v-6zm0-8h6v6h-6V2z" />
              </svg>
            </span>
          </div>
          <nav className="space-y-4">
            {['Projects', 'About Me', 'CV'].map((item) => (
              <div
                key={item}
                onClick={() => setActive(item)}
                className={`cursor-pointer font-semibold ${active === item ? 'text-black' : 'text-gray-400'}`}
              >
                {item}
              </div>
            ))}
          </nav>
        </div>
        <div className="text-gray-400 font-semibold">Contact</div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-200">
        <div className="h-1/2 flex flex-col justify-center items-center">
          <svg className="w-16 h-16 text-black mb-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4 2h6v6H4V2zm0 8h6v6H4v-6zm0 8h6v4H4v-4zm10-8h6v6h-6v-6zm0-8h6v6h-6V2z" />
          </svg>
          <h1 className="text-4xl font-bold">Sanya's Portfolio</h1>
        </div>
        <div className="h-1/2 px-8 py-6">
          <h2 className="text-2xl font-bold mb-4">Projects</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="h-32 bg-gray-300 rounded"></div>
            <div className="h-32 bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
