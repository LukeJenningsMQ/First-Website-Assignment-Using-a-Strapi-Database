//main.js This module is my controller module, used to control the website as the user interacts with it
//Made By Luke Jennings, Student ID: 46412394

//importing the modules that this controller will interact with
import {Auth} from  './service.js';
import { Router } from "./router.js";
import * as views from "./views.js"
import {Model} from './model.js';

const router = new Router(views.errorView);

//When a user tries to search for something, this will set up the webpage to show the results
router.get('/search', (pathInfo) =>{
    views.defaultView()
    views.navView(Auth.getUser())
    views.searchResultView(pathInfo)
    Model.loadSearchedJobs(pathInfo)
    bindings()
})

//When a user clicks on a company name, this will set up the company page when the company page url is called.
router.get('/companies', (pathInfo) =>{
    views.defaultView()
    views.navView(Auth.getUser())
    Model.loadJobsForCompany(pathInfo)
    bindings()
})

//When a ur for a particular job is loaded, this we call the proper view functions 
router.get('/jobs', (pathInfo) => {
    Model.loadSingleJob(pathInfo)
    views.clearCompanyView()
    views.navView(Auth.getUser());
    views.defaultView()
    bindings()
    
})

//When home page is called or the website first opens, this will activate to show ten most recent jobs published
router.get('/', () => {
    Model.loadRecentJobs();
    views.navView(Auth.getUser())
    views.clearCompanyView()
    var targetHome = document.getElementById("home");
    targetHome.className = "selected"
    bindings()
})

//When user routed to the about us page, it will activate this, to set up the page to show the correct information
router.get('/about', () => {
    views.navView(Auth.getUser())
    views.clearCompanyView()
    views.infoView('main', Model.dataStored.content.aboutUs)//collects the correct info to show on the page from the model gives it to the view function to display
    var targetAbout = document.getElementById("about"); 
    targetAbout.className = "selected" //About Us button will now have the selected class, so it can get proper styling 
    var targetHome = document.getElementById("home");
    targetHome.classList.remove("selected")//removes styling from Home button
    bindings()
})

//When user goes to the help page, this will collect the information needed from the model and then set up the display using the views
router.get('/help', () => {
    views.navView(Auth.getUser())
    views.clearCompanyView()
    views.infoView('main', Model.dataStored.content.appHelp)
    var targetHelp = document.getElementById("help");
    targetHelp.className = "selected" //puts this class onto the help button so its able to the proper styling ot show what page they are on
    var targetHome = document.getElementById("home");
    targetHome.classList.remove("selected");
    bindings()
})
const redraw = () => {
    router.route()
}



function search(event){
    event.preventDefault() //stops website from loading a webpage when search is submitted
    const searchTerm = this.elements['search'].value //gets the value inside the search forms input section
    window.location.href = '/#!/search/' + searchTerm //will go to the proper link that will show the search results. 
}

//This will get the info submitted into the login form and then send it to services.js for it to be authenticated and checked if this information is the right account
function login(event){
    event.preventDefault()
    const loginUsername = this.elements['username'].value //getting the inputted username
    const loginPassword = this.elements['password'].value //getting the inputted password
    //creating object with the information 
    const authInfo = {
        'identifier' : loginUsername,
        'password' : loginPassword
    }
    Auth.login(authInfo);
}

//will log the user out of their account
function logoutAccount(){
    Auth.logout()
    redraw()
}

//this function makes sure that the button wiil will have the proper functions connected to them
export function bindings(){
    let searchform = document.getElementById("searchform")
    searchform.onsubmit = search
    let loginform = document.getElementById("loginform")
    let logoutbutton = document.getElementById("logoutbutton")
    let applyButton = document.getElementById("applyButton")
    if(logoutbutton){ //sees if the logout button is on the screen
        logoutbutton.onclick = logoutAccount
    }
    if(loginform){
        loginform.onsubmit = login
    }
    if(applyButton){
        console.log("details")
        applyButton.onclick = views.applyForJob
    } else {console.log("not found")}
}

//will listen out for the user trying to login
window.addEventListener("userLogin", function(e) {
    redraw()
    bindings()
    if(Auth.getUser() == null){
        const target = document.getElementById("errorMessage")
        target.innerHTML = "Invalid Username or Password";
    }
})

//Once the data is loaded,the proper views are called
window.addEventListener("jobLoadedCompanyView", function(e){
    for(let i = 0; i< Model.getDataArray().data.length; i++){
        views.companyDescriptionView(Model.getDataArray().data[i]);
        views.companyJobView(Model.getDataArray().data[i]);
    }
})

//will listen out if the recent jobs are needed to be displayed
window.addEventListener("recentJobLoaded", function(e){
    views.jobView(Model.getDataArray().data.slice(0,10))
})

//event listener will see when the correct search results are loaded
window.addEventListener("searchLoaded", function(e){
    views.jobView(Model.getDataArray().data.slice())
})

//after a single job is found, this will call the correct view function
window.addEventListener("singleJobLoaded", function(e){
    for(let i = 0; i<Model.getDataArray().data.length; i++){
        views.jobDescriptionView(Model.getDataArray().data[i])
    }
})

//every time the pag is loaded, it must use the redraw function
window.onload = () => {redraw();}    
window.reload = () => {redraw()}