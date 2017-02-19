// constants
var DAYS_OF_WEEK = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var STARTING_DAY = 15; // Sunday, Jan. 15
var UPDATE_INTERVAL = 5; // update very five minutes


var CALENDAR = []; // special events
var counter = 0;
var deltaTime = 0;

var Disease; // main object

// time stuff; different events happen depending on stuff
var day, hour, minute;



var numStudents;
var numInfected;
var numSick;


// DOM stuff
var tooltip;
var clock;
var svg, g;

// map is a graph containing connections between
createVectorMap();


pruneCourses();

initialize();




function updateLoop() {

    if (counter % Math.max(1, Math.floor(UPDATE_INTERVAL - deltaTime/60)) === 0) {
        var t1 = performance.now();
        update();
        var t2 = performance.now();
        deltaTime = t2-t1;

        // update clock
        // clock.innerText = ("00" + hour).slice(-2) + ":" + ("00" + minute).slice(-2);
        clock.innerHTML = "Day " + day + "<br>" + ("00" + ((hour+11) % 12 + 1)).slice(-2) + ":00" + (hour >= 12 ? "pm" : "am");
        minute += UPDATE_INTERVAL;
        while (minute >= 60) {
            minute -= 60;
            hour++;
            while (hour >= 24) {
                hour -= 24;
                day++;
            }
        }
    }


    counter++;
    window.requestAnimationFrame(updateLoop);
}


function update() {
    var time = hour*60+minute;
    var timestamp = day*24*60 + time;
    // for every student, check if they have stuff to do
    for (var i = 0; i < BUILDINGS.length; i++) {
        var infectedScoreForBuilding = 0;
        var list = BUILDINGS[i].students;
        for (var j = 0; j < list.length; j++) {
            var student = list[j];
            infectedScoreForBuilding += Math.min(1, student.infected);

            // check if they are finished with their current activity
            if (student.finished <= timestamp) {
                // remove from current building
                BUILDINGS[i].students.splice(j, 1);
                j--; // don't skip over the next student, everyone else has index reduced by 1

                student.chooseNextActivity(day, hour, minute, BUILDINGS[i]);

            }
        }
    }

    // student count and polygon filling
    var studentCount = 0;
    for (var i = 0; i < BUILDINGS.length; i++) {
        studentCount += BUILDINGS[i].students.length
        g.children[i].setAttribute("fill", "#" + ("00" + Math.min(255,Math.floor(12*Math.sqrt(BUILDINGS[i].students.length))).toString(16)).slice(-2) + "0000");
    }


    // update tooltip
    var b = BUILDINGS[parseInt(tooltip.value)].students.length
    tooltip.children[3].innerText = b + " student" + (b !== 1 ? "s" : "");

    // console.log(DAYS_OF_WEEK[day % 7] + ", January " + (15+day) + ", " + hour + ":" + (minute < 10 ? "0" : "") + minute);
}


function initialize() {
    numStudents = 0, numInfected = 0, numSick = 0;
    day = 0, hour = 0, minute = 0;
    // create students
    for (var i = 0; i < BUILDINGS.length; i++) {
        // list of students currently in the building
        BUILDINGS[i].students = [];

        // everyone starts out in their residence hall
        if (BUILDINGS[i].type === "residence") {

            var studentList = [];
            for (var j = 0; j < BUILDINGS[i].population; j++) {
                studentList.push(new Student(BUILDINGS[i]));
                numStudents++;
            }
            BUILDINGS[i].students = studentList;
        }
        // add eateries to buildings
        for (var j = 0; j < FOOD_PLACES.length; j++) {
            if (FOOD_PLACES[j].building === BUILDINGS[i].name) {
                if (BUILDINGS[i].food === undefined) {
                    BUILDINGS[i].food = [];
                }
                BUILDINGS[i].food.push(FOOD_PLACES[j]);
                // fix days stuff for food
                var count = 0;
                var pow2 = 1;
                for (var k = 0; k < 7; k++) {
                    if (FOOD_PLACES[j].days[k]) {
                        count += pow2;
                    }
                    pow2 *= 2;
                }
                FOOD_PLACES[j].days = count;
                FOOD_PLACES[j].building = BUILDINGS[i]; // direct reference, not name
            }
        }

        if (BUILDINGS[i].type === "gym") {
            ATHLETICS_PLACES.push(BUILDINGS[i]);
        }
    }
    // TODO: off-campus students?


    // GUI
    var gui = document.createElement("div");
    gui.setAttribute("id", "gui");
    var upgrades = document.createElement("div");
    upgrades.setAttribute("id", "upgrades");
    upgrades.innerText = "Upgrades";
    upgrades.addEventListener("click", function(e) {
        document.getElementById("upgradeScreen").style.display = "block";
    }, false);
    gui.appendChild(upgrades);
    document.body.appendChild(gui);

    // initialize tooltip
    tooltip = document.createElement("div");
    tooltip.setAttribute("id", "tooltip");
    tooltip.value = "0";
    tooltip.innerHTML = '<h4></h4><div class="category"></div><br><div></div>';
    tooltip.style.display = "none";
    document.body.appendChild(tooltip);


    // initialize clock
    clock = document.createElement("div");
    clock.setAttribute("id", "clock");
    gui.appendChild(clock);

    // infect patient zero!
    randomArrayElement(BUILDINGS[0].students).infected = 0.1;
    numInfected++;

    console.log("initialized");

    window.requestAnimationFrame(updateLoop);
}

