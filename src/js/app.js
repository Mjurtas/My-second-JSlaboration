const news = [
    {
        "headline": "Regeringen skjuter på publiklättnader",
        "author": "Erik Wikén",
        "href": "https://www.svt.se/nyheter/inrikes/regeringen-skjuter-pa-publiklattnader",
        "summary": "Det blir inga lättnader i publikrestriktioner som planerat – åtminstone inte nu. Det beskedet gav regeringen i dag. Orsaken är den återigen ökade smittspridningen i samhället."
    },
    {
        "headline": "Graffitin – så kom den till Sverige genom Public service",
        "author": "",
        "href": "https://www.svt.se/nyheter/lokalt/ost/graffitin-sa-kom-den-till-sverige-genom-public-service",
        "summary": "Det går faktiskt nästan att fastställa på minuten när graffitin kom till Sverige. Se hur det gick till och hur subkulturen har utvecklats sedan dess i videon."
    },
    {
        "headline": "Louise Glück får Nobelpriset i litteratur",
        "author": ["Jakob Runevad Kjellmer", "Lydia Farran-Lee", "Sebastian Folcker"],
        "href": "https://www.svt.se/kultur/nobelpriset-i-litteratur-2020",
        "summary": "Den amerikanska poeten Louise Glück mottar Nobelpriset i litteratur 2020. Hon debuterade med Firstborn 1968 och anses vara en av de mest tongivande samtida amerikanska poeterna."
    },
]

/** 
 * 
 * This is where you add code that will manipulate index.html!
 * 
 * When you open index.html in your browser, this javascript file will be run once. This javascript file is loaded via the script tag in index.html.
 * 
 * Most of what you need is in the lecture slides! For the stuff that isn't, there are very strong hints in the lecture slides at least. 
 * 
 * You can also figure most things out with the MDN docs. 
 * 
 * Or, by using chrome devtools and debugger statements. 
 * 
 * 
 * Good luck :) 
 */

 // EX O1
document.getElementById("ex01").innerHTML = "Doooone!"
console.log("testar!")
//Ex02

var elements = document.getElementsByClassName("ex02");
elements[0].className += " red";

//Ex03

document.querySelector("blockquote").innerHTML = "Nytt citaAt";

// EX04 -
var ul = document.getElementById("shopping-list")
var li = document.createElement("li")
li.appendChild(document.createTextNode("Milk"))
ul.appendChild(li)

//EX05

var div = document.getElementById("news")

for (let i = 0; i < news.length; i++) {

    const arttemplate = `<div class="article">
 
 <h1>${news[i].headline}</h1>

 <h5>${news[i].author}</h5>
 <a href="${news[i].href}">Read More</a>
<p>${news[i].summary}</p>
</div>` 
    var art = document.createElement("div")
    div.innerHTML += arttemplate
}

 //EX06

    let nmbr = 0;
     var triggerhere = document.querySelector("main")
     triggerhere.onclick = () => {
        nmbr += 1;
        document.getElementById("click-counter").innerHTML = nmbr
    }

    //EX07

    var button = document.querySelector("button")
    button.onclick = () => {button.disabled = true}

    //EX08
    document.getElementById("link-to-svt").addEventListener("click", function(event){
        event.preventDefault()
      });


//EX09

document.querySelector("img").src = "https://images.unsplash.com/photo-1578124034087-0be02fb7c0c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"





    


