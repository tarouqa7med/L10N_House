


function serviceDescription(desc) {

        let regex = /L10N House/gmi;
        return desc.replaceAll(regex, `<span class="fw-medium"><span class="firstColor">L10N</span> <span class="secondColor">House</span></span>`);
}

function openModal(modaName) {
        $("body").addClass("no-scroll");
        $(`.Modal[data-modal-name='${modaName}']`).fadeIn(500);
        $(`.Modal[data-modal-name='${modaName}'] .container`).fadeIn(500);

}

function closeModal(modaName) {
        $("body").removeClass("no-scroll");
        $(`.Modal[data-modal-name='${modaName}']`).fadeOut(500);
        $(`.Modal[data-modal-name='${modaName}'] .container`).fadeOut(500);
}

function loadPoints(points) {

        let LIs = ``;

        if (points != null) {
                for (let point of points) {
                        LIs += `<li class="secondColor fw-bold ms-5 fs-3"><span class="text-black fw-normal">${point}</span></li>`;
                }
        }

        return LIs;
}

function loadOLs(serviceSections, serviceIndex) {

        let sections = ``, id = 0;

        for (let section of serviceSections) {

                sections +=`
                <ol type="1" class="ms-0 px-3">
                        <h2 class="mb-3">${serviceSections[id].title}</h2>
                        ${loadPoints(serviceSections[id].points)}
                </ol>`

                id++;
        }

        return sections;
}

function showServices(modaName, serviceIndex) { 

        let service = servicesArr[serviceIndex];
        
        $(`.Modal[data-modal-name='${modaName}'] .body`).html(`
                <h2 class="title service text-center secondColor mb-5 fw-bold">${servicesArr[serviceIndex].title}</h2>
                <div class="row mb-5">
                        <div class="col-lg-6">
                                <div class="item px-3">
                                        <p class="description fs-3 mb-4">${serviceDescription(servicesArr[serviceIndex].description)}</p>
                                </div>
                        </div>
                        <div class="col-lg-6">
                                <div class="item px-3">
                                        <img class="img-fluid rounded-4" src="./attachments/${servicesArr[serviceIndex].img}" alt="">
                                </div>
                        </div>
                </div>
                
                ${loadOLs(service.sections, serviceIndex)}
                `
        )
        
        openModal('servicesData', serviceIndex);
}

function openVideo() {
        openModal('openVideo');
}

function showSectors(sectors) {

        openModal(sectors);
}

function openLanguages(languages) {

        let languagesModal = $(`.Modal[data-modal-name='${languages}']`),
                langContainer = languagesModal.children();

        document.body.classList.add("no-scroll");
        languagesModal.fadeIn(500);
        
        setTimeout(() => {
                langContainer.addClass("show");
        }, 500);
}

function closeLanguages(languages) {
        
        let languagesModal = $(`.Modal[data-modal-name='${languages}']`),
        langContainer = languagesModal.children();
        
        document.body.classList.remove("no-scroll");
        langContainer.removeClass("show");
        
        setTimeout(() => {
                languagesModal.fadeOut(500);
        }, 500);

}

function loadLanguagesLis(langArr) {
        let Lis = ``;
        for (let item of langArr) {
                Lis += `<li class="secondColor fw-medium fs-3"><i class="fa-regular fa-dot-circle me-2"></i><span class="fw-normal">${item}</span></li>`;
        }
        return Lis;
}