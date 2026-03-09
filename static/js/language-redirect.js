/**
 * Language Detection and Redirect Script
 *
 * Detects browser language and redirects to the appropriate language version
 * if the user hasn't explicitly chosen a language preference.
 */
(function() {
  'use strict';

  // Check if user has already set a language preference
  if (localStorage.getItem('preferredLang')) {
    return;
  }

  // Get browser language
  var userLang = navigator.language || navigator.userLanguage || '';
  var baseLang = userLang.split('-')[0].toLowerCase();

  // Supported languages (excluding Romanian which is the default)
  var supportedLangs = ['en', 'it', 'es', 'de', 'fr', 'pt'];

  // Current path
  var currentPath = window.location.pathname;

  // Check if already on a translated version
  for (var i = 0; i < supportedLangs.length; i++) {
    if (currentPath.startsWith('/' + supportedLangs[i] + '/') || currentPath === '/' + supportedLangs[i]) {
      // Already on a translated version, save preference and exit
      localStorage.setItem('preferredLang', supportedLangs[i]);
      return;
    }
  }

  // If browser language matches a supported language, redirect
  if (supportedLangs.indexOf(baseLang) !== -1) {
    localStorage.setItem('preferredLang', baseLang);

    // Build the redirect URL
    var newPath = '/' + baseLang + currentPath;

    // Redirect to the translated version
    window.location.href = newPath;
  } else {
    // User's language is Romanian or unsupported, save preference as Romanian
    localStorage.setItem('preferredLang', 'ro');
  }
})();
