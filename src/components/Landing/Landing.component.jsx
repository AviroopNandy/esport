import React from "react";
import NavBar from "../NavBar/NavBar.component";
import bg from "../../assets/home-bg.png";
import Button from "react-bootstrap/Button";

import "./Landing.component.css";

const Landing = () => {
    return(
        <div className="home">
            <NavBar />
            <img src={ bg } alt="home background" className="bg" />
            <h3 className="header">Welcome to Esport</h3>
            <p className="text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos aliquid et maiores sit ad eius mollitia temporibus cupiditate voluptates veniam laboriosam quae modi animi tempora reprehenderit molestiae facere minima, aspernatur totam vero deserunt. Dolorem praesentium laudantium aspernatur mollitia? Magni, mollitia nam ut natus eaque odio, repudiandae qui saepe quidem voluptates earum nisi quis autem dolore fugiat quam veniam aut ipsam. Atque rem odio nam temporibus, sint explicabo pariatur et odit cumque voluptas harum possimus sed corporis quia, assumenda tenetur ex ullam eveniet, itaque eum hic aliquid culpa. Voluptates quibusdam eum ducimus perspiciatis eaque nam accusantium, commodi, doloribus, ut quidem odio?</p>
            <Button variant="primary">Play Now</Button>
        </div>
    );
}

export default Landing;