// pages/api/getTransactions.js
"use client"
import {useState, useEffect} from 'react';

export default function BudgetCategories({token}) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/budgetCatgs/', {
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
  const formatNumber = (number) => {
    return new Intl.NumberFormat().format(number);
  };
  return (
      <div className="feature feature--1">
        <div className="budget">
          {data && data.length > 1 ? (
            <p className="budget-title"> نام بودجه : {data[1].budget_name}</p>
          ) : (
            <p>Loading or no data available</p>
          )}
        </div>
        {data && data.map((item, i) => (
            <div className="budget" key={i}>
              <p className="budget-title">{item.name}</p>
              <p className="budget-title">خرج شده : {formatNumber(item.spent)} تومان </p>
              <p className="budget-title"> باقی مانده : {formatNumber(item.remaining_budget)} تومان </p>
            </div>
        ))
        }
      </div>
  );
}
