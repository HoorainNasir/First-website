import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function About(){
    return(
        <div>
            <Navbar/>
            <div className="content">
                <div className="imgContainer">
                    <img src="https://t3.ftcdn.net/jpg/07/06/10/62/360_F_706106273_azeLKRtE7CHga5JjHNfWAbgr4IkhEuwD.jpg" alt="profile picture" className="dp"></img>
                </div>
                <div className="textContainer">
                    <h1><strong>Hello, I'm Hoorain</strong></h1>
                    <p>An intermediate-level student at GIAIC, actively developing my skills in HTML, CSS, Artificial Intelligence, Web3, and the Metaverse. I am passionate about learning emerging technologies and exploring innovative opportunities in the tech field.</p>
                </div>
            </div>
            <Footer/>
        </div>
    );
}