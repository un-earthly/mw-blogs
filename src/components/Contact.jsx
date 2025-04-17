import { useState } from 'react';
import { Send, Star } from 'lucide-react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        message: '',
        agreeTerms: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);

    };

    return (
        <div className="flex flex-col my-10 md:flex-row bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg overflow-hidden shadow-xl max-w-6xl mx-auto">

            <div className="p-8 md:p-12 flex flex-col justify-between md:w-1/2">
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Do you want to start a project?
                    </h1>
                    <p className="text-lg mb-8">
                        Drop us a line for your project thought or for sharing the news about your company. Yes we check this mailbox frequently!
                    </p>
                    <hr className="border-white/30 my-8" />
                </div>

                <div>
                    <div className="flex flex-wrap gap-4 mb-12">
                        <div className="bg-white rounded-lg p-5 w-28">
                            <h3 className="text-2xl text-primary-3 font-bold">10+</h3>
                            <p className="text-cyan-400 text-sm">Years in business</p>
                        </div>

                        <div className="bg-white rounded-lg p-5 w-28">
                            <h3 className="text-2xl text-primary-3 font-bold">100+</h3>
                            <p className="text-cyan-400 text-sm">In-house employees</p>
                        </div>

                        <div className="bg-white rounded-lg p-5 w-36">
                            <h3 className="text-2xl text-primary-3 font-bold">250+</h3>
                            <p className="text-cyan-400 text-sm">Successful delivery project</p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="flex flex-col items-center gap-2">
                            <span className="font-bold">Clutch</span>
                            <div className="flex">
                                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                            </div>
                        </div>

                        <div className="flex flex-col items-center gap-2">
                            <span className="font-bold">Top Rated Plus</span>
                            <div className="flex">

                                <span className="text-green-400">Upwork</span>
                                <div className="flex">
                                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white text-gray-800 p-8 md:p-12 md:w-1/2">
                <div className="max-w-md mx-auto">
                    <h2 className="text-3xl font-bold text-blue-600 mb-2">Get 20% OFF</h2>
                    <p className="text-2xl text-blue-600 mb-8">Your first Project!</p>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block mb-1">Full Name*</label>
                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                placeholder="Enter your full name"
                                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block mb-1">Email*</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block mb-1">Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Leave us a message..."
                                className="w-full p-3 border border-gray-300 rounded h-32 focus:outline-none focus:ring-2 focus:ring-blue-600"
                            ></textarea>
                        </div>

                        <div className="mb-6">
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    name="agreeTerms"
                                    checked={formData.agreeTerms}
                                    onChange={handleChange}
                                    className="mr-2"
                                    required
                                />
                                <span>You agree to our friendly <a href="#" className="underline">privacy policy</a>.</span>
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-3 px-4 rounded flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors"
                        >
                            Send message <Send className="h-5 w-5" />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}