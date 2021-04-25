import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollTop = () => {
	const {pathname} = useLocation();

	useEffect(() => {
		window.scroll({
			left: 0,
			top: 0,
		})
	}, [pathname])

	return null;
}
 
export default ScrollTop;