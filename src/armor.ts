import './styles/main.scss';
import { loadNavbar } from './shared/navbar';

let data: any[] = []; // Store all the data
let currentPage = 1;
const itemsPerPage = 10; // Number of items to load per page
const favorites = new Set<ArmorElement>(); // Use a Set to store favorite elements

export { favorites };
async function fetchDataFromApi(apiUrl: string, page: number): Promise<any> {
  try {
    const response = await fetch(`${apiUrl}?page=${page}&size=${itemsPerPage}`);

    if (!response.ok) {
      throw new Error(`Failed to fetch data. Status: ${response.status}`);
    }

    const newData = await response.json();
    return newData;
  } catch (error) {
    console.error('An error occurred while fetching data:', error);
    throw error;
  }
}

async function fetchAndHandleData(page: number) {
  const apiUrl = 'https://mhw-db.com/armor'; // Replace with your API URL

  try {
    const newData = await fetchDataFromApi(apiUrl, page);

    if (newData.length === 0) {
      // No more data to load
      document.getElementById('load-more-button').style.display = 'none';
      return;
    }

    data = data.concat(newData);

    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    for (let i = startIndex; i < endIndex; i++) {
      createArmorCard(data[i]);
    }
    console.log('Fetched data:', data);
  } catch (error) {
    // Handle any errors
    console.error('Error fetching data:', error);
  }
}

document.getElementById('load-more').addEventListener('click', () => {
  currentPage++;
  fetchAndHandleData(currentPage);
});

function createArmorCard(element: object) {
  const armorElement = element as ArmorElement;

  const cardHolder = document.getElementById('armor-card-container');

  const card = document.createElement('div');
  card.className = 'card-anim';

  const title = document.createElement('h2');
  title.textContent = armorElement.name;

  const rank = document.createElement('h4');
  rank.textContent = armorElement.rank;

  const description = document.createElement('p');
  description.textContent = armorElement.type;

  const image = document.createElement('img');
  image.src = armorElement.assets.imageMale;
  image.alt = `Image of ${armorElement.name}`; // Add meaningful alt text
  image.loading = "lazy";

  // Add a "Favorite" button
  const favoriteButton = document.createElement('button');
  favoriteButton.textContent = 'Mark as Favorite';
  favoriteButton.addEventListener('click', () => {
    toggleFavorite(armorElement);
  });

  card.appendChild(title);
  card.appendChild(rank);
  card.appendChild(description);
  card.appendChild(image);
  card.appendChild(favoriteButton);

  cardHolder.appendChild(card);
}

interface ArmorElement {
  id: number;
  slug: string;
  name: string;
  type: string;
  rank: string;
  rarity: number;
  // defense: Defense
  assets: ArmorAssets;
}
export { ArmorElement };

interface ArmorAssets {
  imageMale: string;
  imageFemale: string;
}

function toggleFavorite(armorElement: ArmorElement) {
  if (favorites.has(armorElement)) {
    favorites.delete(armorElement);
  } else {
    favorites.add(armorElement);
  }
  updateFavoritesList();
}


export function updateFavoritesList() {
  const favoritesList = document.getElementById('favorites-list');
  favoritesList.innerHTML = '';

  favorites.forEach((armorElement) => {
    const listItem = document.createElement('li');
    listItem.textContent = armorElement.name;
    favoritesList.appendChild(listItem);
  });
}


loadNavbar();
fetchAndHandleData(currentPage);
