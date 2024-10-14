import Link from "next/link";
import style from "./style.module.css"

const Navbar = () => {
  return (
    <nav className={style.nav}  >        
      <ul className={style.ul}>
        <li>
          <Link href={"/"}>Home </Link>
        </li>
        <li>
          <Link href={"/About"}>About </Link>
        </li>
        <li>
          <Link href={"/Contact"}>Contact </Link>
        </li>
        <li>
          <Link href={"/Services"}>Services </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
