
(async function() {
        let response = await fetch("https://semicode.tech/api/v1/l10nhouse/services");

        servicesArr = await response.json();
        
        let id = 0;
        for (let service of servicesArr) {

                $("#Services .row").append(`
                        <div class="myCol col-lg-6 col-md-6 col-sm-12 wow ${(id % 2 == 0) ? 'animate__backInLeft' : 'animate__backInRight'}" ${(id % 2 == 0) ?'':'data-wow-delay=".2s"'}>
                                <div class="item px-4 py-4 d-flex flex-column justify-content-center align-items-center">
                                        <img class="img-fluid mb-4" src="./attachments/${service.icon}" alt="">
                                        <p class="title text-black fs-1">${service.title}</p>
                                        <p class="description text-center fs-4">${serviceDescription(service.description.slice(0, 150))}... <button class="border-0 bg-transparent p-0 firstColor fw-medium" onclick="showServices('servicesData', ${id})">Read More</button></p>
                                </div>
                        </div>
                `)
                id++;
        }
})();

(async function() {
        let response = await fetch("https://semicode.tech/api/v1/l10nhouse/sectors");

        sectorsArr = await response.json();
        
        let id = 0;
        for (let sector of sectorsArr) {

                $(".Sectors .body .row").append(`
                        <div class="myCol col-lg-3 col-md-6 col-sm-12">
                                <div class="item m-auto rounded-3 p-3">
                                        <img class="img-fluid d-block m-auto mb-4" src="./attachments/sec/${sectorsArr[id].icon}" alt="">
                                        <p class="title m-auto text-center fs-5 fw-medium">${sectorsArr[id].name}</p>
                                </div>
                        </div>
                `)
                id++;
        }
})();

(async function() {
        let response = await fetch("https://semicode.tech/api/v1/l10nhouse/languages");

        languagesArr = await response.json();
        
        let id = 0;
        for (let sector of languagesArr) {

                $(".Languages .body").append(`
                        <div class="item">
                                <p class="continent fs-1 fw-medium">${languagesArr[id].continent}</p>
                                <ul type="1" class="mb-4 list-unstyled">
                                        ${loadLanguagesLis(languagesArr[id].languages)}
                                </ul>
                        </div>
                `)
                id++;
        }
})();