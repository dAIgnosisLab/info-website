export default function Footer() {
    return (
        <footer className="bg-gray-50 border-t border-gray-200 mt-20" id = "notify">
            <div className="max-w-6xl mx-auto px-6 py-12">

                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

                    {/* Brand */}
                    <div>
                        <img
                            src="/logo.svg"
                            alt="Logo"
                            className="h-20 md:h-28 w-auto"
                        />


                        <p className="mt-3 text-gray-600 text-sm leading-relaxed max-w-xs">
                            AI-driven healthcare documentation designed
                            to save time, reduce errors, and improve patient outcomes.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="font-semibold text-gray-900 mb-3">Company</h3>
                        <ul className="space-y-2 text-gray-600">
                            <li><a href="#about" className="hover:text-re-500">About us</a></li>
                            <li><a href="#services" className="hover:text-green-500">Services</a></li>
                            <li><a href="#contact" className="hover:text-green-500">Contact</a></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="font-semibold text-gray-900 mb-3">Resources</h3>
                        <ul className="space-y-2 text-gray-600">
                            <li><a className="hover:text-green-500" href="#">Documentation</a></li>
                            <li><a className="hover:text-green-500" href="#">API Reference</a></li>
                            <li><a className="hover:text-green-500" href="#">Support</a></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="font-semibold text-gray-900 mb-3">Stay Updated</h3>
                        <p className="text-gray-600 text-sm mb-3">
                            Sign up to receive product updates and launch notifications.
                        </p>

                        <div className="flex items-center gap-2">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
                            />
                            <button className="px-4 py-2 bg-green-400 hover:bg-green-500 text-white rounded-md transition">
                                Join
                            </button>
                        </div>
                    </div>

                </div>

                {/* Bottom */}
                <div className="border-t mt-10 pt-6 text-center text-gray-500 text-sm">
                    © {new Date().getFullYear()} dAIgnosisLabs. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
