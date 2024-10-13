// pages/api/getTransactions.js
"use client"
import {useState, useEffect} from 'react';

export default function Transactions({token}) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/transactions/', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [token]);

  return (
      <div>
        <ul className="trans-list list-outside hover:list-inside" >
          {data && data.map((item, i) => (
              <div key={i}>
                <li className="trans-list__item">
                  <p>{item.amount} <span>تومان</span></p>
                  <p>{item.description}</p>
                </li>
              </div>
          ))
          }
        </ul>
      </div>
  );
}
