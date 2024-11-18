// import NavBar from "./component/Navbar";
import Heroes from "./component/Heroes";
import CourseDetail from "./component/CourseDetail";
import CourseSequence from "./component/Sequence&Advance";
// import Footer from "./component/Footer";
import Link from "next/link";



export default function Home() {
  return (
    <>
    {/* <NavBar/> */}
    <Heroes/>
    <CourseDetail/>
    <CourseSequence/>
    {/* <Footer/> */}
    </>
  );
}