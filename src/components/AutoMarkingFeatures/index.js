// AutoMarkingFeatures.js
import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

function AutoMarkingFeatures() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    jobTitle: '',
    company: '',
    email: '',
    phone: '',
    howDidYouHear: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className={styles.card}>
      <h2>Schedule a Demo</h2>
      <p>Fill in the details below to schedule a demo of our AutoMarking software:</p>

      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="First Name *"
            maxLength="255"
            aria-labelledby="LblFirstName InstructFirstName"
            className={clsx(styles.inputField, styles.required)}
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Last Name *"
            maxLength="255"
            aria-labelledby="LblLastName InstructLastName"
            className={clsx(styles.inputField, styles.required)}
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <input
            type="text"
            id="jobTitle"
            name="jobTitle"
            placeholder="Job Title *"
            maxLength="255"
            aria-labelledby="LblLastName InstructLastName"
            className={clsx(styles.inputField, styles.required)}
            value={formData.jobTitle}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <input
            type="text"
            id="company"
            name="company"
            placeholder="Company *"
            maxLength="255"
            aria-labelledby="LblLastName InstructLastName"
            className={clsx(styles.inputField, styles.required)}
            value={formData.company}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Email *"
            maxLength="255"
            aria-labelledby="LblLastName InstructLastName"
            className={clsx(styles.inputField, styles.required)}
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="Phone Number *"
            maxLength="255"
            aria-labelledby="LblLastName InstructLastName"
            className={clsx(styles.inputField, styles.required)}
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <input
            type="text"
            id="howDidYouHear"
            name="howDidYouHear"
            placeholder="How did you hear about us? *"
            maxLength="255"
            aria-labelledby="LblLastName InstructLastName"
            className={clsx(styles.inputField, styles.required)}
            value={formData.howDidYouHear}
            onChange={handleInputChange}
            required
          />
        </div>
        {/* Add more input fields for job title, company, email, phone, howDidYouHear */}
        <button type="submit" className={styles.demoButton}>
          Schedule a Demo
        </button>
      </form>
    </div>
  );
}

export default AutoMarkingFeatures;
