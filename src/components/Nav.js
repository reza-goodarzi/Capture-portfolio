import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import styled from 'styled-components';

const Nav = () => {
	const { pathname } = useLocation();
	return (
		<StyledNav>
			<h1><Link to="/" id="logo" href="#">Capture</Link></h1>

			<ul>
				<li>
					<Link to="/">1. About Us</Link>
					<Line
						transition={{ duration: .75 }}
						initial={{ width: 0 }}
						animate={{ width: pathname === '/' ? '50%' : 0 }}
					/>
				</li>
				<li>
					<Link to="/work">2. Our Work</Link>
					<Line
						transition={{ duration: .75 }}
						initial={{ width: 0 }}
						animate={{ width: pathname === '/work' ? '50%' : 0 }}
					/>
				</li>
				<li>
					<Link to="/contact">3. Contact Us</Link>
					<Line
						transition={{ duration: .75 }}
						initial={{ width: 0 }}
						animate={{ width: pathname === '/contact' ? '50%' : 0 }}
					/>
				</li>
			</ul>
		</StyledNav>
	)
};

const StyledNav = styled.nav`
	min-height: 10vh;
	display: flex;
	margin: auto;
	justify-content: space-between;
	align-items: center;
	padding: 1rem 10rem;
	background: #282828;
	position: sticky;
	top: 0;
	z-index: 1000;

	#logo{
		font-family: 'lobster', cursive;
		font-size: 1.5rem;
		font-weight: lighter;
	}

	a{
		color: #fff;
		text-decoration: none;
	}

	ul{
		display: flex;
		list-style: none;
	}

	li{
		padding-left: 10rem;
		position: relative;
	}
`;

const Line = styled(motion.div)`
	height: .3rem;
	background: #23d997;
	width: 0%;
	position: absolute;
	bottom: -80%;
	left: 60%;
`;

export default Nav;
