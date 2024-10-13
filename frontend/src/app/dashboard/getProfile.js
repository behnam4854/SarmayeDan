"use client"

import { useState, useEffect } from 'react';
import { jwtDecode } from "jwt-decode";


export default function UserProfile({ token }) {
  const [user, setUser] = useState({ firstName: '', lastName: '' });

  useEffect(() => {
    if (token) {
      const decoded = jwtDecode(token);
      setUser({
        firstName: decoded.first_name,
        lastName: decoded.last_name,
      });
    }
  }, [token]);

  return (
      <p className="feature--head">{user.firstName} {user.lastName}</p>
  );
}