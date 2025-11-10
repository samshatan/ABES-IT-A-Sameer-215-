function Login(){
  return(
    <div>
    <div>
        <h2>Login</h2>
        <form>
            <div>
                <p>Username:</p>
                <input type="text" id="username" placeholder="Enter your username"/>
            </div>
            <div>
                <p>Password:</p>
                <input type="password" id="password" placeholder="Enter your password"/>
            </div>
            <br />
            <a href="/"><input type="button" id="login-btnl" value="Login"/></a>
            <br />
            <br />
            <a href="/registration">Don't have an account? Sign up</a>
        </form>
    </div>
    </div>
  )
}
export default Login;