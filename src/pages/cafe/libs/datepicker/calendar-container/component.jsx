import React from 'react';

export const CalendarContainer = ({ className, children }) => {
    return (
      <div style={{ padding: "24px", background: "#F5F5F5", borderRadius: '16px', width: 'min-content' }}>
        <div className={className}>
          <div style={{ position: "relative", border: 'none' }}>{children}</div>
        </div>
      </div>
    );
  };
