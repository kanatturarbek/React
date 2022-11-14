import { Nav } from "../Navigation/Nav";
import { Posts } from "../Posts/Posts";
import { Search } from "../Search/Search";
import { useState, useEffect } from 'react';
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

export function MainPage() {

    useEffect(() => {
        const navWidth = getComputedStyle(document.documentElement).getPropertyValue('--nav-width');
        console.log(navWidth);

    }, []);
    
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
                <Posts />
                <Search />
            </section>
            
        </div>
    );
}