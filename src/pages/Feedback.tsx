import { useState } from "react";

const Feedback = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Feedback Submitted", { name, email, message });
    setName("");
    setEmail("");
    setMessage("");
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
    </section>
  );
};

export default Feedback;