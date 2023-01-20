import Header from "../header"
import Footer from "../footer"
import Link from 'next/link'

export default function Blog(){
    return (
        <section id = "blog" className="bg-light">
            <Header/>
            <div className="text-center">
                <p className="h1 mt-3">Sri's Course Reviews</p>
                <hr/>
            </div>
            <div className="text-center lead mt-4 mr-4 ml-4">
                <p>I created this set of course reviews with tips in order to help guide anyone who plans to take these courses</p>
                <p>Simply, click on whichever course you would like to find out more about.</p>
            </div>
            <div className="row">
                <div className="col-2"/>
                <div className="col-8">
                    <Link href='../course-reviews/cs61a'><p className="h2">CS 61A - Structure and Interpretation of Computer Programs</p></Link>
                    <br/>
                    <Link href='../course-reviews/eecs16a'><p className="h2">EECS 16A - Designing Information Devices and Systems I</p></Link>
                    <br/>
                    <Link href='../course-reviews/cs61b'><p className="h2">CS 61B - Data Structures</p></Link>
                    <br/>
                    <Link href='../course-reviews/eecs16b'><p className="h2">EECS 16B - Designing Information Devices and Systems II</p></Link>
                    <br/>
                    <Link href='../course-reviews/cs70'><p className="h2">CS 70 - Discrete Mathematics and Probability Theory</p></Link>
                    <br/>
                    <Link href='../course-reviews/eecs126'><p className="h2">EECS 126 - Probability and Random Processes</p></Link>
                    <br/>
                    <Link href='../course-reviews/cs61c'><p className="h2">CS 61C - Great Ideas in Computer Architecture</p></Link>
                    <br/>
                </div>
                <div className="col-2"/>
            </div>
            <Footer/>
        </section>
    )
}