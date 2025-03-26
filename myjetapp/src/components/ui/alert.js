import React from 'react';

export function Alert({ children, className = '' }) {
  return (
    <div className={`bg-blue-50 border border-blue-200 rounded-lg p-4 ${className}`}>
      {children}
    </div>
  );
}

export function AlertDescription({ children }) {
  return <div className="text-sm text-blue-700">{children}</div>;
}
