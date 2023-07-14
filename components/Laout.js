import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Laout({ children }) {
    return (
        <div>
            <Navbar />
                {children}
            <Footer />
        </div>
    );
}
