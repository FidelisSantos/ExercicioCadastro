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
    let status;
    const regex = /[0-9]/;
    const validate = {
        name: () => {
            status = (name.value !== '' && !regex.test(name.value));
            error += template(name, status);
        },
        cpf: () => {
            console.log(cpf.value);
            status = (isCpf(cpf.value));
            error += template(cpf, status);
        },
        date: () => {
            if (month < 0 || (month === 0 && today.getDate() <= bday.getDate())) {
                age--;
            }
            status = (age >= 0);
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
    let status;
    const validate = {
        cep: () => {
            status = (cep.value !== '');
            error += template(cep, status);
        },
        adress: () => {
            status = (adress.value !== '');
            error += template(adress, status);
        },
        district: () => {
            status = (district.value !== '');
            error += template(district, status);
        },
        addressNumber: () => {
            status = (addressNumber.value !== '' && addressNumber.value > 0);
            error += template(addressNumber, status);
        },
        city: () => {
            status = (city.value!== '');
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
    let cpfIndex = 0;
    
    for(let i = 10; i >= 2 ; i--)
    {
        soma += cpf[cpfIndex++] * i;
    }
    soma = (soma * 10)%11;
    if(soma == 10 || soma == 11) 
        soma = 0;
    if(soma != cpf[9]) return false;

    soma = 0;
    cpfIndex = 0;
    for(let i = 11; i >= 2 ; i--)
    {
        soma += cpf[cpfIndex++] * i;
    }
    soma = (soma * 10)%11;  
    if(soma == 10 || soma == 11) 
    soma = 0;
    if(soma != cpf[10]) return false;

    return true;
}