// import icons
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.png';

//Styled
import styled from 'styled-components';
import { About, Description, Image } from '../styles';

// Scroll animation
import {useScroll} from  './useScroll';
import { scrollReveal } from '../animation.js';



const ServicesSection = () => {
	
	const [element, controls] = useScroll();
	
	return (
		<Services ref={element} variants={scrollReveal} animate={controls} initial='hidden' >
			<Description>
				<h2>High <span>quality</span> services</h2>
				<Cards>
					<Card>
						<div className="icon">
							<img src={clock} alt="clock" />
							<h3>Efficient</h3>
						</div>
						<p>Lorem ipsum dolor sit amet.</p>
					</Card>
					<Card>
						<div className="icon">
							<img src={teamwork} alt="teamwork" />
							<h3>Teamwork</h3>
						</div>
						<p>Lorem ipsum dolor sit amet.</p>
					</Card>
					<Card>
						<div className="icon">
							<img src={diaphragm} alt="diaphragm" />
							<h3>Diaphragm</h3>
						</div>
						<p>Lorem ipsum dolor sit amet.</p>
					</Card>
					<Card>
						<div className="icon">
							<img src={money} alt="money" />
							<h3>Affordable</h3>
						</div>
						<p>Lorem ipsum dolor sit amet.</p>
					</Card>
				</Cards>
			</Description>
			<Image className="image">
				<img src={home2} alt="home2" />
			</Image>
		</Services>
	)
}

// Customize reuseable Styled-Component or inherit Styles
const Services = styled(About)`
	h2{
		padding-bottom: 5rem;
	}

	p{
		width: 70%;
		padding: 2rem 0 4rem 0;
	}
`;

const Cards = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

const Card = styled.div`
	flex-basis: 20rem;
	.icon{
		display: flex;
		align-items: center;

		h3{
			margin-left: 1rem;
			background: #fff;
			color: black;
			padding: 1rem
		}
	}
`;

export default ServicesSection
