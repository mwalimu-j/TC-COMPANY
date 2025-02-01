import {
	FaFacebookF,
	FaInstagram,
	FaTwitter,
	FaTelegramPlane,
} from "react-icons/fa";

const Footer = () => {
	return (
		<footer className="bg-black text-white py-6 px-4 md:px-8 lg:px-16">
			<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
				{/* Important Links */}
				<div>
					<h2 className="text-lg font-semibold mb-2">Important Links</h2>
					<hr />
					<ul className="space-y-2">
						<li>
							<a
								href="/services"
								className="hover:underline">
								Services
							</a>
						</li>
						<li>
							<a
								href="/contacts"
								className="hover:underline">
								Contacts
							</a>
						</li>
						<li>
							<a
								href="/about"
								className="hover:underline">
								About
							</a>
						</li>
						<li>
							<a
								href="/feedback"
								className="hover:underline">
								Feedback
							</a>
						</li>
					</ul>
				</div>

				{/* Contact Information */}
				<div>
					<h2 className="text-lg font-semibold mb-2">Contact Us</h2>
					<hr />
					<p>
						WhatsApp:{" "}
						<a
							href="https://wa.me/0700598317"
							className="text-blue-400 hover:underline">
							0700598317
						</a>
					</p>
					<p>
						Email:{" "}
						<a
							href="mailto:mwalimujoshuakimanzi46@gmail.com"
							className="text-blue-400 hover:underline">
							mwalimujoshuakimanzi46@gmail.com
						</a>
					</p>
				</div>

				{/* Social Media Icons */}
				<div>
					<h2 className="text-lg font-semibold mb-2">Follow Us</h2>
					<hr />

					<div className="flex justify-center md:justify-start space-x-4">
						<a
							href="#"
							className="text-xl hover:text-blue-400">
							<FaTwitter />
						</a>
						<a
							href="#"
							className="text-xl hover:text-blue-400">
							<FaFacebookF />
						</a>
						<a
							href="#"
							className="text-xl hover:text-blue-400">
							<FaInstagram />
						</a>
						<a
							href="#"
							className="text-xl hover:text-blue-400">
							<FaTelegramPlane />
						</a>
					</div>
				</div>
			</div>

			{/* Copyright */}
			<div className="text-center mt-6 border-t border-gray-700 pt-4">
				<p>
					&copy; {new Date().getFullYear()} Terraso Construction. All Rights
					Reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
