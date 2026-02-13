let menuVisible = false;
let darkMode = true;

function showMenu() {
    menuVisible = !menuVisible;
    if (menuVisible) {
        document.getElementById("sideBar").style.display = "none";
        img.src = "assets/icons/menuoff.png";
    } else {
        document.getElementById("sideBar").style.display = "flex";
        img.src = "assets/icons/menuon.png";
    }
}
function showLoginForm(type) {
    document.getElementById('loginType').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
    const typeTitle = type === 'guest' ? 'ENTER AS GUEST' : 'ARTIST LOG IN';
    document.getElementById('formTitle').textContent = typeTitle;
}

function backToTypeSelection() {
    document.getElementById('loginType').style.display = 'block';
    document.getElementById('loginForm').style.display = 'none';
}
const scroller = document.querySelector('.horizontal-scroll');
const floor = document.querySelector('.floor');
const step = 200; // increase this for faster arrow scroll

// Existing wheel scroll → horizontal movement
scroller.addEventListener('wheel', (e) => {
    e.preventDefault();
    scroller.scrollLeft += e.deltaY; // down → right, up → left
    syncFloor();
}, { passive: false });

// Keep floor synced if scrollLeft changes by other means
scroller.addEventListener('scroll', syncFloor);

function syncFloor() {
    floor.style.backgroundPositionX = `${-scroller.scrollLeft}px`;
}

// Arrow key navigation
window.addEventListener('keydown', (e) => {
    const max = scroller.scrollWidth - scroller.clientWidth;

    if (e.key === "ArrowRight") {
        scroller.scrollLeft = Math.min(scroller.scrollLeft + step, max);
        syncFloor();
    } else if (e.key === "ArrowLeft") {
        scroller.scrollLeft = Math.max(scroller.scrollLeft - step, 0);
        syncFloor();
    }
});

function toggleDarkMode() {
    if (darkMode) {
        document.body.classList.add('light-mode');
        document.getElementById('darkToggle').src = "css/icons/light.webp";
        document.getElementById('icon-nav').src = "css/icons/icon-dark.webp";
    } else { document.body.classList.remove('light-mode');
        document.getElementById('darkToggle').src = "css/icons/dark.webp";
        document.getElementById('icon-nav').src = "css/icons/icon-light.webp";
     }
    darkMode = !darkMode;
}
function removeTheme() {
    document.body.classList.remove('light-theme');
    document.body.classList.remove('pink-theme');
    document.body.classList.remove('ocean-theme');
}
function changeTheme() {
    const th = document.getElementById('themes').value;
    switch(th) {
        case 'light':
            removeTheme();
            document.body.classList.add('light-theme');
            break;
        case 'pink':
            removeTheme();
            document.body.classList.add('pink-theme');
            break;
        case 'ocean':
            removeTheme();
            document.body.classList.add('ocean-theme');
            break;
        default:
            removeTheme();
    }
}
function navIndex(index) {
    document.querySelectorAll('.homeindex').forEach(el => el.style.display = 'none');
    document.querySelectorAll('.navindex').forEach(el => el.classList.remove("active"));
    switch (index) {
        case 1:
            document.getElementById('homef').style.display = 'block';
            document.getElementById('nav1').classList.add("active");
            break;
        case 2:
            document.getElementById('aboutusf').style.display = 'block';
            document.getElementById('nav2').classList.add("active");
            break;
        case 3:
            document.getElementById('auctionf').style.display = 'block';
            document.getElementById('nav3').classList.add("active");
            break;
        case 4:
            document.getElementById('artistf').style.display = 'block';
            document.getElementById('nav4').classList.add("active");
            break;
        default:
            document.getElementById('home').style.display = 'block';
            document.getElementById('nav1').classList.add("active");
    }
}
