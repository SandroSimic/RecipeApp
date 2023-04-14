import React from "react";
import classes from './AboutUs.module.css'
import aboutUsImg1 from '../image/aboutUs-1.png'
import aboutUsImg2 from '../image/aboutUs-2.png'
import aboutUsImg3 from '../image/aboutUs-3.png'
import AboutUsCard from "../components/AboutUsCard";
import Heading1 from "../UI/Heading1";
import SubText from "../UI/SubText";


const aboutUsContent = [
  {
    image: aboutUsImg1,
    title: 'Serve Healthy Food',
    description: 'We serve all healthy food here. You can choose any food you like'
  },
  {
    image: aboutUsImg2,
    title: 'Best Quality',
    description: 'Our food quality is excellent. You will get exactly what you want here.'
  },
  {
    image: aboutUsImg3,
    title: 'Fast Delivery',
    description: 'You can say the main goal of our delivery man is to deliver orders quickly. You will receive it shortly after ordering'
  }
]


const AboutUs = () => {
  return (
    <section className={classes.aboutUs} id="aboutUs">
        <Heading1 text="why choose us?"/>
        <SubText text="You will choose us because you get the best quality food from us and we deliver fast."/>
        <div className={classes.aboutItems}>
          {aboutUsContent.map(item => <AboutUsCard key={item.title} image={item.image} title={item.title} description={item.description}/>)}
        </div>
    </section>
  );
};

export default AboutUs;
