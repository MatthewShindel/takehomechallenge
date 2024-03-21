import './ArticleInfo.css'

export default function ArticleInfo({ article, onClose }) {
	return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{article.title}</h2>
        <h3>{article.author}</h3>
        <h4>{article.publishedAt}</h4>
				<a href={article.url} target="_blank">Link to Article</a>
        <p>{article.description}</p>
        <p>{article.content}</p>
        <img src={article.urlToImage} alt={article.title}></img>
      </div>
    </div>
	)
}