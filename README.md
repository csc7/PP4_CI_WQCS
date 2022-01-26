# Site under construction.

**This website will provide a tool for seismic data acquisition companies to use weather data and a blog to plan their operations and interactions with the client.**

# **Index**
#### [*Website Live Link*](https://pp4-ci-wqcs.herokuapp.com/)
### [1. Project Goals](#1--project-goals)
### [1. Notes](#1--project-board)
### [1. Project Board](#1--project-board)
### [2. User Experience](#2--user-experience)
- #### [User Goals](#user-goals-1)
- #### [Site Owner Goals](#site-owner-goals-1)
- #### [User Stories](#user-stories-1)
- #### [User Requirements and Expectations](#user-requirements-and-expectations-1)
### [2. Data Model](#2--user-experience)
### [3. Design Choices](#3--design-choices)
- #### [Colours](#colours-1)
- #### [Fonts](#fonts-1)
- #### [Structure](#structure-1)
### [4. Wireframes](#4--wireframes)
### [5. Technologies used](#5--technologies-used)
- #### [Languages](#languages-1)
- #### [Software and Other Tools](#software-and-other-tools-1)
### [6. Features](#6--features)
### [7. Validation](#7--validation)
- #### [HTML Files](#html-files-1)
- #### [CSS File](#css-file-1)
- #### [JavaScript Files](#javascript-files-1)
- #### [Accessibility](#accessibility-1)
- #### [Performance](#performance-1)
### [8. Testing of User Stories](#8--testing-of-user-stories)
### [9. Bugs](#9--bugs)
### [10. Deployment](#10--deployment)
### [11. Credits](#11--credits)
### [12. Acknowledgements](#12--acknowledgements)
<br><br>

___
# **1 . Project Goals**
The goal of the project is to create a site that is useful for planning the daily activities of seismic or other geophysical data acquisition.

As weather conditions are important factors that have a direct impact on planning and costs, the idea of the website is to provide a tool to gather and analyse weather information, along with a blog with different topics to discuss usual issues found in this kind of work, in light of solving them in a centralised application, fact that is very valuable in crews with many workers, in remote locations.

As wind and temperature might be the most important factors in terms of impact, they are show separately in two independents groups, with a third group with other weather information where the user can select what to get and analyse.

Also, as remote locations might have difficulties for Internet connections (physical connections in early days, nowadays perhaps cost constraints only) and weather information might be compromised, at least the blog is intended to help on the resolution of issues in a centralised way, using a unique channel, factor that might be critical under usual conditions of work under presure where "noisy" communications are always unwanted.

Additionally, an instructions page is given to help on the use of the site, and a contact page with a form where the user can send feedback if desired.


<br><br>
## [Back to Index](#index)
<br>

___
# **1 . Project Goals**
<br><br>
## [Back to Index](#index)
<br>

___
# **1 . Notes**

If opening the project wigh Gitpod from GitHub (top right green button), please run the following command as new workspaces need to have their dependencies:
pip3 install -r requirements.txt

Please keep in mind that the interaction with the database and corresponding display of data is slow.

<br><br>
## [Back to Index](#index)
<br>

___
# **2 . User Experience**

UX has been addressed around Jesse James Garrett's process, whose five planes involves the following matters:
- **STRATEGY**: to build a website (product) that helps on the planning and activities of a seismic/geophysical data acquisition crew.
- **SCOPE**: the minimum viable product needs to include features that allow the user to know the following:
    - Instruction page to let the user how to use the site.
    - Weather page where the user can gather and analyse weather data from any point in the world that is picked on a map.
    - Blog page where the user can use to post issues, comment, send consultations and find solutions.
    - Contact page where the user can send feedback or report site issues.
- **STRUCTURE**: the information is structured as follows:
    - Instructions page (index.html).
    - Weather page with a map on top left, selection of point top right, current data below this selection panel, and visualization of data on the bottom of this page.
    - Blog page where topics are shown on the body.
    - Topic pages, corresponding to the topics mentioned above, to read and post comments.
    - Contact form page.
    - Fixed navigation bar on top.
    - Footer.
    - Sign-in page.
    - Sign-up page.
    - Sign-out page.
    - 404 page to let the user know of any error while loading the site.
- **SKELETON**: the information is accessed through a fixed navigation menu on top of the pages.
- **SURFACE**: the website is based on a contrast between white and RGB(49, 49, 48), with some titles in RGB(76, 76, 211); some other variations close to these three colours are also present to enhance contrast.

## **User Goals**
- To find an interactive website.
- To navigate through a responsive website.
- To have a page where it is possible to get and analise weather data for planning the work.
- To have a blog where issues can be consulted, posted, commented and solved.
- To be able to contact the site administrator, owner and/or developer if desired.

#### [Back to Index](#index)

## **Site Owner Goals**
- To provide an interactive website.
- To provide a responsive website.
- To provide a tool to plan the data acquisition activities.
- To provide a tool to solve issues found during data acquisition works.
- To give users the chance to contact the site administrator, owner and/or developer.
- To provide a basic and scalable tool and framework for planning seismic/geophysical data acquisition activities on a remote crew.

#### [Back to Index](#index)
<br>

## **User Stories**
User stories are divided into the following three groups:

- ### **First time users**
1. As a user, I want to have a description of the site with instructions, so I know how to use it and refer to them if needed.
2. As a user, I want to have a weather application so I can find a place on the world and get its current weather information.
3. As a user, I want to be able to select the location for the weather information on a map, so I can find the location visually.
4. As a user, I want to be able to select the location for the weather information on the same map manually, so I can go directly to the place if I have the coordinates.
5. As a user, I want to be able to analyse the weather information in three groups (wind, temperature and "other"), so I immediately get the most relevant data (wind and temperature) for the planning of the work.
6. As a user, I want to be able to display the weather information for the last 5, 15 or 30 days, so I can focus on the segment I consider most important.
7. As a user, I want to be able to display the weather information on charts, so it is more convenient for interpretation and a visualization.
8. As a user, I want to have a blog so I can discuss HSE matters (including incidents) during data acquisition.
9. As a user, I want to have a blog so I can discuss issues related to the facilities of the base camp with the Camp Boss.
10. As a user, I want to have a blog so I can get help on IT related issues on crew.
11. As a user, I want to have a blog so I can discuss general technical issues during data acquisition.
12. As a user, I want to have a blog so I can discuss survey matters.
13. As a user, I want to have a blog so I can discuss management matters of the crew.
14. As a user, I want to have a blog so I can discuss the ongoing tasks related to the QA/QC of the data being acquired.
15. As a user, I want to have a blog so I can discuss the ongoing tasks related to the processing of the data being acquired.
16. As a user, I want to have a blog so I can discuss the status of the vehicles on crew and its mechanical issues (if any).
17. As a user, I want to have a blog so I can check the personnel available on crew.
18. As a user, I want to be able to contact the site administrator and/or owner and/or developer, so I can send feedback to them.
19. As a user, I want to be able to find the sign-up button easily, so I can quickly access the site.

- ### **Returning users**
20. As a returning user, I want to be able to contact the site administrator and/or owner and/or developer, so I can send feedback to them.
21. As a returning user, I want a navigation menu on top and always visible, so I can access any content on the website from there and do not need to use the back button of the browser.
22. As a returning user, I want to be able to find the sign-in and sign-out buttons easily, so I can quickly access the site.
23. As a returning user, I want to have a way to contact the developer so I can contribute and/or indicate errors or bugs.
24. As a returning user, I want to be informed if the contact form goes through, so I know if my message is sent or it is not.

