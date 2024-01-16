const resultArea = document.getElementById('calc-resultArea');
const resultPerimeter = document.getElementById('calc-resultPerimeter');
const subArea = document.getElementById('calc-formArea');
const subPerimeter = document.getElementById('calc-formPerimeter');
const resetArea = document.getElementById('calc-resetArea');
const resetPerimeter = document.getElementById('calc-resetPerimeter');

document.addEventListener('DOMContentLoaded', function () {
    subArea.addEventListener('submit', function (event) {
        event.preventDefault();
        calcArea();
    });
    subPerimeter.addEventListener('submit', function (event) {
        event.preventDefault();
        calcPerimeter();
    });
    resetArea.addEventListener('click', function (event) {
        event.preventDefault();
        resArea();
    });
    resetPerimeter.addEventListener('click', function (event) {
        event.preventDefault();
        resPerimeter();
    });
});

function calcArea() {
    resultArea.innerHTML = '';

    let panjangSisi = parseFloat(document.getElementById('AreaInput').value);

    if (panjangSisi < 0) {
        alert('Angka Tidak Boleh Dibawah Nol');
        return false;
    };

    let luas = panjangSisi * panjangSisi;

    heading = document.createElement('h4');
    heading.innerHTML = 'Perhitungan';

    info = document.createElement('input');
    info.setAttribute('readonly', 'true');
    info.value = `L = ${panjangSisi} x ${panjangSisi}`;

    result = document.createElement('input');
    result.setAttribute('readonly', 'true');
    result.value = `L = ${luas}`;

    desc = document.createElement('h5');
    desc.innerText = `Hasil Akhir Dari Luas Tersebut Yaitu ${luas}`;

    resultArea.append(heading, info, result, desc);
};

function calcPerimeter() {
    resultPerimeter.innerHTML = '';

    let panjangKeliling = parseFloat(document.getElementById('PerimeterInput').value);

    if (panjangKeliling < 0) {
        alert('Angka Tidak Boleh Dibawah Nol');
        return false;
    };

    let keliling = 4 * panjangKeliling;

    heading = document.createElement('h4');
    heading.innerHTML = 'Perhitungan';

    info = document.createElement('input');
    info.setAttribute('readonly', 'true');
    info.value = `K = 4 x ${panjangKeliling}`;

    result = document.createElement('input');
    result.setAttribute('readonly', 'true');
    result.value = `K = ${keliling}`;

    desc = document.createElement('h5');
    desc.innerText = `Hasil Akhir Dari Keliling Tersebut Yaitu ${keliling}`;

    resultPerimeter.append(heading, info, result, desc);
};

function resArea() {
    document.getElementById('AreaInput').value = '';
    resultArea.innerHTML = '';
};

function resPerimeter() {
    document.getElementById('PerimeterInput').value = '';
    resultPerimeter.innerHTML = '';
};