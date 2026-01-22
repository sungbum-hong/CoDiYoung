export default function BannerSlider({ banners }) {
    // if (!banners || banners.length === 0) return null;

    return (
        <div>
                 
                        <img
                            src={banners}
                            alt="메인 배너"
                            className="w-full h-56 sm:h-64 md:h-80 lg:h-96 object-cover"
                            loading="eager"
                        />
        </div>
            
    );
}
