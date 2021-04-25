import styled from 'styled-components';
import { motion } from 'framer-motion';

export const About = styled(motion.div)`
	min-height: 90vh;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 5rem 10rem;
	color: #fff;

	@media (max-width: 1100px){
		flex-direction: column;
		padding: 2rem;
		text-align: center;
	}
`

export const Description = styled.div`
	flex: 1;
	padding-right: 5rem;
	z-index: 2;
	
	h2{
		font-weight: lighter;
	}

	@media (max-width: 1100px){
		padding: 0;

		button{ 
			margin: 2rem 0	5rem;
		}
	}
`;

export const Image = styled.div`
	flex: 1;
	overflow: hidden;
	z-index: 2;

	img{
		width: 100%;
		height: 80vh;
		object-fit: cover;
	}
`

export const Hide = styled.div`
	overflow: hidden;
`