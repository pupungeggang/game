function saveInit() {
    if (localStorage.getItem('DesserterriaRPG') === null || localStorage.getItem('DesserterriaRPG') === '[object Object]') {
        localStorage.setItem('DesserterriaRPG', JSON.stringify(emptySave));
    }

    loadData();
}

function saveData() {
    localStorage.setItem('DesserterriaRPG', save);
}

function loadData() {
    save = JSON.parse(localStorage.getItem('DesserterriaRPG'));
}

function clearData() {
    localStorage.setItem('DesserterriaRPG', JSON.stringify(emptySave));
    loadData();
}
