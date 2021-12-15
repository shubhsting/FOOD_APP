const atag = document.querySelectorAll('.opop');
const content = document.querySelector("#review");
const name = document.querySelector("#name");
const date = document.querySelector("#date");
const submit = document.querySelector(".btn");

submit.addEventListener("click", function (e) {
    e.preventDefault();
    if (name && date && submit) {
        let signUpObj = {
            "body": content.value,
            "date": date.value,
            "Rname": name.value,
        }
        axios.post("https://kajalrestaurant.herokuapp.com/user/addreview", signUpObj).then((obj) => {
            window.location.reload();
        })
            .catch((error) => {
                console.log(error)
            })
    }
    else {

    }
})


for (let i = 0; i < atag.length; i++) {
    atag[i].addEventListener("click", function (e) {
        let id = atag[i].getAttribute("id")
        axios.post("https://kajalrestaurant.herokuapp.com/user/getandapproveReview", {id:id}).then((obj) => {
            window.location.reload();
        })
            .catch((error) => {
                console.log(error)
            })
    })
}



