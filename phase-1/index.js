function changeTab(tabName) {
    const tabs = document.querySelectorAll('.tab');


    tabs.forEach(tab => {
        console.log(tab);
        if (tab.previousElementSibling.id === tabName) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });
}