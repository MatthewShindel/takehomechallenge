# The Compendium

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This application was designed and built within a 8 hour period. This application uses the [News API](https://newsapi.org/), an open source api, to see, view, and read various news articles from a variety of sources. Simple loading the application gets a list of articles for the viewer to read. 

By default the user is presented news from all sources. At the top of the webpage, a user can choose to filter news based on their sources, including BBC, NBC, and ABC. 

If a user wishes to see more in depth information about an article, they can click on the image in the article card. Upon clicking the image, a modal appears, that displayes more in depth infromation about the article, as well as a hyperlink to the main webpage for the article. users can exit this modal to go back to the homepage. 

### Running this application

To use this application, do the following steps:

1. Clone this repository
2. run 'npm install'
3. run 'npm start'

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


### My thoughts about potential improvements

My main goal was to complete the MVP requirements as quickly as possible, considering the time frame was only 8 hours. The main challenge I had in this project was I didn't give myself enough time for me to style the webpage the way I wanted. The webpage is readable, but not nice the interact with. Additionally, I didn't incorperate React Router into my application, mainly due to time constraints, which is something I want to add in the future. 

Furthermore, the way the I have article information stored would have to be refactored in order to make sure that Router would displayed the correct information, should you move between webpages. I could set it up in a way that all of the sources fetch their respective articles at the start of the webpage loading, then display them when they are clicked on.

