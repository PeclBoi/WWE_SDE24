    
export function loadNavbar() {

    const navbarContainer = document.getElementById("navbar-container");
    
    const navbar = document.createElement("nav");
    const navbarList = document.createElement("ul");
    
    const navbarElements = [
      "Home:index.html",
      "Armor:armor.html",
      "About:about.html"
    ];
    
    navbarElements.forEach(element => {
      const nameFilePair = element.split(":");
      const listElement = document.createElement("li");
      
      const link = document.createElement("a");
      link.text = nameFilePair[0];
      link.href = nameFilePair[1];
      
      listElement.appendChild(link);
      
      navbarList.appendChild(listElement);
    });
    
    
    
    navbar.appendChild(navbarList);
    navbarContainer.appendChild(navbar);
  }