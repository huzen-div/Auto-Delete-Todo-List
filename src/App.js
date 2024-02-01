import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [foodstuff, setFoodstuff] = useState([//foodstuff
    {
      type: 'Fruit',
      name: 'Apple',
    },
    {
      type: 'Vegetable',
      name: 'Broccoli',
    },
    {
      type: 'Vegetable',
      name: 'Mushroom',
    },
    {
      type: 'Fruit',
      name: 'Banana',
    },
    {
      type: 'Vegetable',
      name: 'Tomato',
    },
    {
      type: 'Fruit',
      name: 'Orange',
    },
    {
      type: 'Fruit',
      name: 'Mango',
    },
    {
      type: 'Fruit',
      name: 'Pineapple',
    },
    {
      type: 'Vegetable',
      name: 'Cucumber',
    },
    {
      type: 'Fruit',
      name: 'Watermelon',
    },
    {
      type: 'Vegetable',
      name: 'Carrot',
    },
  ]);

  const [fruit, setFruit] = useState([]);
  const [vegetable, setVegetable] = useState([]);
  const [isFruit, setIsFruit] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      if (isFruit == true) {
        let itemFluit1 = {};
        if (fruit.length > 0) {
          for (let itemFluit of fruit) {
            itemFluit1 = itemFluit;
          }
        }
        if (itemFluit1.type) {
          setFruit(current =>
            current.filter(itemPrev => {
              return itemPrev.name !== itemFluit1.name;
            }),
          );
          setFoodstuff(oldArray => [...oldArray, itemFluit1]);
        }
      }
      else if (isFruit == false) {
        let itemVegetable1 = {};
        if (vegetable.length > 0) {
          for (let itemVegetable of vegetable) {
            itemVegetable1 = itemVegetable;
          }
        }
        if (itemVegetable1.type) {
          setVegetable(current =>
            current.filter(itemPrev => {
              return itemPrev.name !== itemVegetable1.name;
            }),
          );
          setFoodstuff(oldArray => [...oldArray, itemVegetable1]);
        }
      }
      
      if (isFruit == false && fruit.length > 0) {
        setIsFruit(true);
      }
      else if (isFruit == true && vegetable.length > 0) {
        setIsFruit(false);
      }

    }, 2000);

    return () => {
      window.clearInterval(timer);
    };
  }, [foodstuff]);

  const dataList = foodstuff.map((item) =>
    <div key={item.name} className='d-flex flex-column mb-2'>
      <button type="button" className="btn btn-light"
        onClick={() => handleClick(item)}>{item.name}
      </button>
    </div>
  )

  const fruitList = fruit.map((item) =>
    <div key={item.name} className='d-flex flex-column mb-2'>
      <button type="button" className="btn btn-light"
        onClick={() => handleClickType(item)}>{item.name}
      </button>
    </div>
  )
  const vegetableList = vegetable.map((item) =>
    <div key={item.name} className='d-flex flex-column mb-2'>
      <button type="button" className="btn btn-light"
        onClick={() => handleClickType(item)}>{item.name}
      </button>
    </div>
  )

  const handleClick = (item) => {
    if (item.type == "Fruit") {
      setFruit(oldArray => [...oldArray, item]);
      setIsFruit(true);
    }
    else {
      setVegetable(oldArray => [...oldArray, item]);
      setIsFruit(false);
    }

    setFoodstuff(current =>
      current.filter(itemPrev => {
        return itemPrev.name !== item.name;
      }),
    );
  }

  const handleClickType = (item) => {
    setFoodstuff(oldArray => [...oldArray, item]);
    if (item.type == "Fruit") {
      setIsFruit(false);
      setFruit(current =>
        current.filter(itemPrev => {
          return itemPrev.name !== item.name;
        }),
      );
    }
    else {
      setIsFruit(true);
      setVegetable(current =>
        current.filter(itemPrev => {
          return itemPrev.name !== item.name;
        }),
      );
    }
  }

  return (
    <div className="App">
      <div className="container mt-3">
        <div className="row">
          <div className="col-sm border">
            {dataList}
          </div>
          <div className="col-sm border">
            <div className='d-flex flex-column mb-2'>
              Fruit
            </div>
            {fruitList}
          </div>
          <div className="col-sm border">
            <div className='d-flex flex-column mb-2'>
              Vegetable
            </div>
            {vegetableList}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
