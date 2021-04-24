import { Link } from "react-router-dom";
import styled from 'styled-components';
const Nav = () => {
	return (
		<StyledNav>
			<h1><Link to="/" id="logo" href="#">Capture</Link></h1>

			<ul>
				<li>
					<Link to="/">1. About Us</Link>
				</li>
				<li>
					<Link to="/work">2. Our Work</Link>
				</li>
				<li>
					<Link to="/contact">3. Contact Us</Link>
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

export default Nav;
