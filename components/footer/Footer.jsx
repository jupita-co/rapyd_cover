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
              <Image src={Tw} alt="twitter" />
              <Image src={In} alt="linkedIn" />
              <Image src={Fb} alt="facebook" />
              <Image src={Ig} alt="instagram" />
            </div>
            <div className={style.links}>
              <div className={style.linksTop}>
                <Link href="" />
                <p>About us</p>

                <Link href="">
                  <p>Services</p>
                </Link>
                <Link href="">
                  {" "}
                  <p>Locations</p>
                </Link>
                <Link href="">
                  <p>FAQs</p>
                </Link>
              </div>
              <div className={style.linksBody}>
                <p>Privacy Policy</p>
                <p>Terms of service</p>
              </div>
            </div>
          </div>

          <div className={style.rightM}>
            <div className={style.linksM}>
              <div className={style.linksTopM}>
                <Link href="" />
                <p>About us</p>

                <Link href="">
                  <p>Services</p>
                </Link>
                <Link href="">
                  {" "}
                  <p>Locations</p>
                </Link>
                <Link href="">
                  <p>FAQs</p>
                </Link>
              </div>
            </div>
            <div className={style.iconsM}>
              <Image src={Tw} alt="twitter" />
              <Image src={In} alt="linkedIn" />
              <Image src={Fb} alt="facebook" />
              <Image src={Ig} alt="instagram" />
            </div>
            <div className={style.linksBodyM}>
              <p>Privacy Policy</p>
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
