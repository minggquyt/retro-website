function handleEventClickOnMenu(e, sidebarStatus) {
    const pseudoElement = document.querySelector('.body-pseudo-layer');
    const menuBar = document.querySelector(".menu-bar");

    if (sidebarStatus.value == false) {
        menuBar.classList.add('show-menubar');
        pseudoElement.classList.add("show");
    }
    else {
        menuBar.classList.remove('show-menubar');
        pseudoElement.classList.remove("show");
    }
    sidebarStatus.value = !sidebarStatus.value;
}

function initMenuEvent() {
    const menu = document.querySelector('.header > span');
    const pseudoLayer = document.querySelector(".body-pseudo-layer");

    let sidebarStatus = {
        "value": false
    }

    function handleMenuEvent(e) {
        e.stopPropagation();
        handleEventClickOnMenu(e, sidebarStatus);
    }

    function handleLayerEvent(e) {
        e.stopPropagation();
        if (e.currentTarget.contains(e.target)) {
            const pseudoElement = document.querySelector('.body-pseudo-layer');
            const menuBar = document.querySelector(".menu-bar");
            menuBar.classList.remove('show-menubar');
            pseudoElement.classList.remove("show");
            sidebarStatus.value = false;
        }
    }

    menu.addEventListener('click', handleMenuEvent);
    pseudoLayer.addEventListener('click', handleLayerEvent);


    const Observe = new ResizeObserver(entries => {
        for (let e of entries) {
            if (e.contentRect.width == 0 && e.contentRect.height == 0) {
                if (sidebarStatus.value == true) {
                    const pseudoElement = document.querySelector('.body-pseudo-layer');
                    const menuBar = document.querySelector(".menu-bar");
                    menuBar.classList.remove('show-menubar');
                    pseudoElement.classList.remove("show");
                }
                sidebarStatus.value = false;
            }
        }
    })
    Observe.observe(menu);
}

function main() {
    initMenuEvent();
}
main();

