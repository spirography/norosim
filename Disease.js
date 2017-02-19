var DISEASE_NAME = "Norovirus"; // of course >_<



var UPGRADES = [
    {
        name: "",
        desc: "",
        cost: 0,
        xPos: 3,
        yPos: 3,
    },
    {
        name: "Nausea",
        desc: "Irritates the stomach lining, and increases the chance of infection when kissing.",
        cost: 2,
        xPos: 3,
        yPos: 2,
    },
    {
        name: "Coughing",
        desc: "Irritates the stomach lining, and increases the chance of infection when kissing.",
        cost: 2,
        xPos: 3,
        yPos: 1,
    },
    {
        name: "Rash",
        desc: "The skin breaks out in hives, slightly increasing infectivity.",
        cost: 4,
        xPos: 4,
        yPos: 0,
    },
    {
        name: "Insomnia",
        desc: "Students become less able to sleep.  Lowers productivity, and since college students are insomniacs anyways, is not as likely to be noticed as other symptoms.",
        cost: 4,
        xPos: 2,
        yPos: 1,
    },
    {
        name: "Vomiting",
        desc: "The oral expulsion of stomach contents serves as a messy means of spreading the infection.",
        cost: 6,
        xPos: 2,
        yPos: 0,
    },
    {
        name: "Pneumonia",
        desc: "Fluid buildup in lungs causes coughing and sneezing.",
        cost: 6,
        xPos: 1,
        yPos: 1,
    },
    {
        name: "Paranoia",
        desc: "Causes delusions and mental disorders, causing distrust and discord.",
        cost: 8,
        xPos: 5,
        yPos: 4,
    },
    {
        name: "Hallucinations",
        desc: "Auditory and visual illusions further increase the likelihood of victims developing delirium.",
        cost: 10,
        xPos: 5,
        yPos: 5,
    },
    {
        name: "Insanity",
        desc: "Victims go mad and attack others.  Cure progress greatly slowed.",
        cost: 25,
        xPos: 6,
        yPos: 5,
    },


    {
        name: "Food I",
        desc: DISEASE_NAME + " spreads much more easily in food, increasing the chance of infection in cafeterias.",
        cost: 8,
        xPos: 4,
        yPos: 3,
    },
    {
        name: "Food II",
        desc: "Now resilient enough to survive in cooked food, greatly increasing infection rates in cafeterias.",
        cost: 14,
        xPos: 5,
        yPos: 2,
    },





    {
        name: "Drug I",
        desc: "Hardens the infection against medicine, making treatments less effective and causing cure development to take longer.",
        cost: 5,
        xPos: 2,
        yPos: 3,
    },
    {
        name: "Drug II",
        desc: "The virus becomes even more resistant to treatment.  Cure progress is slowed significantly.",
        cost: 10,
        xPos: 2,
        yPos: 4,
    },
    {
        name: "Drug III",
        desc: DISEASE_NAME + " is now a superbug.  Treatment effectiveness is near zero and creating a cure is nearly impossible.",
        cost: 18,
        xPos: 1,
        yPos: 4,
    },
    {
        name: "Rumormongering I",
        desc: "Antibiotics are useless against viral infections like " + DISEASE_NAME + ", but gossip causes doctors to prescribe them anway, inceasing the potency of bacteria and weakening victim's immune systems further.",
        cost: 8,
        xPos: 4,
        yPos: 4,
    },
    {
        name: "Rumormongering II",
        desc: "Firebrands start blaming RIT for the outbreak of " + DISEASE_NAME + ", shifting the administration's attention and slowing their attempts at a cure.",
        cost: 12,
        xPos: 3,
        yPos: 5,
    },
];





var Disease = new Disease(DISEASE_NAME);

function Disease(name) {
    this.name = name;

    // main disease attributes
    this.infectivity = 0; // how quickly the disease spreads
    this.severity = 0; // how noticable the disease is
    this.lethality = 0; // how severe the disease is


    this.money = 0; // points used to buy upgrades

    // disease resistances
    this.resCold = 0;
    this.resHot = 0;
    this.resDrug = 0;

    this.upgrades = []; // list of bought upgrades
}

