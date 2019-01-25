

### some interesting extensions >>>
 - [PolitEcho](http://politecho.org/) shows you the political biases of your Facebook friends and news feed
 - [Un-Transcender](https://chrome.google.com/webstore/detail/un-transcender/aegcbjflheephjplfflgdgmcpipcjdmf) changes all instances of "transcended race" to "was retroactively deemed safe by white people".
 - [The Marauders Map](https://github.com/arank/marauders-map) : A chrome extension to creepily map your friends' locations from FB messenger
 - [100 days of internet interventions](https://ch1n00.tumblr.com/) : 100 Chrome Extensions that interfere with your web browsing experience.
 - [Facebook Demetricator](https://bengrosser.com/projects/facebook-demetricator/) hides all the metrics on Facebook
 - [Jailbreak the Patriarchy](https://chrome.google.com/webstore/detail/jailbreak-the-patriarchy/fiidcfoaaciclafodoficaofidfencgd?hl=en-US) genderswaps the world for you. When it's installed, everything you read in Chrome (except for gmail, so far) loads with pronouns and a reasonably thorough set of other gendered words swapped.
 - [Decodelia](https://melanie-hoff.com/DECODELIA/) is a Chrome extension and glasses set that uses basic principles of color theory to render your browser’s content visible only with the use of red-tinted glasses.
- ^^ above + more curated on ['activist' themed browser extensions list on are.na](https://www.are.na/omayeli-arenyeka/activist-themed-browser-extensions) 


### what can an extension do?
- a whole lot of stuff. 
- could think about this in 2 categories - **simple** extensions that change something on a web page without much interaction, and **complex** extensions that might save data, ask you to login to a service or other kinds of interactions etc. 
- **simple** extensions can do pretty much anything you could do with javascript for a site you made - you could modify the style for certain elements, replace or add text or images etc
- **complex** extensions have access to [chrome's api](https://developer.chrome.com/extensions/api_index) -- so they can get information and events related to tabs, windows, history etc.
- [here](https://developer.chrome.com/extensions/overview) is a more detailed technical overview. 


### making an extension
 - every extension needs a `manifest.json` file specifying all the parts of an extension -- more on that [here](https://developer.chrome.com/extensions/manifest)
 - these parts could incluce `content` scripts -- which get inserted at the end of a webpage (**simple** extensions), 
 - or `background` scripts, which can have code to respond to certain browser events (they sit quietly in the background until then),
 - information about what website(s) the extension should run on,
 - icons, and popup or menu styling for the extension.
 - extensions can also include third-party javascript libraries (for eg. p5.js)
 - one such handy library (for web-related things in general) is [jQuery](https://jquery.com/) -- it makes accessing and modifying elements on the page easy
 - jQuery documentation is [here](https://api.jquery.com)

### do this 
 - go to chrome://extensions
 - enable **developer mode**
 - click **load unpacked** and select the extension directory
 - you can click on the refresh icon every time you makes changes to your files (the icon will only show up if the extension is turned on)
 - !!NOTE: **keep the extension page open at all times while tinkering**. In the event that you make an extension that makes the page content disappear, you will struggle to reach the extensions page to turn it off and will need to replace your laptop. [or open chrome in incognito mode] 

