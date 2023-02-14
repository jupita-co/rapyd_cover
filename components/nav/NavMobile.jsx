import { useEffect, useRef, useState } from "react";
import { gsap, Power3, Expo } from "gsap";
import style from "./Nav.module.scss";
import Image from "next/image";
import Link from "next/link";
import Logo from "./assets/logosm.svg";
import Logo2 from "./assets/logo2.svg";

const NavMobile = () => {
  const menu = useRef();
  const link1 = useRef();
  const link2 = useRef();
  const link3 = useRef();

  const menuBtns = useRef();
  const openMenu = useRef();
  const logo2 = useRef();
  //const closeMenu = useRef();

  const handleToggle = () => {
    //setTimeout(() => {
    openMenu.current.classList.toggle("active");
    //}, 1000);
  };

  useEffect(() => {
    //setIsLoading(false);
    const menuItems = document.querySelectorAll(".mLinks > li");
    const t1 = gsap.timeline();
    t1.to(menu.current, 1, {
      right: 0,
      ease: Power3.easeInOut,
    });
    // t1.staggerTo(
    //   logo2.current,
    //   0.4,
    //   { y: 100, opacity: 1, ease: Expo.easeOut },
    //   "0.1",
    //   "-=0.2"
    // );
    t1.staggerTo(
      menuItems,
      0.6,
      { x: -60, opacity: 1, ease: Expo.easeOut },
      "0.1",
      "-=0.2"
    );
    t1.staggerTo(
      menuBtns.current,
      0.2,
      { y: -120, opacity: 1, ease: Expo.easeOut },
      "0.1",
      "-=0.2"
    );

    t1.reverse();
    openMenu.current.onclick = function () {
      t1.reversed(!t1.reversed());
    };
    link1.current.onclick = function () {
      t1.reversed(!t1.reversed());
    };
    link2.current.onclick = function () {
      t1.reversed(!t1.reversed());
    };
    link3.current.onclick = function () {
      t1.reversed(!t1.reversed());
    };

    menuBtns.current.onclick = function () {
      t1.reversed(!t1.reversed());
    };

    // closeMenu.current.onclick = function () {
    //   t1.reversed(!t1.reversed());
    // };

    //}
  }, [menu]);
  return (
    <>
      <div className={style.containerM}>
        <div className={style.contentM}>
          <Link href="/" className={style.logoBoxM}>
            <Image src={Logo} alt="logo" />
            {/* <h1>Jupita</h1> */}
          </Link>
          <div className={style.hamBox}>
            <svg
              className="ham hamRotate ham4 menu-open"
              viewBox="0 0 100 100"
              width="45"
              id="ham04_2"
              ref={openMenu}
              onClick={handleToggle}
            >
              <path
                className="hline top"
                d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20"
              />
              <path className="hline middle" d="m 70,50 h -40" />
              <path
                className="hline bottom"
                d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20"
              />
            </svg>
          </div>
        </div>
        <div className={style.navMenu} ref={menu}>
          {/* <div className={style.logoM2}>
            <Image src={Logo} alt="logo" />
          </div> */}
          <div className={style.menuContent}>
            <ul className={`${style.menuLinks} mLinks`}>
              <li className={style.mLink} ref={link1} onClick={handleToggle}>
                <Link href="/crashCourse">About us </Link>
              </li>
              <li className={style.mLink} ref={link2} onClick={handleToggle}>
                <Link href="/services">Services</Link>
              </li>
              <li className={style.mLink} ref={link3} onClick={handleToggle}>
                <Link href="/aboutUs">Locations </Link>
              </li>
            </ul>
            <div className={style.menuBtns} ref={menuBtns}>
              <Link href="/crashCourse">
                <button>Download App</button>{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavMobile;
