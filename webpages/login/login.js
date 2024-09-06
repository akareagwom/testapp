import './login.css';

document.querySelector('#root').innerHTML = `
    <div id = "container">
            <h1>Login</h1>
            <h3>Input your login credentials  to access your Finder Account</h3>
            <div class="inputs">
                <input type="email" name="" id="" placeholder="Email" required>
                <input type="password" name="" id="" placeholder="Password" required>
                <div id="runs">
                <button type="submit" id = "login">Login</button>
                </div>
                <p><a href="#">Don’t have an account?</a></p>
                <div id="twist">
                <button type="submit" id = "register">Register</button>
                </div>
            </div>
        </div>
    <div id = "wrapper">
            <img src="../../public/9272b647765a346c0418971280b46480.png" alt="">
        </div>
    `