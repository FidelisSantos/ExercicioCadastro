import { insertHtml as template } from './template.js';
import { searchCep as cep } from './searchCep.js'
import * as validate from './validate.js'

$('#advanced').on('click', function (e) {
    e.preventDefault();
    if (validate.validatePersonalInformation()) {
        $('#adress-tab').tab('show');
    }
})

$('#return').on('click', function (e) {
    $('#data-tab').tab('show');
})

$('#next').on('click', function (e) {
    e.preventDefault();
    if (validate.validatePersonalInformation() && validate.validateAdress()) {
        template();
        $('#finish-tab').tab('show');
    }
})

$('#searchBtn').on('click', () => {
    cep();
})


