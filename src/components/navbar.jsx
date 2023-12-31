import React from 'react'
import {useState, useEffect} from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import NavScroll from './navscroll.jsx'




const Navbar = () => {
	const [isActive, setIsActive] = useState(true);
	const [isAActive, setIsAActive] = useState(false);
	const [isPActive, setIsPActive] = useState(false);
	const [isSActive, setIsSActive] = useState(false);
	const [isEActive, setIsEActive] = useState(false);
	

	const handleActive = ({value}) => {
		setIsActive(value);
	}
	const handleAActive = ({value}) => {
		setIsAActive(value);
	}
	const handlePActive = ({value}) => {
		setIsPActive(value);
	}
	const handleSActive = ({value}) => {
		setIsSActive(value);
	}
	const handleEActive = ({value}) => {
		setIsEActive(value);
	}






	return (



		<>

			<nav className="fixed  w-full ">

			 <div className="container mx-auto flex justify-center text-md md:text-2xl pt-5">

				<AnchorLink href="#hero"> 
				<NavScroll sectionID='hero' changeActive={handleActive} />
					<button className={`rounded-full mx-3 md:mx-10 ${
                isActive ? 'bg-red-950 w-24 md:w-48 text-lg md:text-3xl' : 'hover:md:text-4xl'}`} > Name </button>
					
				</AnchorLink>
				<AnchorLink href="#about"> 
				<NavScroll sectionID='about' changeActive={handleAActive} />
					<button className={`rounded-full mx-3 md:mx-10 ${
                isAActive ? 'bg-black w-28 md:w-48 text-lg md:text-3xl' : 'hover:md:text-4xl'}`} > About Me </button>
					
				</AnchorLink>
				<AnchorLink href="#project"> 
				<NavScroll sectionID='project' changeActive={handlePActive} />
					<button className={`rounded-full mx-3 md:mx-10 ${
                isPActive ? 'bg-red-950 w-24 md:w-48 text-lg md:text-3xl' : 'hover:md:text-4xl'}`} > Projects </button>
					
				</AnchorLink>
				
				<AnchorLink href="#skills"> 
				<NavScroll sectionID='skills' changeActive={handleSActive} />
					<button className={`rounded-full mx-3 md:mx-10 ${
                isSActive ? 'bg-black w-24 md:w-48 text-lg md:text-3xl' : 'hover:md:text-4xl'}`} > Skills </button>
					
				</AnchorLink>

				<AnchorLink href="#experience"> 
				<NavScroll sectionID='experience' changeActive={handleEActive} />
					<button className={`rounded-full mx-3 md:mx-10 ${
                isEActive ? 'bg-red-950 w-24 md:w-56 text-lg md:text-3xl' : 'hover:md:text-4xl'}`} > Experience </button>
					
				</AnchorLink>
	
	
			  </div>
			</nav>

		</>
	)
}

export default Navbar