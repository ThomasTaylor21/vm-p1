
# Project #1: Exploring Mars
	• App Title: Explore Mars
	• App Description: 
		○ App will allow user to explore Mars via connectivity to NASA apo
	• API:Site for API:
		○  https://api.nasa.gov/  image data gathered by NASA's Curiosity, Opportunity, and Spirit rovers on Mars 
	• API Snippet:
		○  A sample snippet of JSON from a successful GET request you have made to your API using Postman.
		{
    "photos": [
        {
            "id": 102693,
            "sol": 1000,
            "camera": {
                "id": 20,
                "name": "FHAZ",
                "rover_id": 5,
                "full_name": "Front Hazard Avoidance Camera"
            },
            "img_src": "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG",
            "earth_date": "2015-05-30",
            "rover": {
                "id": 5,
                "name": "Curiosity",
                "landing_date": "2012-08-06",
                "launch_date": "2011-11-26",
                "status": "active"
            }
        },

		
		
		
	• Wireframes: The proposed layout and design of your app. Create mockups for your views. If your are creating multiple views including both desktop and mobile formats, and consider whether or not you need to account for landscape and portrait orientations. Please use a digital tool to complete your wireframe.
	PIC
	
	*************   See attached screen shot listed in GITHUB  *********************
	
	
	
	
	
	
	
	
	
	
	• MVP: 
		○ Point and click to images brought in via NASA api. Choices will be selectable via indexed buttons that will expand to an assortment of images that will appear for viewing.
	• 
	• A list of features you will need to build in order to meet the Minimum Viable Product. This will be the rubric your project will be graded against.
		○ Point and click
		○ Selectable list from a drop-down list of images
		○ Return of image (one at a time) Can cycle through using a reset or clearing the image panel.
	• Post-MVP: A list of additional/advanced features you would like to include in your app after you have met MVP.
		○ Add a method to print image to local printer
		○ Add a method to :share image: or send via email.
		○ Add method to save image to you device (PC or Smartphone
		
	• Goals: What you plan to accomplish for each day of the project week.
		○ Day 1
			§ Connect and import API to my GitHUB Repository: https://github.com/ThomasTaylor21/vm-p1#:~:text=/-,vm-p1,-Public
			§ Configure Base of Website: HTML, CSS & JavaScript
			§ Focus on HTML structure, Test as I move along
		○ Day 2
			§ Focus on JavaScript and integrate to HTML
			§ Testing the API connectivity and addressing issues
			§ Start refining with Front end User GUI by setting up CSS
			§ Testing only one API for get format and structures correct.
			§ Duplicating tested API with other two APIs
		○ DAY 3
			§ Adding more features to front end GUI model
			§ Include "reset" feature and "drop-down selector
			§ Refine for eye appeal
		○ DAY 4
			§ Test site and have support take a look at progress and inquire for any refinement of site
			§ Continue to streamline front-end page by looking for opportunities to improve code: CLEAN-UP
			
		



	• Priority Matrix: A graph of your intended areas of development (Pseudocoding, Design, HTML, CSS, JavaScript, Testing, etc) plotted on an X/Y axis where X represents time to completion and Y represents priority. Use a professional tool or upload a well drawn image using an image hosting site such as Cloudinary or a similar hosting service.




	• Timeframes: How long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day. Components should be broken down into a maximum of 3 hours time blocks.
![image](https://user-images.githubusercontent.com/79855481/140663463-33cb6798-ba64-43ae-b5dc-04039affbef6.png)


| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 3hrs| hrs | - |
| Working with API | H | 4hrs| hrs | - |
| Working with HTML | H | 3hrs| hrs |    - |
| Working with JavaScript | H | 3hrs| hrs |     - |
| Working with CSS | H | 6hrs| hrs | hrs |
| Working with Refining Code Integrity | H| 6hrs| hrs |    -|
| Working with Final GUI | H | 7hrs| hrs | hrs |
| Total | H | 36hrs| hrs | hrs |
## Code Snippet
Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  
```
function reverse(string) {
	// here is the code to reverse a string of text
}
```
## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  ![image](https://user-images.githubusercontent.com/79855481/140664504-c5a3d405-2dfb-454c-aafc-fa3e7345d80b.png)





























Can delete below her once complted above!

### STEP 1: Read the Directions
1) Read **ALL** of the directions before you start. We will know...

### STEP 2: Pitch Your Project
Before you start any actual coding, you must meet with your Squad Leader for ~10 minutes to get your app idea approved. Prepare the following materials _before_ your meeting and put them in your README.md:
- **App Title**: The name of your app.
- **App Description**: What your app will do.
- **API**
Description
Get list of manufacturer recalls for vehicles with model year ID

:https://developer.edmunds.com/api-documentation/vehicle/service_recalls/v1/02_recallrepository/findbymodelyearid/api-description

https://api.edmunds.com/v1/api/maintenance/recallrepository/findbymodelyearid?modelyearid={model year ID}&fmt=json&api_key={api key}

- **API Snippet**:

<!DOCTYPE html>
<html>
<head>
	<meta charset=utf-8>
	<title>Edmunds API Example</title>
</head>
<body>
	<div id="results-body"></div>
	<script>
	  	window.sdkAsyncInit = function() {
	    	// Instantiate the SDK
			var res = new EDMUNDSAPI('YOUR API KEY');
			// Optional parameters
			var options = {
				"modelyearid": "100502677"
			};
			// Callback function to be called when the API response is returned
			function success(res) {
				var body = document.getElementById('results-body');
				body.innerHTML = "The recall is: " + res.recallHolder[0].defectDescription;
			}
			// Oops, Houston we have a problem!
			function fail(data) {
				console.log(data);
			}
			// Fire the API call
			res.api('/v1/api/maintenance/recallrepository/findbymodelyearid', options, success, fail);
		    // Additional initialization code such as adding Event Listeners goes here
	  };
	  // Load the SDK asynchronously
	  (function(d, s, id){
	     	var js, sdkjs = d.getElementsByTagName(s)[0];
	     	if (d.getElementById(id)) {return;}
	     	js = d.createElement(s); js.id = id;
	     	js.src = "path/to/sdk/file";
	     	sdkjs.parentNode.insertBefore(js, sdkjs);
	   }(document, 'script', 'edmunds-jssdk'));
	</script>
</body>
</html>






 A sample snippet of JSON from a successful GET request you have made to your API using Postman.
- **Wireframes**:  The proposed layout and design of your app. Create mockups for your views. If your are creating multiple views including both desktop and mobile formats, and consider whether or not you need to account for landscape and portrait orientations. Please use a digital tool to complete your wireframe.
- **MVP**: A list of features you will need to build in order to meet the Minimum Viable Product. This will be the rubric your project will be graded against.
- **Post-MVP**: A list of additional/advanced features you would like to include in your app after you have met MVP.
- **Goals**: What you plan to accomplish for each day of the project week.
- **Priority Matrix**: A graph of your intended areas of development (Pseudocoding, Design, HTML, CSS, JavaScript, Testing, etc) plotted on an X/Y axis where X represents time to completion and Y represents priority. Use a professional tool or upload a well drawn image using an image hosting site such as [Cloudinary](https://cloudinary.com/) or a similar hosting service.
- **Timeframes**: How long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day. Components should be broken down into a maximum of 3 hours time blocks.

Are you interested in styling your README.md to make it look nice? Don't know how to include photos or create links? Check out this [Markdown Cheetsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)!

### STEP 3: Make a New Repo
1. [Make a new personal GitHub repo for your project](https://help.github.com/articles/create-a-repo/). **DO NOT FORK THIS REPO.** 
2. This new repo should be under your personal Github account, not you GA Eneterprize account.
2. Make sure your new repo is set to "Public" and initialize it with a README.md file. **This will be your project worksheet.**
3. Send a link for your repository to your Squad Leader.
4. After your have been approved, clone this new repository down to your machine.
5. CD into the project directory and touch ```index.html```, ```style.css``` and ```script.js``` files.
6. Test a commit and push it to make sure everything is connected with ```git commit -m "Go Bees!"```.

Note: Your repository should **not** be called `project-1`! Think of a name for your application, and then name your repository after your application. 

### STEP 4: &#x1F534; Build Your Project MVP — Mandatory To Pass

#### Your application must meet these requirements:

  1. Built with HTML, CSS, and JavaScript.
  1. Styled using `Flexbox` or `Grid`.
  1. Use Axios to make a request to an external data source and insert some of the retrieved data on to the DOM.
  1. Implement responsive design using at least one media query/breakpoint (i.e. desktop, tablet, mobile, etc).
  1. Fulfill the build requirements you have specified in your MVP.
  1. Deployed site to a hosting service like [Github Pages](https://pages.github.com/).
  1. Make commits to GitHub every day.
  1. A `README.md` file that contains your project worksheet, a link to your live, deployed site, and any necessary installation instructions such as ```npm i```.

#### 📋 List of APIs

Below is a non-exhaustive list of some free APIs you can use. There are _many_ APIs out there, however, so if you find one not on this list, feel free to use it. No matter what API you decide on, make sure you can successfully make a GET request before you commit to using it.

  1. Weather: https://openweathermap.org/api
  1. News: https://newsapi.org/
  1. Giphy: https://developers.giphy.com/
  1. Pokemon: http://pokeapi.co/
  1. Card Deck: https://deckofcardsapi.com/
  1. City of Chicago: https://data.cityofchicago.org/
  1. Beer: https://www.brewerydb.com/developers
  1. Chuck Norris: http://www.icndb.com/
  1. Rick and Morty: https://rickandmortyapi.com/documentation/#rest
  
[This site](https://github.com/toddmotto/public-apis) lists a collection APIs as well. Take a look through their libraries and try to find one that interests you. Please note, however, that many APIs will require an authentication key, and some APIs require payment. We **highly suggest** using a free API for your first project dealing with one.

### STEP 5: &#x1F535; Ideas for Post-MVP - Not Mandatory
- Look into [localstorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) so you can save data to the user's browser 
- Add a second API.
- Add creative use of event listeners and UI interaction.
- Add media queries for responsive design.
- Add animations.
- Get input from a UX student on how to make your app have intuitive UI and design.

### STEP 6: Technical Demonstration

All projects will be presented to the class.  Your presentation should:

* Be no longer than 5 minutes in length
* Show off all features of the app
* Explain the technical details
* Explain the technical challenges
* Explain which improvements you might make

Your presentation should **NOT**:
* Focus on what you didn't accomplish.

You will be sharing your project and your code.  Be prepared to answer questions from the instructors and other students.

Did you read all of the directions before starting? If so write `git commit -m "bee's bee buzz'n"` instead of `git commit -m "first commit"` for your first commit.

### Step 7: Help and Support

1. Each student will be given 5 (five) tokens, redeemable at any time during regular class time (subject to instructors' schedules), for 20 minutes. **Tokens cannot be transferred between students - there is no black market for tokens.**

2. Give at least a 10 minutes heads up to an instructor with the link to your project repo and a link to your `issue` ticket. Instructors will not be holding open office hours during project week. This is to allow you to solve issues and errors you run in to on your own and with your classmates. 

3. [Sign up here for help with your squad lead.](https://docs.google.com/forms/d/e/1FAIpQLSdNQXP9lOO4-RgXDN6Kg5RXkmydjhsuX9qtwoPwZga2wa8_Fw/viewform)

### Step 8: Grading

#### Hard Requirements

The following requirements **_must_** be met in order for the project to be
considered complete:

- The project is deployed to GitHub Pages or a custom domain
- The application renders in the browser and runs without errors
- The repo has a README that adequately documents the project

We do not give letter grades; it is either a pass/fail. The real benchmark is how much you grow and learn each unit. 

You will receive feedback in a secret gist. The gist will be Slacked out independent of your P1 repo to keep feedback confidential. 

An example of the gist can be found here: [Secret Gist](https://gist.git.generalassemb.ly/SteveVW/6b49d9b08d1edcd203609d843eb8b97f)

If you would like more feedback than the gist, instructors will be available to meet one on one. Please feel free to reach out and schedule a time with your squad leader. 

### Incomplete Projects

Incomplete projects will be given an extension. An instructor will follow up with you to discuss the details of the resubmission.  **Note that you are allowed one extension on only one of the four projects.**

<br>

## PLAGIARISM

Remember. We have a **zero-tolerance policy** towards plagiarism. More on our plagiarism policy can be found in our course wiki's [plagiarism page](https://gist.git.generalassemb.ly/SteveVW/7b780310c82d10df98a4e620abbfbfec).
