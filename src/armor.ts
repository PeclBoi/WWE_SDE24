import './styles/main.scss'
import {loadNavbar} from "./shared/navbar"

async function fetchDataFromApi(apiUrl: string): Promise<any> {
    try {
      const response = await fetch(apiUrl);
  
      if (!response.ok) {
        throw new Error(`Failed to fetch data. Status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("An error occurred while fetching data:", error);
      throw error;
    }
  }
  
  
  async function fetchAndHandleData() {
    const apiUrl = "https://mhw-db.com/armor"; // Replace with your API URL
  
    try {
      const data = await fetchDataFromApi(apiUrl);
  
      data.forEach((element: object) => {
        createArmorCard(element);
      });
  
      console.log("Fetched data:", data);
    } catch (error) {
      // Handle any errors
      console.error("Error fetching data:", error);
    }
  }
  
  function createArmorCard(element: object) {
    
    const armorElement = element as ArmorElement;
  
  
    const cardHolder = document.getElementById("armor-card-container");
  
    const card = document.createElement("div");
    card.className = "card-anim";
  
    const title = document.createElement("h2");
    title.textContent = armorElement.name;
  
    const rank = document.createElement("h4");
    rank.textContent = armorElement.rank;
  
    const description = document.createElement("p");
    description.textContent = armorElement.type;
  
    const image = document.createElement("img");
    image.src = armorElement.assets.imageMale;
  
    card.appendChild(title);
    card.appendChild(rank);
    card.appendChild(description);
    card.appendChild(image);
  
    cardHolder.appendChild(card);
  
  }
  
  interface ArmorElement {
  id:	number	
  slug:	string	
  name:	string	
  type:	string	
  rank:	string	
  rarity:	number	
  // defense:	Defense	
  assets:	ArmorAssets	
  }
  
  interface ArmorAssets {
    imageMale: string,
    imageFemale: string
  }
  
  loadNavbar()
  fetchAndHandleData()