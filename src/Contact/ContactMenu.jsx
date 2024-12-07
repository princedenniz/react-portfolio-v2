import React from "react";
import { useForm } from "react-hook-form";
import "../styles/contact.css";

export default function ContactMenu() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="contact-menu">
      <form
        onSubmit={handleSubmit(onSubmit)}
        method="POST"
        action="https://formsubmit.co/dennisprince815@gmail.com"
      >
        {/* Name Field */}
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            {...register("name", {
              required: "Name is required",
              maxLength: {
                value: 100,
                message: "Name cannot exceed 100 characters",
              },
            })}
          />
          {errors.name && (
            <div className="error-message">{errors.name.message}</div>
          )}
        </div>

        {/* Email Field */}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email format",
              },
            })}
          />
          {errors.email && (
            <div className="error-message">{errors.email.message}</div>
          )}
        </div>

        {/* Message Field */}
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter your message"
            {...register("message", {
              required: "Message is required",
              maxLength: {
                value: 2000,
                message: "Message cannot exceed 2000 characters",
              },
            })}
          />
          {errors.message && (
            <div className="error-message">{errors.message.message}</div>
          )}
        </div>

        {/* Submit Button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
