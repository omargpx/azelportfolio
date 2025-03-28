import { AiFillPicture } from "react-icons/ai"
import { IoLayersOutline, IoLogoAppleAr, IoDocumentTextOutline } from "react-icons/io5";

export const Webdoc = () => {
    return (
        <>
            <div className="border-t border-white/20 pt-20" id="instructions">
                <div className="mb-6 max-w-3xl">
                    <h2 className="text-2xl font-bold text-white mb-6"> 1. What i need to get started?</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/*logo */}
                        <div className="flex gap-4 bg-gray-800 p-4 rounded-2xl">
                            <div className="mt-1">
                                <IoLogoAppleAr className="w-6 h-6 text-gray-300" />
                            </div>
                            <div>
                                <h2 className="text-gray-300 font-medium uppercase tracking-wide mb-1">YOUR LOGO</h2>
                                <p className="text-gray-400 text-sm leading-relaxed">PDF, EPS or high res JPEG or PNG if possible.</p>
                            </div>
                        </div>
                        {/* images */}
                        <div className="flex gap-4 bg-gray-800 p-4 rounded-2xl">
                            <div className="mt-1">
                                <AiFillPicture className="w-6 h-6 text-gray-300" />
                            </div>
                            <div>
                                <h2 className="text-gray-300 font-medium uppercase tracking-wide mb-1">IMAGES & PICTURES</h2>
                                <p className="text-gray-400 text-sm leading-relaxed">Current and/or new images and pictures you'd like to use on the new site.</p>
                            </div>
                        </div>
                        {/* content */}
                        <div className="flex gap-4 bg-gray-800 p-4 rounded-2xl">
                            <div className="mt-1">
                                <IoDocumentTextOutline className="w-6 h-6 text-gray-300" />
                            </div>
                            <div>
                                <h2 className="text-gray-300 font-medium uppercase tracking-wide mb-1">CONTENT</h2>
                                <p className="text-gray-400 text-sm leading-relaxed">Page content and any updated verbiage/information for the site.</p>
                            </div>
                        </div>
                        {/* style guide */}
                        <div className="flex gap-4 bg-gray-800 p-4 rounded-2xl">
                            <div className="mt-1">
                                <IoLayersOutline className="w-6 h-6 text-gray-300" />
                            </div>
                            <div>
                                <h2 className="text-gray-300 font-medium uppercase tracking-wide mb-1">STYLE GUIDE</h2>
                                <p className="text-gray-400 text-sm leading-relaxed">Brand style guide, colors or any specific design requirements.</p>
                            </div>
                        </div>
                    </div>
                    {/*note */}
                    <div className="mt-8 text-center text-gray-500 text-sm">
                        <b className="uppercase font-bold bg-purple-500/50 text-white">Note:</b> If you need help with this, I can help you with that as a <a href="/services/graphic-design" className="underline text-cyan-600 hover:text-cyan-500">graphic designer</a> in which I will provide you with a result like the <a href="/assets/examples/example-brand-guide.pdf" download className="underline text-cyan-600 hover:text-cyan-500">following sample</a>.
                    </div>
                </div>
                <div className="mb-6">
                    <h2 className="text-2xl font-bold text-white mb-6"> 2. Design process</h2>
                    <div className="max-w-4xl">
                        <p>A structured web design process is essential for a successful, efficient and ROI-producing website. There are three simple steps to this process:</p>
                        <ul className="space-y-1 mt-4 pl-4">
                            <li className="flex items-start">
                                <span className="text-purple-400 mr-3 font-bold">{'>'}</span>
                                <span className="text-white/90 capitalize">Prototype design</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-purple-400 mr-3 font-bold">{'>'}</span>
                                <span className="text-white/90 capitalize">Develop & testing</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-purple-400 mr-3 font-bold">{'>'}</span>
                                <span className="text-white/90 capitalize">reviews and deliveries</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Webdoc