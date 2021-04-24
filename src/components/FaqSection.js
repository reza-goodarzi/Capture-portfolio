import { useState } from 'react';
import styled from 'styled-components';
import { About } from '../styles'
import Toggle from './Toggle';
import { AnimateSharedLayout } from 'framer-motion';

const FaqSection = () => {
	const [faqToggle, setFaqToggle] = useState(false);
	return (
		<Faq>
			<h2>Any Questions <span>FAQ</span></h2>
			<AnimateSharedLayout  >
				<Toggle title='How DO I Start?'>
					<div className="answer">
						<p>Lorem ipsum dolor sit amet.</p>
						<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, impedit architecto? Harum voluptates ratione dignissimos laboriosam accusamus cum </p>
					</div>
				</Toggle>

				<Toggle title={'Daily Schedule'}>
					<div className="answer">
						<p>Lorem ipsum dolor sit amet.</p>
						<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, error.</p>
					</div>
				</Toggle>

				<Toggle title="Different Payment Method">
					<div className="answer">
						<p>Lorem ipsum dolor sit amet.</p>
						<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, error.</p>
					</div>
				</Toggle>

				<Toggle title='What Product Do You Offer?'>
					<h4></h4>
					<div className="answer">
						<p>Lorem ipsum dolor sit amet.</p>
						<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, error.</p>
					</div>
				</Toggle>
			</AnimateSharedLayout>

		</Faq >
	)
};

const Faq = styled(About)`
	display: block;

	span{
		display: block;
	}

	h2{
		padding-bottom: 2rem;
		font-weight: lighter;
	}
	.faq-line{
		background: #ccc;
		height: .2rem;
		margin: 2rem 0;
		width: 100%;
	}

	.question{
		padding: 3rem 0;
		cursor: pointer;
	}

	.answer{
		padding: 2rem 0;

		p{
			padding: 1rem 0;
		}
	}
`

export default FaqSection;
