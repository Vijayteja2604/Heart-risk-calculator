 function toggleMenu() {
            const menu = document.getElementById('menu');
            menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
        }

        let signin=document.getElementById("signin");
        let signup=document.getElementById("signup");
        let name=document.getElementById("Namefield");
        let title=document.getElementById("title");
        let forgot=document.getElementById("Forgot");

    
        signin.onclick = function() {
            title.innerHTML = "Sign In";
            name.style.display = "none";
            title.style.marginTop = "10px";
            forgot.innerHTML = `
                <div>Forgot Password? <a href='#'>Click me</a></div>
                <div style='margin-top: 10px;'>Don't have an account? <a href='#' id='signupLink'>Sign Up</a></div>
            `; 
            signup.style.display="none";
            signin.style.display="block";
            document.getElementById('signupLink').addEventListener('click', function(event) {
                event.preventDefault(); 
                signup.onclick();
            });
        }
        signup.onclick = function() {
            title.innerHTML = "Sign Up";
            name.style.display = "flex";
            forgot.innerHTML = "Already have an account? <a href='#' id='signinLink'>Sign In</a>";
            title.style.marginTop = "10px";
            name.style.marginbottom = "10px";
            signin.style.display="none";
            signup.style.display="block";
            document.getElementById('signinLink').addEventListener('click', function(event) {
                event.preventDefault(); 
                signin.onclick();
            });
            
            
        }
