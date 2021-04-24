import home1 from '../img/home1.png';
// Styled
import { About, Description, Hide, Image } from '../styles';

//Framer Emotion
import { motion } from 'framer-motion';

const AboutSection = () => {

	return (
		<About>
			<Description>
				<motion.div className="title" >
					<Hide className="hide">
						<motion.h2 >
							We work to make
						</motion.h2>
					</Hide>
					<Hide className="hide">
						<motion.h2 >
							your <span>dream</span> come
						</motion.h2>
					</Hide>
					<Hide className="hide">
						<motion.h2 >
							true
						</motion.h2>
					</Hide>
				</motion.div>
				<p>Contact us for any photography or videography ideas that you have. we have professionals with amazing skills</p>
				<button>Contact us</button>
			</Description>
			<Image className="image">
				<img src={home1} alt="guy whit the camera" />
			</Image>
		</About>
	)
};

export default AboutSection;
