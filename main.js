document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault();

  var Email = document.getElementById("Email").value;
  var Password = document.getElementById("Password").value;

  // Kiểm tra định dạng email
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(Email)) {
      document.getElementById("error-msg").textContent = "Invalid email format";
      return;
  }

  // Chuyển hướng sau khi đăng nhập thành công
  window.location.href = "http://127.0.0.1:5500/todoList.html";
});
const Login = () => {
       window.location.href =     
             "http://127.0.0.1:5500/todoList.html";     
     };