- ### **Site Owner**
25. As owner, I want to provide a description of the site, with instructions, so users know how to use it.
26. As owner, I want to create a tool that provides weather information around the world, so users can use it to plan seismic/geophysical data acquisition activities, or any other work that depends on weather conditions.
27. As owner, I want to create a blog, in the same tool, so users can present, discuss, solve issues and find solutions about their daily activities on crew.
28. As owner, I want to receive feedback from users, so I can take actions in response to them if needed.
29. As owner, I want to provide a navigation menu on top and always visible, so users can access any content at any time without needing the back button.
30. As owner, I want to give as many options to be contacted as possible, so users can choose forms or links in the footer to send their consultations and/or feedback in a very fast way.
31. As owner, I want to have users registered and ask them to sign-in to access all site capabilities, so the site is accessible to members of the crew and an administrator (e.g., a member of the management team like the Party Manager or Admin) can act as moderator.
32. As owner, I want to set the basis of a product, so I can improve it in the future and adapt it to specific crews or projects.
33. As owner, along with other points of this section, I want to show my work and give the option to users to contact me if they wish.
34. As owner, I want to provide a responsive website, so user can access it from any device without any constraint to navigate, find and/or use the website.
35. As owner, I want to inform users if they consultation/message was successfully sent, so they know if they need to resend it or they do not.
36. As owner, I want to inform the user, through an error page, if there is any error when loading the website.


#### [Back to Index](#index)

## **User Requirements and Expectations**
- A fixed and responsive navigation menu on top.
- A dedicated page for the instructions.
- A dedicated page for the weather information.
- A dedicated page for blog.
- A dedicated page for the contact form.
- A footer with contact links to the developer.
- Use of Django templates/pages for sign-up, sign-in, sign-out and 404.
<br><br>
## [Back to Index](#index)
<br>



___
# **1 . Data Model**

