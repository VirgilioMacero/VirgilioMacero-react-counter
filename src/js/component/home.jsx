import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Card from "./Card";
import SecondCounter from "./SecondCounter";

//create your first component
const Home = () => {
	return (

		<SecondCounter seconds={15}/>

		);
};

export default Home;
