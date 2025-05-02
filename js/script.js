// script.js – laddar rätt bild (prövar .jpg, .JPG, .jpeg, .png, .PNG)

function showDetails(product) {
  const descriptionElement = document.getElementById("product-description");
  const imageElement = document.getElementById("product-image");

  /* 1. Beskrivningstext */
  let description = "";
  switch (product) {
    case "foundation":
      description = "Foundation är en basprodukt som används för att jämna ut hudtonen och ge en jämn och naturlig finish.";
      break;
    case "lipstick":
      description = "Läppstift ger färg och lyster till läpparna. Finns i olika färger.";
      break;
    case "mascara":
      description = "Mascara används för att ge volym och längd åt fransarna.";
      break;
    default:
      description = "Välj en produkt för att få detaljer.";
  }
  descriptionElement.innerText = description;

  /* 2. Försök ladda bilden i flera filformat/versaler */
  const extensions = ["jpg", "JPG", "jpeg", "png", "PNG"];
  let idx = 0;

  // Visa bilden först när den laddats
  imageElement.style.display = "none";
  imageElement.alt = product;

  function tryNext() {
    if (idx >= extensions.length) {
      // Inget format hittades – lämna alt‑texten synlig
      console.warn(`Ingen bild hittad för ${product}`);
      return;
    }
    const ext = extensions[idx++];
    imageElement.src = `images/${product}.${ext}`;
  }

  // Om bilden laddas – visa den
  imageElement.onload = () => {
    imageElement.style.display = "block";
  };

  // Om bilden misslyckas – prova nästa filändelse
  imageElement.onerror = tryNext;

  // Starta första försöket
  tryNext();
}