createUpgradesScreen();


function createUpgradesScreen(evt) {
    console.log(evt);
    var div = document.createElement("div");
    div.setAttribute("id", "upgradeScreen");
    var sidebar = document.createElement("div");
    sidebar.setAttribute("id", "sidebar");
    sidebar.innerHTML = '<h2></h2><p></p><div id="purchase"></div>';
    var svgns = "http://www.w3.org/2000/svg";

    grid = document.createElementNS(svgns, "svg");
    grid.setAttribute("id", "grid");
    grid.setAttribute("height", "300");
    grid.setAttribute("width", "400");

    // draw hexagons by getting six points along circumference of circle
    var radius = 30;
    var offset = (Math.sqrt(3) * radius) / 2;

    for (var m = 0; m < UPGRADES.length; m++) {
        if (UPGRADES[m].xPos !== undefined && UPGRADES[m].yPos !== undefined) {
            var row = UPGRADES[m].xPos;
            var col = UPGRADES[m].yPos;

            x = 45 + offset * row * 2;
            y = 35 + offset * col * Math.sqrt(3);
            if (col % 2 !== 0) x += offset;

            var polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
            polygon.style.fill = "black";
            polygon.style.stroke = "black";
            polygon.style.strokeWidth = "4px";
            polygon.setAttribute("index", m);

            // draw points
            var points = [];
            for (var k = 0; k < Math.PI*2; k += Math.PI/3) {
                points.push((x + radius * Math.sin(k)) + "," + (y + radius * Math.cos(k)));
            }
            polygon.setAttribute("points", points);

            grid.appendChild(polygon);

        }
    }
    // when an upgrade is purchased, add it to the upgrade list and reveal more upgrades in the tree
    sidebar.addEventListener("click", function(event) {
        var upgrade = UPGRADES[parseInt(this.value)];

        Disease.upgrades.push(upgrade);
        Disease.money -= upgrade.cost;

        var row = upgrade.xPos, col = upgrade.yPos;

        // color in purchased upgrade
        var polygons = document.getElementById("grid").children;
        polygons[parseInt(this.value)].style.fill = "red";

        // reveal surrounding upgrades
        for (var j = col-1; j <= col+1; j++) {
            for (var i = row-(col%2===0 || j===col); i <= row+(col%2===1 || j===col); i++) {
                for (var n = 0; n < UPGRADES.length; n++) {
                    if (UPGRADES[n].xPos === i && UPGRADES[n].yPos === j) {
                        // check if not bought
                        var isBought = false;
                        for (var m = 0; m < Disease.upgrades.length; m++) {
                            if (Disease.upgrades[m] == UPGRADES[n]) {
                                isBought = true;
                                break;
                            }
                        }




                        // unpurchased polygons are revealed
                        if (!isBought) {
                            polygons[n].style.fill = "#FF7777";
                            // events
                            polygons[n].addEventListener("click", function (event) {
                                var sidebar = document.getElementById("sidebar");
                                var upgrade = UPGRADES[parseInt(this.getAttribute("index"))];
                                sidebar.value = this.getAttribute("index");
                                sidebar.children[0].innerText = upgrade.name + "\n" + upgrade.xPos + ", " + upgrade.yPos;
                                sidebar.children[1].innerText = upgrade.desc;
                                sidebar.children[2].innerText = "Cost: " + upgrade.cost;
                                sidebar.children[2].style.display = "block";
                            }, false);
                        }


                    }
                }
            }
        }




    }, false);

    div.appendChild(grid);
    div.appendChild(sidebar);
    document.body.appendChild(div);

    // set starting upgrade to be purchased automatically
    sidebar.value = 0;
    sidebar.dispatchEvent(new MouseEvent("click", {view: window, bubbles: true, cancelable: true}));
}
