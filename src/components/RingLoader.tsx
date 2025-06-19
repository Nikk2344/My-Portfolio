'use client';

export default function RingLoader() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="relative w-16 h-16 md:w-24 md:h-24">
        {/* Outer Ring - Lime */}
        <div className="absolute inset-0 border-4 border-lime-400 rounded-full animate-orbit">
          <div className="absolute -right-2 top-1/2 w-4 h-4 bg-lime-400 rounded-full transform -translate-y-1/2"></div>
        </div>
        
        {/* Middle Ring - Blue */}
        <div className="absolute inset-4 border-4 border-blue-400 rounded-full animate-orbit-reverse">
          <div className="absolute -left-2 top-1/2 w-3 h-3 bg-blue-400 rounded-full transform -translate-y-1/2"></div>
        </div>
        
        {/* Inner Ring - Purple */}
        <div className="absolute inset-8 border-4 border-purple-400 rounded-full animate-orbit">
          <div className="absolute -right-1.5 top-1/2 w-2 h-2 bg-purple-400 rounded-full transform -translate-y-1/2"></div>
        </div>
        
        <style jsx>{`
          @keyframes orbit {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          
          @keyframes orbit-reverse {
            0% { transform: rotate(360deg); }
            100% { transform: rotate(0deg); }
          }
          
          .animate-orbit {
            animation: orbit 3s linear infinite;
          }
          
          .animate-orbit-reverse {
            animation: orbit-reverse 4s linear infinite;
          }
        `}</style>
      </div>
    </div>
  );
}