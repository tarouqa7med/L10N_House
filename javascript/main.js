
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

// window.addEventListener("scroll", function () {
//         if (window.scrollY >= 15) {
//                 nav.classList.add("scrolled");
//         } else {
//                 nav.classList.remove("scrolled");
//         }
// })

$(window).scroll(function (event) {
        $(nav).toggleClass("scrolled", window.scrollY >= 15);

        let $sections = $('header, section');

        $sections.each(function (index, section) { 
                let $section = $(section),
                        sectionID = $section.attr("id"),
                        sectionTop = $section.offset().top,
                        sectionBottom = sectionTop + $section.outerHeight(true),
                        navHeight = $(nav).outerHeight(true),
                        sY = window.scrollY + navHeight;
                
                if (sY >= sectionTop && sY < sectionBottom) {
                        $('.nav-link.active').removeClass('active');
                        $(`.nav-link[href='#${sectionID}']`).addClass('active');
                }
        });
})

$loadingPage.ready(function () {
        
        setTimeout(() => {
                $loadingPage.addClass("hide");
        }, 1000);
        
        setTimeout(() => {
                $loadingPage.addClass("inactive");
                $("body").removeClass("no-scroll");
        }, 2000);
});