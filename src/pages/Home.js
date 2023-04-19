import React from "react";
import classes from '../App.module.scss'
import heroImg from '../assets/Screenshot_1-removebg-preview.png'
import HeroItems from "../components/HeroItems";
import burgerImg from '../assets/DummyImg3.jpg'
import pizzaImg from '../assets/DummyImg1.jpg'
import riceImg from '../assets/DummyImg2.jpg'
import dessertImg from '../assets/DummyImg4.jpg'

const DUMMY_DATA = [
  {
    id: 'c1',
    name: 'Chicken Burger',
    description: 'This is an amazing chicken burger that is very healthy',
    price: 3.50,
    image: burgerImg
  },

  {
    id: 'c2',
    name: 'Chicken Pizza',
    description: 'This is an amazing chicken Pizza that is very healthy',
    price: 3.60,
    image: pizzaImg
  },

  {
    id: 'c3',
    name: 'Chicken Rice',
    description: 'This is an amazing chicken Rice that is very healthy',
    price: 4.50,
    image: riceImg
  },

  {
    id: 'c4',
    name: 'Special Dessert',
    description: 'This is an amazing Special Dessert that is very healthy',
    price: 2.50,
    image: dessertImg
  },
]


const Home = () => {
  return (
    <>
      <section className={classes.home}>
        <div className={classes['home__texts']}>
          <h3>Hungry?</h3>
          <h1>Just come to foodied & order</h1>
          <p>Here You Will Find The Best Quality And Pure Food. Order Now To Satisfy You Hunger Fangs</p>
          <div className={classes['home__actions']}>
            <button className={classes['home__actions--order']}>Order Now</button>
            <button className={classes['home__actions--explore']}>Explore more <span>&rarr;</span></button>
          </div>
        </div>
          <img src={heroImg} alt="heroPng"/>
    </section>
    <div className={classes['homeItems']}>
    {DUMMY_DATA.map(item => <HeroItems id={item.id} image={item.image} name={item.name} description={item.description} price={item.price}/>)}
    </div>
  
    </>
  );
};

export default Home;
