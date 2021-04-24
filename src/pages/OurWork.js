import styled from 'styled-components';
import {Link} from 'react-router-dom';

// Images
import athlete from '../img/athlete-small.png';
import theRacer from '../img/theracer-small.png';
import goodTimes from '../img/goodtimes-small.png';


const OurWork = () => {
	return (
		<Work>
			<Movie>
				<h2>Athlete</h2>
				<div className="line"></div>
				<Link to="/work/the-athlete">
					<img src={athlete} alt="athlete"/>
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

const Work = styled.div`
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
		background: #ccc;
		margin-bottom: 3rem;
	}

	img{
		width: 100%;
		height: 70vh;
		object-fit: cover;
	}

`;

export default OurWork;
