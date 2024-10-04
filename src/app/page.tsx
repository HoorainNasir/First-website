import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

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
            <img src="https://media.istockphoto.com/id/517373852/photo/homepage-domain-html-web-design-concept.jpg?s=612x612&w=0&k=20&c=aXCsN4Fvpqr4Ae4zFJQJDYNUaWMzvIk2mbwbm7yK8yA=" className="bgPic"></img>
            </div> 
          </main>
          <Footer/>
    </div>
  ); 
}