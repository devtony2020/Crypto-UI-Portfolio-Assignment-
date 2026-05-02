import React from 'react';

const Notification = ({ message, type = 'error', onClose }) => {
  if (!message) return null;

  const styles = {
    error: {
      bg: 'bg-red-500/10',
      border: 'border-red-500/50',
      text: 'text-red-500',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    success: {
      bg: 'bg-green-500/10',
      border: 'border-green-500/50',
      text: 'text-green-500',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
      )
    },
    info: {
      bg: 'bg-blue-500/10',
      border: 'border-blue-500/50',
      text: 'text-blue-500',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  };

  const style = styles[type] || styles.info;

  return (
    <div className={`${style.bg} ${style.border} ${style.text} border px-4 py-3 rounded-xl flex items-center gap-3 animate-in fade-in slide-in-from-top-2 duration-300 mb-6`}>
      <div className="flex-shrink-0">{style.icon}</div>
      <p className="text-sm font-medium flex-1">{message}</p>
      {onClose && (
        <button onClick={onClose} className="hover:opacity-70 transition">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default Notification;
