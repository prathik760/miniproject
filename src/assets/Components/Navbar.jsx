import React, { useEffect, useState } from 'react';
import './Navbar.css';
 
// const Base = 'https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata';
const New = 'https://www.themealdb.com/api/json/v1/1/categories.php';

const Navbar = () => {
//   const [data, setData] = useState([]); 
  const [error, setError] = useState('');
  const [dataa, setDataa] = useState([]);
  const [filtered, setFiltered] = useState([]);

//   useEffect(() => {
//     const fetchFood = async () => {
//       try {
//         const res = await fetch(Base);
//         const json = await res.json();
//         setData(json.meals || []); 
//       } catch (error) {
//         setError('Unable to fetch data');
//       }
//     };
//     fetchFood();
//   }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(New);
        const jsonn = await response.json();
        setDataa(jsonn.categories || []); 
        setFiltered(jsonn.categories || []); // Initialize filtered with all categories
      } catch (error) {
        setError('Unable to fetch data!');
      }
    };
    fetchCategories();
  }, []);

  const search = (e) => {
    const searchVal = e.target.value.toLowerCase();
    if (searchVal === '') {
      setFiltered(dataa); // Reset to show all categories when search is cleared
    } else {
      const filter = dataa.filter((food) => 
        food.strCategory.toLowerCase().includes(searchVal)
      );
      setFiltered(filter);
    }
  };
    
  return (
    <>
      <div className="search">
        <input onChange={search} type="text" placeholder="Search food category" />
      </div>
      
      <div className='btn'>
        <button>All</button>
        <button>Breakfast</button>
        <button>Lunch</button>
        <button>Dinner</button>
      </div>

      {/* <div className='data'>
        {error ? (
          <p>{error}</p> 
        ) : (
          data.map((item) => (
            <div key={item.idMeal} className='items'>
              <p>{item.strMeal}</p>
              <img src={item.strMealThumb} alt={item.strMeal} width="100" />
              <p>{item.strMeasure1}</p>
              <p>{item.strMeasure2}</p>
              <p>{item.strMeasure3}</p>
              <p>{item.strMeasure4}</p>
              <p>{item.strMeasure5}</p>
              <p>{item.strMeasure6}</p>
              <p>{item.strMeasure7}</p>
              <p>{item.strMeasure8}</p>
              <p>{item.strMeasure9}</p>
              <p>{item.strMeasure10}</p>
              <p>{item.strTags}</p>
              <a href={item.strYoutube}>YouTube</a>
            </div>
          ))
        )}
      </div> */}

      <div className='categories'>
        {filtered.map((itm) => (
          <div key={itm.idCategory} className='items'>
            <p>{itm.strCategory}</p>
            <img src={itm.strCategoryThumb} alt={itm.strCategory} width="100" />
            <p>{itm.strCategoryDescription}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Navbar;
