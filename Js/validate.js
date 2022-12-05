import { toggleActiveClass as template } from './template.js';

export const validatePersonalInformation = () => {
    const name = document.querySelector('#name');
    const date = document.querySelector('#date');
    const cpf = document.querySelector('#cpf');
    let today = new Date();
    let bday = new Date(date.value);
    let age = today.getFullYear() - bday.getFullYear();
    let month = today.getMonth() - bday.getMonth();
    let error = 0;
    const regex = /[0-9]/;
    const validate = {
        name: () => {
            let status = (name.value !== '' && !regex.test(name.value));
            error += template(name, status);
        },
        cpf: () => {
            console.log(cpf.value);
            let status = (isCpf(cpf.value));
            error += template(cpf, status);
        },
        date: () => {
            if (month < 0 || (month === 0 && today.getDate() <= bday.getDate())) {
                age--;
            }
            let status = (age >= 0);
            error += template(date, status);
        }
    }
    Object.values(validate).forEach((callback) => {
        callback();
    })
    return !error
}

export const validateAdress = () => {
    const cep = document.querySelector('#search');
    const adress = document.querySelector('#adress');
    const district = document.querySelector('#district');
    const addressNumber = document.querySelector('#addressNumber');
    const city = document.querySelector('#city');
    let error = 0;
    const validate = {
        cep: () => {
            let status = (cep.value !== '');
            error += template(cep, status);
        },
        adress: () => {
            let status = (adress.value !== '');
            error += template(adress, status);
        },
        district: () => {
            let status = (district.value !== '');
            error += template(district, status);
        },
        addressNumber: () => {
            let status = (addressNumber.value !== '' && addressNumber.value > 0);
            error += template(addressNumber, status);
        },
        city: () => {
            let status = (city.value!== '');
            error += template(city, status);
        }
    }
    Object.values(validate).forEach((callback) => {
        callback();
    })
    return !error
}

function isCpf(cpf){
    let soma = 0;
    soma += cpf[0] * 10;
    soma += cpf[1] * 9;
    soma += cpf[2] * 8;
    soma += cpf[3] * 7;
    soma += cpf[4] * 6;
    soma += cpf[5] * 5;
    soma += cpf[6] * 4;
    soma += cpf[7] * 3;
    soma += cpf[8] * 2;
    soma = (soma * 10)%11;  
    if(soma == 10 || soma == 11) 
        soma = 0;
    if(soma != cpf[9]) return false;

    soma = 0;
    soma += cpf[0] * 11;
    soma += cpf[1] * 10;
    soma += cpf[2] * 9;
    soma += cpf[3] * 8;
    soma += cpf[4] * 7;
    soma += cpf[5] * 6;
    soma += cpf[6] * 5;
    soma += cpf[7] * 4;
    soma += cpf[8] * 3;
    soma += cpf[9] * 2;
    soma = (soma * 10)%11;  
    if(soma == 10 || soma == 11) 
    soma = 0;
    if(soma != cpf[10]) return false;

    return true;
}