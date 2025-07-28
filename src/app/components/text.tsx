"use client" 

export default function Test() {
 
  return (
        <div className="overflow-hidden py-32 dark:bg-gray-900 text-center  bg-white">
            <h2 className="text-2xl  font-bold mb-4 text-gray-900 dark:text-white">Register Your Interest</h2>
    <div className="h-full lg:w-3xl text-left sm:w-[80%] xs:w-[70%] mx-auto flex gap-8  items-center">
        <div className="flex flex-col h-[90%] gap-4 text-white dark:text-white p-4 rounded-lg border border-red-300 shadow-xl shadow-red-400/30">
            <h5 className="text-md text-red-600 dark:text-green-500 font-semibold">klare Academy</h5>
            <div className="w-full flex gap-2 items-center justify-around">
                <div className="text-5xl text-black dark:text-white  font-semibold uppercase font-serif">Thank You</div>
                <hr className="w-[50%] h-1 rounded-full border-t-red-500 bg-red-500" />
            </div>

            <p className="text-md text-black dark:text-white ">Thank you for registering with KLARE Academy!
                                    We sincerely appreciate your interest and trust in us. 
                                    Your registration has been received, 
                                    and a member of our team will reach out to you shortly with the next steps. 
                                    We’re excited to support your learning journey and help you reach your goals.
            </p>

            
        </div>
    </div>
</div>
      );
}

