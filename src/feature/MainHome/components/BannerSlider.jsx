import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';


export default function BannerSlider({ banners }) {
    if (!banners || banners.length === 0) return null;

    return (
        <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            loop={true}
            className="w-full rounded-lg overflow-hidden"
        >
            {banners.map((banner) => (
                <SwiperSlide key={banner.id}>
                    <a
                        href={banner.link || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block focus:outline-none"
                    >
                        <img
                            src={banner.imageUrl}
                            alt="메인 배너"
                            className="w-full h-56 sm:h-64 md:h-80 lg:h-96 object-cover"
                            loading="eager"
                        />
                    </a>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
