import Image from "next/image";
import pastPapers from "../../../public/examsimg/onlineclass.jpg"
import mockTest from "../../../public/examsimg/mocktest.jpg"
import complex from "../../../public/examsimg/complex.png"
import support from "../../../public/examsimg/support.png"
export default function Exams() {
  return (
<section className="py-12 px-4 overflow-hidden bg-gray-100 text-center ">
  <h2 className="text-2xl font-bold mb-8">Our Exam Strategy</h2>
  <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-24 max-w-full lg:h-100 lg:mx-20">
   <div className=" max-w-sm lg:w-80 lg:h-full bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
     <div className="w-full h-40 lg:w-full lg:h-48 relative">
        <Image 
        className="rounded-t-lg" 
        src={pastPapers}
        fill={true}
        objectFit="cover"
        alt="" />
     </div>
      <div className=" pt-10 px-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Past Papers</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">We provide access to a wide range of past exam questions for practice and familiarization.</p>
      </div>  
    </div>


<div className="max-w-sm lg:w-80 lg:h-full bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
    <div className="w-full h-40 lg:w-full lg:h-48 relative">
        <Image 
        className="rounded-t-lg" 
        src={mockTest}
        fill={true}
        objectFit="cover"
        alt="" />
     </div>
      <div className="pt-10 px-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Mock Tests</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Timed mock exams simulate real conditions and build confidence.</p>
      </div>  
    </div>

    <div className="max-w-sm lg:w-80 lg:h-full bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <div className="w-full h-40 lg:w-full lg:h-48 relative">
        <Image 
        className="rounded-t-lg" 
        src={complex}
        fill={true}
        objectFit="cover"
        alt="" />
     </div>
      <div className="pt-10 px-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Concept Breakdowns</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">We simplify complex topics into easy-to-understand lessons tailored to each exam board.</p>
      </div>  
    </div>

    <div className="max-w-sm lg:w-80 lg:h-full bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
     <div className="w-full h-40 lg:w-full lg:h-48 relative">
       <Image 
        className="rounded-t-lg" 
        src={support}
        fill={true}
        objectFit="cover"
        alt="" />
     </div>
      <div className="pt-10 px-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">1-on-1 Support</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Personalized tutoring and mentoring to address each student&apos;s unique challenges and goals.</p>
      </div>  
    </div>

  </div>
</section>

  );
}




