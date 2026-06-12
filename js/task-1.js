const categoryItem = document.querySelectorAll('#categories .item');
console.log(`Number of categories: ${categoryItem.length}`);
  
categoryItem.forEach(item => {
  const categoryTitle = item.querySelector('h2').textContent;
  const categoryElements = item.querySelectorAll('li').length;
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryElements}`);
});