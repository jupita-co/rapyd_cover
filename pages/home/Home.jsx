import React from "react";
import Nav from "../../components/nav/Nav";
//import Link from "next/link";
import Image from "next/image";
import style from "./Home.module.scss";
import Google from "./images/google.svg";
import AppStore from "./images/appstore.svg";
import Spanner from "./images/spanner.png";
import Google2 from "./images/google2.svg";
import Apple2 from "./images/apple2.svg";
import Services from "./images/services.svg";
import Areas from "./images/areas.svg";
import About from "./images/about.png";
import Google3 from "./images/google3.svg";
import Apple3 from "./images/apple3.svg";
import Mech from "./images/mech.png";
import UserApp from "./images/userapp.png";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <>
      <Nav />
      <section className={style.hero}>
        <div className={style.heroContent}>
          <div className={style.coverBx}>
            <div className={style.coverBxTxt}>
              <h2>Get your car covered from breakdown</h2>
              <p>
                Rapyd Breakdown Cover, covers you for day to day repairs if your
                car breaks down while you&apos;re out and about.
              </p>
            </div>
            <div className={style.coverBxBtns}>
              <Image src={Google} alt="Get it on google play" />
              <Image src={AppStore} alt="Get it on the app store" />
            </div>
          </div>{" "}
        </div>
        <div className={style.business}>
          <Image src={Spanner} alt="sign up to be a mechanic" />
          <div className={style.businessContent}>
            <div className={style.businessTxt}>
              <h2>Rapyd Cover for Business</h2>
              <p>
                Transform the way your company maintains and fixes their cars.
                Our end-to-end car breakdown service takes care of everything so
                you can focus on your business.
              </p>

              <button>Sign up to be a Rapyd Mechanic</button>
            </div>
          </div>
        </div>
      </section>

      <section className={style.protected}>
        <div className={style.protectedContent}>
          <h2>Your Car is Protected</h2>
          <p>
            We just concentrate on providing a good value breakdown service at a
            good value price. Oh… we&apos;re award winning too. And regularly
            receive positive feedback. Normally we wouldn&apos;t brag about
            doing what&apos;s expected of us, but we&apos;re really proud when
            it comes to customer satisfaction. So you can be sure your car is
            getting serviced by hand picked automotive technicians.
          </p>
          <div className={style.pBtns}>
            <Image src={Google2} alt="Get it on google play" />
            <Image src={Apple2} alt="Get it on the app store" />
          </div>
        </div>
      </section>
      <div className={style.spacer} id="services"></div>
      <section className={style.care}>
        <div className={style.careContent}>
          <h2>Focus on driving, we take care of your car</h2>
          <div className={style.careBoxes}>
            <div className={style.careBox}>
              <Image src={Services} alt="services provided" />
              <h3>Services Provided</h3>
              <p>
                Whether you&apos;re wondering why your car is not starting or
                keeps jerking; or whether your car fault can be dealt with, here
                is a list of common car faults our partner mechanics can fix.
                This list is not exhaustive, however these are the common ones.
              </p>
            </div>
            <div className={style.careBox}>
              <Image src={Areas} alt="areas covered" />
              <h3>Areas Covered</h3>
              <p>
                Get your car fixed at any of our 1000+ service points across -
                Abuja, Lagos, Port Harcourt, Enugu. Don&apos;t live in any of
                these cities? Not to worry, we are constantly expanding our
                reach and will be in you city soon.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className={style.spacer} id="about"></div>
      <section className={style.about}>
        <div className={style.aboutContent}>
          <div className={style.aboutLeft}>
            <Image src={About} alt="about us" />
          </div>
          <div className={style.aboutRight}>
            <div className={style.aboutTxt}>
              <h2>About us</h2>
              <p>
                It doesn&apos;t matter where, when or why… if you&apos;ve broken
                down, you&apos;re stranded. Fortunately, Rapyd Breakdown Cover
                operates a smart network of garages and rescue specialists to
                help get you moving again - no matter what. We are all about
                providing drivers complete peace of mind and have consistently
                been at the forefront of developing motoring services; and day
                to day breakdown cover has always been our number one priority.
                We are the only day to day break down cover service in Africa!.
                Our purpose? To take customers from confusion to clarity.
                Let&apos;s face it, finding the right garage to fix your car can
                be a bit of a chore. And with all the choice and options, you
                don&apos;t want to use up your time only to find out you may
                have done it wrong later. Let&apos;s be the backup your car
                needs, because everything you car care about is riding on our
                repair.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={style.explore}>
        <div className={style.exploreContent}>
          <div className={style.exTitle}>
            <h2>Explore more on our apps</h2>
          </div>
          <div className={style.exploreBox}>
            <div className={style.exImg}>
              <Image src={Mech} alt="download a mechanic app" />
            </div>

            <h3>Download the Mechanic app</h3>
            <div className={style.exBtns}>
              <Image src={Google3} alt="Get it on google play" />
              <Image src={Apple3} alt="Get it on the app store" />
            </div>
          </div>
          <div className={style.exploreBox}>
            <div className={style.exImg}>
              <Image src={UserApp} alt="download user app" />
            </div>
            <h3>Download the User app</h3>
            <div className={style.exBtns}>
              <Image src={Google3} alt="Get it on google play" />
              <Image src={Apple3} alt="Get it on the app store" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default Home;
