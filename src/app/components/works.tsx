import Image from "next/image";
import live from "../../../public/online.jpg"
import flexible from "../../../public/flexI.jpg"
import study from "../../../public/noteIII.jpg"
import progress from "../../../public/ProgressII.jpg"

export default function Works() {
  return (
   <section className="py-12 px-4 overflow-hidden bg-gray-50 text-center">
  <h2 className="text-2xl font-bold mb-8">How Our Online Classes Work</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto ">
    <div className="bg-white rounded-2xl shadow hover:shadow-lg transition duration-300 overflow-hidden">
      <div className=" h-52 bg-gray-200 flex items-center justify-center text-gray-400 relative">
        <Image
          src={live}
          fill={true}
          alt="live sessions"
          objectFit="cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-2">Live Sessions</h3>
        <p className="text-sm text-gray-600">Weekly interactive classes with expert tutors.</p>
      </div>
    </div>
    <div className="bg-white rounded-2xl shadow hover:shadow-lg transition duration-300 overflow-hidden">
      <div className="h-52 bg-gray-200 flex items-center justify-center text-gray-400 relative">
        <Image 
        src={flexible}
        fill={true}
        alt="flexible learning"
        objectFit="cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-2">Flexible Learning</h3>
        <p className="text-sm text-gray-600">Access lessons anytime from home or on the go.</p>
      </div>
    </div>
    <div className="bg-white rounded-2xl shadow hover:shadow-lg transition duration-300 overflow-hidden">
      <div className="h-52 bg-gray-200 flex items-center justify-center text-gray-400 relative">
        <Image
        src={study}
        fill={true}
        alt="study materials"
        objectFit="cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-2">Study Materials</h3>
        <p className="text-sm text-gray-600">Downloadable notes, videos, and practice tasks.</p>
      </div>
    </div>
    <div className="bg-white rounded-2xl shadow hover:shadow-lg transition duration-300 overflow-hidden">
      <div className="h-52 bg-gray-200 flex items-center justify-center text-gray-400 relative">
        <Image
        src={progress}
        fill={true}
        alt="progress tracking"
        objectFit="cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-2">Progress Tracking</h3>
        <p className="text-sm text-gray-600">Regular assessments and feedback to measure growth.</p>
      </div>
    </div>
  </div>
</section>

  );
}
