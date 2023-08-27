import girl from "../assets/slider.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Slider = () => {
  const options = {
    margin: 30,
    responsiveClass: true,
    dots: false,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 2,
      },
      700: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  };
  return (
    <section>
      <div className="container mx-auto">
        <div className="py-[50px]">
          <OwlCarousel className="owl-carousel" {...options}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => (
              <div
                key={index}
                className="border-[1px] border-[#000] rounded-[15px]"
              >
                <img className="rounded-[15px]" src={girl} alt="Image" />
              </div>
            ))}
          </OwlCarousel>
        </div>
      </div>
    </section>
  );
};

export default Slider;
