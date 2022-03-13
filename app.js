// Variables
const about = document.querySelector('.about');
const tabBtns = document.querySelectorAll('.tab-btn');
const articles = document.querySelectorAll('.content');

// Event click sur about, le conteneur parent (bubbling)
about.addEventListener('click', (e) => {
	// Il y a un data-id ? oui, alors nous avons bien cliqué 
	// sur un bouton avec la remontée il faut tester ,-)
	const id = e.target.dataset.id;
	if (id){
		// remove active from all tabBtns
		tabBtns.forEach((btn) => {
			btn.classList.remove('active');
		});
		// add active for THIS button
		e.target.classList.add('active');
		// same for articles
		articles.forEach((article) => {
			article.classList.remove('active');
		});
		const thisArticle = document.getElementById(id);
		thisArticle.classList.add('active');
	}
});