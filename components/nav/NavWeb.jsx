import style from "./Nav.module.scss";
import Image from "next/image";
import Link from "next/link";
import Logo from "./assets/logo.svg";

const NavWeb = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.content}>
          <Link href="/" className={style.left}>
            <Image src={Logo} alt="jupita" />
          </Link>

          <div className={style.middle}>
            <div className={style.links}>
              <Link href="/">
                <p>About us</p>
              </Link>
              <Link href="/">
                <p>Services</p>
              </Link>
              <Link href="/">
                <p>Locations</p>
              </Link>
              {/* <Link href="/aboutUs">
                <p>About us</p>
              </Link> */}
            </div>
          </div>
          <div className={style.right}>
            <a href="mailto:academy@jupita.co" target="_blank" rel="noreferrer">
              <button>Download App</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavWeb;
