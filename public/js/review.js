const atag = document.querySelectorAll('.opop');

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



