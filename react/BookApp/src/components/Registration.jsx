function Registration(){
  return (
    <div>
      <div>
        <h2>Register</h2>
        <form>
          <div>
            <p>Username:</p>
            <input type="text" id="username" placeholder="Enter your username" />
          </div>
          <div>
            <p>Email:</p>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>
          <div>
            <p>Date of Birth:</p>
            <input type="date" id="dob" />
          </div>
          <div>
            <p>Password:</p>
            <input type="password" id="password" placeholder="Enter your password" />
          </div>
          <div>
            <p>Confirm Password:</p>
            <input type="password" id="confirm-password" placeholder="Confirm your password" />
          </div>
          <br />
          <a href="/"><input type="button" id="register-btn" value="Register" /></a>
          <br />
          <br />
          <a href="/login">Already have an account? Login</a>
        </form>
      </div>
    </div>
  )
}

export default Registration;