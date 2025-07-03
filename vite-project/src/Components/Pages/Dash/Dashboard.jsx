import React, { useState } from 'react';
import './Dashboard.css';

export default function Dashboard() {
  const [section, setSection] = useState('bookings');

  const bookings = [
    { id: 1, spot: 'Central Parking Lot', date: '2025-07-01', amount: '$10' },
    { id: 2, spot: 'Basement Garage', date: '2025-07-02', amount: '$8' },
  ];

  const handleSectionChange = (s) => setSection(s);

  return (
    <div className="dashboard">
      <aside className="dashboard-sidebar">
        <h3>My Dashboard</h3>
        <ul>
          <li className={section === 'bookings' ? 'active' : ''} onClick={() => handleSectionChange('bookings')}>My Bookings</li>
          <li className={section === 'profile' ? 'active' : ''} onClick={() => handleSectionChange('profile')}>Profile</li>
          <li className={section === 'payments' ? 'active' : ''} onClick={() => handleSectionChange('payments')}>Payments</li>
        </ul>
      </aside>

      <main className="dashboard-content">
        {section === 'bookings' && (
          <div>
            <h2>My Bookings</h2>
            <table className="bookings-table">
              <thead>
                <tr>
                  <th>Spot</th>
                  <th>Date</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map(b => (
                  <tr key={b.id}>
                    <td>{b.spot}</td>
                    <td>{b.date}</td>
                    <td>{b.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {section === 'profile' && (
          <div>
            <h2>Profile Settings</h2>
            <form className="profile-form">
              <input type="text" placeholder="Full Name" value="John Doe" readOnly />
              <input type="email" placeholder="Email" value="john@example.com" readOnly />
              <button type="button">Edit Profile</button>
            </form>
          </div>
        )}

        {section === 'payments' && (
          <div>
            <h2>Payment History</h2>
            <p>Coming soon: View your detailed payment statements.</p>
          </div>
        )}
      </main>
    </div>
  );
}
