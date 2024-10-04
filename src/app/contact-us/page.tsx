import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Image from "next/image";

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
                    <Image src="https://transport.cambridgeshirepeterborough-ca.gov.uk/wp-content/uploads/2022/09/TW_Contact_Us.png" alt="contact us" width={500} height={300} className="bgPic"/>
                </div>
            </div>
            <footer className="foot">
                <Footer/>
            </footer>
        </div>
    );
}