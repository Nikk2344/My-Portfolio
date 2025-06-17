'use client';

export default function ToolboxPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-[#0a0a0a] to-black text-white px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-lime-400 text-center mb-8">
        🧰 Toolbox Timeline
      </h1>
      <p className="text-gray-300 text-center mb-8 max-w-xl mx-auto text-sm">
        My journey through the tech landscape - from fundamentals to cloud infrastructure
      </p>
      <div className="relative max-w-3xl mx-auto">
        {/* Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-lime-400 via-lime-500 to-lime-600 h-full rounded-full shadow-lg shadow-lime-400/20"></div>
        {/* Timeline Items */}
        <div className="space-y-8">

          {/* HTML, CSS & Tailwind - Mastered */}
          <div className="timeline-item flex items-center justify-start relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-lime-400 rounded-full border-2 border-black shadow-lg shadow-lime-400/50"></div>
            <div className="w-full md:w-6/12 bg-[#111] border border-lime-600 p-3 rounded-lg shadow-lg hover:shadow-lime-400/20 transition-all duration-300 hover:scale-105 ml-auto text-xs">
              <div className="flex items-center gap-2 mb-1">
                <div className="text-xl">🌐</div>
                <h3 className="text-base font-bold text-lime-400">HTML, CSS & Tailwind CSS</h3>
                <span className="bg-lime-500 text-black px-1 py-0.5 rounded-full text-[10px] font-semibold">
                  ✅ MASTERED
                </span>
              </div>
              <p className="text-gray-300 text-xs">Semantic markup, responsive styling, and utility-first CSS with Tailwind</p>
              <div className="mt-2 flex gap-1 flex-wrap">
                <span className="bg-lime-900/30 text-lime-300 px-1 py-0.5 rounded text-[10px]">Semantic HTML</span>
                <span className="bg-lime-900/30 text-lime-300 px-1 py-0.5 rounded text-[10px]">Flexbox</span>
                <span className="bg-lime-900/30 text-lime-300 px-1 py-0.5 rounded text-[10px]">Grid</span>
                <span className="bg-lime-900/30 text-lime-300 px-1 py-0.5 rounded text-[10px]">Tailwind CSS</span>
              </div>
            </div>
          </div>

          {/* JavaScript - Advanced */}
          <div className="timeline-item flex items-center justify-end relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-yellow-400 rounded-full border-2 border-black shadow-lg shadow-yellow-400/50"></div>
            <div className="w-full md:w-6/12 bg-[#111] border border-yellow-600 p-3 rounded-lg shadow-lg hover:shadow-yellow-400/20 transition-all duration-300 hover:scale-105 mr-auto text-xs">
              <div className="flex items-center gap-2 mb-1">
                <div className="text-xl">⚡</div>
                <h3 className="text-base font-bold text-yellow-400">JavaScript</h3>
                <span className="bg-yellow-400 text-black px-1 py-0.5 rounded-full text-[10px] font-semibold">
                  ✅ ADVANCED
                </span>
              </div>
              <p className="text-gray-300 text-xs">Dynamic web interactions and modern ES6+ features</p>
              <div className="mt-2 flex gap-1 flex-wrap">
                <span className="bg-yellow-900/30 text-yellow-300 px-1 py-0.5 rounded text-[10px]">ES6+</span>
                <span className="bg-yellow-900/30 text-yellow-300 px-1 py-0.5 rounded text-[10px]">Async/Await</span>
                <span className="bg-yellow-900/30 text-yellow-300 px-1 py-0.5 rounded text-[10px]">DOM</span>
              </div>
            </div>
          </div>

          {/* React - Intermediate */}
          <div className="timeline-item flex items-center justify-start relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-sky-400 rounded-full border-2 border-black shadow-lg shadow-sky-400/50"></div>
            <div className="w-full md:w-6/12 bg-[#111] border border-sky-600 p-3 rounded-lg shadow-lg hover:shadow-sky-400/20 transition-all duration-300 hover:scale-105 ml-auto text-xs">
              <div className="flex items-center gap-2 mb-1">
                <div className="text-xl">⚛️</div>
                <h3 className="text-base font-bold text-sky-400">React</h3>
                <span className="bg-sky-400 text-black px-1 py-0.5 rounded-full text-[10px] font-semibold">
                  🟦 INTERMEDIATE
                </span>
              </div>
              <p className="text-gray-300 text-xs">Component-based UI, hooks, and state management</p>
              <div className="mt-2 flex gap-1 flex-wrap">
                <span className="bg-sky-900/30 text-sky-300 px-1 py-0.5 rounded text-[10px]">Hooks</span>
                <span className="bg-sky-900/30 text-sky-300 px-1 py-0.5 rounded text-[10px]">Context API</span>
                <span className="bg-sky-900/30 text-sky-300 px-1 py-0.5 rounded text-[10px]">SPA</span>
              </div>
            </div>
          </div>

          {/* Python - Intermediate */}
          <div className="timeline-item flex items-center justify-end relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-400 rounded-full border-2 border-black shadow-lg shadow-green-400/50"></div>
            <div className="w-full md:w-6/12 bg-[#111] border border-green-600 p-3 rounded-lg shadow-lg hover:shadow-green-400/20 transition-all duration-300 hover:scale-105 mr-auto text-xs">
              <div className="flex items-center gap-2 mb-1">
                <div className="text-xl">🐍</div>
                <h3 className="text-base font-bold text-green-400">Python</h3>
                <span className="bg-green-400 text-black px-1 py-0.5 rounded-full text-[10px] font-semibold">
                  🟩 INTERMEDIATE
                </span>
              </div>
              <p className="text-gray-300 text-xs">Scripting, automation, and backend development</p>
              <div className="mt-2 flex gap-1 flex-wrap">
                <span className="bg-green-900/30 text-green-300 px-1 py-0.5 rounded text-[10px]">Flask</span>
                <span className="bg-green-900/30 text-green-300 px-1 py-0.5 rounded text-[10px]">APIs</span>
                <span className="bg-green-900/30 text-green-300 px-1 py-0.5 rounded text-[10px]">Scripting</span>
              </div>
            </div>
          </div>

          {/* MySQL - Intermediate */}
          <div className="timeline-item flex items-center justify-start relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-400 rounded-full border-2 border-black shadow-lg shadow-cyan-400/50"></div>
            <div className="w-full md:w-6/12 bg-[#111] border border-cyan-600 p-3 rounded-lg shadow-lg hover:shadow-cyan-400/20 transition-all duration-300 hover:scale-105 ml-auto text-xs">
              <div className="flex items-center gap-2 mb-1">
                <div className="text-xl">🗄️</div>
                <h3 className="text-base font-bold text-cyan-400">MySQL</h3>
                <span className="bg-cyan-400 text-black px-1 py-0.5 rounded-full text-[10px] font-semibold">
                  🟦 INTERMEDIATE
                </span>
              </div>
              <p className="text-gray-300 text-xs">Relational database design and queries</p>
              <div className="mt-2 flex gap-1 flex-wrap">
                <span className="bg-cyan-900/30 text-cyan-300 px-1 py-0.5 rounded text-[10px]">SQL</span>
                <span className="bg-cyan-900/30 text-cyan-300 px-1 py-0.5 rounded text-[10px]">Joins</span>
                <span className="bg-cyan-900/30 text-cyan-300 px-1 py-0.5 rounded text-[10px]">Optimization</span>
              </div>
            </div>
          </div>

          {/* Computer Networking - Advanced */}
          <div className="timeline-item flex items-center justify-end relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-orange-400 rounded-full border-2 border-black shadow-lg shadow-orange-400/50"></div>
            <div className="w-full md:w-6/12 bg-[#111] border border-orange-600 p-3 rounded-lg shadow-lg hover:shadow-orange-400/20 transition-all duration-300 hover:scale-105 mr-auto text-xs">
              <div className="flex items-center gap-2 mb-1">
                <div className="text-xl">🌐</div>
                <h3 className="text-base font-bold text-orange-400">Computer Networking</h3>
                <span className="bg-orange-400 text-black px-1 py-0.5 rounded-full text-[10px] font-semibold">
                  🟧 ADVANCED
                </span>
              </div>
              <p className="text-gray-300 text-xs">LAN, VLAN, routing, switching, and network security</p>
              <div className="mt-2 flex gap-1 flex-wrap">
                <span className="bg-orange-900/30 text-orange-300 px-1 py-0.5 rounded text-[10px]">VLAN</span>
                <span className="bg-orange-900/30 text-orange-300 px-1 py-0.5 rounded text-[10px]">Routing</span>
                <span className="bg-orange-900/30 text-orange-300 px-1 py-0.5 rounded text-[10px]">Switching</span>
              </div>
            </div>
          </div>

          {/* Linux OS - Intermediate */}
          <div className="timeline-item flex items-center justify-end relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-400 rounded-full border-2 border-black shadow-lg shadow-gray-400/50"></div>
            <div className="w-full md:w-6/12 bg-[#111] border border-gray-500 p-3 rounded-lg shadow-lg hover:shadow-gray-400/20 transition-all duration-300 hover:scale-105 mr-auto text-xs">
              <div className="flex items-center gap-2 mb-1">
                <div className="text-xl">🐧</div>
                <h3 className="text-base font-bold text-gray-300">Linux OS</h3>
                <span className="bg-gray-300 text-black px-1 py-0.5 rounded-full text-[10px] font-semibold">
                  🟫 INTERMEDIATE
                </span>
              </div>
              <p className="text-gray-300 text-xs">System administration, shell scripting</p>
              <div className="mt-2 flex gap-1 flex-wrap">
                <span className="bg-gray-900/30 text-gray-200 px-1 py-0.5 rounded text-[10px]">Bash</span>
                <span className="bg-gray-900/30 text-gray-200 px-1 py-0.5 rounded text-[10px]">Systemd</span>
                <span className="bg-gray-900/30 text-gray-200 px-1 py-0.5 rounded text-[10px]">SSH</span>
              </div>
            </div>
          </div>

          {/* AWS - Learning */}
          <div className="timeline-item flex items-center justify-start relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-yellow-300 rounded-full border-2 border-black shadow-lg shadow-yellow-300/50 animate-pulse"></div>
            <div className="w-full md:w-6/12 bg-[#111] border border-yellow-400 p-3 rounded-lg shadow-lg hover:shadow-yellow-300/20 transition-all duration-300 hover:scale-105 ml-auto text-xs">
              <div className="flex items-center gap-2 mb-1">
                <div className="text-xl">☁️</div>
                <h3 className="text-base font-bold text-yellow-300">AWS</h3>
                <span className="bg-yellow-300 text-black px-1 py-0.5 rounded-full text-[10px] font-semibold animate-pulse">
                  🔄 LEARNING
                </span>
              </div>
              <p className="text-gray-300 text-xs">Cloud computing, EC2, S3, IAM, and networking</p>
              <div className="mt-2 flex gap-1 flex-wrap">
                <span className="bg-yellow-900/30 text-yellow-200 px-1 py-0.5 rounded text-[10px]">EC2</span>
                <span className="bg-yellow-900/30 text-yellow-200 px-1 py-0.5 rounded text-[10px]">S3</span>
                <span className="bg-yellow-900/30 text-yellow-200 px-1 py-0.5 rounded text-[10px]">IAM</span>
              </div>
            </div>
          </div>

          {/* Virtualization - Intermediate */}
          <div className="timeline-item flex items-center justify-end relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-400 rounded-full border-2 border-black shadow-lg shadow-purple-400/50"></div>
            <div className="w-full md:w-6/12 bg-[#111] border border-purple-600 p-3 rounded-lg shadow-lg hover:shadow-purple-400/20 transition-all duration-300 hover:scale-105 mr-auto text-xs">
              <div className="flex items-center gap-2 mb-1">
                <div className="text-xl">🖥️</div>
                <h3 className="text-base font-bold text-purple-400">Virtualization</h3>
                <span className="bg-purple-400 text-black px-1 py-0.5 rounded-full text-[10px] font-semibold">
                  🟪 INTERMEDIATE
                </span>
              </div>
              <p className="text-gray-300 text-xs">VMware, VirtualBox, and containerization basics</p>
              <div className="mt-2 flex gap-1 flex-wrap">
                <span className="bg-purple-900/30 text-purple-300 px-1 py-0.5 rounded text-[10px]">VMware</span>
                <span className="bg-purple-900/30 text-purple-300 px-1 py-0.5 rounded text-[10px]">VirtualBox</span>
                <span className="bg-purple-900/30 text-purple-300 px-1 py-0.5 rounded text-[10px]">Containers</span>
              </div>
            </div>
          </div>

          {/* OpenVPN & Security - Learning */}
          <div className="timeline-item flex items-center justify-start relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-300 rounded-full border-2 border-black shadow-lg shadow-green-300/50 animate-pulse"></div>
            <div className="w-full md:w-6/12 bg-[#111] border border-green-300 p-3 rounded-lg shadow-lg hover:shadow-green-300/20 transition-all duration-300 hover:scale-105 ml-auto text-xs">
              <div className="flex items-center gap-2 mb-1">
                <div className="text-xl">🔒</div>
                <h3 className="text-base font-bold text-green-300">OpenVPN & Security</h3>
                <span className="bg-green-300 text-black px-1 py-0.5 rounded-full text-[10px] font-semibold animate-pulse">
                  🔄 LEARNING
                </span>
              </div>
              <p className="text-gray-300 text-xs">VPN, encryption, and secure networking</p>
              <div className="mt-2 flex gap-1 flex-wrap">
                <span className="bg-green-900/30 text-green-200 px-1 py-0.5 rounded text-[10px]">VPN</span>
                <span className="bg-green-900/30 text-green-200 px-1 py-0.5 rounded text-[10px]">Encryption</span>
                <span className="bg-green-900/30 text-green-200 px-1 py-0.5 rounded text-[10px]">Security</span>
              </div>
            </div>
          </div>

          {/* GCP - In Future */}
          <div className="timeline-item flex items-center justify-end relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-300 rounded-full border-2 border-black shadow-lg shadow-red-300/50"></div>
            <div className="w-full md:w-6/12 bg-[#111] border border-red-300 p-3 rounded-lg shadow-lg hover:shadow-red-300/20 transition-all duration-300 hover:scale-105 mr-auto text-xs opacity-70">
              <div className="flex items-center gap-2 mb-1">
                <div className="text-xl">☁️</div>
                <h3 className="text-base font-bold text-red-300">GCP</h3>
                <span className="bg-red-300 text-black px-1 py-0.5 rounded-full text-[10px] font-semibold">
                  ⏳ IN FUTURE
                </span>
              </div>
              <p className="text-gray-300 text-xs">Google Cloud Platform - planned for future learning</p>
            </div>
          </div>

          {/* Kubernetes - In Future */}
          <div className="timeline-item flex items-center justify-start relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-300 rounded-full border-2 border-black shadow-lg shadow-blue-300/50"></div>
            <div className="w-full md:w-6/12 bg-[#111] border border-blue-300 p-3 rounded-lg shadow-lg hover:shadow-blue-300/20 transition-all duration-300 hover:scale-105 ml-auto text-xs opacity-70">
              <div className="flex items-center gap-2 mb-1">
                <div className="text-xl">☸️</div>
                <h3 className="text-base font-bold text-blue-300">Kubernetes</h3>
                <span className="bg-blue-300 text-black px-1 py-0.5 rounded-full text-[10px] font-semibold">
                  ⏳ IN FUTURE
                </span>
              </div>
              <p className="text-gray-300 text-xs">Container orchestration - planned for future learning</p>
            </div>
          </div>

          {/* Kafka - In Future */}
          <div className="timeline-item flex items-center justify-end relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-pink-300 rounded-full border-2 border-black shadow-lg shadow-pink-300/50"></div>
            <div className="w-full md:w-6/12 bg-[#111] border border-pink-300 p-3 rounded-lg shadow-lg hover:shadow-pink-300/20 transition-all duration-300 hover:scale-105 mr-auto text-xs opacity-70">
              <div className="flex items-center gap-2 mb-1">
                <div className="text-xl">🦄</div>
                <h3 className="text-base font-bold text-pink-300">Kafka</h3>
                <span className="bg-pink-300 text-black px-1 py-0.5 rounded-full text-[10px] font-semibold">
                  ⏳ IN FUTURE
                </span>
              </div>
              <p className="text-gray-300 text-xs">Distributed streaming platform - planned for future learning</p>
            </div>
          </div>
          {/* More Coming */}
{/* Animated Ending Section */}
          <div className="mt-16 relative">
            {/* Pulsing Timeline End Point */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-lime-400 to-green-400 rounded-full border-4 border-black shadow-2xl shadow-lime-400/60 animate-pulse"></div>
            
            {/* Main Ending Container */}
            <div className="bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#0f0f0f] border-2 border-lime-500/30 rounded-2xl p-8 mt-8 shadow-2xl shadow-lime-400/10 backdrop-blur-sm">
              
              {/* Animated Title */}
              <div className="text-center mb-6">
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-lime-400 via-green-400 to-emerald-400 bg-clip-text text-transparent animate-pulse mb-2">
                  🚀 The Journey Continues
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-lime-400 to-green-400 mx-auto rounded-full animate-pulse"></div>
              </div>

              {/* Animated Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-[#111] border border-lime-600/30 rounded-lg p-3 text-center hover:border-lime-400/50 transition-all duration-300 group">
                  <div className="text-2xl font-bold text-lime-400 group-hover:scale-110 transition-transform duration-300">8+</div>
                  <div className="text-xs text-gray-300">Mastered</div>
                </div>
                <div className="bg-[#111] border border-yellow-600/30 rounded-lg p-3 text-center hover:border-yellow-400/50 transition-all duration-300 group">
                  <div className="text-2xl font-bold text-yellow-400 group-hover:scale-110 transition-transform duration-300 animate-pulse">2+</div>
                  <div className="text-xs text-gray-300">Learning</div>
                </div>
                <div className="bg-[#111] border border-blue-600/30 rounded-lg p-3 text-center hover:border-blue-400/50 transition-all duration-300 group">
                  <div className="text-2xl font-bold text-blue-400 group-hover:scale-110 transition-transform duration-300">3+</div>
                  <div className="text-xs text-gray-300">Planned</div>
                </div>
                <div className="bg-[#111] border border-purple-600/30 rounded-lg p-3 text-center hover:border-purple-400/50 transition-all duration-300 group">
                  <div className="text-2xl font-bold text-purple-400 group-hover:scale-110 transition-transform duration-300">∞</div>
                  <div className="text-xs text-gray-300">Potential</div>
                </div>
              </div>

              {/* Animated Quote Section */}
              <div className="text-center mb-6">
                <blockquote className="text-lg md:text-xl font-medium text-gray-200 italic mb-4 leading-relaxed">
                  "Every expert was once a <span className="text-lime-400 font-bold animate-pulse">beginner</span>.
                  <br />
                  Every pro was once an <span className="text-green-400 font-bold">amateur</span>.
                  <br />
                  Every icon was once an <span className="text-emerald-400 font-bold">unknown</span>."
                </blockquote>
                <cite className="text-sm text-lime-300 font-semibold">— The Developer's Mindset</cite>
              </div>

              {/* Floating Tech Icons */}
              <div className="flex justify-center items-center gap-4 mb-6 flex-wrap">
                <div className="text-3xl animate-bounce" style={{animationDelay: '0s'}}>⚛️</div>
                <div className="text-3xl animate-bounce" style={{animationDelay: '0.2s'}}>☁️</div>
                <div className="text-3xl animate-bounce" style={{animationDelay: '0.4s'}}>🐍</div>
                <div className="text-3xl animate-bounce" style={{animationDelay: '0.6s'}}>🔒</div>
                <div className="text-3xl animate-bounce" style={{animationDelay: '0.8s'}}>☸️</div>
                <div className="text-3xl animate-bounce" style={{animationDelay: '1s'}}>🚀</div>
              </div>

              {/* Growth Message */}
              <div className="text-center space-y-3">
                <p className="text-lg font-semibold">
                  <span className="text-lime-400 font-bold animate-pulse">This toolbox is constantly evolving</span>
                  <span className="text-gray-200"> — each skill building upon the last</span>
                </p>
                <p className="text-base text-gray-300">
                  From web fundamentals to cloud architecture, from scripting to security — 
                  <span className="text-green-400 font-semibold"> the journey of a thousand miles begins with a single step</span>
                </p>
                <p className="text-sm text-lime-300 font-medium">
                  🌟 Next stop: Cloud mastery and enterprise-level solutions 🌟
                </p>
              </div>

              {/* Animated Progress Bar */}
              <div className="mt-6">
                <div className="flex justify-between text-xs text-gray-400 mb-1">
                  <span>Journey Progress</span>
                  <span>Continuously Growing...</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-lime-400 via-green-500 to-emerald-400 rounded-full animate-pulse transition-all duration-1000" style={{width: '75%'}}></div>
                </div>
              </div>

              {/* Final CTA */}
              <div className="text-center mt-6">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-lime-500/20 to-green-500/20 border border-lime-400/30 rounded-full px-6 py-2 hover:from-lime-500/30 hover:to-green-500/30 transition-all duration-300 group cursor-pointer">
                  <span className="text-lime-400 font-semibold group-hover:text-lime-300">Ready to build the future</span>
                  <span className="text-2xl group-hover:translate-x-1 transition-transform duration-300">🚀</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}