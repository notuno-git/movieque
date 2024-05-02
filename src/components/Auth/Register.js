import "./auth.css"

export default function Register() {
  return (
    <div className="auth container">
      <div className="row justify-content-center">

        <div class="box reg-box">
          <div class="form">
            <h2>Register</h2>
            <div class="inputBox">
              <input type="text" required="required" />
              <span>Full Name</span>
              <i></i>
            </div>
            <div class="inputBox">
              <input type="text" required="required" />
              <span>Email</span>
              <i></i>
            </div>
            <div class="inputBox">
              <input type="number" required="required" />
              <span>Phone</span>
              <i></i>
            </div>
            <div class="inputBox">
              <input type="password" required="required" />
              <span>Password</span>
              <i></i>
            </div>
            <div class="inputBox">
              <input type="password" required="required" />
              <span>Confirm Password</span>
              <i></i>
            </div>
            <button className="sub-btn">Register</button>
          </div>
        </div>

      </div>
    </div>
  );
}
