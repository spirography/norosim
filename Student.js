var MAJORS = [{code:"AAS",name:"African & African-American Studies"},
              {code:"ACC",name:"Accounting"},{code:"ACM",name:"Accompanying"},{code:"ACY",name:"Accompanying Class"},{code:"AEC",name:"Applied Economics"},{code:"AH",name:"Art & Art History-Art History"},{code:"AH",name:"Art History"},{code:"ALC",name:"Arts Leadership Curriculum"},{code:"AME",name:"Audio Music Engineering"},{code:"AMS",name:"American Studies"},{code:"AMU",name:"Applied Music Lessons: Summer"},{code:"ANA",name:"Anatomy"},{code:"ANR",name:"Anthropology"},{code:"ANT",name:"Anthropology"},{code:"APS",name:"Applied Statistics"},{code:"ARA",name:"Religion & Classics - Arabic"},{code:"ASL",name:"American Sign Language"},{code:"AST",name:"Astronomy"},{code:"BCH",name:"Biochemistry"},{code:"BCS",name:"Brain and Cognitive Sciences"},{code:"BIO",name:"Biology"},{code:"BME",name:"Biomedical Engineering"},{code:"BPH",name:"Biophysics"},{code:"BPP",name:"Business Environment & Public Policies"},{code:"BRN",name:"BRN"},{code:"BSI",name:"Behavioral Science in Industry"},{code:"BSN",name:"Bassoon"},{code:"BST",name:"Biostatistics"},{code:"CAS",name:"College of Arts & Science"},{code:"CED",name:"CED"},{code:"CGR",name:"Religion & Classics - Classical Greek"},{code:"CHB",name:"Chamber Music"},{code:"CHE",name:"Chemical Engineering"},{code:"CHI",name:"Modern Languages & Cultures - Chinese"},{code:"CHM",name:"Chemistry"},{code:"CIS",name:"Computers & Information Systems"},{code:"CL",name:"Clarinet"},{code:"CLA",name:"Religion & Classics - Classical Studies"},{code:"CLT",name:"Modern Languages & Cultures - Comparative Literature"},{code:"CMP",name:"Composition"},{code:"CND",name:"Conducting"},{code:"CSC",name:"Computer Science"},{code:"CSP",name:"Clinical and Social Sciences in Psychology"},{code:"CVS",name:"Cardiovascular Biology & Disease"},{code:"CVS",name:"Center for Visual Science"},{code:"DAN",name:"Dance"},{code:"DBL",name:"Double Bass"},{code:"DCD",name:"Community Dentistry"},{code:"DEN",name:"Dentistry"},{code:"DGD",name:"DGD Courses"},{code:"DGD",name:"General Dentistry"},{code:"DH",name:"Digital Humanities"},{code:"DMS",name:"Digital Media Studies"},{code:"DOM",name:"Oral & Maxillofacial Surgery"},{code:"DOM",name:"Oral&Max Surgery"},{code:"DOR",name:"Orthodontics"},{code:"DPD",name:"Pediatric Dentistry"},{code:"DPD",name:"Pedodontics"},{code:"DPR",name:"Periodontics"},{code:"DPS",name:"Prosthodintics"},{code:"DSC",name:"Data Science & Computation"},{code:"DTR",name:"2yr Training Pediatric Dentistry"},{code:"EAS",name:"Engineering and Applied Sciences"},{code:"ECE",name:"Electrical and Computer Engineering"},{code:"ECM",name:"Electronic Commerce"},{code:"ECO",name:"Economics"},{code:"ED",name:"ED Courses"},{code:"EDD",name:"Eastman Department of Dentistry"},{code:"EDE",name:"EDE Courses"},{code:"EDF",name:"EDF Courses"},{code:"EDU",name:"EDU Courses"},{code:"EES",name:"Earth & Environmental Science"},{code:"EI",name:"Eastman Immersion"},{code:"EIC",name:"Eastman Initiatives Curriculum"},{code:"ENG",name:"English"},{code:"ENS",name:"Ensemble"},{code:"ENT",name:"Entrepreneurship"},{code:"ERG",name:"Alternative Energy"},{code:"ESL",name:"English as a Second Language"},{code:"ESM",name:"Eastman School of Music"},{code:"ETH",name:"Ethnomusicology"},{code:"EUP",name:"Euphonium"},{code:"EXP",name:"Executive Development Program"},{code:"FIN",name:"Finance"},{code:"FL",name:"Flute"},{code:"FMS",name:"Film and Media Studies"},{code:"FR",name:"French"},{code:"FR",name:"Modern Languages & Cultures - French"},{code:"FS",name:"Film Studies"},{code:"FWS",name:"Freshman Writing Seminar"},{code:"GBA",name:"General Business Administration"},{code:"GEN",name:"Genetics"},{code:"GER",name:"German"},{code:"GER",name:"Modern Languages & Cultures - German"},{code:"GPR",name:"General Practice Residency"},{code:"GRK",name:"Religion & Classics - Greek"},{code:"GSW",name:"Gender, Sexuality & Women's Studies"},{code:"GTC",name:"Guitar Class"},{code:"GTR",name:"Guitar"},{code:"HEB",name:"Religion & Classics - Hebrew"},{code:"HIS",name:"History"},{code:"HLS",name:"Health and Society"},{code:"HPC",name:"Harpsichord"},{code:"HRN",name:"Horn"},{code:"HRP",name:"Harp"},{code:"HSE",name:"HSE Courses"},{code:"HSM",name:"Health Science Management"},{code:"HUM",name:"Humanities"},{code:"IND",name:"Interdepartmental"},{code:"INS",name:"Summer Institutes"},{code:"IR",name:"International Relations"},{code:"IT",name:"Italian"},{code:"IT",name:"Modern Languages & Cultures - Italian"},{code:"JAZ",name:"Jazz Lessons"},{code:"JCM",name:"Jazz Study & Contemporary Media"},{code:"JPN",name:"Modern Languages & Cultures - Japanese"},{code:"JST",name:"Judaic Studies"},{code:"KBD",name:"Keyboard"},{code:"KOR",name:"Modern Languages & Cultures - Korean"},{code:"LAM",name:"Lab Animal Medicine"},{code:"LAT",name:"Religion & Classics - Latin"},{code:"LAW",name:"Business Law"},{code:"LIN",name:"Linguistics"},{code:"LTS",name:"Literary Translation Studies"},{code:"LUT",name:"Lute"},{code:"MBI",name:"Microbiology"},{code:"ME",name:"Mechanical Engineering"},{code:"MED",name:"Medicine"},{code:"MGC",name:"Managerial Communications"},{code:"MHB",name:"Medical Humanities and Bioethics"},{code:"MHS",name:"Music History"},{code:"MIF",name:"Medical Informatics"},{code:"MKT",name:"Marketing"},{code:"MSC",name:"Materials Science"},{code:"MSM",name:"Management Science Models"},{code:"MTH",name:"Mathematics"},{code:"MUE",name:"Music Teaching & Learning"},{code:"MUR",name:"Music"},{code:"MUY",name:"Musicology"},{code:"NAV",name:"Naval Science"},{code:"NLX",name:"Leadership in Health Care Systems"},{code:"NSC",name:"Neuroscience"},{code:"NSG",name:"Center for Lifelong Learning"},{code:"NUR",name:"Nursing"},{code:"OB",name:"Oboe"},{code:"OMG",name:"Operations Management"},{code:"OP",name:"Opera"},{code:"OPT",name:"Optics"},{code:"ORB",name:"ORB Courses"},{code:"ORC",name:"Orchestration"},{code:"ORG",name:"Organ"},{code:"PA",name:"Piano"},{code:"PCL",name:"Piano Class"},{code:"PEC",name:"Wallis Institute of Political Economics"},{code:"PED",name:"Pedagogy"},{code:"PH",name:"Public Health"},{code:"PHL",name:"Philosophy"},{code:"PHM",name:"New Department/Subject"},{code:"PHP",name:"Pharmacology & Physiology"},{code:"PHY",name:"Physics"},{code:"PIC",name:"Piccolo"},{code:"PM",name:"Preventive Medicine"},{code:"POL",name:"Modern Languages & Cultures - Polish"},{code:"POR",name:"Modern Languages & Cultures - Portuguese"},{code:"PPC",name:"Photographic Preservation & Collections Management"},{code:"PRC",name:"Percussion"},{code:"PRF",name:"Performance"},{code:"PSC",name:"Political Science"},{code:"PSI",name:"Psychiatry"},{code:"PSY",name:"Psychology"},{code:"PTH",name:"Pathology"},{code:"RAD",name:"Radiology"},{code:"REL",name:"Religion and Classics"},{code:"RST",name:"Modern Languages & Cultures - Russian Studies"},{code:"RUS",name:"Modern Languages & Cultures - Russian"},{code:"RUS",name:"Russian"},{code:"SA",name:"Art & Art History-Studio Arts"},{code:"SAB",name:"Study Abroad"},{code:"SAX",name:"Saxophone"},{code:"SKT",name:"Religion & Classics - Sanskrit"},{code:"SMU",name:"Sacred Music"},{code:"SOC",name:"Sociology"},{code:"SP",name:"Modern Languages & Cultures - Spanish"},{code:"STR",name:"Managerial Economics"},{code:"STR",name:"Strings"},{code:"STT",name:"Statistics"},{code:"TBA",name:"Tuba"},{code:"TBN",name:"Trombone"},{code:"TCS",name:"TEAM Computer Science"},{code:"TEB",name:"TEAM Biomedical Engineering"},{code:"TEC",name:"TEAM Chemical Engineering"},{code:"TEE",name:"TEAM Electrical Engineering"},{code:"TEM",name:"Tech Entreprenurshp Management"},{code:"TEM",name:"Technical Entrepreneurship Management"},{code:"TEO",name:"TEAM Optics"},{code:"TH",name:"Theory"},{code:"TME",name:"TEAM Mechanical Engineering"},{code:"TMJ",name:"Temp, Bular JNT Disorder"},{code:"TMJ",name:"Temporomandibular Jnt Disrdr"},{code:"TOX",name:"Toxicology"},{code:"TPT",name:"Trumpet"},{code:"TUR",name:"Religion & Classics - Turkish"},{code:"VCC",name:"Voice Class"},{code:"VCE",name:"Voice"},{code:"VCL",name:"Violoncello"},{code:"VLA",name:"Viola"},{code:"VLN",name:"Violin"},{code:"VSR",name:"Visiting Student In Residence"},{code:"WLN",name:"Wellness"},{code:"WMT",name:"Wealth Management"},
              {code:"WRT",name:"Writing Program"},
              {code:"WST",name:"Women's Studies"}];


