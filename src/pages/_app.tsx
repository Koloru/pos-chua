import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Navbar />
			<div className="p-4">
				<Component {...pageProps} />
			</div>
			<Footer />
		</>
	);
}

export default MyApp;
