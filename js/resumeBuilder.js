var work = {
  "jobs": [
      {
        "employer": "InCycle Software , Inc.",
        "title": "Senior Software Development Consultant",
        "location": "1120 Avenue of The Americas, New York, NY, 10036",
        "dates worked": "9/2011 - Future",
        "description": "Every month a website would need to be load and performance tested. The Use Cases and Test Mix were defined by the Business Analysts (BAs).  The Use Case is used to create a Web Performance Test.  The Test Mix is used for the Load Test and the load patterns used are Goal, Step, and Constant. Once the number of concurrent supported users is established, I would make performances changes on the database and web application.  The results are analyzed and saved as a word document and customized excel report.",
        "url": "http://www.incyclesoftware.com/"
      },
      {
        "employer": "Atlantic Imaging Group, LLC.",
        "title": "Senior C# Software Engineer",
        "location": "110 S Jefferson Rd, Ste 201, Whippany NJ 07981",
        "dates worked": "4/2010 - 8/2011",
        "description": "Tasks are created by a bug request, an issue we foresee, discuses with the user or a new business venture. Once a task is created it will be estimated in our next estimate meeting. The task is now awaiting approval, by the business and to be assigned an iteration to be worked on. Iterations are in two week cycles.",
        "url": "http://www.aignetwork.com/"
      },
      {
        "employer": "New York Giants",
        "title": "Senior C# Software Engineer",
        "location": "1925 Giants Drive, East Rutherford, NJ 07073",
        "dates worked": "9/2008 - 3/2010",
        "description": "Maintained and enhanced a C# Application.  The application allows scouts to watch games, make tapes, highlight players, filter playlist and advanced search, make game plans.",
        "url": "http://www.giants.com/"
      }
  ]
};

work.display = function () {
  var jWork = $("#workExperience");
  if (work && work.jobs && work.jobs.length > 0) {
    for (var index = 0; index < work.jobs.length; index++) {
      var job = work.jobs[index];
      jWork.append(HTMLworkStart);
      var hrefLocation = job.location;
      $(".work-entry:last")
          .append(HTMLworkEmployer.replace("#", job.url).replace("%data%", job.employer) + HTMLworkTitle.replace("%data%", job.title))
          .append(HTMLworkDates.replace("%data%", job["dates worked"]))
          .append(HTMLworkLocation.replace("%data%", hrefLocation))
          .append(HTMLworkDescription.replace("%data%", job.description));
    }
  }
};

var projects = {
  projects: [
      {
        "title": "AIG Network",
        "dates worked": "4/2010 - 8/2011",
        "description": "Maintained and enhanced the website.",
        "images": ["images/197x148.gif"],
        "url": "http://www.aignetwork.com/"
      },
      {
        "title": "Site Information Database",
        "dates worked": "2008",
        "description": "Migrated a C# 2003 Web Application into a C# 2008 Web Site.  The web site turned into my website that I was in charge of.",
        "images": ["images/197x148.gif"],
        "url": "http://www.aignetwork.com/SID/"
      }
  ]
};

projects.display = function () {
  var jProjects = $("#projects");
  if (projects && projects.projects && projects.projects.length > 0) {
    for (var indexProject = 0; indexProject < projects.projects.length; indexProject++) {
      var project = projects.projects[indexProject];
      jProjects.append(HTMLprojectStart);
      $(".project-entry:last")
          .append(HTMLprojectTitle.replace("#", project.url).replace("%data%", project.title))
          .append(HTMLprojectDates.replace("%data%", project["dates worked"]))
          .append(HTMLprojectDescription.replace("%data%", project.description));
      if (project.images && project.images.length > 0) {
        for (var indexImage = 0; indexImage < project.images.length; indexImage++) {
          if (project.images.hasOwnProperty(indexImage)) {
            var imageUrl = project.images[indexImage];
            $(".project-entry:last").append(HTMLprojectImage.replace("%data%", imageUrl));
          }
        }
      }
    }
  }
};

var bio = {
  "name": "Johnny Fayad",
  "role": "Web Developer",
  "welcomeMesssage": "A strong senior.net software engineer, with extensive experience in Systems Development Lifecycle (SDLC).",
  "contacts": {
    "mobile number": "555-123-1234",
    "email": "johnnyfayad@hotmail.com",
    "twitter": "@SirJohnNJ",
    "github": "JohnnyFayad",
    "linkedin": "johnfayad",
    "location": "Edison, NJ"
  },
  skills: [
      "C#",
      "VB.NET",
      "TFS",
      "T-SQL",
      "PL-SQL",
      "HTML",
      "CSS",
      "JavaScript",
      "JQuery",
      "ASP.NET",
      "MVC",
      "MTM"
  ],
  bioPic: "images/me.jpg"
};

