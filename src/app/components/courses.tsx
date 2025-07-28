import Image from "next/image";
import waec from "../../../public/examsimg/waecpic.jpeg"
import aqa from "../../../public/examsimg/aqa.png"
import ocr from "../../../public/examsimg/ocr.jpeg"
import igcse from "../../../public/examsimg/igcse.jpeg"
export default function Courses() {
  return (
    <section className="py-12 px-4 bg-gray-100 text-center overflow-hidden dark:bg-gray-900">
  <h2 className="text-2xl font-bold mb-4 dark:text-white">Courses Offered</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-xl lg:max-w-5xl mx-auto">
    <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300 overflow-hidden">
      <div className="h-40 lg:h-36  bg-gray-200 mb-4 flex items-center justify-center text-gray-400 relative ">
        <Image
        src={waec}
        fill={true}
        alt="waec"
        objectFit="cover"
        />
      </div>
      <h3 className="text-xl font-semibold mb-2">WAEC</h3>
      <p className="text-sm text-gray-600">Covers ICT and Computer Studies with focus on national curriculum and past question drills.</p>
    </div>
    <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300 overflow-hidden">
      <div className="h-40 lg:h-36 bg-gray-200 mb-4 flex items-center justify-center relative text-gray-400">
        <Image
        src={igcse}
        fill={true}
        alt="igcse"
        objectFit="contain"
        />
        </div>
      <h3 className="text-xl font-semibold mb-2">IGCSE</h3>
      <p className="text-sm text-gray-600">Prepares students for Cambridge-style ICT exams with topic breakdowns and mock tests.</p>
    </div>
    <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300 overflow-hidden">
      <div className="h-40 lg:h-36 px-6 bg-gray-200 mb-4 flex items-center justify-center relative text-gray-400">
        <Image
        src={aqa}
        fill={true}
        alt="aqa"
        objectFit="cover"
        />
      </div>
      <h3 className="text-xl font-semibold mb-2">GCSE (AQA)</h3>
      <p className="text-sm text-gray-600">Focused lessons on AQA Computer Science with emphasis on algorithms, Python, and exam structure.</p>
    </div>
    <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300 overflow-hidden">
      <div className="h-40 lg:h-36 bg-gray-200 mb-4 flex items-center justify-center relative text-gray-400">
        <Image
        src={ocr}
        fill={true}
        alt="ocr"
        objectFit="cover"
        />
      </div>
      <h3 className="text-xl font-semibold mb-2">GCSE (OCR)</h3>
      <p className="text-sm text-gray-600">Targeted support for OCR Computer Science including pseudocode, logic gates, and practice tasks.</p>
    </div>
  </div>
</section>


  );
}




