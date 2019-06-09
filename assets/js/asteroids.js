$(document).ready(function() {

    var asteroidsURL = "https://api.nasa.gov/neo/rest/v1/feed?start_date=2019-01-01&end_date=2019-01-01&api_key=oAbFeFwglLmUTUFWWYHXm1Xy61sSZmROULa45j72"; 

    $.ajax({
        url: asteroidsURL,
        type: "GET",
        success: function(result) {
            mapAsteroidData(result);
        },
        error: function(error) {
            console.log(`Error: ${error}`);
        }
    });

    function mapAsteroidData(result) {
        var nearEarthObjects = result.near_earth_objects;
        var noOfAsteroids;

        for(var i in nearEarthObjects) {
            noOfAsteroids = nearEarthObjects[i];
        }

        setAsteroidData(noOfAsteroids);
    }

    function setAsteroidData(asteroids) {

        var arrayOfAsteroids = asteroids;
        var html = '';

        html += '<table class="table table-dark">';
        html += '<thead>';
        html += '<tr>';
        html += '<th scope="col">#</th>';
        html += '<th scrope="col">Name</th>';
        html += '<th scrope="col">Potentially Dangerous</th>';
        html += '</tr>';
        html += '</thead>';
        html += '<tbody>';
        for(var i = 0; i < arrayOfAsteroids.length; i++) {
            html += '<tr>';
            html += '<th scope="row">' + i + '</th>';
            html += '<td>' + arrayOfAsteroids[i].name + '</td>';
            html += '<td>' + arrayOfAsteroids[i].is_potentially_hazardous_asteroid + '</td>';
            html += '</tr>';
        }
        html += '</tbody>';
        html += '</table>';

        render(html);
    }

    function render(list) {
        document.querySelector('.asteroid-info-container').innerHTML = list;
    }

});