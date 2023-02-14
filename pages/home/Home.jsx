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
    </>
  );
};
export default Home;
