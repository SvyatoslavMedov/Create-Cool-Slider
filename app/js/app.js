import { Swiper} from 'swiper'
import { Parallax, Mousewheel} from 'swiper/modules'
Swiper.use([ Parallax, Mousewheel ])


document.addEventListener('DOMContentLoaded', () => {

	const swiperIMG = new Swiper('.slider-img',{
		loop: false,
		speed: 2400,
		parallax: true,
		mousewheel: {
			invert: false
		}
	})

})