var displayBioContacts = function (jContainer) {
  if (bio && bio.contacts) {
    if (bio.contacts["mobile number"])
      jContainer.append(HTMLmobile.replace("%data%", bio.contacts["mobile number"]));
    if (bio.contacts.email)
      jContainer.append(HTMLemail.replace("%data%", bio.contacts.email));
    if (bio.contacts.twitter)
      jContainer.append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
    if (bio.contacts.github)
      jContainer.append(HTMLgithub.replace("%data%", bio.contacts.github));
    if (bio.contacts.blog)
      jContainer.append(HTMLblog.replace("%data%", bio.contacts.blog));
    if (bio.contacts.location)
      jContainer.append(HTMLlocation.replace("%data%", bio.contacts.location));
  }
};

bio.display = function () {
  var jHeader = $("#header");
  if (bio) {
    $("#main").append(internationalizeButton);
    jHeader
        .prepend(HTMLheaderRole.replace("%data%", bio.role))
        .prepend(HTMLheaderName.replace("%data%", bio.name))
        .append(HTMLbioPic.replace("%data%", bio.bioPic))
        .append(HTMLWelcomeMsg.replace("%data%", bio.welcomeMesssage))
    ;
    displayBioContacts($("#topContacts"));
    displayBioContacts($("#footerContacts"));
    if (bio.skills && bio.skills.length > 0) {
      jHeader.append(HTMLskillsStart);
      var jSkills = $("#skills");
      for (var index = 0; index < bio.skills.length; index++) {
        var skill = bio.skills[index];
        jSkills.append(HTMLskills.replace("%data%", skill));

      }
    }
  }
};

var education = {
  schools: [
      {
        "name": "SetFocus, LLC",
        "location": "4 Century Drive, Parsippany, NJ",
        "degree": "Certificate",
        "majors": ["Masters Program in Visual Basic.NET", "SQL Server 2000"],
        "dates attended": "07/2002 - 10/2002",
        "url": "http://www.setfocus.com/"
      }
  ],
  onlineCourses: [
      {
        "title": "Intro to HTML and CSS",
        "school": "Udacity",
        "dates attended": "11/2014",
        "url": "https://www.udacity.com/course/ud304"
      },
      {
        "title": "JavaScript Basics",
        "school": "Udacity",
        "dates attended": "12/2014",
        "url": "https://www.udacity.com/course/ud804"
      }
  ]
};

education.display = function () {
  var jEducation = $("#education");
  if (education) {
    if (education.schools && education.schools.length > 0) {
      for (var indexSchool = 0; indexSchool < education.schools.length; indexSchool++) {
        var school = education.schools[indexSchool];
        jEducation.append(HTMLschoolStart);
        var majors = [];
        if (school.majors && school.majors.length > 0) {
          for (var indexMajor = 0; indexMajor < school.majors.length; indexMajor++) {
            if (school.majors.hasOwnProperty(indexMajor)) {
              majors.push(school.majors[indexMajor]);
            }
          }
        }
        $(".education-entry:last")
            .append(HTMLschoolName.replace("#", school.url).replace("%data%", school.name) + HTMLschoolDegree.replace("%data%", school.degree))
            .append(HTMLschoolDates.replace("%data%", school["dates attended"]))
            .append(HTMLschoolLocation.replace("%data%", school.location))
            .append(HTMLschoolMajor.replace("%data%", majors.join(" | ")));
      }
    }
    if (education.onlineCourses && education.onlineCourses.length > 0) {
      jEducation.append(HTMLonlineClasses);
      for (var indexOnlineCourse = 0; indexOnlineCourse < education.onlineCourses.length; indexOnlineCourse++) {
        var onlineCourse = education.onlineCourses[indexOnlineCourse];
        jEducation.append(HTMLschoolStart);
        $(".education-entry:last")
            .append(HTMLonlineTitle.replace("#", onlineCourse.url).replace("%data%", onlineCourse.title) + HTMLonlineSchool.replace("%data%", onlineCourse.school))
            .append(HTMLonlineDates.replace("%data%", onlineCourse["dates attended"]))
            .append(HTMLonlineURL.replace("#", onlineCourse.url).replace("%data%", onlineCourse.url));
      }
    }
  }
};

var displayMap = function () {
  $("#mapDiv").append(googleMap);
};

function inName(oldName) {
  var names = oldName.split(" ");
  var firstName = names[0].toLowerCase();
  firstName = firstName[0].toUpperCase() + firstName.slice(1);
  var finalName = firstName + " " + names[1].toUpperCase();
  return finalName;
}

function pageInit() {
  bio.display();
  work.display();
  projects.display();
  education.display();
  displayMap();
}

pageInit();