var TRAITS = [
    "RELIGIOUS", "ARTSY", "SPIRITED", "HEDONISTIC", "STUDIOUS",
];

function Student(residence) {
    // census information
    this.nameF = FNAMES[Math.floor(Math.random()*FNAMES.length)];
    this.nameL = LNAMES[Math.floor(Math.random()*LNAMES.length)];
    this.year = 1 + Math.floor(Math.random()*4); // 1 = freshman, 2 = sophomore, etc

    this.infected = 0; // slowly progresses (0-1 is incubation period, anything further is full blown infection)

    // personality
    // affects how student spends their free time
    // each one is a value from 0 to 1
    this.athleticism = Math.random(); // spends time in gyms, higher scores are on sports teams and add practices to schedule, less likely to get sick
    this.perserverence = Math.random(); // spends time studying outside of class
    this.sociability = Math.random(); // goes to parties and other events


    this.traits = 0; // traits affect student hobbies
    if (Math.random() < 0.3) {
        traits = Math.floor(Math.random()*TRAITS.length);
    }

    // academic information
    this.dorm = residence; // direct reference to the student's dorm
    this.major = MAJORS[Math.floor(Math.random()*MAJORS.length)]; // students randomly assigned majors, influences course selection
    this.schedule = []; // every student has a schedule of courses
    // default ot waking up at 8:00AM on the first day
    if (day === undefined) {
        this.finished = 8*60; // time (hour*100+minute) that student is done with their current activity
    } else {
        this.finished = day*24*60 + 8*60; // time (hour*100+minute) that student is done with their current activity
    }


    // number of courses a student is taking, higher perserverence means more
    var n = Math.floor(3 + Math.sqrt(this.perserverence) * 2 + Math.random());
    for (var i = 0; i < n; i++) {
        var course;
        do {
            course = COURSES[Math.floor(Math.random()*COURSES.length)];
        } while (course.enrolled < 15 || course.room === null);
        // make sure course doesn't conflict with remaining courses
        var conflicts = false;
        for (var j = 0; j < this.schedule.length; j++) {
            if (this.schedule.days & course.days) { // only need to check for conflicts on courses with overlapping days
                continue;
            }
            var s1 = this.schedule[j].startH * 100 + this.schedule[j].startM;
            var e1 = this.schedule[j].endH * 100 + this.schedule[j].endM;
            var s2 = course.startH * 100 + course.startM;
            var e2 = course.endH * 100 + course.endM;
            if (s1 <= e2 && e1 <= s2) {
                conflicts = true;
                break;
            }
        }
        if (conflicts) {
            i--;
        } else {
            this.schedule.push(course);
        }
    }

    // does the student have the trait?

    // get the next class a student has to attend from a certain time
    this.nextClass = function(day, hour, minute) {
        var dayOfWeek = day % 7;
        var course = null;
        for (var i = 0; i < this.schedule.length; i++) {
            if (Math.pow(2, dayOfWeek) & this.schedule[i].days) { // check if the class is held on the same day
                if (this.schedule[i].startH*60 + this.schedule[i].startM > hour*60+minute) { // classes must be after the current time
                    if (course === null) {
                        course = this.schedule[i];
                    } else { // compare
                        if (course.startH > this.schedule[i].startH) {
                            course = this.schedule[i];
                        } else if (course.startM > this.schedule[i].startM) {
                            course = this.schedule[i];
                        }
                    }
                }

            }
        }
        return course;
    }

    // assign the student to do their next task
    this.chooseNextActivity = function(day, hour, minute, prevBuilding) {
        var timestamp = day*24*60 + hour*60 + minute;
        // check when their next class that day is
        var next = this.nextClass(day, hour, minute);
        if (next !== null) { // has a class
            // may do stuff in between classes
            var nextTime = day*24*60 + next.startH*60+next.startM;

            // DEFAULT BEHAVIOR: GO TO RUSH RHEES
            if (nextTime - timestamp > 10) {
                // go to random building
                randomArrayElement(BUILDINGS).students.push(this);
                this.finished = nextTime - 5;
                return;
            } else {
                // go to class
                BUILDINGS[next.building].students.push(this);
                this.finished = day*24*60 + next.endH*60+next.endM;
                return;
            }
        } else { // is free for the rest of the day
            if (timestamp >= day*24*60 + 23*60 || hour < 5) { // late at night: go to sleep
                // sleep until the next morning
                this.dorm.students.push(this);
                this.finished = timestamp + 8*60;
                return;
            } else {
                // free time

                // if student hasn't eaten in a while, get some food
                if ((6 < hour && hour < 9) || (12 < hour && hour < 14) || (17 < hour && hour < 20)) {
                    // check if current building has food
                    if (prevBuilding.food !== undefined) {
                        // pick random food place in the building
                        var food = randomArrayElement(prevBuilding.food);
                        // check if Open
                        if (food.days & (day % 7)) {
                            // eat there
                            prevBuilding.students.push(this);
                            this.finished = timestamp + 40; // eat for 40 minutes
                            return;
                        } else { // just eat at a random place
                            food = randomArrayElement(FOOD_PLACES);
                            food.building.students.push(this);
                            this.finished = timestamp + 50;
                            return;
                        }
                    } else {
                        food = randomArrayElement(FOOD_PLACES);
                        food.building.students.push(this);
                        this.finished = timestamp + 50;
                        return;
                    }
                }

                else if (day % 7 === 0 || day % 7 === 1) { // certain things only happen on the weekends
                    if (14 < hour && hour < 16) { // sports games
                        if (Math.random() + (this.traits >> 2 & 1)/2 > 0.8) {
                            // randomly choose one of the gyms
                            randomArrayElement(ATHLETICS_PLACES).students.push(this);
                            this.finished += 2*60;
                            return;
                        }
                    } else if (hour > 20) {
                        if (Math.random() + this.sociability + (this.traits >> 3 & 1)/2 > 1.2) {
                            // get plastered at a frat house
                            BUILDINGS[randomArrayElement(FRATS)].students.push(this);
                            this.finished = 3*60 + Math.random()*180;
                            return;
                        } else {
                            // go do dorm and sleep
                            this.dorm.students.push(this);
                            this.finished = day*24*60 + 23*60 + 5;
                            return;
                        }
                    }
                } else {
                    // athletic students work out
                    if (Math.random() + this.athleticism + (this.traits >> 2 & 1)/2 > 1.4) {
                        // randomly choose one of the gyms
                        randomArrayElement(ATHLETICS_PLACES).students.push(this);
                        this.finished += 2*60;
                        return;
                    } else if (Math.random() + this.perserverence + (this.traits >> 4)/2 > 1.3) {
                        // just go to a random building and study
                        randomArrayElement(BUILDINGS).students.push(this);
                        this.finished += 60;
                        return;
                    } else if (Math.random() + (this.traits >> 3) > 1.5) {
                        // go to chapel
                        BUILDINGS[57].students.push(this);
                        this.finished += 2*60;
                        return;
                    } else {
                        // go to rush rhees
                        BUILDINGS[18].students.push(this);
                        this.finished += 60;
                        return;
                    }
                }
                // go to dorm
                this.dorm.students.push(this);
                this.finished += 60;
                return;
            }

        }
    }



    return this;
}




// credit: http://stackoverflow.com/a/19270021
function getRandom(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len;
    }
    return result;
}

function randomArrayElement(arr) {
    return arr[Math.floor(Math.random()*arr.length)];
}
