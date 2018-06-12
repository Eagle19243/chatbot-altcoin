const BaseURL = "https://api.dialogflow.com/v1/query?v=20170712&";
const AccessToken = "5d8696da838744a7a30ee2912c790c38";

$(document).ready(function(){
    $('#query').on('keyup keypress', function(e){
        var keyCode = e.keyCode || e.which;
        var text = $(this).val();
        if (keyCode === 13) {
			if(text == "" ||  $.trim(text) == '') {
				e.preventDefault();
				return false;
			} else {
				setUserResponse(text);
                sendRequest(text);
                scrollToBottomOfResult();
                $(this).val("");
				e.preventDefault();
				return false;
			}
		}
    });

    $(document).on('click', '.msg-btn', function(){
        var text = $(this).text();
		setUserResponse(text);
        sendRequest(text);
        scrollToBottomOfResult();
    });
});

// ----------- Session Init -------------
function getSession(){
    var session = null;

    if (sessionStorage.getItem('session')) {
        session = sessionStorage.getItem('session');
    } else {
        var randomNo = Math.floor((Math.random() * 1000) + 1);
        // get Timestamp
        var timestamp = Date.now();
        // get Day
        var date = new Date();
        var weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";
        var day = weekday[date.getDay()];
        // Join random number+day+timestamp
        var session_id = randomNo+day+timestamp;
        // Put the object into storage
        sessionStorage.setItem('session', session_id);
        session = sessionStorage.getItem('session');
    }

    return session;
}

// ------------ Send Request to DialogFlow-----------
function sendRequest(text){
    var sessionId = getSession();
    
    $.ajax({
        type: "GET",
        url: BaseURL + "query=" + text + "&lang=en&sessionId=" + sessionId,
        contentType: "application/json",
        dataType: "json",
        headers: {
            "Authorization": "Bearer " + AccessToken
        },
        success: function(data) {
            processResponse(data);
        }
    });
}

// ------------ Process Response from DialogFlow-------------
function processResponse(data){
    var action = data.result.action;

    if (!data.result.fulfillment.messages) return;
    if (data.result.fulfillment.messages.length == 0) return;
    if (!data.result.fulfillment.messages[0].payload) {
        setBotResponse([{
            "type" : "text",
            "value" : "Sorry, I couldn't get that. Please ask any other question."
        }]);
    } else {
        setBotResponse(data.result.fulfillment.messages[0].payload.body);
    }
}

// ------------- Set Bot Response in Result --------------
function setBotResponse(messages){
    if (messages.length == 0) return;

    var content = '<div class="server-response">';

    messages.forEach(function(message){
        if (message.type == "text") {
            content += getTextContent(message.value);
        } else if (message.type == "button") {
            content += getButtonContent(message.value);
        } else if (message.type == "link") {
            content += getLinkContent(message.value);
        }
    });

    content += '</div>';

    $('#result').append(content);
    scrollToBottomOfResult();
}

function getTextContent(val){
    var content = '<div class="msg-text">' + val + '</div>';
    return content;
}

function getButtonContent(val){
    var content = '<span class="msg-btn">' + val + '</span>';
    return content;
}

function getLinkContent(val){
    var content = '<a href="' + val + ' class="msg-link" target="_blank">' + val + '</a>';
    return content;
}

// ------------- Set User Response in Result --------------
function setUserResponse(val){
    var content = '<div class="user-request">' + val + '</div>';
    $('#result').append(content);
}

//---------------------------------- Scroll to the Bottom of the Result -------------------------------
function scrollToBottomOfResult() {
    var terminalResult = document.getElementById('result');
    $('#resultWrapper').scrollTop(terminalResult.scrollHeight);
}

