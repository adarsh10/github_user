var count = 0;
var rowCount = 1;
var userArray = [];


function processDataUpdatecard(returnedData){
    $("#submitBtn").removeClass("disabled");
    $("#userName").val("");
    if(!checkExistingUser(returnedData.id)){
        userArray.push(returnedData);
        generateView(returnedData);
    } else{
        notifyError("User already present");
    }

}

function checkExistingUser(id){
    var flag = false;
    userArray.forEach(function(user){
        if(user.id == id){
            flag = true;
        }        
    });
    return flag;
}

$(function() {
    $("#form_get_data").submit(function(eventObj) {
        eventObj.preventDefault();
        fetchGitHubUser();
    });
});

function fetchGitHubUser(){
    var uName = $("#userName").val();
    if(uName != "" && uName != undefined){
        $("#submitBtn").addClass("disabled");
        try {
            $.ajax({
                type: "GET",
                url: "https://api.github.com/users/" + uName,
                data: false,
                contentType: false,
                processData: false,
                success: processDataUpdatecard,
                error: function () {
                    $("#submitBtn").removeClass("disabled");
                    $("#userName").val("");
                    notifyError("User does not exists!");
                }
            });
        } catch (exception) {
            console.log("exception occured!!" + exception);
        }        
    } else{
        notifyError("Please enter user name");
    }
}

function removeUserCard(userId){
    $("#user_" + userId).remove();
    if(count == 1){
        if(rowCount > 1){
            rowCount --;
        }
    }
    count --;

    for(var i=0 ; i<userArray.length; i++){
        if(userArray[i].id==userId)
        userArray.splice(i);
    }
}

function sortBy(id){
    for(var i=0 ; i<userArray.length - 1; i++){
        for(var j=0 ; j<userArray.length - i - 1; j++){
            if(id == 1) {
                //sort by name
                if(userArray[j].name > userArray[j + 1].name){
                    var temp = userArray[j];
                    userArray[j] = userArray[j+1];
                    userArray[j+1] = temp;
                }                            
            } else if(id == 2){
                if(userArray[j].followers < userArray[j + 1].followers){
                    var temp = userArray[j];
                    userArray[j] = userArray[j+1];
                    userArray[j+1] = temp;
                }
            }
        }
    }
    $("#users").html("");
    count = 0;
    rowCount = 1;

    var parent = $("#users");
    var mainRow = document.createElement("div");
    mainRow.className = "row";
    mainRow.id = "row_no_" + rowCount;
    parent.append(mainRow);

    for(var i=0 ; i<userArray.length; i++){
        generateView(userArray[i])
    }
}

function notifyError(msg){
    Materialize.toastError(msg, 3000, 'rounded');
}

function notifySuccess(msg){
    Materialize.toastSuccess(msg, 3000, 'rounded');
}    

function generateView(returnedData){
    if(count < 4){
        count ++;
        var parent = $("#row_no_" + rowCount);
 
        var subClass = document.createElement("div");
        subClass.className = "col s12 m3";
        subClass.id = "user_" + returnedData.id;
        parent.append(subClass);

        var subcard = document.createElement("div");
        subcard.className = "card";
        subClass.appendChild(subcard);

        var subcardImg = document.createElement("div");
        subcardImg.className = "card-image";
        subcard.appendChild(subcardImg);

        var cardImg = document.createElement("img");
        cardImg.src = returnedData.avatar_url;
        subcardImg.appendChild(cardImg);

        var cardCross = document.createElement("span");
        cardCross.className = "crossBtn";
        cardCross.style = "cursor: pointer";
        cardCross.onclick = function () {
            removeUserCard(returnedData.id);
        };
        subcard.appendChild(cardCross);

        var cardCrossIcon = document.createElement("i");
        cardCrossIcon.className = "material-icons prefix";
        cardCrossIcon.textContent = "clear";
        cardCross.appendChild(cardCrossIcon);

        var subcardText = document.createElement("div");
        subcardText.className = "card-content";
        subcardText.style = "color: #000";
        subcard.appendChild(subcardText);

        var userName = document.createElement("p");
        if(returnedData.name != null){
            userName.textContent = returnedData.name;
        } else{
            userName.textContent = "No Name";
        }
        subcardText.appendChild(userName);

        var userLocation = document.createElement("p");
        if(returnedData.location != null){
            userLocation.textContent = "Location: " + returnedData.location;
        } else{
            userLocation.textContent = "No Location";
        }
        subcardText.appendChild(userLocation);

        var userFollowers = document.createElement("p");
        if(returnedData.followers != null){
            userFollowers.textContent = "Followers: " + returnedData.followers;
        } else{
            userLocation.textContent = "No Followers";
        }

        subcardText.appendChild(userFollowers);
    } else{
        rowCount ++;
        count = 0;

        var parent = $("#users");
        var mainRow = document.createElement("div");
        mainRow.className = "row";
        mainRow.id = "row_no_" + rowCount;
        parent.append(mainRow);

        var subClass = document.createElement("div");
        subClass.className = "col s12 m3";
        subClass.id = "user_" + returnedData.id;
        mainRow.appendChild(subClass);

        var subcard = document.createElement("div");
        subcard.className = "card";
        subClass.appendChild(subcard);

        var subcardImg = document.createElement("div");
        subcardImg.className = "card-image";
        subcard.appendChild(subcardImg);

        var cardImg = document.createElement("img");
        cardImg.src = returnedData.avatar_url;
        subcardImg.appendChild(cardImg);

        var cardCross = document.createElement("span");
        cardCross.className = "crossBtn";
        cardCross.style = "cursor: pointer";
        cardCross.onclick = function () {
            removeUserCard(returnedData.id);
        };
        subcard.appendChild(cardCross);

        var cardCrossIcon = document.createElement("i");
        cardCrossIcon.className = "material-icons prefix";
        cardCrossIcon.textContent = "clear";
        cardCross.appendChild(cardCrossIcon);

        var subcardText = document.createElement("div");
        subcardText.className = "card-content";
        subcardText.style = "color: #000";
        subcard.appendChild(subcardText);

        var userName = document.createElement("p");
        if(returnedData.name != null){
            userName.textContent = returnedData.name;
        } else{
            userName.textContent = "No Name";
        }
        subcardText.appendChild(userName);

        var userLocation = document.createElement("p");
        if(returnedData.location != null){
            userLocation.textContent = "Location: " + returnedData.location;
        } else{
            userLocation.textContent = "No Location";
        }
        subcardText.appendChild(userLocation);

        var userFollowers = document.createElement("p");
        if(returnedData.followers != null){
            userFollowers.textContent = "Followers: " + returnedData.followers;
        } else{
            userLocation.textContent = "No Followers";
        }
        subcardText.appendChild(userFollowers);
    }

}       