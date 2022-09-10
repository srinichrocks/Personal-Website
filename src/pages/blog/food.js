import Footer from "pages/footer";
import Header from "pages/header";

export default function Food(){
    return (
        <section id = "food">
            <Header/>
            <div className="row">
                <p className="h3">This is where the food blog posts go</p>
            </div>
            <Footer/>
        </section>
    )
}