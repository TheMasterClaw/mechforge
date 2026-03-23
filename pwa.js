// MechForge PWA Registration
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('MechForge SW registered:', registration.scope);
        
        // Handle updates
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              // New version available
              showUpdateNotification();
            }
          });
        });
      })
      .catch((error) => {
        console.log('SW registration failed:', error);
      });
  });
}

// Online/offline detection
function updateOnlineStatus() {
  const indicator = document.getElementById('offline-indicator');
  if (!indicator) return;
  
  if (navigator.onLine) {
    indicator.style.display = 'none';
    document.body.classList.remove('offline');
  } else {
    indicator.style.display = 'flex';
    document.body.classList.add('offline');
  }
}

window.addEventListener('online', updateOnlineStatus);
window.addEventListener('offline', updateOnlineStatus);

// Show update notification
function showUpdateNotification() {
  if (confirm('New MechForge version available! Refresh to update?')) {
    window.location.reload();
  }
}

// Request persistent storage for game data
async function requestPersistentStorage() {
  if (navigator.storage && navigator.storage.persist) {
    const isPersistent = await navigator.storage.persist();
    console.log('Persistent storage:', isPersistent ? 'granted' : 'denied');
  }
}

// Call on load
requestPersistentStorage();
