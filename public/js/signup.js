
const fname = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#pass");
const cpassword = document.querySelector("#cpass");
const role = document.querySelector("#role");
const button = document.querySelector(".sub");
let odiv = document.querySelector(".message");

button.addEventListener("click", function (e) {
    e.preventDefault();
    var selectedValue = role.options[role.selectedIndex].value;
    if (fname.value && email.value && password.value && cpassword.value) {
        var selectedValue = role.options[role.selectedIndex].value;
        let signUpObj = {
            "name": fname.value,
            "email": email.value,
            "role": selectedValue,
            "password": password.value,
            "confirmPassword": cpassword.value
        }
        axios.post("https://kajalrestaurant.herokuapp.com/api/user/signup", signUpObj).then((obj) => {
            if (obj.data.data) {
                window.location.href = "/login";
            } else {
                odiv.innerHTML = obj.data.message
            }
        })
            .catch((error) => {
                console.log(error)
            })
    }
})

