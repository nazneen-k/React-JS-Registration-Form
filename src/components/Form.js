import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
  });
  const [notification, setNotification] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) &&
      formData.phone.match(/^\d{10}$/)
    ) {
      console.log("Form submitted:", formData);
      setNotification("Form submitted!");
    } else {
      setNotification("Please enter valid email and phone number");
    }

    setTimeout(() => {
      setNotification("");
    }, 3000);
  };

  return (
    <div className="form-container">
      {notification && <p className="notification">{notification}</p>}
      <form onSubmit={handleSubmit}>
      <h1>Registration Form</h1>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          placeholder="First Name"
        />
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
          placeholder="Last Name"
        />
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          placeholder="Phone Number"
        />
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email"
        />
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          placeholder="Address"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
