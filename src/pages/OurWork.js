import styled from 'styled-components';
import { Hide } from '../styles';
import { Link } from 'react-router-dom';

// Images
import athlete from '../img/athlete-small.png';
import theRacer from '../img/theracer-small.png';
import goodTimes from '../img/goodtimes-small.png';

// Animation
import { motion } from 'framer-motion';
import { pageAnimation, fade, photoAnim, lineAnim, slider, sliderContainer } from '../animation';


const OurWork = () => {
	return (
		<Work
			variants={pageAnimation} initial='hidden' animate="show" exit="exit" style={{ background: '#fff' }} >

			<motion.div variants={sliderContainer} >
				<Frame1 variants={slider} />
				<Frame2 variants={slider} />
				<Frame3 variants={slider} />
				<Frame4 variants={slider} />
			</motion.div>

			<Movie>
				<motion.h2 variants={fade} >Athlete</motion.h2>
				<motion.div variants={lineAnim} className="line"></motion.div>
				<Link to="/work/the-athlete">
					<Hide>
						<motion.img variants={photoAnim} src={athlete} alt="athlete" />
					</Hide>
				</Link>
			</Movie>

			<Movie>
				<h2>The Racer</h2>
				<div className="line"></div>
				<Link to="/work/the-racer">
					<img src={theRacer} alt="theRacer" />
				</Link>
			</Movie>

			<Movie>
				<h2>Good Times</h2>
				<div className="line"></div>
				<Link to="/work/good-times">
					<img src={goodTimes} alt="goodTimes" />
				</Link>
			</Movie>
		</Work>
	)
};

const Work = styled(motion.div)`
	min-height: 100vh;
	overflow: hidden;
	padding: 5rem 10rem;
	h2{
		padding: 1rem 0;
	}
`;

const Movie = styled.div`
	padding-bottom: 10rem;

	.line{
		height: .6rem;
		background: #23d997;
		margin-bottom: 3rem;
	}

	img{
		width: 100%;
		height: 70vh;
		object-fit: cover;
	}
`;

const Frame1 = styled(motion.div)`
	position: fixed;
	left: 0;
	top: 10%;
	width: 100%;
	height: 100vh;
	background: #fffebf;
	z-index: 2; 
`;

const Frame2 = styled(Frame1)`
	background: #ff8efb;
`;

const Frame3 = styled(Frame1)`
	background: #8ed2ff;
`;

const Frame4 = styled(Frame1)`
	background: #8effa0;
`

export default OurWork;
