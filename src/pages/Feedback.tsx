import { useState } from "react";
import emailjs from "emailjs-com";

const Feedback = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [statusMessage, setStatusMessage] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      name: name,
      email: email,
      message: message,
    };

    // Send the email via EmailJS
    emailjs
      .send("your_service_id", "your_template_id", templateParams, "your_user_id")
      .then(
        (response) => {
          console.log("Feedback Submitted", response);
          setStatusMessage("Your feedback has been successfully submitted. Thank you!");
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.error("Error submitting feedback", error);
          setStatusMessage(
            "Feedback could not be submitted. Please try again later."
          );
        }
      );
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-12 text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Feedback</h1>
      <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
        We value your feedback! Please share your thoughts with us.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 max-w-3xl mx-auto">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg mb-4"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg mb-4"
          required
        />
        <textarea
          placeholder="Your Feedback"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg mb-4 h-32"
          required
        ></textarea>
        <button
          type="submit"
          className="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition"
        >
          Submit Feedback
        </button>
      </form>

      {/* Status message */}
      {statusMessage && (
        <p className={`mt-4 text-lg ${statusMessage.includes("success") ? "text-green-600" : "text-red-600"}`}>
          {statusMessage}
        </p>
      )}
    </section>
  );
};

export default Feedback;
