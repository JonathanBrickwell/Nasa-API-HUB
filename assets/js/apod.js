$(document).ready(function() {

    const apodURL = "https://api.nasa.gov/planetary/apod?api_key=oAbFeFwglLmUTUFWWYHXm1Xy61sSZmROULa45j72";
    $.ajax({
        url: apodURL,
        type: "GET",
        success: function(result) {
            retrieveAPODData(result);
        },
        error: function(error) {
            console.log(`Error: ${error}`);
        }
    });

    function retrieveAPODData(result) {
        setImage(result.url);
        renderCredits(result.copyright, result.date);
        renderImageDecription(result.explanation, result.title);
    }
    
    function setImage(img) {
        var html = '';
        html += '<img src="' + img + '" class="img-fluid"/>';
        renderImage(html);
    }

    function renderImageDecription(description, title) {
        document.querySelector('.image-description').innerHTML = description;
        document.querySelector('.image-header').innerHTML = title;
    }

    function renderCredits(credits, date) {
        document.querySelector('.credits').innerHTML = "Copyright: " + credits + ", " + date;
    }

    function renderImage(content) {
        document.querySelector('.image-container').innerHTML = content;
    }
});