let name = ["Kamal", "Nicat", "Yusif"];
let surnameArr = ["Lachinov", "Rzayev", "Qurbanli"];
let emailArr = ["kamallachinov5@gmail.com", "rzayvnicat@gmail.com", "yusifqurbanli@gmail.com"]
// console.log('name[i]');
let btn = document.getElementById("btn");
let nameInput = document.querySelector(".name");
let surname = document.querySelector(".surname");
let Birth = document.querySelector(".Birth");
let Man = document.querySelector(".Man");
let Woman = document.querySelector(".Woman");
let eMmail = document.querySelector(".e-mail");
console.log(btn);

btn.addEventListener('submit', function () {
    for (let i = 0; i < 4; i++) {
        nameInput.value = name[Math.floor(Math.random() * name.length)];

    }
})
