import React from "react";
import classes from './Hero.module.css'
import heroImg from '../image/hero.png'
import Button from "../UI/Button";
import HeroItems from "../components/HeroItems";
import chickenBurgerImg from '../image/chickenBurger.jpg'
import chickenPizzaImg from '../image/chickenPizza.jpg'
import chickenRiceImg from '../image/chickenRice.jpg'
import specialDessertImg from '../image/specialDessert.jpg'

const DUMMY_DATA = [
    {
        id: 'd1',
        name: 'Chicken Burger',
        description: 'This is an excellent chicken burger that is very healthy',
        price: '$3.50',
        image: chickenBurgerImg
    },
    {
        id: 'd2',
        name: 'Chicken Pizza',
        description: 'This is an excellent chicken pizza that is very healthy',
        price: '$3.60',
        image: chickenPizzaImg
    },
    {
        id: 'd3',
        name: 'Chicken Rice',
        description: 'This is an excellent chicken rice that is very healthy',
        price: '$4.50',
        image:chickenRiceImg
    },
    {
        id: 'd4',
        name: 'Special Dessert',
        description: 'This is an excellent special dessert that is very healthy',
        price: '$2.50',
        image:specialDessertImg
    },
]

const Hero = () => {
  return (
    <>
    <section className={classes.hero} id="home">
        <div className={classes['hero-texts']}>
            <p className={classes.hungry}>Hungry?</p>
            <h1 className={classes['main-text']}>Just come to foodied & order</h1>
            <p className={classes['sub-text']}>Here you will find all the best quality and pure food. order now to satisfy your hunger pangs</p>
            <div className={classes.actions}>
                <Button className={classes.orderBtn}>Order Now</Button>
                <Button className={classes.exploreBtn}>Explore More <span>&rarr;</span></Button>
            </div>
        </div>
            <img src={heroImg} alt='Hero img' className={classes.imgHero}/>
    </section>
    <div className={classes.heroItems}>
        {DUMMY_DATA.map(item => <HeroItems key={item.id} title={item.name} description={item.description} price={item.price} img={item.image}/>)}        
    </div>
            
    </>
   
    );
};

export default Hero;
