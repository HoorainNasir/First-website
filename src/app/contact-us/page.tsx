import Footer from "@/components/footer";
import Navbar from "@/components/navbar"

export default function Contact(){
    return(
        <div>
            <Navbar/>
            <div className="content">
                <div className="textContainer">
                    <h1>Get in touch</h1>
                    <h1>& explore something new.</h1>
                    <ul className="links">
                        <li><a href="https://www.instagram.com/hoorain.nasir/">Instagram</a></li>
                        <li><a href="https://www.linkedin.com/in/hoorain-nasir-06834930b/">LinkedIn</a></li>
                        <li><a href="https://github.com/HoorainNasir">Github</a></li>
                    </ul>
                </div>

                <div className="imgContainer">
                    <img src="https://transport.cambridgeshirepeterborough-ca.gov.uk/wp-content/uploads/2022/09/TW_Contact_Us.png" className="bgPic"></img>
                </div>
            </div>
            <footer className="foot">
                <Footer/>
            </footer>
        </div>
    );
}