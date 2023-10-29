import { loadNavbar } from "./shared/navbar"
import introImg from './assets/cover_image.jpg'
import historyImg from './assets/Monster_attack_1.jpg'

import FormValidation from "./formValidation"

import './styles/main.scss'


loadNavbar()

loadImages()

function loadImages() {
    const introImage = document.getElementById("introduction-img") as HTMLImageElement;
    introImage.src = introImg
    introImage.width = 1200;
    introImage.height = 590;

    const historyImage = document.getElementById("history-img") as HTMLImageElement;
    historyImage.src = historyImg
    historyImage.width = 1200;
    historyImage.height = 590;

}


const form = document.getElementById('myForm');

form.addEventListener('submit', function (event) {
    const formValidation = new FormValidation();
    event.preventDefault();
    formValidation.validateForm();
});


