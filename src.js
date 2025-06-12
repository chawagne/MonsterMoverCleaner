localStorage.removeItem('figures');
const grid = JSON.parse(localStorage.getItem('grid'))
const wallGrid = grid.map(item => {
	return (item === 2) ? item : 0; 
})
localStorage.setItem('grid', JSON.stringify(wallGrid))
localStorage.setItem('active_figure_index', -1)
window.location.href = 'https://gloom.aluminumangel.org/';
