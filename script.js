window.onload = function(){
    let title = document.getElementById("title");
    title.style.top = "25px";
    title.style.opacity = "1";
    
    let hr = document.getElementById("hr");
    hr.style.opacity = "1";

    let box = document.getElementById("box");
    box.style.top = "60%";
    box.style.opacity = "1";
}
function nextPage(){
    //first page vanish

    let nextPage = document.getElementById("nextPage");
    nextPage.style.opacity = "0";
    nextPage.style.left = "110%";

    let title = document.getElementById("title");
    title.style.opacity = "0";
    title.style.top = "-100px";

    let hr = document.getElementById("hr");
    hr.style.opacity = "1";

    let box = document.getElementById("box");
    box.style.opacity = "0";
    box.style.top = "125%";

    //second page appear

    let updateTitle = document.getElementById("updatetitle");
    updateTitle.style.opacity = "1";
    updateTitle.style.top = "25px";

    let update = document.getElementById("update");
    update.style.opacity = "1";
    update.style.top = "150px";

    let hr1 = document.getElementById("hr1");
    hr1.style.opacity = "1";

    let memberTitle = document.getElementById("membertitle");
    memberTitle.style.opacity = "1";
    memberTitle.style.top = "225px";

    let hr2 = document.getElementById("hr2");
    hr2.style.opacity = "1";

    let members = document.getElementById("members");
    members.style.opacity = "1";
    members.style.top = "475px";

    let previousPage = document.getElementById("previousPage");
    previousPage.style.opacity = "1";
    previousPage.style.top = "88%";
}
function previousPage(){
    //first page appear

    let nextPage = document.getElementById("nextPage");
    nextPage.style.opacity = "1";
    nextPage.style.left = "94%";

    let title = document.getElementById("title");
    title.style.opacity = "1";
    title.style.top = "25px";

    let hr = document.getElementById("hr");
    hr.style.opacity = "1";

    let box = document.getElementById("box");
    box.style.opacity = "1";
    box.style.top = "60%";

    //second page vanish

    let updateTitle = document.getElementById("updatetitle");
    updateTitle.style.opacity = "0";
    updateTitle.style.top = "-100px";

    let update = document.getElementById("update");
    update.style.opacity = "0";
    update.style.top = "200px";

    let hr1 = document.getElementById("hr1");
    hr1.style.opacity = "0";

    let memberTitle = document.getElementById("membertitle");
    memberTitle.style.opacity = "0";
    memberTitle.style.top = "300px";

    let hr2 = document.getElementById("hr2");
    hr2.style.opacity = "0";

    let members = document.getElementById("members");
    members.style.opacity = "0";
    members.style.top = "600px";

    let previousPage = document.getElementById("previousPage");
    previousPage.style.opacity = "0";
    previousPage.style.top = "100%";

}
