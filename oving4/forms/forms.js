/**
 * Created by Vemund on 02.10.2015.
 */

function scrollIntoView(eleID) {
    var e = document.getElementById(eleID);
    if (!!e && e.scrollIntoView) {
        e.scrollIntoView();
    }
}

function validateForm() {
    var name = document.forms["it2805"]["name"].value;
    var nameInput = document.forms["it2805"]["name"];
    if (name == null || name == "") {
        nameInput.required="required";
        scrollIntoView("name");
        alert("You must submit a name.");
        return false;
    }
    var email = document.forms["it2805"]["email"].value;
    var emailInput = document.forms["it2805"]["email"];
    if (email == null || email == "" || !/\w+@\w+\.\w+/.test(email)) {
        emailInput.required="required";
        scrollIntoView("email");
        alert("You must submit a valid email address.");
        return false;
    }
    var student = document.forms["it2805"]["year"].value;
    var studentInput = document.forms["it2805"]["year"];
    if (student == null || student == "") {
        studentInput.required="required";
        scrollIntoView("year");
        alert("You must select which type of student you are.");
        return false;
    }
    var startDate = document.forms["it2805"]["startDate"].value;
    if (startDate == null || startDate == "") {
        scrollIntoView("date");
        alert("You must select a date you want the first lecture to be held");
        return false;
    } else {
    }
    var checkboxes=document.getElementsByName("classes[]");
    var okay=false;
    for(var i=0,l=checkboxes.length;i<l;i++)
    {
        if(checkboxes[i].checked)
        {
            okay=true;
            break;
        }
    }
    if(!okay) {
        alert("You must select at least one class you are interested in taking.");
        scrollIntoView("classes");
        return false;
    }
}