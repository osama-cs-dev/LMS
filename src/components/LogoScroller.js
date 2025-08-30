
import "./LogoScroller.css";

const logos = [
  { src: "/logos/logo1.png", alt: "Logo 1", className: "logo-image" },
  { src: "/logos/logo2.png", alt: "Logo 2", className: "logo-image" },
  { src: "/logos/logo3.png", alt: "Logo 3", className: "logo-image" },
  { src: "/logos/logo4.png", alt: "Logo 4", className: "logo-image" },
  { src: "/logos/logo5.png", alt: "Logo 5", className: "logo-image" },
];

const LogoScroller = () => {
  return (
    <section className="trusted-logos-section py-5">
      <div className="container text-center">
        <div
          className="mb-4 px-4 py-2 mx-auto"
          style={{
            backgroundColor: "#e9fff3",
            display: "inline-block",
            borderRadius: "40px",
          }}
        >
          <h2 className="text-success m-0 fw-bold">
            Trusted Company Around The World!
          </h2>
        </div>

        <div className="logo-slider mt-4">
          <div className="logo-track d-flex">
          
            {logos.concat(logos).map((logo, index) => (
              <div className="logo-slide mx-4" key={index}>
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="logo-img" 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoScroller;
