import home1 from '../img/home1.png';
// Styled
import { About, Description, Hide, Image } from '../styles';

//Framer Emotion
import { motion } from 'framer-motion';
import { titleAnim, fade, photoAnim } from '../animation';

const AboutSection = () => {

	return (
		<About>
			<Description>
				<motion.div className="title" >
					<Hide className="hide">
						<motion.h2 variants={titleAnim} >
							We work to make
						</motion.h2>
					</Hide>
					<Hide className="hide">
						<motion.h2 variants={titleAnim} >
							your <span>dream</span> come
						</motion.h2>
					</Hide>
					<Hide className="hide">
						<motion.h2 variants={titleAnim} >
							true
						</motion.h2>
					</Hide>
				</motion.div>
				<motion.p variants={fade} >Contact us for any photography or videography ideas that you have. we have professionals with amazing skills</motion.p>
				<motion.button variants={fade} >Contact us</motion.button>
			</Description>
			<Image className="image">
				<motion.img variants={photoAnim} src={home1} alt="guy whit the camera" />
			</Image>
		</About>
	)
};

export default AboutSection;
