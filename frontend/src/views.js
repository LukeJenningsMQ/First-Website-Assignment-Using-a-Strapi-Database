//views.js This is my Views module, in which is contians all the view functions for the website
//Made By Luke Jennings, Student ID: 46412394

import {Auth} from  './service.js';
import {bindings} from './main.js';
export function jobView(peo) {
        let target = document.getElementById('main');
        let list = "<ul>";
        for(let i = 0; i<peo.length; i++){
            list += "<li class='jobContainer'>";
            list += "<div class=job>";
            let f = peo[i].attributes;
            let n = f.company;
            let m = n.data;
            let o = m.attributes;
            list += "<p><a href='/#!/companies/" + m.id + "'>" + o.name + "</a></p>" ;
            list += "<p><a href='/#!/jobs/" + peo[i].id + "'>"+ f.title + "</a></p>";
            list += "<p>" + f.location + "</p>";
            list += "<p>" + f.type + "</p>";
            list += "</div>";
            list += "</li>";
        }
        list += "</ul>";
        target.innerHTML = list;
    }

    
export function companyJobView(peo) {
    let target = document.getElementById('companyJobs');
    let list = ''
    console.log("fire")
        list += "<ul>";
        list += "<li class='jobContainer'>";
        list += "<div class=job>";
        let f = peo.attributes;
        let n = f.company;
        let m = n.data;
        let o = m.attributes;
        list += "<p><a href='/#!/companies/" + m.id + "'>" + o.name + "</a></p>" ;
        list += "<p><a href='/#!/jobs/" + peo.id + "'>"+ f.title + "</a></p>";
        list += "<p>" + f.location + "</p>";
        list += "<p>" + f.type + "</p>";
        list += "</div>";
        list += "</li>";
    list += "</ul>";
    console.log(list)
    target.innerHTML += list;
}

export function jobDescriptionView(arr) {
        let target = document.getElementById('main');
        console.log(arr);
        let peo = arr.attributes;
        let n = peo.company;
        let m = n.data;
        let o = m.attributes;
        let list = "<div class='jobInfo'>"
        list += "<a href='/#!/companies/" + m.id + "'>" + o.name + "</a>";
        list += "<p>"+ peo.title + "</p>";
        list += "<p>" + peo.type + "</p>"
        list += "<p>" + peo.location + "</p>"
        list += '<div class="job-description">' + peo.description +'</div>'
        list+= '</div>'
        if(Auth.getUser() != null) {
            list += '<button id="applyButton">Apply for this Job</button>'
        }
        list += '<div id="applyForm"></div>'
        
        
        target.innerHTML = list;
        bindings()
    }

export function companyDescriptionView(arr) {
        console.log("hefaaasllo")
        let target = document.getElementById('company');
        console.log(arr);
        let peo = arr.attributes;
        let n = peo.company;
        let m = n.data;
        let o = m.attributes;
        let list = "<div class='companyInfo'>"
        list += "<a href='" + o.url + "'>" + o.url + "</a>";
        list += "<p>"+ o.name + "</p>";
        list += '<img src="' + o.logo + '" alt="company image">';
        list += "</div>"
        console.log(list)
        target.innerHTML = list;
    }
export const infoTemplate = Handlebars.compile(`
    <div class="infoContent">
        <p>{{pageInfo}}</p>
    </div>`);

export const navTemplate = Handlebars.compile(`
<h1 class="logo">Bob's Jobs!</h1>
<div class="page-header-main">
  <nav class="main-nav">
    <ul class="main-menu">
      <li id="home"><a href="/#" class="pagelink">Home</a></li>
      <li id="about"><a href="/#!/about" class="pagelink">About Us</a></li>
      <li id="help"><a href="/#!/help" class="pagelink">Applicant Help</a></li>
    </ul>
  </nav>

    <div class="header-search">
        <form id="searchform">
                <label for="search" class="visually-hidden">Search Jobs</label>
                <input id="search" name="search" placeholder="Site search...">
                <input type="submit" id="searchbutton"> 
        </form>
    </div>
    <div class="header-auth">
        {{#if user}}
        <p>Logged in as {{user.username}}</p>
        <button id="logoutbutton">Log Out</button>
        {{else}}
        <form id="loginform">
                <label for="username">Username:</label>
                <input name="username">
                <label for="password">Password:</label>
                <input name="password">
                <input type="submit" id="loginbutton"> 
        </form>
        {{/if}}
        <div id="errorMessage"></div>
    </div>



</div>
`)


export const errorView = () =>  {
    const target = document.getElementById('main')
    target.innerHTML = "<p>Page not Found</p>"
}

export function defaultView() {
    const target = document.getElementById('main')
    target.innerHTML = "<p> </p>"
}
export function clearCompanyView() {
    const target = document.getElementById('company')
    const targetJob = document.getElementById('companyJobs')
    target.innerHTML = "<p> </p>"
    targetJob.innerHTML = ""
}

export function searchResultView(searchItem){
    let target = document.getElementById('company');
    let list = "Search results for '"
    list += searchItem.id
    list += "'"
    target.innerHTML = list
}


export const applyTemplate = Handlebars.compile(`
    <form>
    <textarea name="text" rows="4" cols="50"></textarea>
    <input type="submit" id="applyToJob" name"applyToJob" value="Submit Application">
    </form>
`)

export function applyForJob(){
    let target = document.getElementById("applyForm")
    target.innerHTML = applyTemplate()
}

export function infoView(targetid, info) {

    const list = infoTemplate(info);
    const target = document.getElementById(targetid)
    
    target.innerHTML = list;
}

export function navView(user) {

    const list = navTemplate({'user': user});
    const target = document.getElementById("page-header")
    
    target.innerHTML = list;
}