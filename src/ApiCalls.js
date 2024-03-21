export const getArticles = () => {
		return fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=7d83810d785f4cf7ad2df381c42baa83`)
	}

export const getSourceArticles = (source) => {
	var url = `https://newsapi.org/v2/top-headlines?sources=${source}-news&apiKey=7d83810d785f4cf7ad2df381c42baa83`;
	return fetch(url)
}