function pruneCourses() {
    var oldLength = COURSES.length
    // remove courses that are not suitable
    var new_courses = [];
    for (var i = 0; i < oldLength; i++) {
        var course = COURSES[i];
        if (course.enrolled < 20) { // minimum enrollment
            continue;
        } else if (!course.startH) { // some courses don't have defined locations
            continue;
        }

        // change building string to building ID
        var foundID = false;
        for (var j = 0; j < BUILDINGS.length; j++) {
            if (course.building === BUILDINGS[j].id) {
                foundID = true;
                course.building = j;
                break;
            }
        }

        if (!foundID) {
            continue;

        }
        new_courses.push(course);
    }
    COURSES = new_courses;
    console.log('pruned number of courses from ' + oldLength + ' to ' + COURSES.length);
}



function createVectorMap() {
    var svgns = "http://www.w3.org/2000/svg";

    svg = document.createElementNS(svgns, "svg");
    svg.setAttribute("id", "map");
    svg.setAttribute("baseProfile", "tiny");
    svg.setAttribute("height", "938.997");
    // svg.setAttribute("width", "1131.5007");
    svg.setAttribute("width", "1050");
    svg.setAttribute("version", "1.2");
    svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");

    g = document.createElementNS(svgns, "g");
    for (var i = 0; i < BUILDINGS.length; i++) {
        var polygon = document.createElementNS(svgns, "polygon");

        polygon.setAttribute("fill", "black");
        polygon.setAttribute("stroke", "black");
        polygon.setAttribute("stroke-width", "1");

        polygon.setAttribute("name", BUILDINGS[i].name);
        polygon.setAttribute("buildingID", i);

        var polyString = "";
        for (var j = 0; j < BUILDINGS[i].points.length; j+=2) {
            // each coordinate pair
            polyString += BUILDINGS[i].points[j];
            polyString += "," + BUILDINGS[i].points[j+1];
            if (j+2 < BUILDINGS[i].points.length) {
                polyString += " ";
            }
        }

        polygon.setAttribute("points", polyString)

        // event listeners
        polygon.addEventListener("mouseenter", function(e) {

            // this.setAttribute("fill", "red");
            var building = BUILDINGS[parseInt(this.getAttribute("buildingID"))];


            tooltip.value = parseInt(this.getAttribute("buildingID"));
            tooltip.children[0].innerText = building.name;
            if (building.type === "misc") {
                tooltip.children[1].innerText = "";
            } else {
                tooltip.children[1].innerText = building.type;
            }

            tooltip.children[3].innerText = building.students.length + " student" + (building.students.length !== 1 ? "s" : "");

            tooltip.style.display = "block";

        }, false);
        polygon.addEventListener("mouseleave", function(e) {
            // USE TRANSPARENT, NOT NONE
            // this.setAttribute("fill", "black");
            tooltip.style.display = "none";
        }, false);

        g.appendChild(polygon);
    }

    svg.innerHTML += SVG_DATA;

    svg.appendChild(g);
    document.body.appendChild(svg);

    // create events for moving tooltip
    document.addEventListener("mousemove", function(e) {
        var tooltip = document.getElementById("tooltip");
        if (tooltip) {
            var x = e.pageX + 10;
            var y = e.pageY - 3;
            // shift it to the other side of the mouse if near the right/bottom of the screen
            if (window.innerWidth + window.pageXOffset < x + 210) {
                x -= 225;
            }
            if (window.innerHeight + window.pageYOffset < y + 230) {
                y -= 220;
            }
            tooltip.style.left = x + "px";
            tooltip.style.top  = y + "px";
        }
    }, false);
}
