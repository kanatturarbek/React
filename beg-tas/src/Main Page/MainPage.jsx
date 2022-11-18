import { Nav } from "../Navigation/Nav";
import { Posts } from "../Posts/Posts";
import { Search } from "../Search/Search";
import { useState, useEffect } from 'react';
import { Bookmark } from "../Bookmark/Bookmark";
import "./MainPage.css"

function getWindowDimensions() {
	const { innerWidth: width, innerHeight: height } = window;
	return {
		width,
		height
	};
}

function useWindowDimensions() {
  	const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  	useEffect(() => {
    	function handleResize() {
      		setWindowDimensions(getWindowDimensions());
    	}

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

  	return windowDimensions;
}

export function MainPage(props) {

    function setNavWidth (newNavWidgh){
        document.documentElement.style.setProperty('--nav-width', newNavWidgh);
    }

    const { height, width } = useWindowDimensions();

    return(
        <div className="MainPage">
            <section className="section">
                <Nav height={height} width={width} setNavWidth={setNavWidth}/>
            </section>
            <section className="section">
                {props.bookmark ? 
                <Bookmark style={(!(width <= 1410)) ? {maxWidth: "750px"} : {flexGrow: "1"}} />
                :
                <Posts style={(!(width <= 1410)) ? {maxWidth: "750px"} : {flexGrow: "1"}} />}
                {(!(width <= 1410)) ? <Search /> : ""}
            </section>
            
        </div>
    );
}