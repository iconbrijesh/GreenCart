
import "./SignUp.css";

export default function SignUp() {
  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2 className="signup-title">Join Our Green Family 🌿</h2>
        <p className="signup-subtext">Create an account to start shopping sustainably</p>

        <form className="signup-form">
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Confirm Password" required />
          
          <button type="submit">Sign Up</button>
        </form>

        <p className="login-link">Already have an account? <a href="/login">Log in</a></p>
      </div>
    </div>
  );
}
