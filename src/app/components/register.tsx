"use client"
import { useForm, ValidationError } from '@formspree/react'; 
import { useEffect, useState } from 'react';


export default function Register() {
  const apiKey = process.env.FORMSPREE_API_KEY;

  const [state, handleSubmit] = useForm("xldlbwrb");
  const [formSuccess, setFormSuccess] = useState(false);

  useEffect(() => {
    if (state.succeeded) {
      setFormSuccess(true);
      const timer = setTimeout(() => setFormSuccess(false), 5000); // revert back after 5s
      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  if (formSuccess) {
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
  return (
    <section id="register" className="py-12 overflow-hidden px-4 text-center dark:bg-gray-900 ">
  <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Register Your Interest</h2>
  <form action={handleSubmit} className="lg:w-3xl  mx-auto bg-white p-6 rounded-lg shadow flex flex-col lg:flex-row lg:gap-6 text-start dark:bg-gray-900">
    <div className="lg:w-1/2">
    <div >
    <label htmlFor="firstname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Firstname</label>
    <input type="text" name="firstname" id="firstname" placeholder="Full Name" required className="w-full mb-4 p-2 border rounded bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
    <ValidationError prefix='firstname' field='firstname' errors={state.errors}></ValidationError>
    </div>

    <div >
    <label htmlFor="lastname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Lastname</label>
    <input type="text" name="lastname" id="lastname" placeholder="LastName" required className="w-full mb-4 p-2 border rounded bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
    <ValidationError prefix='lastname' field='lastname' errors={state.errors}></ValidationError>
    </div>
    
    <div>
      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
      <input name="email" type="email" placeholder="Email" required className="w-full mb-4 p-2 border rounded bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
      <ValidationError prefix='email' field='email' errors={state.errors}></ValidationError>
    </div>
    <div>
      <label htmlFor="number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Telephone</label>
      <input  name='number' type="tel" placeholder="Phone Number" className="w-full mb-4 p-2 border rounded bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
      <ValidationError field='number' prefix='number' errors={state.errors}></ValidationError>
    </div>
   
    <div>
    <label htmlFor="contactmethod" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Preferred Contact Method</label>
    <select name='contactmethod'  className="w-full mb-4 p-2 border rounded bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
      <option value="">Select Method</option>
      <option value="email">Email</option>
      <option value="whatsapp">WhatsApp</option>
      <option value="phone">Phone Call</option>
    </select>
    </div>
    
    <div>
    <label htmlFor="Examtype" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Exam Level</label>
    <select name='Examtype' className="w-full mb-4 p-2 border rounded bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
      <option value="">Select Type</option>
      <option value="waec">WAEC</option>
      <option value="igcse">IGCSE</option>
      <option value="gcse-aqa">GCSE (AQA)</option>
      <option value="gcse-ocr">GCSE (OCR)</option>
    </select>
    </div>
    
    </div>
    
   <div className="lg:w-1/2">

   <div>
       <label htmlFor="course" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Course</label>
       <input name='course' type="text" placeholder="Course (e.g. ICT or Computer Science)" className="w-full mb-4 p-2 border rounded bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
   </div>

  <div>
   <label htmlFor="goals" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Details</label>
   <textarea name='goals' placeholder="Any specific goals or needs?" className="w-full mb-4 p-2 border rounded h-24 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"></textarea>
  </div>
    

    <button type="submit" className="w-full bg-red-600 text-white py-2 rounded"> {state.submitting ? "Submitting..." : "Register"}</button>
   </div>
    
  </form>
</section>

  );
}

