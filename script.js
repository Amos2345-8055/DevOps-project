let version = 1;

function deploy() {
    version++;
    document.getElementById("version").innerText = "v" + version + ".0";
    document.getElementById("deploy").innerText = "Updated just now";
}

/* Live clock */
function updateTime() {
    let now = new Date();
    document.getElementById("time").innerText = now.toLocaleTimeString();
}
setInterval(updateTime, 1000);
