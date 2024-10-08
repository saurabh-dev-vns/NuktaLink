import React, { useState } from "react";
import BASE_URL from "../../utils/BaseURl"; // Correct the file path if necessary
import axios from "axios";
import SuccessToast from "../Toast-msg/SuccessTost";


const FormCard = () => {
  const [originalURL, setOriginalURL] = useState('');

  const handleUrlSubmit = async (e) => {
    e.preventDefault(); 

    const formData = {
      originalUrl: originalURL 
    };

    try {
      const response = await axios.post(`${BASE_URL}/api/shorten`, formData);
      setOriginalURL("");
      SuccessToast();
    } catch (error) {
      console.error({ "msg": "Unable to submit form", error });
      // toast.error("Unable to generate link.")
    }
  };

  return (
    <>
      <div className="w-full max-w-lg flex justify-center p-4 bg-white border border-gray-200 
      rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form
          className="space-y-6 w-full"
          onSubmit={handleUrlSubmit}
        >
          <h3 className="text-2xl font-medium text-gray-900 dark:text-white">
            Shorten a long link
          </h3>
          <div>
            <label className="pb-2" htmlFor="url">Paste your long link here</label>
            <input
              type="url"
              name="url"
              id="url"
              value={originalURL} // Use camelCase for state variable
              onChange={(e) => setOriginalURL(e.target.value)}
              className="bg-gray-50 border border-gray-300 
              text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
              dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="https://nuktalink.com"
              required
            />
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default FormCard;
