import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { MovieState } from '../movieState';

// Animation
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';

const MovieDetail = () => {
	const history = useHistory();
	const url = history.location.pathname;
	const [movies] = useState(MovieState);
	const [movie, setMovie] = useState(null);

	// useEffect
	useEffect(() => {
		const currentMovie = movies.filter(stateMovie => (
			stateMovie.url === url
		));
		setMovie(...currentMovie);
	}, [movies, url]);

	return (
		<>
			{movie && (
				<Details variants={pageAnimation} initial='hidden' animate='show' exit='exit' >
					<HeadLine>
						<h2>{movie.title}</h2>
						<img src={movie.mainImg} alt="movie" />
					</HeadLine>
					<Awards>
						{movie.awards.map(award => (
							<Award
								key={award.title}
								title={award.title}
								description={award.description} />
						))}
					</Awards>
					<ImageDisplay>
						<img src={movie.secondaryImg} alt="secondaryImg"/>
					</ImageDisplay>
				</Details>
			)}
		</>
	)
};

const Details = styled(motion.div)`
	color: #fff;

`;

const HeadLine = styled.div`
	min-height: 90vh;
	padding-top: 20vh;
	position: relative;

	h2{
		position: absolute;
		top: 10%;
		left: 50%;
		transform: translate(-50%, -10%);
	}

	img{
		width: 100%;
		height: 70vh;
		object-fit: cover;
	}
`;

const Awards = styled.div`
	min-height: 80vh;
	display: flex;
	margin: 5rem 10rem;
	align-items: center;
	justify-content: space-around;
`;

const ImageDisplay = styled.div`
	min-height: 50vh;
	img{
		width: 100%;
		height: 100vh;
		object-fit: cover;
	}
`

export default MovieDetail;

//Award Component
const Award = ({ title, description }) => {
	return (
		<AwardStyle>
			<h3>{title}</h3>
			<div className="line"></div>
			<p>{description}</p>
		</AwardStyle>
	);
}

const AwardStyle = styled.div`
	padding: 5rem;
	h3{
		font-size: 1.6rem;
	}
	.line{
		width: 100%;
		background: #23d997;
		height: 0.5rem;
		margin: 1rem 0;
	}
	p{
		padding: 2rem 0;
	}
`;
