// src/components/Loader.tsx
'use client';

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
      <div className="spinner-box">
        <div className="leo-border-1">
          <div className="leo-core-1"></div>
        </div> 
        <div className="leo-border-2">
          <div className="leo-core-2"></div>
        </div> 
      </div>
    </div>
  );
}
// Styles for the loader