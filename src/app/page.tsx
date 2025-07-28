import Header from "./components/header";
import About from "./components/about";
import Courses from "./components/courses";
import Works from "./components/works";
import Exams from "./components/exams";
import Test from "./components/text";
import Register from "./components/register";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/K L A R E ACADEMY.png"
import { Instagram , Facebook , Twitter , Linkedin , Youtube} from 'lucide-react';


export default function Home() {
  return (
    <div className="h-screen w-screen overflow-x-hidden">
      <Header></Header>
      <About></About>
      <Courses></Courses>
      <Works></Works>
      <Exams></Exams>
      <Register></Register>

      <footer className="grid grid-rows-2 md:grid-cols-2 items-end  bg-red-600 text-white py-4 px-6 h-80 overflow-hidden">
        <div className="flex flex-col items-start justify-center">
          <div className="h-32 w-24 lg:h-40 lg:w-32 relative" >
            <Image 
               src = {logo}
               alt="logo"
               fill={true}
              objectFit="cover"
               />
        </div>
          <p>&copy; {new Date().getFullYear()} KLARE Academy. All rights reserved.</p>
        </div>
        <div className="flex flex-row items-center justify-start md:justify-end gap-6 ">
         <Link href=""><Linkedin className="w-6 h-6"/></Link> 
          <Link href="https://www.facebook.com/profile.php?id=61575758577220"><Facebook className="w-6 h-6"/></Link>
          <Link href=""><Twitter className="w-6 h-6"/></Link>
           <Link href="https://www.instagram.com/klareacademy?igsh=aDJ5a3c4MnBkdXNq&utm_source=qr"><Instagram className="w-6 h-6"/></Link>
           <Link href="https://www.youtube.com/@KLAREACADEMY"><Youtube className="w-10 h-10"/></Link>
        </div>
        
      </footer>
    </div>
  );
}
