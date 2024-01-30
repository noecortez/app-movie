import { getTrendingAll } from './services/trending.service'
import '/src/css/style.css'
import { Result } from './interfaces/trending.interface';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="showTrending" type="button">Click there!</button>
    </div>
    <p class="read-the-docs">
      Construyendo la aplicación en Vite
    </p>
		<div id="trending" class="d-flex justify-content-center"></div>
  </div>
`
document.getElementById('showTrending')?.addEventListener('click', () => {
	getTrendingAll().then(trending => {
		const results: Result[] = trending.results;
		results.forEach((result: Result) => {
			const card = document.createElement('div');
			card.classList.add('card-image');
			const image = document.createElement('img');
			image.src = 'https://image.tmdb.org/t/p/w500' + result.poster_path;
			card.appendChild(image);
			document.getElementById('trending')?.appendChild(card);
		});
	});
})
