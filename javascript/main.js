
modals.forEach(function (modal) {
        modal.addEventListener("click", function () {
                if (modal.dataset.modalName != 'Languages') {
                        closeModal(modal.dataset.modalName);
                } else if (modal.dataset.modalName == 'Languages') {
                        closeLanguages(modal.dataset.modalName);
                }
        })
})

modals.forEach(function (modal) {
        let modalContainer = modal.firstElementChild;

        modalContainer.addEventListener("click", function (event) {
                event.stopPropagation();
        })
})

navBtn.addEventListener("click", function () {
        navBtn.classList.toggle("clicked");
        collapseMenu.classList.toggle("open");
        navBtn.disabled = true;
        setTimeout(() => {
                navBtn.disabled = false;
        }, 500);
})
