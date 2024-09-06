import './signin.css';

document.querySelector('body').innerHTML = `
<div id = "main">
  <div id = "signin">
    <h1>SIGN UP</h1>
    <h3>Input your login credentials to access your Finder Account</h3>
    <div class="inputs">
      <input type="text" name="" type="name" id="" placeholder = "Name">
      <input type="text" name="" type="email" id="" placeholder = "Email">
      <input type="text" name="" type="password" id="initialPassword" placeholder = "Password">
      <input type="text" name="" type="password" id="confirmPassword" placeholder = "Confirm Password">
      <div class="check">
        <div class="w"><span>weak</span></div>
        <div class="f"><span>fair</span></div>
        <div class="g"><span>good</span></div>
        <div class="st"><span>strong</span></div>
      </div>
      <div class="instruction">Use 8 or more characters with a mix of letters, numbers & symbols.</div>
    </div>

    <button class="signUp" type = "submit">Sign Up</button>
    <a href="">Already have an account?</a>
    <button class="loginB" a href = "../login/login.html">Login</button>
  </div>
  <div id = "picture">
    <img src="../../public/hoodiePic.jpg" alt="">
  </div>
</div>

`
