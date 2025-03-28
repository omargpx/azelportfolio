import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center py-8 justify-center text-gray-800 font-jetbrains">
            <div className="text-center">
                <h1 className="text-3xl md:text-6xl font-bold mb-4">404</h1>
                <h2 className="text-xl md:text-3xl mb-4">Not Found Page</h2>
                <p className="md:text-xl mb-8">
                    Sorry, we could not find the page you are looking for.
                </p>
                <Link
                    href="/"
                    className="text-gray-400/60 hover:text-gray-300 transition-colors underline"
                >
                    ← Back to Home
                </Link>
            </div>
        </div>
    );
}