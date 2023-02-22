const mEG = document.querySelector("h1");
const ip = document.querySelector("#IP");
const e = document.querySelector("#E");
const h = document.querySelector("#H");
const perf = document.querySelector("#Perf");
const iPerf = document.querySelector("#InfPers");
const ex = document.querySelector("#Exp");
const hb = document.querySelector("#Hab");
const foot = document.querySelector("footer");
const but2 = document.querySelector(".but2");
const mDP = document.querySelector("#MdP");
const fec1 = document.querySelector("#Fec1");
const but3 = document.querySelector(".but3");
const lP = document.querySelector("#LP");
const fec2 = document.querySelector("#Fec2");
const yo = document.querySelector("#Yo");
const redes = document.querySelector("#Redes"); 

function showAndHideIP() {;
    if (iPerf.style.display === "" || iPerf.style.display === "none") {
        iPerf.style.display = "block";
        foot.style.display = "none";
        perf.style.display = "none";
        ex.style.display = "none";
        hb.style.display = "none";
        redes.style.display = "none";
    } else {
        iPerf.style.display = "none";
        foot.style.display = "block";
        perf.style.display = "block";
        redes.style.display = "block";
    }
}

function showAndHideE() {;
    if (ex.style.display === "" || ex.style.display === "none") {
        ex.style.display = "block";
        foot.style.display = "none";
        perf.style.display = "none";
        iPerf.style.display = "none";
        hb.style.display = "none";
        redes.style.display = "none";
    } else {
        ex.style.display = "none";
        foot.style.display = "block";
        perf.style.display = "block";
        redes.style.display = "block";
    }
}

function showAndHideH() {;
    if (hb.style.display === "" || hb.style.display === "none") {
        hb.style.display = "block";
        foot.style.display = "none";
        perf.style.display = "none";
        iPerf.style.display = "none";
        ex.style.display = "none";
        redes.style.display = "none";
    } else {
        hb.style.display = "none";
        foot.style.display = "block";
        perf.style.display = "block";
        redes.style.display = "block";
    }
}

function showClic() {
        mDP.style.display = "block";
        fec1.style.display = "block";
}

function hideClic() {
    mDP.style.display = "none";
    fec1.style.display = "none";
}

function showCova() {
    lP.style.display = "block";
    fec2.style.display = "block";
}

function hideCova() {
    lP.style.display = "none";
    fec2.style.display = "none";
}

function showYo() {
    yo.style.display = "block";
}

function hideYo() {
    yo.style.display = "none";
}

ip.onclick = showAndHideIP;
e.onclick = showAndHideE;
h.onclick = showAndHideH;
but2.onmouseover = showClic;
but2.onmouseout = hideClic;
but3.onmouseover = showCova;
but3.onmouseout = hideCova;
mEG.onmouseover = showYo;
mEG.onmouseout = hideYo;