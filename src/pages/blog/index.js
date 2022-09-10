import Header from ".././header"
import Footer from ".././footer"
import Link from 'next/link'

export default function Blog(){
    return (
        <section id = "blog" className="bg-light">
            <Header/>
            <div className="text-center">
                <p className="h1 mt-3">Sri's Blog</p>
                <hr/>
            </div>
            <div className="text-center lead mt-4 mr-4 ml-4">
                <p>I started this blog in order to help organize all my thoughts and work and also in the hope that interested people could drop by, read a few of my blog posts and maybe learn some things or even drop suggestions as to potential improvements I could make as I proceed in my never-ending journey of computer science and data science. I also decided to add a food category to my blog and experience as many different cuisines of the world as I can and share my experiences with them.</p>
                <p>I would definitely appreciate it if you could interact with my blog posts by either</p>
                <li>Liking the article</li>
                <li>Commenting under the article.</li>
                <li>Sharing the article with your friends.</li>
                <li><Link href = "../contact-me">Contacting me with any further questions you may have.</Link></li>
                <p className="mt-4">Please check out my posts below. Enjoy!</p>
            </div>
            <div class="dropdown text-center mt-3 mb-3">
                <button class="btn btn-dark btn-lg dropdown-toggle" type="button" data-toggle="dropdown">Categories
                <span class="caret"></span></button>
                <ul class="dropdown-menu">
                    <li><a href="/blog/food" className="h3">School</a></li>
                    <li><a href="/blog/personalprojects" className="h3">Personal Projects</a></li>
                    <li><a href="/blog/food" className="h3">Food</a></li>
                </ul>
            </div>
            <Footer/>
        </section>
    )
}