import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar">
      <ul className="navbar-button">
        <Link href={"./"}>Home</Link>
        <Link href={"./about"}><li>About</li></Link>
        <Link href={"./contact-us"}>Contact us</Link>
      </ul>
    </div>
  );
}
