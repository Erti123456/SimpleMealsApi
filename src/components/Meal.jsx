import { useEffect, useState } from "react";

const Meal = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      const res = await fetch(
        "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood",
      );
      const data = await res.json();
      setData(data.meals);
    }

    getData();
  }, []);

  return (
    <div className="items-container">
      {data.map((item) => (
        <section key={item.idMeal} className="card">
          <img src={item.strMealThumb} alt="Meal Image" />
          <section className="content">
            <p>{item.strMeal}</p>
            <p>{item.idMeal}</p>
          </section>
        </section>
      ))}
    </div>
  );
};

export default Meal;
