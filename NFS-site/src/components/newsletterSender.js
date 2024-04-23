import React, { useState } from 'react';
import axios from 'axios'; // You might need axios for making HTTP requests

const NewsletterForm = () => {
  const [email, setEmail] = useState('');

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Example API call for Sendinblue (replace with Mailchimp's API or form action as needed)
      const response = await axios.post('https://api.sendinblue.com/v3/contacts', {
        email: email,
        // Additional fields like listId might be required depending on the service
      }, {
        headers: {
          'Content-Type': 'application/json',
          'api-key': 'c8847a0342737ecc8c08bf7746adf579-us21',
        },
      });

      // Handle success (e.g., show confirmation message)
      console.log('Subscription successful:', response.data);
    } catch (error) {
      // Handle errors (e.g., show error message)
      console.error('Subscription error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={handleInputChange}
        placeholder="Enter your email"
      />
      <button type="submit">Subscribe</button>
    </form>
  );
};

export default NewsletterForm;
