import React from "react";
import style from "./Footer.module.scss";
import Image from "next/image";
import Link from "next/link";
import Logo from "./images/logo.svg";
import Tw from "./images/twitter.svg";
import In from "./images/linkedIn.svg";
import Fb from "./images/facebook.svg";
import Ig from "./images/ig.svg";

const Footer = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.left}>
            <Image src={Logo} alt="logo" />
          </div>

          <div className={style.right}>
            <div className={style.icons}>
              <Link href="https://twitter.com/rapydcars?s=11&t=0PkUIR9ilA8D797MYAn55A">
                <Image src={Tw} alt="twitter" />
              </Link>
              <Link href="https://www.linkedin.com/company/rapydcars/">
                <Image src={In} alt="linkedIn" />
              </Link>
              <Link href="https://www.facebook.com/rapydcarsng/?_rdc=1&_rdr">
                <Image src={Fb} alt="facebook" />
              </Link>
              <Link href="https://www.instagram.com/rapydcars/?igshid=NDRkN2NkYzU%3D">
                <Image src={Ig} alt="instagram" />
              </Link>
            </div>
            <div className={style.links}>
              <div className={style.linksTop}>
                <Link href="#about" />
                <p>About us</p>

                <Link href="#services">
                  <p>Services</p>
                </Link>
                <Link href="#services">
                  {" "}
                  <p>Locations</p>
                </Link>
                {/* <Link href="">
                  <p>FAQs</p>
                </Link> */}
              </div>
              <div className={style.linksBody}>
                <Link href="/privacyPolicy">
                  <p>Privacy Policy</p>
                </Link>
                <p>Terms of service</p>
              </div>
            </div>
          </div>

          <div className={style.rightM}>
            <div className={style.linksM}>
              <div className={style.linksTopM}>
                <Link href="#about" />
                <p>About us</p>

                <Link href="#services">
                  <p>Services</p>
                </Link>
                <Link href="#services">
                  {" "}
                  <p>Locations</p>
                </Link>
                {/* <Link href="">
                  <p>FAQs</p>
                </Link> */}
              </div>
            </div>
            <div className={style.iconsM}>
              <Link href="https://twitter.com/rapydcars?s=11&t=0PkUIR9ilA8D797MYAn55A">
                <Image src={Tw} alt="twitter" />
              </Link>
              <Link href="https://www.linkedin.com/company/rapydcars/">
                <Image src={In} alt="linkedIn" />
              </Link>
              <Link href="https://www.facebook.com/rapydcarsng/?_rdc=1&_rdr">
                <Image src={Fb} alt="facebook" />
              </Link>
              <Link href="https://www.instagram.com/rapydcars/?igshid=NDRkN2NkYzU%3D">
                <Image src={Ig} alt="instagram" />
              </Link>
            </div>
            <div className={style.linksBodyM}>
              <Link href="/privacyPolicy">
                <p>Privacy Policy</p>
              </Link>
              <p>Terms of service</p>
            </div>
          </div>
        </div>
        <div className={style.copyright}>
          <p>&copy;2023 Rapyd</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
