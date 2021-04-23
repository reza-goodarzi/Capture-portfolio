import home1 from '../img/home1.png';
// Styled
import { About, Description, Hide, Image } from '../styles';

const AboutSection = () => {
	return (
		<About>
			<Description>
				<div className="title">
					<Hide className="hide">
						<h2>We work to make</h2>
					</Hide>
					<Hide className="hide">
						<h2>your <span>dream</span> come</h2>
					</Hide>
					<Hide className="hide">
						<h2>true</h2>
					</Hide>
				</div>
				<p>Contact us for any photography or videography ideas that you have. we have professionals with amazing skills</p>
				<button>Contact us</button>
			</Description>
			<Image className="image">
				<img src={home1} alt="guy whit the camera"/>
			</Image>
		</About>
	)
};

export default AboutSection;
