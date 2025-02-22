import { useState } from "react";
import emailjs from "emailjs-com";

const Feedback = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [statusMessage, setStatusMessage] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const serviceID = "your_service_id";
    const templateID = "your_template_id";
    const userID = "your_user_id";
    const recipientEmail = "webappgraphicdev1@gmail.com"; // Static email

    const templateParams = {
      name: name,
      email: email,
      message: message,
      to_email: recipientEmail,
    };

    emailjs
      .send(serviceID, templateID, templateParams, userID)
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
          setStatusMessage("Feedback could not be submitted. Please try again later.");
        }
      );
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-12 text-center bg-[#587D71] text-white rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold mb-6">Feedback</h1>
      <p className="text-lg leading-relaxed max-w-3xl mx-auto text-gray-200">
        We value your feedback! Please share your thoughts with us.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 max-w-3xl mx-auto">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg mb-4 bg-white text-gray-800 focus:ring focus:ring-[#A2C5AC]"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg mb-4 bg-white text-gray-800 focus:ring focus:ring-[#A2C5AC]"
          required
        />
        <textarea
          placeholder="Your Feedback"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg mb-4 h-32 bg-white text-gray-800 focus:ring focus:ring-[#A2C5AC]"
          required
        ></textarea>
        <button
          type="submit"
          className="px-6 py-3 bg-[#A2C5AC] text-[#2C3A35] text-lg font-semibold rounded-lg hover:bg-[#87A696] transition cursor-pointer shadow-md"
        >
          Submit Feedback
        </button>
      </form>

      {/* Status message */}
      {statusMessage && (
        <p className={`mt-4 text-lg ${statusMessage.includes("success") ? "text-green-300" : "text-red-300"}`}>
          {statusMessage}
        </p>
      )}
    </section>
  );
};

export default Feedback;
