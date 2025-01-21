// Creează și adaugă stilurile CSS pentru popup
const style = document.createElement('style');
style.textContent = `
  .whatsapp-popup {
    display: none;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #1a1a1a;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
    padding: 25px;
    max-width: 350px;
    width: 90%;
    z-index: 1000;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    color: #ffffff;
  }

  .whatsapp-popup.show {
    display: block;
    animation: fadeIn 0.4s ease-out;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translate(-50%, -48%);
    }
    to {
      opacity: 1;
      transform: translate(-50%, -50%);
    }
  }

  .whatsapp-popup-close {
    position: absolute;
    top: 15px;
    right: 15px;
    border: none;
    background: none;
    font-size: 24px;
    cursor: pointer;
    color: #888;
    padding: 5px;
    line-height: 1;
    transition: color 0.2s;
  }

  .whatsapp-popup-close:hover {
    color: #fff;
  }

  .whatsapp-popup-content {
    margin-bottom: 20px;
  }

  .whatsapp-popup h3 {
    margin: 0 0 15px 0;
    font-size: 22px;
    font-weight: 600;
    color: #fff;
  }

  .whatsapp-popup p {
    margin: 0;
    font-size: 16px;
    line-height: 1.5;
    color: #bbb;
  }

  .whatsapp-popup-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background: #25D366;
    color: white;
    padding: 12px 20px;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 600;
    font-size: 16px;
    transition: all 0.3s;
  }

  .whatsapp-popup-button:hover {
    background: #128C7E;
    transform: translateY(-2px);
  }

  .whatsapp-icon {
    width: 24px;
    height: 24px;
    margin-right: 10px;
  }

  .whatsapp-overlay {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.75);
    z-index: 999;
  }

  .whatsapp-overlay.show {
    display: block;
    animation: fadeOverlay 0.3s ease-out;
  }

  @keyframes fadeOverlay {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
document.head.appendChild(style);

// Creează HTML-ul pentru popup
const popupHTML = `
  <div class="whatsapp-overlay" id="whatsappOverlay"></div>
  <div class="whatsapp-popup" id="whatsappPopup">
    <button class="whatsapp-popup-close" onclick="closeWhatsAppPopup()">×</button>
    <div class="whatsapp-popup-content">
      <h3>Hai să ținem legătura!</h3>
      <p>Urmărește-mă pe WhatsApp pentru cele mai noi actualizări, sfaturi și strategii de growth.</p>
    </div>
    <a href="https://whatsapp.com/channel/0029VakQHnA1HspqYNArNu1y" class="whatsapp-popup-button" target="_blank">
      <svg class="whatsapp-icon" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
      Urmărește-mă pe WhatsApp
    </a>
  </div>
`;
document.body.insertAdjacentHTML('beforeend', popupHTML);

// Funcție pentru închiderea popup-ului
window.closeWhatsAppPopup = function() {
  const popup = document.getElementById('whatsappPopup');
  const overlay = document.getElementById('whatsappOverlay');
  popup.classList.remove('show');
  overlay.classList.remove('show');
  
  // Salvează timpul când a fost închis popup-ul
  localStorage.setItem('whatsappPopupLastShown', Date.now().toString());
};

// Funcție pentru verificarea dacă poate fi afișat popup-ul
function canShowPopup() {
  const lastShown = localStorage.getItem('whatsappPopupLastShown');
  if (!lastShown) return true;
  
  const timeSinceLastShow = Date.now() - parseInt(lastShown);
  const fiveMinutesInMs = 5 * 60 * 1000; // 5 minute în milisecunde
  
  return timeSinceLastShow >= fiveMinutesInMs;
}

// Funcție pentru afișarea popup-ului
function showWhatsAppPopup() {
  if (canShowPopup()) {
    const popup = document.getElementById('whatsappPopup');
    const overlay = document.getElementById('whatsappOverlay');
    popup.classList.add('show');
    overlay.classList.add('show');
    
    // Salvează timpul când a fost arătat popup-ul
    localStorage.setItem('whatsappPopupLastShown', Date.now().toString());
  }
}

// Arată popup-ul după 5 secunde, doar dacă au trecut 5 minute de la ultima afișare
setTimeout(showWhatsAppPopup, 5000);