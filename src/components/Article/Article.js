import './Article.css';
import ArticleCard from '../ArticleCard/ArticleCard';

export default function Article({articles}) {
	const filteredArticles = articles.filter(article => article.content !== "[Removed]");

	const articleCards = filteredArticles.map((article , index) => {
		return (
			<ArticleCard
			key = {index}
			article={article}
			/>
		)
	})
	return (
		<div className='articles-container'>
			{articleCards}
		</div>
	)
}