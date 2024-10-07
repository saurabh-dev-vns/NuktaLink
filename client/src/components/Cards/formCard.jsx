import React, { useState } from "react";

const FormCard = () => {
  const [OriginalURL, setOriginalURL] = useState('');

  const handleUrlSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/shorten`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ originalUrl: OriginalURL })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log({ "msg": "Unable to submit form", error });
    }
  }

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
              value={OriginalURL}
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
