import React from 'react';
import './AdminDashboard.css';

export default function AdminDashboard() {
  const listings = [
    { id: 1, title: 'Central Parking Lot', bookings: 12 },
    { id: 2, title: 'Basement Garage', bookings: 7 },
    { id: 3, title: 'Mall Parking', bookings: 15 },
  ];

  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'User' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Owner' },
  ];

  return (
    <div className="admin-dashboard">
      <aside className="admin-sidebar">
        <h3>Admin Panel</h3>
        <ul>
          <li>Overview</li>
          <li>Manage Listings</li>
          <li>Manage Users</li>
          <li>Reports</li>
        </ul>
      </aside>

      <main className="admin-content">
        <h2>Overview</h2>
        <div className="admin-cards">
          <div className="admin-card">
            <h3>Total Listings</h3>
            <p>{listings.length}</p>
          </div>
          <div className="admin-card">
            <h3>Total Users</h3>
            <p>{users.length}</p>
          </div>
          <div className="admin-card">
            <h3>Total Bookings</h3>
            <p>{listings.reduce((sum, l) => sum + l.bookings, 0)}</p>
          </div>
        </div>

        <h2>Manage Listings</h2>
        <table className="admin-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Bookings</th>
            </tr>
          </thead>
          <tbody>
            {listings.map(l => (
              <tr key={l.id}>
                <td>{l.title}</td>
                <td>{l.bookings}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2>Manage Users</h2>
        <table className="admin-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map(u => (
              <tr key={u.id}>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>{u.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}
