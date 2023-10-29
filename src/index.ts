import { loadNavbar } from "./shared/navbar"
import introImg from './assets/cover_image.jpg'

import FormValidation from "./formValidation"

import './styles/main.scss'


loadNavbar()

loadImages()

function loadImages() {
    const introImage = document.getElementById("introduction-img") as HTMLImageElement;
    introImage.src = introImg
    introImage.width = 1200;
    introImage.height = 590;
}


const form = document.getElementById('myForm');

form.addEventListener('submit', function (event) {
    const formValidation = new FormValidation();
    event.preventDefault();
    formValidation.validateForm();
});


