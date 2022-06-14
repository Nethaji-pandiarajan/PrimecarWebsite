$(function (e) {
    let carDetails;
    // let data = fetchCarDetails();
    // data.forEach(element => {
    for (let index = 0; index < 5; index++) {
        carDetails = +'<div class="row justify-content-center mb-3">'
            + '<div class="col-md-12 col-xl-10 ">'
            + '<div class="card shadow-0 border rounded-3">'
            + '<div class="card-body">'
            + '<div class="row">'
            + '<div class="col-md-12 col-lg-3 col-xl-4 mb-4 mb-lg-0">'
            + '<div class="bg-image hover-zoom ripple rounded ripple-surface">'
            + '<img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/new/img(4).webp"'
            + 'class="w-100" style="height:200px;" />'
            + '<a href="#!">'
            + '<div class="hover-overlay">'
            + '<div class="mask" style="background-color: rgba(253, 253, 253, 0.15);"></div>'
            + '</div>'
            + '</a>'
            + '</div>'
            + '</div>'
            + '<div class="col-md-6 col-lg-6 col-xl-5">'
            + '<h5>Quant olap shirts</h5>'//carname
            + '<ul class="mt-3" style="flex-wrap: wrap;display: flex;">'
            + '<li class="product-content-list"><i class="fa-solid fa-road"></i> 12000 Km</li>'//km
            + '<li class="product-content-list"><i class="fa-solid fa-gear"></i> Auto</li>'//transmission
            + '<li class="product-content-list"><i class="fa-solid fa-calendar"></i> 2019</li>'//year
            + '<li class="product-content-list"><i class="fa-solid fa-gas-pump"></i> Diesel</li>'//fuel
            + '<li class="product-content-list"><i class="fa-solid fa-car"></i> Model Name</li>'//model
            + '<li class="product-content-list"><i class="fa-solid fa-palette"></i> Colour</li>'//ext_color
            + '</ul>'
            + '</div>'
            + '<div class="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">'
            + '<div class="d-flex flex-row align-items-center mb-1">'
            + '<h4 class="mb-3 me-1 fs-3">₹14.99</h4>'//price
            + '</div>'
            + '<div class="d-flex flex-column mt-4">'
            + '<a href="#" data-bs-toggle="modal" data-bs-target="#productsQuickView">'
            + '<button class="btn btn-primary btn-sm w-100" type="button"> <i class="bx bx - search - alt"></i>View</button>'
            + '</a>'
            + '<button class="btn btn-primary btn-sm mt-2" type="button">Enquire now ! </button>'
            + '</div>'
            + '</div>'
            + '</div>'
            + '</div>'
            + '</div>'
            + '</div>'
            + '</div>';
        $("div.appendCars").append(carDetails);
    }

    // });
    bindEvents();
});
function bindEvents() {
    $("#brand").on('change', function () {
        let brand = $("#brand").val();
        let model = document.getElementById("brandModel");
        model.innerHTML = "";
        let optionArr;

        if (brand == "Audi") {
            optionArr = ['Select model|---Select model---', "a3 | A3", "a3 convertible | A3 Convertible", "a5 | A5", "a6 | A6", "a8 | A8", "rs5 | RS5", "q5 | Q5", "q3 | Q3", "q7 | Q7", "tt | TT", "r8 | R8"];
        } else if (brand == "BMW") {
            optionArr = ['Select model|---Select model---', "3 series | 3 SERIES", "x5 | X5", "118d | 118D", "530i | 530I", "x3 | X3", "x5 | X5", "5 series | 5 SERIES", "x1 | X1", "x4 | X4", '6gt | 6GT', '330li | 330LI', '320d | 320D', '320i | 320I', '520d | 520D', '530d | 530D']
        } else if (brand == "Mercedes Benz") {
            optionArr = ['Select model|---Select model---', 'gla|GLA', 'gle|GLE', 's400|S400', 's400|S400', 'b200|B200', 'gle 250d|GLE 250D', 'gle 350d|GLE 350D', 'c220d|c220d', 'e250d|E250D', 'gls350d|GLS350D', 'c200|C200'];
        } else if (brand == "Skoda") {
            optionArr = ['Select model|---Select model---', 'superb | Superb', 'octavia | OCTAVIA', 'rapid | Rapid'];
        } else if (brand == "Land Rover") {
            optionArr = ['Select model|---Select model---', 'Discovary|Discovary'];
        } else if (brand == "Mini") {
            optionArr = ['Select model|---Select model---', 'cooper s|cooper s'];
        } else if (brand == "Porsche") {
            optionArr = ['Select model|---Select model---', 'macan|MACAN', 'cayenne|CAYENNE', 'cayman|CAYMAN', 'panamera|PANAMERA'];
        } else if (brand == "Jaguar") {
            optionArr = ['Select model|---Select model---', 'F peace|F peace', 'xf|XF'];
        } else if (brand == "Range Rover") {
            optionArr = ['Select model|---Select model---', 'evoque|Evoque', 'velar|Velar'];
        } else if (brand == "Volvo") {
            optionArr = ['Select model|---Select model---', 'v40|V40', 'xc90|Xc90', 'xc60|Xc60', 'xc40|Xc40'];
        } else if (brand == "Jeep") {
            optionArr = ['Select model|---Select model---', 'Compass limited|Compass limited'];
        } else if (brand == "KIA") {
            optionArr = ['Select model|---Select model---', 'seltos|Seltos'];
        } else if (brand == "Hyundai") {
            optionArr = ['Select model|---Select model---', 'creta|Creta'];
        } else if (brand == "Toyota") {
            optionArr = ['Select model|---Select model---', 'innova crysta|Innova crysta', 'cambry hybrid|Cambry hybrid'];
        } else if (brand == "LEXUS") {
            optionArr = ['Select model|---Select model---', 'Nh300x|Nh300x'];
        } else if (brand == "Mahindra") {
            optionArr = ['Select model|---Select model---', 'xuv500|XUV500'];
        } else if (brand == "Ford") {
            optionArr = ['Select model|---Select model---', 'endeacour|Endeacour'];
        }
        for (let option in optionArr) {
            let pair = optionArr[option].split("|");
            var newOption = document.createElement("option");
            newOption.value = pair[0];
            newOption.innerHTML = pair[1];
            model.options.add(newOption);
        }
        $(model).niceSelect();
    });
}

function fetchCarDetails() {
    $.ajax({
        url: "buying",
        
        success: function (result) {
            return result;
        }
    });
}