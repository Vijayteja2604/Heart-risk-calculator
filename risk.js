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
                forgot.style.display = "block";
                title.style.marginTop = "10px";
                signin.style.transition = "background-color 0.3s ease-in-out";
            
            }
        
        signup.onclick = function() {
            title.innerHTML = "Sign Up";
            name.style.display = "flex";
            forgot.style.display = "none";
            title.style.marginTop = "10px";
            name.style.marginbottom = "10px";
            signup.style.transition = "background-color 0.3s ease-in-out";
            name.style.transition = "margin-top 0.3s ease-in-out";
        }