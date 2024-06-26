import React from 'react';
import Footer from './Footer';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';

export default function Contact() {
  const { register, handleSubmit ,reset } = useForm();

  const makeContact = async (data) =>{
    
    try {
      const response = await fetch(`${process.env.REACT_APP_BASE_URL}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        
        const errorData = await response.json();
        console.error(' error:', errorData); // Add this line for debugging
        toast.error(errorData.message, { position: toast.POSITION.BOTTOM_RIGHT });
        return;
      }
  
      // Conatact successful
      const successData = await response.json();
      console.log('Conatact Successful success:', successData); // Add this line for debugging
      toast.success(successData.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      setTimeout(() => {
        reset();
      }, 1000);
    
      
  
      
    } catch (error) {
      console.error('Error during making a conatact', error);
      // Show an error toast
      toast.error('Couldnot make Conatact. Please try again.', {
        position: toast.POSITION.TOP_RIGHT,
      });
    }

  }
  return (
    <div className='mt-[44px]'>
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg font-anotherFont">
          <h2 className="text-3xl font-semibold mb-6 text-center">Send us a message</h2>
          <form className="space-y-4"
           onSubmit={handleSubmit(makeContact)}
          >
            <div>
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-1">Name</label>
              <input type="text" id="name" placeholder="Enter Your Name" 
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none
               focus:border-blue-500 transition duration-500" 
               {...register('name')}
               />
             
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-1">Email</label>
              <input type="email" id="email" placeholder="Enter Your Email" 
              className="w-full px-4 py-2 border border-gray-300 rounded-md 
              focus:outline-none focus:border-blue-500 transition duration-500" 
              {...register('email')}
              />
              
            </div>

            <div>
              <label htmlFor="phone" className="block text-gray-700 font-semibold mb-1">Phone Number</label>
              <input type="text" id="phone" placeholder="Enter Your Phone Number" 
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none
               focus:border-blue-500 transition duration-500" 
               {...register('phone')}
               />
              
            </div>

            <div>
              <label htmlFor="subject" className="block text-gray-700 font-semibold mb-1">Subject</label>
              <input type="text" id="subject" placeholder="Write Subject" 
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none
               focus:border-blue-500 transition duration-500" 
               {...register('subject')}
               />
             
            </div>

            <div>
              <label htmlFor="msg" className="block text-gray-700 font-semibold mb-1">Message</label>
              <textarea id="msg" rows="4" 
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none
               focus:border-blue-500 transition duration-500"
               {...register('msg')}
               ></textarea>
              
            </div>

            <button type="submit" className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition duration-500">
                Submit
            </button>
          </form>
        </div>
      </div>
      <div>
        <Footer/>
      </div>
      <ToastContainer />
    </div>
  );
}
