const loadPhone = async (searchText, dataLimit) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    const res = await fetch(url)
    const data = await res.json()
    displayPhones(data.data, dataLimit);

}

const displayPhones = (phones, dataLimit) => {
    const phonesContainer = document.getElementById('phones-container')
    phonesContainer.innerText = '';
    // display 10 phones only
    const showAll = document.getElementById('show-all')
    if (dataLimit && phones.length > 0) {
        phones = phones.slice(0, 10);
        showAll.classList.remove('d-none')
    }
    else {
        showAll.classList.add('d-none');
    }

    // no phone found massage
    const noPhone = document.getElementById('no-found-massage')
    if (phones.length === 0) {
        noPhone.classList.remove('d-none')
    }
    else {
        noPhone.classList.add('d-none')
    }

    // display phone
    phones.forEach(phones => {
        const phoneDiv = document.createElement('div')
        phoneDiv.classList.add('col')
        phoneDiv.innerHTML = `
        <div class="card">
            <img class="p-5" src="${phones.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${phones.phone_name}</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit longer.</p>
                    <button onclick="loadPhoneDetail('${phones.slug}')" href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#phoneDetailModal">Show Details</button>
            </div>
        </div>
            `;
        phonesContainer.appendChild(phoneDiv)
    })
    // stop sppiner or loader
    toggleSpinner(false)
}

const processSearch = (dataLimit) => {
    toggleSpinner(true);
    const searchField = document.getElementById('search-field')
    const searchText = searchField.value;
    loadPhone(searchText, dataLimit)
}

// handle search button click
document.getElementById('btn-search').addEventListener('click', function () {
    // start sppiner or loader
    processSearch(10)
})

// search input field enter key handler
document.getElementById('search-field').addEventListener('keypress', function (e) {
    console.log(e.key)
    if (e.key === 'Enter') {
        processSearch(10)
    }
});


const toggleSpinner = isLoading => {
    const loadersection = document.getElementById('loader');
    if (isLoading) {
        loadersection.classList.remove('d-none')
    }
    else {
        loadersection.classList.add('d-none');
    }
}

// not the best way to load all
document.getElementById('btn-show-all').addEventListener('click', function () {
    processSearch();
})


const loadPhoneDetail = async id => {
    const url = `https://openapi.programming-hero.com/api/phone/${id}`
    const res = await fetch(url)
    const data = await res.json()
    phoneDetailModal(data.data);
}


const phoneDetailModal = phones => {
    console.log(phones);
    const modalTitle = document.getElementById('phoneDetailModalLabel')
    modalTitle.innerText = phones.name;
    const phoneDetail = document.getElementById('phone-detail')
    phoneDetail.innerHTML = `
    <p>Brand Name:-${phones.brand}</p>  
    <p>Main Features::--</p>
    <p>Device Name:-${phones.name}</p>
    <p>ChipSet:-${phones.mainFeatures.chipSet}</p>
    <p>Display Size:-${phones.mainFeatures.displaySize}</p>
    <p>Memory:-${phones.mainFeatures.memory}</p>
    <p>Sensor:-${phones.mainFeatures.sensors}</p>
    <p>Storage:-${phones.mainFeatures.storage}</p>
    <p>Relaese Date:-${phones.releaseDate}</p>
    <p>Others:-${phones.others ? phones.others : 'No result found'}</p>
    `;
}

loadPhone('apple');