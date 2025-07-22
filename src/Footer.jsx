
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-section">
                    <h3>About Us</h3>
                    <p>We sell 100% natural and eco-friendly products to support sustainable living. Join us in building a greener future.</p>
                </div>

                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/shop">Shop</a></li>
                        <li><a href="/seller">Become a Seller</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Support</h3>
                    <ul>
                        <li><a href="/faq">FAQs</a></li>
                        <li><a href="/shipping">Shipping & Returns</a></li>
                        <li><a href="/policy">Privacy Policy</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Follow Us</h3>
                    <div className="social-icons">
                       
                        <a href="https://www.linkedin.com/in/iconbrijesh" target="_blank" rel="noreferrer">LinkedIn</a>
                        <a href="https://twitter.com/iconbrijesh" target="_blank" rel="noreferrer">X</a>
                        <a href="https://github.com/iconbrijesh" target="_blank" rel="noreferrer">GitHub</a>

                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} GreenCart. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
