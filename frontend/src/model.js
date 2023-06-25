//model.js This is my model module, in which is contians all functions relating to collecting and storing data for the website
//Made By Luke Jennings, Student ID: 46412394

export {Model}
import * as views from "./views.js"

const Model = {
    dataStored:{
        fetchedDataArray: [],
        content : {
            'aboutUs':{"pageInfo": "Bob's Jobs is a revolution in career planning brought to you by Bob Bobalooba himself!"},
            'appHelp':{"pageInfo": "Be sure to he honest in your application!"}
        }
    },
    loadRecentJobs: function (){
        fetch("http://localhost:1337/api/jobs?sort[0]=publishedAt%3Adesc&populate=*")
        .then(
            function(response){
                return response.json();
            }
    
        )
        .then(
            function(data){
                Model.dataStored.fetchedDataArray = data;
                let event = new CustomEvent("recentJobLoaded")
                window.dispatchEvent(event)
            }
        )
    },
    loadSingleJob: function(pathInfo){
        fetch("http://localhost:1337/api/jobs?populate=*&filters[id][$eq]=" + pathInfo.id)
        .then(
            function(response){
                return response.json();
            }
    
        )
        .then(
            function(data){
                Model.dataStored.fetchedDataArray = data;
                let event = new CustomEvent("singleJobLoaded")
                window.dispatchEvent(event)
            }
        )
    },
    loadSearchedJobs: function(searchItem){
        fetch("http://localhost:1337/api/jobs?populate=*&filters[description][$containsi]=" + searchItem.id)
        .then(
            function(response){
                return response.json();
            }
    
        )
        .then(
            function(data){
                Model.dataStored.fetchedDataArray = data;
                let event = new CustomEvent("searchLoaded")
                window.dispatchEvent(event)
            }
        )
    },
    loadJobsForCompany: function(pathInfo){
        fetch("http://localhost:1337/api/jobs?populate=*&filters[company][id][$eq]=" + pathInfo.id)
        .then(
            function(response){
                return response.json();
            }
    
        )
        .then(
            function(data){
                Model.dataStored.fetchedDataArray = data;
                let event = new CustomEvent("jobLoadedCompanyView")
                window.dispatchEvent(event)
            }
        )
    },
    getDataArray: function(){
        console.log("called")
        if(Model.dataStored.fetchedDataArray){
            console.log(Model.dataStored.fetchedDataArray)
            return Model.dataStored.fetchedDataArray
        } else {
            console.log("hello")
            return null
        }
    }
}