The project is based in data provided by OpenWeather (https://openweathermap.org/) and Django models for the support (blog) page. Design and structure of Post and Comment tables are copied from the Code Institute "I Think Therefore I Blog" project. The following chart shows the data involved and how they are related:

![Data Model Image](static/images/data-model.PNG)

The following are the tables involved in the relational model, along with data types and measurement units.

Find OpenWeather API information [here](https://openweathermap.org/current) (https://openweathermap.org/current).

Since the planning should be base on date and time, **all entries and tables are related to the Weather Data and Time table**, whose primiry key (ID) relates the data to the specific date and time.


- #### **WEATHER DATA AND TIME**

    - **ID:** integer, primary key    
    - **Date:** date    
    - **Time:** custom field (time)

- #### **WEATHER WIND DATA**

    - **ID:** integer
    - **Wind Spped:** float, meter/second
    - **Wind Direction:** float, degrees
    - **Rec ID:** integer, foreign key

- #### **WEATHER TEMPERATURE DATA**

    - **ID:** integer
    - **Temperature:** float, Kelvin, converted to Celsius
    - **Feels Like:** float, Kelvin, converted to Celsius
    - **Minimum Temperature:** float, Kelvin, converted to Celsius
    - **Maximum Temperature:** float, Kelvin, converted to Celsius
    - **Rec ID:** integer, foreign key

- #### **WEATHER OTHER DATA**

    - **ID:** integer
    - **Pressure:** float, hPa (atmospheric pressure)
    - **Humidity:** float, percentage
    - **Visibility:** float, meters
    - **Sky:** float, cloudiness, percentage
    - **Main:** text, weather parameters (rain, snow, etc.)
    - **Description:** text, weather condition
    - **Sunrise:** custom (time), sunrise time, unix, UTC
    - **Sunset:** custom (time), sunset time, unix, UTC
    - **Rec ID:** integer, foreign key

- #### **POST**

    - **ID:** integer, primary key
    - **Title:** text
    - **Slug:** text
    - **Author:** text
    - **Feature Image:** image
    - **Excerpt:** text
    - **Updated:** date
    - **Content:** text
    - **Created:** date
    - **Status:** integer
    - **Like:** boolean

- #### **COMMENT**

    - **ID:** integer, primary key
    - **Name:** text
    - **E-mail:** text
    - **Body:** text
    - **Created:** date
    - **Approved:** boolean
    - **Post:** integer, foreign key

- #### **CONTACT FORM**

    - **ID:** integer, primary key
    - **Date:** date
    - **Time:** custom (time)
    - **Name:** text
    - **Surname:** text
    - **E-mail:** text
    - **Description:** text

<br><br>
## [Back to Index](#index)
<br>

___
# **3 . Design Choices**

The design was planned to cover screen sizes from 320x568px to 1920x1370px.

## **Colours**
White and RGB(49, 49, 48), with some titles in RGB(76, 76, 211). Other variations close to these three colours are also present to enhance contrast.

#### [Back to Index](#index)
<br>

## **Fonts**
Google fonts (please see credits section below) were implemented on the website. Heebo (Medium 500) for titles and Oxygen (Regular 400) for paragraphs.
Sans-serif font is used as a back-up in case the previous font cannot be loaded.

#### [Back to Index](#index)
<br>

## **Structure**
The metadata includes the following keywords to help search engines to find the website: Seismic, geophysical, acquisition, processing, crew, field, weather, technical support, database, wind, temperature, Code Institute, software development, student, full-stack course, milestone project.

The website consists of four pages (with subpages for the blog topics), organised in a header, a body and a footer. Django templates/pages have been used for sign-up, sign-in, sign-out and 404.

Wireframes were developed at the beginning in order to have a first design of the website.

- ### **Header**

In order to achieve the goals related to easiness and/or simplicity, a fixed navigation area in the header is provided. In the same area, a logo with the idea of the website is place to the left.
The header contains the logo on the left, the navigation bar with the four links to the body pages in the middle and the sign-up, sign-in and sign-out buttons on the right.

- ### **Body**

The body of the pages are structured as follows for each of the pages:
- #### *Instructions:*
    It contains a description of the main purpose of the website and three sections with instructions for each of the other pages: Weather, Blog and Contact.
- #### *Weather:*
    It has a map on top left, selection of point on top right, current data below this selection panel, and a visualization panel of the data on the bottom of this page, below a row panel to select the amount of days to visualise and other data to show.

- #### *Blog:*
    It contains boxes with each topic of the blog to access.
- #### *Contact:*
    It has a simple contact form with name, surname, e-mail and description fields.
<br>
    
- ### **Footer**

The footer contains links for social media (LinkedIn and GitHub) and e-mail. It is designed to remain at the bottom of the pages to have the links visible to promote the developer of the website.\
<br><br>
## [Back to Index](#index)
<br>

___
# **4 . Wireframes**

Wireframes were developed in order to gather goals, user stories, requirements and expectations, and have the design references for desktop, tablet and mobile devices.
Please check the PDFs files for each case in the following links:

<details>
    <summary>Desktop Wireframe Image for Instructions Page</summary>

![Desktop Wireframe Image for Functions Page](docs/wireframes/wireframe-desktop-functions.PNG)
</details>
<details>
    <summary>Desktop Wireframe Image for Weather Page</summary>

![Desktop Wireframe Image for Generator Page](docs/wireframes/wireframe-desktop-generator.PNG)
</details>
<details>
    <summary>Desktop Wireframe Image for Blog Page</summary>

![Desktop Wireframe Image for Quiz Page](docs/wireframes/wireframe-desktop-quiz.PNG)
</details>
<details>
    <summary>Desktop Wireframe Image for Contact Page</summary>

![Desktop Wireframe Image for Contact Page](docs/wireframes/wireframe-desktop-contact.PNG)
</details>

<details>
    <summary>Tablet Wireframe Image for Instructions Page</summary>

![Tablet Wireframe Image for Functions Page](docs/wireframes/wireframe-tablet-functions.PNG)
</details>
<details>
    <summary>Tablet Wireframe Image for Weather Page</summary>

![Tablet Wireframe Image for Generator Page](docs/wireframes/wireframe-tablet-generator.PNG)
</details>
<details>
    <summary>Tablet Wireframe Image for Blog Page</summary>

![Tablet Wireframe Image for Quiz Page](docs/wireframes/wireframe-tablet-quiz.PNG)
</details>
<details>
    <summary>Tablet Wireframe Image for Contact Page</summary>

![Tablet Wireframe Image for Contact Page](docs/wireframes/wireframe-tablet-contact.PNG)
</details>
<details>
    <summary>Cell Wireframe Image for Instructions and Weather Pages</summary>

![Tablet Wireframe Image for Quiz Page](docs/wireframes/wireframe-cell-functions-generator-pages.PNG)
</details>
<details>
    <summary>Cell Wireframe Image for Blog and Contact Pages</summary>

![Tablet Wireframe Image for Contact Page](docs/wireframes/wireframe-cell-quiz-contact-pages.PNG)
</details>


<br>

[PDF File for Desktop Wireframe](docs/wireframes/wireframe-desktop.pdf)

[PDF File for Tablet Wireframe](docs/wireframes/wireframe-tablet.pdf)

[PDF File for Cell Wireframe](docs/wireframes/wireframe-cell.pdf)
<br><br>
## [Back to Index](#index)
<br>

___
# **5 . Technologies Used**

The following languages, software and tools were implemented using Windows 10 Pro:
## **Languages**
- #### **HTML**
- #### **CSS**
- #### **JavaScript**
- #### **Python**

#### [Back to Index](#index)

## **Software, Frameworks, Applications and Other Tools**
- #### **GitHub**
- #### **Gitpod**
- #### **Django 3.2**
- #### **django-allauth**
- #### **Font Awesome (v5.15)**
- #### **Bootstrap (v4.0)**
- #### **Balsamiq Wireframes (v4.2.4, Editor Version 2.6.0)**
- #### ERDPlus, to make the data model graph.
- #### **Google Fonts**
- #### **W3C Markup Validation Service**
- #### **W3C CSS Validation Service**
- #### **JSHint (version 2.13.0)**
- #### **JavaScript AJAX**
- #### **WAVE Web Accessibility Evaluation Tool**
- #### **Google Lighthouse (used in Google, Microsoft Edge and Firefox)**
- #### **Google Chrome, version 91.0.4472.114, Official Build, 64-bit (and its development tool)**
- #### **Microsoft Edge, version 91.0.864.59, Official build, 64-bit (and its development tool)**
- #### **Firefox, 89.0.2, 64-bit (and its development tool)**
- #### **Microsoft Internet Explorer, version 2004, OS Build 19041.1052**

<br><br>
## [Back to Index](#index)


___
# **6 . Features**

The site consists of four pages, where each of them is divided in three parts: header, body and footer. The features contained in each of the pages and parts are the following ones:


- ### **Fixed navigation menu**

It is located in the header, fixed on all pages to facilitate navigation, and responsive.

*User Stories Addressed by this Feature: 19; 21; 29; 33 and 34.*

*Please check "8. Testing of User Stories" for more details.*
<details>
    <summary>Check Image</summary>

![Fixed Navigation Menu for Desktop Image](docs/features-and-evidence/fixed-navigation-menu.PNG)
![Fixed Navigation Menu for Tablets Image](docs/features-and-evidence/fixed-navigation-menu-tablet.PNG)
![Fixed Navigation Menu for Cell Phones Image](docs/features-and-evidence/fixed-navigation-menu-cell-1.PNG)
![Fixed Expanded Navigation Menu for Cell Phones Image](docs/features-and-evidence/fixed-navigation-menu-cell-2.PNG)
</details>
<br>

- ### **Instructions App**

They can be found in the Instructions page (home), they explain how to use the weather and blog pages.

*User Stories Addressed by this Feature: 1; 25; 33 and 34.*

*Please check "8. Testing of User Stories" for more details.*
<details>
    <summary>Check Images</summary>

![Instructions Page Top Image](docs/features-and-evidence/instructions-page-top.PNG)

![Instructions Page Bottom Image](docs/features-and-evidence/instructions-page-bottom.PNG)

</details>
<br>


- ### **Weather App**

It can be found in the Weather page and allows users to collect and analyse weather information.


*User Stories Addressed by this Feature: 2; 3; 4; 5; 6; 7; 26; 33 and 34.*

*Please check "8. Testing of User Stories" for more details.*
<details>
    <summary>Check Image</summary>

![Weather App Image](docs/features-and-evidence/weather-page.PNG)

</details>
<br>

- ### **Blog App**

It can be found in the Blog page and allows users to send and consult issues they find in their daily activities, and find solutions for them.

*User Stories Addressed by this Feature: 8; 9; 10; 11; 12; 13; 14; 15; 16; 17; 27; 33 and 34.*

*Please check "8. Testing of User Stories" for more details.*
<details>
    <summary>Check Image</summary>

![Blog App Image](docs/features-and-evidence/blog-page.PNG)

</details>
<br>


- ### **Contact App**

It can be found in the Contact and allows users to contact the website developer. It prevents the form to be sent with incomplete fields, informs the user if the message goes through and disables the send button in order not to send the consultation more than once.

*User Stories Addressed by this Feature: 18; 20; 28; 30; 33 and 34*

*Please check "8. Testing of User Stories" for more details.*
<details>
    <summary>Check Image</summary>

![Contact App Image](docs/features-and-evidence/contact-page.PNG)

</details>
<br>



- ### **Footer**

It is located at the bottom of all pages, containing icons with links to LinkedIn, GitHub and e-mail application (to automatically load developer's e-mail address in the addressee field).

*User Stories Addressed by this Feature: 18; 20; 23; 28; 30; 33 and 34.*

*Please check "8. Testing of User Stories" for more details.*
<details>
    <summary>Check Image</summary>

![Footer Image](docs/features-and-evidence/footer.PNG)

</details>
<br>


- ### **Registration**

They are Django complementary tools and pages to have registration options in the site for users. There are sign-in, sign-up and sign-out pages that work as interfaces for this purpose. 

*User Stories Addressed by this Feature: 19; 24; 31; 33; 34; 35 and 36.*

*Please check "8. Testing of User Stories" for more details.*
<details>
    <summary>Check Image</summary>

![Registration Sign-In Images](docs/features-and-evidence/sign-in.PNG)
![Registration Sign-Up Images](docs/features-and-evidence/sign-up.PNG)
![Registration Sign-Out Images](docs/features-and-evidence/sign-out.PNG)
</details>

<br><br>
## [Back to Index](#index)
<br>




___
# **7 . Validation**

The introductory image on top of this README file was generated using the [Am I Responsive site](http://ami.responsivedesign.is/?url=https%3A%2F%2Fcsc7.github.io%2FPP1_CI_TGC) to test how the website displays in different screen sizes.

**Development tools** of **Google Chrome** (Version 97.0.4692.71, Official Build, 64-bit), **Microsoft Edge** (Version 97.0.1072.62, Official build, 64-bit) and **Firefox** (Version 97.0.1072.62, Official build, 64-bit) have been used to test the behaviour of the website for screen sizes between 320x568px to 1920x1370px.

The website was tested using these **browsers** and also **Microsoft Internet Explorer** (Version 2004, OS Build 19041.1415, Microsoft Corporation). **Samsung Internet** (version 15.0.2.47) was also used to test the website. In addition, some users have collaborated checking the website in the cell phones, mostly with **Android-based operating systems**.

**Devices** used for testing and validation include Dell and Toshiba laptops, Samsung cell phones. **Operative systems** include Windows 10 Enterprise (remote desktop), Windows 10 Pro, Windows 10 Home and Android. **Processors** for desktop and laptops were Intel.

The following tools were used to validate the **files of the website**:

## **HTML Files**
https://validator.w3.org/ was used to validate the new HTML files (those not being part of the Django framework). To test them, unique HTML files base+index, base+weather, base+blog and base+contact were created. The files were validated and accepted only when errors were related to control characters.

Errors corrected using this sevice:

- **base.html**:
    - Id body for body tag changed as it needs to have a different name; corrected after using the validator.

<br>

- **Instructions Page (index.html)**:
    - All images were missing the "alt" attribute; they were added after using the validator.

<br>

- **Weather Page**:
    - Duplicated id ("s-d-o-4") identified, one of the changed to "s-d-o-5" after using the validator.
    - Table headers "th" were not included in a "tr" tag; included after using the validator.

<br>

- **Blog Page**:
    - Image was missing the "alt" attribute; added after using the validator.

<br>

- **Contact Page**:
    - No errors found.


#### [Back to Index](#index)

<br>


## **CSS File**
https://jigsaw.w3.org/css-validator/ was used to validate the CSS file.

http://jigsaw.w3.org/css-validator/validator$link
or
http://jigsaw.w3.org/css-validator/check/referer (for HTML/XML document only)

Please check the evidence below:

<p>
    <a href="http://jigsaw.w3.org/css-validator/check/referer">
        <img style="border:0;width:88px;height:31px"
            src="http://jigsaw.w3.org/css-validator/images/vcss"
            alt="Valid CSS!" />
    </a>
</p>
            
<p>
<a href="http://jigsaw.w3.org/css-validator/check/referer">
    <img style="border:0;width:88px;height:31px"
        src="http://jigsaw.w3.org/css-validator/images/vcss-blue"
        alt="Valid CSS!" />
    </a>
</p>
     
<details>
    <summary>CSS File</summary>

![Evidence of no errors in the CSS file](docs/validation/validation-css-1.PNG) 
</details>
<details>
    <summary>CSS File (Warnings)</summary>

![Evidence of no errors in the CSS file](docs/validation/validation-css-2.PNG) 
</details>

#### [Back to Index](#index)

<br><br>

## **JavaScript Files**
https://jshint.com/ was used to validate the JavaScript files.
Please check the parameters used for validation and evidence below:

<details>
    <summary>Parameters used for JavaScript validation in JSHint version 2.13.3</summary>

![Parameters used for JavaScript validation in JSHint version 2.13](docs/validation/validation-js-move-configuration.PNG) 
</details>

<details>
    <summary>Weather Page (weather.js JavaScript file). Plase note that google is an external variable from Google.</summary>

![Evidence of no errors weather.js JavaScript file](docs/validation/validation-js-weather.PNG)
</details>

<details>
    <summary>File for moving the content down (move-content-hamburger.js)</summary>

![Evidence of no errors and warnings in the move-content-hamburger.js JavaScript file](docs/validation/validation-js-move-content.PNG) 
</details>

<details>
    <summary>File for checking the loading of the site (index.js JavaScript file).</summary>

![Evidence of no errors and warnings in the index.js JavaScript file](docs/validation/validation-js-index.PNG)
</details>


#### [Back to Index](#index)

<br>


## **Python Files**

- **Django Project Files**
<details>
    <summary>asgi.py</summary>

![Evidence of file asgi.py validated with http://pep8online.com/ ](docs/validation/validation-python-django-asgi.PNG) 
</details>
<details>
    <summary>settings.py</summary>

![Evidence of file settings.py validated with http://pep8online.com/ ](docs/validation/validation-python-django-settings.PNG) 
</details>
<details>
    <summary>urls.py</summary>

![Evidence of file urls.py validated with http://pep8online.com/ ](docs/validation/validation-python-django-urls.PNG) 
</details>
<details>
    <summary>wsgi.py</summary>

![Evidence of file wsgi.py validated with http://pep8online.com/ ](docs/validation/validation-python-django-wsgi.PNG) 
</details>
<br>

- **Instructions App**
<details>
    <summary>admin.py</summary>

![Evidence of file admin.py validated with http://pep8online.com/ ](docs/validation/validation-python-instructions-admin.PNG) 
</details>
<details>
    <summary>apps.py</summary>

![Evidence of file apps.py validated with http://pep8online.com/ ](docs/validation/validation-python-instructions-apps.PNG) 
</details>
<details>
    <summary>models.py</summary>

![Evidence of file models.py validated with http://pep8online.com/ ](docs/validation/validation-python-instructions-models.PNG) 
</details>
<details>
    <summary>tests.py</summary>

![Evidence of file tests.py validated with http://pep8online.com/ ](docs/validation/validation-python-instructions-tests.PNG) 
</details>
<details>
    <summary>urls.py</summary>

![Evidence of file urls.py validated with http://pep8online.com/ ](docs/validation/validation-python-instructions-urls.PNG) 
</details>
<details>
    <summary>views.py</summary>

![Evidence of file views.py validated with http://pep8online.com/ ](docs/validation/validation-python-instructions-views.PNG) 
</details>
<br>

- **Weather App**
<details>
    <summary>admin.py</summary>

![Evidence of file admin.py validated with http://pep8online.com/ ](docs/validation/validation-python-weather-admin.PNG) 
</details>
<details>
    <summary>apps.py</summary>

![Evidence of file apps.py validated with http://pep8online.com/ ](docs/validation/validation-python-weather-apps.PNG) 
</details>
<details>
    <summary>models.py</summary>

![Evidence of file models.py validated with http://pep8online.com/ ](docs/validation/validation-python-weather-models.PNG) 
</details>
<details>
    <summary>tests.py</summary>

![Evidence of file tests.py validated with http://pep8online.com/ ](docs/validation/validation-python-weather-tests.PNG) 
</details>
<details>
    <summary>urls.py</summary>

![Evidence of file urls.py validated with http://pep8online.com/ ](docs/validation/validation-python-weather-urls.PNG) 
</details>
<details>
    <summary>views.py</summary>

![Evidence of file views.py validated with http://pep8online.com/ ](docs/validation/validation-python-weather-views.PNG) 
</details>
<br>

- **Blog App**
<details>
    <summary>admin.py</summary>

![Evidence of file admin.py validated with http://pep8online.com/ ](docs/validation/validation-python-blog-admin.PNG) 
</details>
<details>
    <summary>apps.py</summary>

![Evidence of file apps.py validated with http://pep8online.com/ ](docs/validation/validation-python-blog-apps.PNG) 
</details>
<details>
    <summary>forms.py</summary>

![Evidence of file forms.py validated with http://pep8online.com/ ](docs/validation/validation-python-blog-forms.PNG) 
</details>
<details>
    <summary>models.py</summary>

![Evidence of file models.py validated with http://pep8online.com/ ](docs/validation/validation-python-blog-models.PNG) 
</details>
<details>
    <summary>tests.py</summary>

![Evidence of file tests.py validated with http://pep8online.com/ ](docs/validation/validation-python-blog-tests.PNG) 
</details>
<details>
    <summary>urls.py</summary>

![Evidence of file urls.py validated with http://pep8online.com/ ](docs/validation/validation-python-blog-urls.PNG) 
</details>
<details>
    <summary>views.py</summary>

![Evidence of file views.py validated with http://pep8online.com/ ](docs/validation/validation-python-blog-views.PNG) 
</details>
<br>

- **Contact App**
<details>
    <summary>admin.py</summary>

![Evidence of file admin.py validated with http://pep8online.com/ ](docs/validation/validation-python-contact-admin.PNG) 
</details>
<details>
    <summary>apps.py</summary>

![Evidence of file apps.py validated with http://pep8online.com/ ](docs/validation/validation-python-contact-apps.PNG) 
</details>
<details>
    <summary>forms.py</summary>

![Evidence of file forms.py validated with http://pep8online.com/ ](docs/validation/validation-python-contact-forms.PNG) 
</details>
<details>
    <summary>models.py</summary>

![Evidence of file models.py validated with http://pep8online.com/ ](docs/validation/validation-python-contact-models.PNG) 
</details>
<details>
    <summary>tests.py</summary>

![Evidence of file tests.py validated with http://pep8online.com/ ](docs/validation/validation-python-contact-tests.PNG) 
</details>
<details>
    <summary>urls.py</summary>

![Evidence of file urls.py validated with http://pep8online.com/ ](docs/validation/validation-python-contact-urls.PNG) 
</details>
<details>
    <summary>views.py</summary>

![Evidence of file views.py validated with http://pep8online.com/ ](docs/validation/validation-python-contact-views.PNG) 
</details>
<br>

## **Accessibility**
https://wave.webaim.org/ was used to validate accessibility. Although there are warnings, all pages contains zero errors. Please check evidence below:

<details>
    <summary>Instructions Page</summary>

![Evidence of no accessibility errors in the Instructions (index) HTML file](docs/validation/validation-accessibility-instructions.PNG) 
</details>

<details>
    <summary>Weather Page</summary>

![Evidence of no accessibility errors in the Weather HTML file](docs/validation/validation-accessibility-weather.PNG) 
</details>

<details>
    <summary>Blog Page</summary>

![Evidence of no accessibility errors in the Blog HTML file](docs/validation/validation-accessibility-blog.PNG) 
</details>

<details>
    <summary>Contact Page</summary>

![Evidence of no accessibility errors in the Contact HTML file](docs/validation/validation-accessibility-contact.PNG) 
</details>



#### [Back to Index](#index)

<br>


## **Performance**
Google Lighthouse (used in Google, Microsoft Edge and Firefox) were used to evaluate the performance of the pages. Please check the results below:

<details>
    <summary>Instructions Page for Cell Phones(67)</summary>

![Evidence of no accessibility errors in the Instructions (index) HTML file](docs/validation/validation-performance-instructions-cell-phone.PNG) 
</details>

<details>
    <summary>Instructions Page for Desktop (85)</summary>

![Evidence of no accessibility errors in the Instructions (index) HTML file](docs/validation/validation-performance-instructions-desktop.PNG) 
</details>

<details>
    <summary>Weather Page for Cell Phones(50)</summary>

![Evidence of no accessibility errors in the Weather HTML file](docs/validation/validation-performance-weather-cell-phone.PNG)
</details>

<details>
    <summary>Weather Page for Desktop (79)</summary>

![Evidence of no accessibility errors in the Weather HTML file](docs/validation/validation-performance-weather-desktop.PNG)
</details>

<details>
    <summary>Blog Page for Cell Phones(64)</summary>

![Evidence of no accessibility errors in the Blog HTML file](docs/validation/validation-performance-blog-cell-phone.PNG) 
</details>

<details>
    <summary>Blog Page for Desktop (90)</summary>

![Evidence of no accessibility errors in the Blog HTML file](docs/validation/validation-performance-blog-desktop.PNG) 
</details>

<details>
    <summary>Contact Page for Cell Phones(74)</summary>

![Evidence of no accessibility errors in the Contact HTML file](docs/validation/validation-performance-contact-cell-phone.PNG) 
</details>

<details>
    <summary>Contact Page for Desktop (93)</summary>

![Evidence of no accessibility errors in the Contact HTML file](docs/validation/validation-performance-contact-desktop.PNG) 
</details>



<br><br>
## [Back to Index](#index)
<br>

___
# **8 . Testing of User Stories**


## **First time users**

The following are testing of User Stories previously described above:
<br><br>

1. As a user, I want to have a description of the site with instructions, so I know how to use it and refer to them if needed.

| FEATURE | ACTION | EXPECTED RESULT | ACTUAL RESULT |
| --- | --- | --- | --- |
| Instructions App | Include steps to use the site, separated by sections | Design Instructions App/Page with separated steps and sections | Same as expected result | 

<details>
    <summary>Screenshot</summary>

![Instructions Page Top Image](docs/features-and-evidence/instructions-page-top.PNG)
![Instructions Page Bottom Image](docs/features-and-evidence/instructions-page-bottom.PNG)
</details>
<br><br>

2. As a user, I want to have a weather application so I can find a place on the world and get its current weather information.

| FEATURE | ACTION | EXPECTED RESULT | ACTUAL RESULT |
| --- | --- | --- | --- |
| Website | Include Esri/ArcGIS map on the Weather App to select/pick a location | Get coordinates of picked location/place | Works as expected | 

<details>
    <summary>Screenshot</summary>

![Esri/ArcGIS Map to Pick Location](docs/features-and-evidence/Esri-map.PNG) 
</details>
<br><br>

3. As a user, I want to be able to select the location for the weather information on a map, so I can find the location visually.

| FEATURE | ACTION | EXPECTED RESULT | ACTUAL RESULT |
| --- | --- | --- | --- |
| Website | Include Esri/ArcGIS map on the Weather App to select/pick a location | Get coordinates of picked location/place | Works as expected | 

<details>
    <summary>Screenshot</summary>

![Esri/ArcGIS Map to Pick Location](docs/features-and-evidence/Esri-map.PNG) 
</details>
<br><br>

4. As a user, I want to be able to select the location for the weather information on the same map manually, so I can go directly to the place if I have the coordinates.

| FEATURE | ACTION | EXPECTED RESULT | ACTUAL RESULT |
| --- | --- | --- | --- |
| Website | Design of ... | Different designs ... | Works as expected | 

<details>
    <summary>Screenshot</summary>

![Am I Responsive Image](docs/features-and-evidence/Esri-map-manual.PNG) 
</details>
<br><br>

5. As a user, I want to be able to analyse the weather information in three groups (wind, temperature and "other"), so I immediately get the most relevant data (wind and temperature) for the planning of the work.

| FEATURE | ACTION | EXPECTED RESULT | ACTUAL RESULT |
| --- | --- | --- | --- |
| Website | Design of ... | Different designs ... | Works as expected | 

<details>
    <summary>Screenshot</summary>

![Am I Responsive Image](docs/am-i-responsive.PNG) 
</details>
<br><br>

6. As a user, I want to be able to display the weather information for the last 5, 15 or 30 days, so I can focus on the segment I consider most important.

| FEATURE | ACTION | EXPECTED RESULT | ACTUAL RESULT |
| --- | --- | --- | --- |
| Website | Design of ... | Different designs ... | Works as expected | 

<details>
    <summary>Screenshot</summary>

![Am I Responsive Image](docs/am-i-responsive.PNG) 
</details>
<br><br>

7. As a user, I want to be able to display the weather information on charts, so it is more convenient for interpretation and a visualization.

| FEATURE | ACTION | EXPECTED RESULT | ACTUAL RESULT |
| --- | --- | --- | --- |
| Website | Design of ... | Different designs ... | Works as expected | 

<details>
    <summary>Screenshot</summary>

![Am I Responsive Image](docs/am-i-responsive.PNG) 
</details>
<br><br>

8. As a user, I want to have a blog so I can discuss HSE matters (including incidents) during data acquisition.

| FEATURE | ACTION | EXPECTED RESULT | ACTUAL RESULT |
| --- | --- | --- | --- |
| Website | Design of ... | Different designs ... | Works as expected | 

<details>
    <summary>Screenshot</summary>

![Am I Responsive Image](docs/am-i-responsive.PNG) 
</details>
<br><br>

9. As a user, I want to have a blog so I can discuss issues related to the facilities of the base camp with the Camp Boss.

| FEATURE | ACTION | EXPECTED RESULT | ACTUAL RESULT |
| --- | --- | --- | --- |
| Website | Design of ... | Different designs ... | Works as expected | 

<details>
    <summary>Screenshot</summary>

![Am I Responsive Image](docs/am-i-responsive.PNG) 
</details>
<br><br>

10. As a user, I want to have a blog so I can get help on IT related issues on crew.

| FEATURE | ACTION | EXPECTED RESULT | ACTUAL RESULT |
| --- | --- | --- | --- |
| Website | Design of ... | Different designs ... | Works as expected | 

<details>
    <summary>Screenshot</summary>

![Am I Responsive Image](docs/am-i-responsive.PNG) 
</details>
<br><br>

11. As a user, I want to have a blog so I can discuss general technical issues during data acquisition.

| FEATURE | ACTION | EXPECTED RESULT | ACTUAL RESULT |
| --- | --- | --- | --- |
| Website | Design of ... | Different designs ... | Works as expected | 

<details>
    <summary>Screenshot</summary>

![Am I Responsive Image](docs/am-i-responsive.PNG) 
</details>
<br><br>

12. As a user, I want to have a blog so I can discuss survey matters.

| FEATURE | ACTION | EXPECTED RESULT | ACTUAL RESULT |
| --- | --- | --- | --- |
| Website | Design of ... | Different designs ... | Works as expected | 

<details>
    <summary>Screenshot</summary>

![Am I Responsive Image](docs/am-i-responsive.PNG) 
</details>
<br><br>

13. As a user, I want to have a blog so I can discuss management matters of the crew.

| FEATURE | ACTION | EXPECTED RESULT | ACTUAL RESULT |
| --- | --- | --- | --- |
| Website | Design of ... | Different designs ... | Works as expected | 

<details>
    <summary>Screenshot</summary>

![Am I Responsive Image](docs/am-i-responsive.PNG) 
</details>
<br><br>

14. As a user, I want to have a blog so I can discuss the ongoing tasks related to the QA/QC of the data being acquired.

| FEATURE | ACTION | EXPECTED RESULT | ACTUAL RESULT |
| --- | --- | --- | --- |
| Website | Design of ... | Different designs ... | Works as expected | 

<details>
    <summary>Screenshot</summary>

![Am I Responsive Image](docs/am-i-responsive.PNG) 
</details>
<br><br>

15. As a user, I want to have a blog so I can discuss the ongoing tasks related to the processing of the data being acquired.

| FEATURE | ACTION | EXPECTED RESULT | ACTUAL RESULT |
| --- | --- | --- | --- |
| Website | Design of ... | Different designs ... | Works as expected | 

<details>
    <summary>Screenshot</summary>

![Am I Responsive Image](docs/am-i-responsive.PNG) 
</details>
<br><br>

16. As a user, I want to have a blog so I can discuss the status of the vehicles on crew and its mechanical issues (if any).

| FEATURE | ACTION | EXPECTED RESULT | ACTUAL RESULT |
| --- | --- | --- | --- |
| Website | Design of ... | Different designs ... | Works as expected | 

<details>
    <summary>Screenshot</summary>

![Am I Responsive Image](docs/am-i-responsive.PNG) 
</details>
<br><br>

17. As a user, I want to have a blog so I can check the personnel available on crew.

| FEATURE | ACTION | EXPECTED RESULT | ACTUAL RESULT |
| --- | --- | --- | --- |
| Website | Design of ... | Different designs ... | Works as expected | 

<details>
    <summary>Screenshot</summary>

![Am I Responsive Image](docs/am-i-responsive.PNG) 
</details>
<br><br>

18. As a user, I want to be able to contact the site administrator and/or owner and/or developer, so I can send feedback to them.

| FEATURE | ACTION | EXPECTED RESULT | ACTUAL RESULT |
| --- | --- | --- | --- |
| Website | Design of ... | Different designs ... | Works as expected | 

<details>
    <summary>Screenshot</summary>

![Am I Responsive Image](docs/am-i-responsive.PNG) 
</details>
<br><br>

19. As a user, I want to be able to find the sign-up button easily, so I can quickly access the site.

| FEATURE | ACTION | EXPECTED RESULT | ACTUAL RESULT |
| --- | --- | --- | --- |
| Website | Design of ... | Different designs ... | Works as expected | 

<details>
    <summary>Screenshot</summary>

![Am I Responsive Image](docs/am-i-responsive.PNG) 
</details>
<br><br>


- ### **Returning users**
20. As a returning user, I want to be able to contact the site administrator and/or owner and/or developer, so I can send feedback to them.

| FEATURE | ACTION | EXPECTED RESULT | ACTUAL RESULT |
| --- | --- | --- | --- |
| Website | Design of ... | Different designs ... | Works as expected | 

<details>
    <summary>Screenshot</summary>

![Am I Responsive Image](docs/am-i-responsive.PNG) 
</details>
<br><br>

21. As a returning user, I want a navigation menu on top and always visible, so I can access any content on the website from there and do not need to use the back button of the browser.

| FEATURE | ACTION | EXPECTED RESULT | ACTUAL RESULT |
| --- | --- | --- | --- |
| Website | Design of ... | Different designs ... | Works as expected | 

<details>
    <summary>Screenshot</summary>

![Am I Responsive Image](docs/am-i-responsive.PNG) 
</details>
<br><br>

22. As a returning user, I want to be able to find the sign-in and sign-out buttons easily, so I can quickly access the site.

| FEATURE | ACTION | EXPECTED RESULT | ACTUAL RESULT |
| --- | --- | --- | --- |
| Website | Design of ... | Different designs ... | Works as expected | 

<details>
    <summary>Screenshot</summary>

![Am I Responsive Image](docs/am-i-responsive.PNG) 
</details>
<br><br>

23. As a returning user, I want to have a way to contact the developer so I can contribute and/or indicate errors or bugs.

| FEATURE | ACTION | EXPECTED RESULT | ACTUAL RESULT |
| --- | --- | --- | --- |
| Website | Design of ... | Different designs ... | Works as expected | 

<details>
    <summary>Screenshot</summary>

![Am I Responsive Image](docs/am-i-responsive.PNG) 
</details>
<br><br>

24. As a returning user, I want to be informed if the contact form goes through, so I know if my message is sent or it is not.

| FEATURE | ACTION | EXPECTED RESULT | ACTUAL RESULT |
| --- | --- | --- | --- |
| Website | Design of ... | Different designs ... | Works as expected | 

<details>
    <summary>Screenshot</summary>

![Am I Responsive Image](docs/am-i-responsive.PNG) 
</details>
<br><br>


- ### **Site Owner**
25. As owner, I want to provide a description of the site, with instructions, so users know how to use it.

| FEATURE | ACTION | EXPECTED RESULT | ACTUAL RESULT |
| --- | --- | --- | --- |
| Website | Design of ... | Different designs ... | Works as expected | 

<details>
    <summary>Screenshot</summary>

![Am I Responsive Image](docs/am-i-responsive.PNG) 
</details>
<br><br>

26. As owner, I want to create a tool that provides weather information around the world, so users can use it to plan seismic/geophysical data acquisition activities, or any other work that depends on weather conditions.

| FEATURE | ACTION | EXPECTED RESULT | ACTUAL RESULT |
| --- | --- | --- | --- |
| Website | Design of ... | Different designs ... | Works as expected | 

<details>
    <summary>Screenshot</summary>

![Am I Responsive Image](docs/am-i-responsive.PNG) 
</details>
<br><br>

27. As owner, I want to create a blog, in the same tool, so users can present, discuss, solve issues and find solutions about their daily activities on crew.

| FEATURE | ACTION | EXPECTED RESULT | ACTUAL RESULT |
| --- | --- | --- | --- |
| Website | Design of ... | Different designs ... | Works as expected | 

<details>
    <summary>Screenshot</summary>

![Am I Responsive Image](docs/am-i-responsive.PNG) 
</details>
<br><br>

28. As owner, I want to receive feedback from users, so I can take actions in response to them if needed.

| FEATURE | ACTION | EXPECTED RESULT | ACTUAL RESULT |
| --- | --- | --- | --- |
| Website | Design of ... | Different designs ... | Works as expected | 

<details>
    <summary>Screenshot</summary>

![Am I Responsive Image](docs/am-i-responsive.PNG) 
</details>
<br><br>

29. As owner, I want to provide a navigation menu on top and always visible, so users can access any content at any time without needing the back button.

| FEATURE | ACTION | EXPECTED RESULT | ACTUAL RESULT |
| --- | --- | --- | --- |
| Website | Design of ... | Different designs ... | Works as expected | 

<details>
    <summary>Screenshot</summary>

![Am I Responsive Image](docs/am-i-responsive.PNG) 
</details>
<br><br>

30. As owner, I want to give as many options to be contacted as possible, so users can choose forms or links in the footer to send their consultations and/or feedback in a very fast way.

| FEATURE | ACTION | EXPECTED RESULT | ACTUAL RESULT |
| --- | --- | --- | --- |
| Website | Design of ... | Different designs ... | Works as expected | 

<details>
    <summary>Screenshot</summary>

![Am I Responsive Image](docs/am-i-responsive.PNG) 
</details>
<br><br>

31. As owner, I want to have users registered and ask them to sign-in to access all site capabilities, so the site is accessible to members of the crew and an administrator (e.g., a member of the management team like the Party Manager or Admin) can act as moderator.

| FEATURE | ACTION | EXPECTED RESULT | ACTUAL RESULT |
| --- | --- | --- | --- |
| Website | Design of ... | Different designs ... | Works as expected | 

<details>
    <summary>Screenshot</summary>

![Am I Responsive Image](docs/am-i-responsive.PNG) 
</details>
<br><br>

32. As owner, I want to set the basis of a product, so I can improve it in the future and adapt it to specific crews or projects.

| FEATURE | ACTION | EXPECTED RESULT | ACTUAL RESULT |
| --- | --- | --- | --- |
| Website | Design of ... | Different designs ... | Works as expected | 

<details>
    <summary>Screenshot</summary>

![Am I Responsive Image](docs/am-i-responsive.PNG) 
</details>
<br><br>

33. As owner, along with other points of this section, I want to show my work and give the option to users to contact me if they wish.

| FEATURE | ACTION | EXPECTED RESULT | ACTUAL RESULT |
| --- | --- | --- | --- |
| Website | Design of ... | Different designs ... | Works as expected | 

<details>
    <summary>Screenshot</summary>

![Am I Responsive Image](docs/am-i-responsive.PNG) 
</details>
<br><br>

34. As owner, I want to provide a responsive website, so user can access it from any device without any constraint to navigate, find and/or use the website.

| FEATURE | ACTION | EXPECTED RESULT | ACTUAL RESULT |
| --- | --- | --- | --- |
| Website | Design of ... | Different designs ... | Works as expected | 

<details>
    <summary>Screenshot</summary>

![Am I Responsive Image](docs/am-i-responsive.PNG) 
</details>
<br><br>

35. As owner, I want to inform users if they consultation/message was successfully sent, so they know if they need to resend it or they do not.

| FEATURE | ACTION | EXPECTED RESULT | ACTUAL RESULT |
| --- | --- | --- | --- |
| Website | Design of ... | Different designs ... | Works as expected | 

<details>
    <summary>Screenshot</summary>

![Am I Responsive Image](docs/am-i-responsive.PNG) 
</details>
<br><br>

36. As owner, I want to inform the user, through an error page, if there is any error when loading the website.

| FEATURE | ACTION | EXPECTED RESULT | ACTUAL RESULT |
| --- | --- | --- | --- |
| Website | Design of ... | Different designs ... | Works as expected | 

<details>
    <summary>Screenshot</summary>

![Am I Responsive Image](docs/am-i-responsive.PNG) 
</details>
<br><br>



## [Back to Index](#index)
<br>

___
# 9 . Bugs

Some bugs were related to positioning of elements in the page. They were fixed by assigning proper values, most of them with the help of a temporary background colour for the element.

Then, many minor bugs were solved just by assigning the correct property and/or by trial and error.

Bugs that required more time and specific solutions were the following ones:

| Bug | Solution |
| ---- | ---- |
| It was not possible to log into an administration account in Django. | The issue arises for Django version 4; solved with the help of Code Institute Tutor Assistance (Alan) on December 20th, 2021, at 15:55, by assigning the workspace URL to the variable CSRF_TRUSTED_ORIGINS in the settings.py file to ['https://8000-aqua-jay-tl4cc8xk.ws-eu23.gitpod.io'] | 
| The pages of the website could not be loaded all together, only either instructions and blog pages together, or weather and contact pages together, never the four pages together  | The issue was solved by changing the order of elements in the urlpatterns variable in the app (app_blog) urls.py file from Blog/(Post Detail)/Instructions/Weather/Contact to Instructions/Weather/Contact/Blog/(Post Detail); solution found on https://stackoverflow.com/questions/36429144/page-not-found-404-no-post-matches-the-given-query, on December 23rd, 2021, at 03:20. |
| It was not possible to convert data (sent to views.py with AJAX, with POST) to float, even after trying with JSON.stringify() | Solved by deleting "dataType: 'json'," line, as the method seems to pass strings, which can be easily converted to float (before, a "ul" element was being received). Reference: https://stackoverflow.com/questions/1969476/ajax-success-event-not-working; accessed on January 4th, 2022, at 21:10. |
| Django models in app_weather could not be migrated as a result of wrongly deleting migrations file, causing a deleted column not registered/available in the files when reversing the migrations. | Issue solved with the help of Code Institute Tutor Assistance (Igor) by deleting the Postgres database, creating a new one, deleting all migrations files in all applications (except each __init__.py), making migrations, migrating and creating superuser again. |
| There were some issues with the deployment in Heroku, apparently as a result of a changes in Gitpod. | The issue was solved with the help of the Code Institute Tutor Assistance by installing Django version 3.2 (instead of version 4.0), creating a new workspace in Gitpod, and generating a new requirements.txt file. | 
| It was not possible to test the accessibility of the weather.html file; when using https://wave.webaim.org/, the weather app/page stopped working (even if it was working right before using the validator), even when they are in different windows and/or browsers; the validator reads a "ul" string/tag, while the app/page reads the correct string. | The issue was solved with the help of the Code Institute Tutor Assistance by working with try/except options; however the resulting "FieldError" could not be addressed and a general "except" was used. In addition, query of data was carried out outside the "context" variable of the views.py file of the weather app. However, after a while, and without changing the files, the issue has arisen again; the weather app/page seems to works fine after any change in the Config Vars of Heroku. | 

<br><br>
## [Back to Index](#index)
<br>

___
# 10 . Deployment

The website was fully written in Gitpod, permanently tested with Gitpod preview, and periodically deployed to GigHub Pages (in a main branch) and Heroku.

The fully deployed website, accessible by anyone, is found [here](https://csc7.github.io/PP2_CI_WW), whose URL is https://csc7.github.io/PP2_CI_WW . Its repository is found [here](https://github.com/csc7/PP4_CI_WQCS), whose URL is https://github.com/csc7/PP2_CI_WW.

The site requires access to OpenWeather and Google Chart API, whose configuration have been carried out following the instructions of their developers:

OpenWeather: https://openweathermap.org/current
Google Charts: https://developers.google.com/chart/interactive/docs/gallery/linechart

Follow these steps to deploy in Heroku platform:

1 - Creat JSON file (use asdlkfjasdlkfj as a wizard) to be able to run JavaScript on Heroku.

2 - Include dependencies in a requirements.txt file, which is used by Heroku to install the dependencies. Use this command: "pip3 freeze > requirements.txt"

3 - Create new app from the dashboard of your Heroku account.

4 - Go to settings of the apps (do that before deploying the code).

5 - Ignore this step if you do not use credentials to access other services. In Config Vars, create a new one giving the name of CREDS, and assign to content of the JSON file with credentials to its value.

6 - Go to Buildpacks and add Python and Node.js, in that order, keeping Python on top and NodeJS below.

7 - Go to the deploy sections of the app, select GitHub as the Deployment method, assign a name for the repository to connect to GitHub, and connect.

8 - Go to the bottom and select whether you want automatic (rebuilding for each commit) or manual deployment.

You will get a button with a link to your app if successfully deployed.

<details>
    <summary>GitHub Pages Screenshot</summary>

![Deployment on GitHub Pages Image](docs/GitHub-Pages.PNG) 
</details>

\
After first deployment, several updates have been carried out before the final version. These updates were implemented in the deployed website from Gitpod, just by using the "push" command for every commit (change) in the ongoing development.

The project repository can be forked from GitHub (https://github.com/csc7/PP2_CI_WW), please check for the "Fork" button, top-right of the page, to achieve this task.

<br><br>
## [Back to Index](#index)
<br>

___
# 11 . Credits

- Code Institute:

    - I have used the learning material in the course as a guide and reference.

    - "I Think Therefore I Blog" project:
        - models.py file copied from this project on December 20th, 2022 at 13:34.
        - admin.py file copied from this project on December 20th, 2022 at 17:31.
        - views.py file copied from this project on December 20th, 2022 at 17:50.
        - blog.html file copied from Code Institute "I Think Therefore I Blog" project, index.html file, on December 20th, 2022 at 18:01.
        - urls.py in app folder (/app_blog), file copied from this project on December 20th, 2022 at 18:09.
        - post_detail.htm file, copied from this project on December 20th, 2022 at 18:58.

    - Tutor Assistance: Django models in app_weather could not be migrated as a result of wrongly deleting migrations file; issue solved with the help of Code Institute Tutor Assistance (Igor) by deleting the Postgres database, creating a new one, deleting all migrations files in all applications (except each __init__.py), making migrations, migrating and creating superuser again.

- Love Maths - Essentials Project, from Code Institute, as a guide, source of design, concepts and code for this project, especially for the Quiz page.

- Love Running - Essentials Project, from Code Institute, as a guide, source of design, concepts and code for this project.

- Balsamiq Wireframes: I have used it to create all the wireframes.

- Jesse James Garrett's process for user experience.

- Babel JavaScript compiler (transpiler, to try to solve ES5 issues for Internet Explorer, finally not implemented, https://babeljs.io/docs/en/babel-standalone). Tested on August 6th, 2021, between 5:30 and 6:30 approximately.

- Bootstrap:

    - Bootstrap Navbar, copied from https://getbootstrap.com/docs/4.0/components/navbar/ on July 8th, 2021, at 00:35, and December 7th, 2021, 04:00; menu content modified.

    - Bootstrap CSS link: code copied on December 7th, 2021, 01:50 from Code Institute lessons; "<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">"

    - Bootstrap Scripts - copied on December 7th, 2021, 06:21 from https://getbootstrap.com/docs/4.0/getting-started/introduction/ .

    - Bootstrap Navs (for footer): Copied on December 7th, 2021, 05:00 from https://getbootstrap.com/docs/4.0/components/navs/; content modified.

    - To centre elements in Navs and Navbar: justify-content-center class. Copied on July 8th, 2021, 03:43 from https://getbootstrap.com/docs/4.0/components/navs/ .

    - Button trigger modal: code copied on December 7th, 2021, 08:34 from https://getbootstrap.com/docs/4.0/components/modal/; content modified.

- Django-allauth: https://django-allauth.readthedocs.io/en/latest/, installed on December 23rd, 2021, at 11:32.

- Django Documentation:

    - To add a second database: https://docs.djangoproject.com/en/4.0/intro/tutorial02/; accessed on December 28th, 2021, 19:30.

    - To define a second database: https://docs.djangoproject.com/en/4.0/topics/db/multi-db/; accessed on December 28th, 2021, 20:10.


- ERD:
    - ERDPlus, to make the data model graph, https://erdplus.com/standalone 

- ESRI:
    - Code for maps and picking of latitude and longitude, by LloydBronn, (01-05-2017 10:00 AM): https://community.esri.com/t5/arcgis-api-for-javascript-questions/mouse-click-to-get-map-point-or-x-y/m-p/516073#M48139; copied and modified on December 8th, 2021, 04:00.

    - Produce a map with ESRI: https://developers.arcgis.com/javascript/latest/display-a-map/; accessed on December 8th, 2021, 2:30.

    - https://developers.arcgis.com/javascript/latest/query-a-feature-layer-sql/; accessed on December 8th, 2021, 2:35.



- Font Awesome:

    - Font Awesome Script / Kit, link copied on December 7th, 2021, 05:07 from Font Awesome personal account.

    - Icon for LinkedIn: link copied on December 7th, 2021, 05:50 from https://fontawesome.com/v5.15/icons/linkedin?style=brands (<i class="fab fa-linkedin"></i>).

    - Icon for GitHub: link copied on December 7th, 2021, 05:52 from https://fontawesome.com/v5.15/icons/github-square?style=brands (<i class="fab fa-github-square"></i>).

    - Icon for E-mail/Envelope: link copied on December 7th, 2021, 05:53 from https://fontawesome.com/v5.15/icons/envelope-square?style=solid (<i class="fas fa-envelope-square"></i>).

    - Icon for website logo (wind), downloaded on December 7th, 2021, 09:15, from https://fontawesome.com/v5.15/icons/wind?style=solid .

    - Icons for each topic in the blog page: https://fontawesome.com/, "i" tags copied on January 21st, 2022, starting at 16:00, URL above each "i" tag:
        - https://fontawesome.com/v5.15/icons/drafting-compass?style=solid
        - https://fontawesome.com/v5.15/icons/laptop?style=solid
        - https://fontawesome.com/v5.15/icons/trailer?style=solid
        - https://fontawesome.com/v5.15/icons/hard-hat?style=solid
        - https://fontawesome.com/v5.15/icons/map-marker-alt?style=solid
        - https://fontawesome.com/v5.15/icons/user-tie?style=solid
        - https://fontawesome.com/v5.15/icons/calendar-check?style=regular
        - https://fontawesome.com/v5.15/icons/wave-square?style=solid
        - https://fontawesome.com/v5.15/icons/wrench?style=solid
        - https://fontawesome.com/v5.15/icons/users?style=solid



- Google:

    - Google Fonts: Heebo (Medium 500) and Oxygen (Regular 400), first imported on December 7th, 2021, 08:01, from: https://fonts.google.com/; (<style>
    @import url('https://fonts.googleapis.com/css2?family=Heebo:wght@500&family=Oxygen&display=swap');</style>).

- jQuery:

    - Checked several methods at https://api.jquery.com/ .

- MDN Web Docs Moz://a;
    - To perform an action when an input field changes: https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event; accessed on January 7th, 2022, at 18:17.

- OpenWeatherMap:

    - ADFSD

- Stack Overflow:

    - To reverse the order of columns after a specific Bootstrap breakpoint: https://stackoverflow.com/questions/50768176/order-div-breakpoint-mobile-bootstrap-4?noredirect=1&lq=1; accessed on December 7th, 2021, at 08:30.

    - To solve "multipleDefine" errors by loading ArcGIS and Dojo JS at the end: https://stackoverflow.com/questions/16600063/dojo-1-9-build-multipledefine-error-while-loading-locale; accessed on December 7th, 2021, at 05:50.

    - Investigating two blocks in template HTML file for Flask: https://stackoverflow.com/questions/1242239/multiple-blocks-of-same-name-in-jinja2; accessed on December 12th, 2021, at 07:20.

    - To fix the template views: https://stackoverflow.com/questions/36429144/page-not-found-404-no-post-matches-the-given-query, accessed on December 23rd, 2021, at 03:20.

    - To send data from template to Django views:
    https://stackoverflow.com/questions/49885711/passing-json-data-to-django-using-ajax, on January 1st, 2022.
    https://stackoverflow.com/questions/6506897/csrf-token-missing-or-incorrect-while-post-parameter-via-ajax-in-django, on January 1st, 2022.
    https://stackoverflow.com/questions/42354001/json-object-must-be-str-bytes-or-bytearray-not-dict, on January 1st, 2022.
    https://stackoverflow.com/questions/4681202/what-is-a-django-queryset, on January 1st, 2022.
    https://stackoverflow.com/questions/32304893/how-to-parse-json-data-with-ajax-post-in-django-view, on January 1st, 2022.

    - To add record to Django database:
    https://stackoverflow.com/questions/35602049/how-to-insert-data-to-django-database-from-views-py-file/35602287, on January 1st, 2022.

    - To read date in Unix UTC format:
    https://stackoverflow.com/questions/847185/convert-a-unix-timestamp-to-time-in-javascript, accessed on January 3rd, 2022, at 13;00.

    - To check if request is AJAX:
    Check if request is AJAX, accessed on January 4th, 2022, at 2058, in https://stackoverflow.com/questions/8508602/check-if-request-is-ajax-in-python .

    - To solve the issue of sending data, from weather.js to to views.py (app_weather) with AJAX, that can be convertible to float: https://stackoverflow.com/questions/1969476/ajax-success-event-not-working; accessed on January 4th, 2022, at 21:10.

    - To update "div" element instead of whole page with AJAX: https://stackoverflow.com/questions/18490026/refresh-reload-the-content-in-div-using-jquery-ajax; accessed on January 4th, 2022, at 21:20.

    - To get date in Python: https://stackoverflow.com/questions/32490629/getting-todays-date-in-yyyy-mm-dd-in-python, copied on January 12th, 2022, at 18:40.

    - To load static folder for favicon in HTML head: https://stackoverflow.com/questions/35054230/custom-tag-not-loaded-in-template, accessed on January 22nd, at 15:05.

    - To count records in a database table: https://stackoverflow.com/questions/15635790/how-to-count-the-number-of-rows-in-a-database-table-in-django, accessed on January 22nd, at 18:47.

- W3C®. Copyright © 2021 W3C ® (MIT, ERCIM, Keio, Beihang):
    - How to introduce author in anchor element: https://www.w3.org/TR/2011/WD-html5-author-20110809/the-link-element.html, accessed on August 4th, 2021, at 00:06.

- W3Schools (Powered by W3.CSS):

    - Intro to AJAX: https://www.w3schools.com/js/js_ajax_intro.asp, on January 1st, 2022.

    - ...: https://www.w3schools.com/...; accessed on ..., 2021, at 23:55.



## [Back to Index](#index)
___
# 12 . Acknowledgements

I would like to acknowledge and thank the following people for being part of this project and for helping me in the development of it:
- To my wife and family, for always supporting and helping.
- Code Institute, for providing knowledge, guide, content and tools.
- My mentor, Mo, for helping with very valuable guide and support.
- Code Institute community in Slack for permanently being an online reference.
- All the valuable information provided by the sources mentioned above in the credits.

<br><br>
## [Back to Index](#index)
<br>




