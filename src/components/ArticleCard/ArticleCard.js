import './ArticleCard.css';
import { useState } from 'react';
import ArticleInfo from '../ArticleInfo/ArticleInfo';

export default function ArticleCard({article}) {
	const [showModal, setShowModal] = useState(false);

	const handleImageClick = () => {
    setShowModal(true);
  };

	const handleCloseModal = () => {
    setShowModal(false);
  };

	return (
    <div className='article-card'>
      <h2>{article.title}</h2>
      <p>{article.description}</p>
      <img src={article.urlToImage} alt={article.title} onClick={handleImageClick}></img>
      {showModal && <ArticleInfo article={article} onClose={handleCloseModal} />}
    </div>
	)
}