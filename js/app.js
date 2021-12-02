const sec = [ 
    document.getElementById("sec1"),
    document.getElementById("sec2"),
    document.getElementById("sec3"),
    document.getElementById("sec4"),
    document.getElementById("sec5"),
    document.getElementById("sec6")
];

let query = window.location.search;
switch(query) {
    case "?a=0":
        sec[0].classList.remove("text-dark");
        sec[0].classList.add("bg-dark", "text-light", "active");
        break;
    case "?a=1":
        sec[1].classList.remove("text-dark");
        sec[1].classList.add("bg-dark", "text-light", "active");
        break;
    case "?a=2":
        sec[2].classList.remove("text-dark");
        sec[2].classList.add("bg-dark", "text-light", "active");
        break;
    case "?a=3":
        sec[3].classList.remove("text-dark");
        sec[3].classList.add("bg-dark", "text-light", "active");
        break;
    case "?a=4":
        sec[4].classList.remove("text-dark");
        sec[4].classList.add("bg-dark", "text-light", "active");
        break;
    case "?a=5":
        sec[5].classList.remove("text-dark");
        sec[5].classList.add("bg-dark", "text-light", "active");
        break;
    default:
        sec[0].classList.remove("text-dark");
        sec[0].classList.add("bg-dark", "text-light", "active");
        break;
}

function changeActive(string) {
    switch(string) {
        case "sec1":            
            for(let i=0; i<6; i++) {
                sec[i].classList.remove("bg-dark", "text-light", "active");
                sec[i].classList.add("text-dark");
                if(i==0 || sec[i].classList.contains("active")) {
                    sec[i].classList.remove("text-dark");
                    sec[i].classList.add("bg-dark", "text-light", "active");
                }
            }
            break;

        case "sec2":
            for(let i=0; i<6; i++) {
                sec[i].classList.remove("bg-dark", "text-light", "active");
                sec[i].classList.add("text-dark");
                if(i==1 || sec[i].classList.contains("active")) {
                    sec[i].classList.remove("text-dark");
                    sec[i].classList.add("bg-dark", "text-light", "active");
                }
            }
            break;

        case "sec3":
            for(let i=0; i<6; i++) {
                sec[i].classList.remove("bg-dark", "text-light", "active");
                sec[i].classList.add("text-dark");
                if(i==2 || sec[i].classList.contains("active")) {
                    sec[i].classList.remove("text-dark");
                    sec[i].classList.add("bg-dark", "text-light", "active");
                }
            }
            break;

        case "sec4":
            for(let i=0; i<6; i++) {
                sec[i].classList.remove("bg-dark", "text-light", "active");
                sec[i].classList.add("text-dark");
                if(i==3 || sec[i].classList.contains("active")) {
                    sec[i].classList.remove("text-dark");
                    sec[i].classList.add("bg-dark", "text-light", "active");
                }
            }
            break;

        case "sec5":
            for(let i=0; i<6; i++) {
                sec[i].classList.remove("bg-dark", "text-light", "active");
                sec[i].classList.add("text-dark");
                if(i==4 || sec[i].classList.contains("active")) {
                    sec[i].classList.remove("text-dark");
                    sec[i].classList.add("bg-dark", "text-light", "active");
                }
            }
            break;

        case "sec6":
            for(let i=0; i<6; i++) {
                sec[i].classList.remove("bg-dark", "text-light", "active");
                sec[i].classList.add("text-dark");
                if(i==5 || sec[i].classList.contains("active")) {
                    sec[i].classList.remove("text-dark");
                    sec[i].classList.add("bg-dark", "text-light", "active");
                }
            }
            break;
    }
}

let fa1 = document.getElementById("fa1");
let fa2 = document.getElementById("fa2");
let fa3 = document.getElementById("fa3");
let fa4 = document.getElementById("fa4");
let fa5 = document.getElementById("fa5");
// let fa6 = document.getElementById("fa6");
// let fa7 = document.getElementById("fa7");
// let fa8 = document.getElementById("fa8");


function addToCart(icon, noi) { // num of icon
    icon.classList.remove("far", "fa-heart");
    icon.classList.add("fas", "fa-heart");
    icon.style.color = "rgb("+232+","+68+","+56+")";
    switch(noi) {
        case "fa1":
            fa1.setAttribute("onclick", "removeFromCart(this, 'fa1')");
            break;
        case "fa2":
            fa2.setAttribute("onclick", "removeFromCart(this, 'fa2')");
            break;
        case "fa3":
            fa3.setAttribute("onclick", "removeFromCart(this, 'fa3')");
            break;
        case "fa4":
            fa4.setAttribute("onclick", "removeFromCart(this, 'fa4')");
            break;
        case "fa5":
            fa5.setAttribute("onclick", "removeFromCart(this, 'fa5')");
            break;
        // case "fa6":
        //     fa6.setAttribute("onclick", "removeFromCart(this, 'fa6')");
        //     break;
        // case "fa7":
        //     fa7.setAttribute("onclick", "removeFromCart(this, 'fa7')");
        //     break;
        // case "fa8":
        //     fa8.setAttribute("onclick", "removeFromCart(this, 'fa8')");
        //     break;
    }
}

function removeFromCart(icon, noi) {
    icon.classList.remove("fas", "fa-heart");
    icon.classList.add("far", "fa-heart");
    icon.style.color = "#111111";
    switch(noi) {
        case "fa1":
            fa1.setAttribute("onclick", "addToCart(this, 'fa1')");
            break;
        case "fa2":
            fa2.setAttribute("onclick", "addToCart(this, 'fa2')");
            break;
        case "fa3":
            fa3.setAttribute("onclick", "addToCart(this, 'fa3')");
            break;
        case "fa4":
            fa4.setAttribute("onclick", "addToCart(this, 'fa4')");
            break;
        case "fa5":
            fa5.setAttribute("onclick", "addToCart(this, 'fa5')");
            break;
        // case "fa6":
        //     fa6.setAttribute("onclick", "addToCart(this, 'fa6')");
        //     break;
        // case "fa7":
        //     fa7.setAttribute("onclick", "addToCart(this, 'fa7')");
        //     break;
        // case "fa8":
        //     fa8.setAttribute("onclick", "addToCart(this, 'fa8')");
        //     break;
    }
}

function see() {
    
}