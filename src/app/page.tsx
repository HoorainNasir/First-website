import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Home(){
  return(
    <div>
        <Navbar/>
          <main className="content">
            <div className="textContainer">
              <h1>
                <strong>Welcome</strong>
              </h1>
              <h1>  
                <strong>to my First Webpage</strong>
              </h1>
            </div> 

            <div className="imgContainer">
            <Image src="https://media.istockphoto.com/id/517373852/photo/homepage-domain-html-web-design-concept.jpg?s=612x612&w=0&k=20&c=aXCsN4Fvpqr4Ae4zFJQJDYNUaWMzvIk2mbwbm7yK8yA=" alt="welocome to homepage" width={500} height={300} className="bgPic"/>
            </div> 
          </main>
          <Footer/>
    </div>
  ); 
}