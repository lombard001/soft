// ==UserScript==
// @name        MSP2 Troll
// @namespace   MSP2 Troll Scripts
// @match       https://moviestarplanet2.com/*
// @grant       none
// @version     3.9.1
// @updateURL   https://raw.githubusercontent.com/lombard001/soft/refs/heads/main/troll.js
// @downloadURL https://raw.githubusercontent.com/lombard001/soft/refs/heads/main/troll.js
// ==/UserScript==

(() => {
  if (window._wsHookActive) return;
  window._wsHookActive = true;

  // --- Extended Language Data ---
  const LANGS = {
    us: { // 🇺🇸 Amerika Birleşik Devletleri
      flag: "🇺🇸",
      name: "United States",
      panelTitle: "User Panel",
      capturedUsers: "Captured Users: {count}",
      settingsBtn: "Settings",
      guideBtn: "Guide",
      settingsTitle: "User Modes",
      settingsSave: "Save",
      settingsClose: "Close",
      follow: "Follow",
      mimic: "Message Mimic",
      anim: "Animation Mimic",
      noUsers: "No users captured.",
      followBtn: "Follow: {onoff}",
      followOn: "ON",
      followOff: "OFF",
      mimicBtn: "Message Mimic: {onoff}",
      mimicOn: "ON",
      mimicOff: "OFF",
      animBtn: "Animation Mimic: {onoff}",
      animOn: "ON",
      animOff: "OFF",
      autoBtn: "Auto Capture: {onoff}",
      autoOn: "ON",
      autoOff: "OFF",
      clearBtn: "Clear Users",
      hideBtn: "Hide Panel",
      showBtn: "+",
      langBtn: "Lang",
      langDialogTitle: "Choose Language",
      guideTitle: "User Guide",
      guideContent: `
        <strong>Settings:</strong> Configure individual user modes<br><br>
        <strong>Follow:</strong> Copy selected users' movements<br><br>
        <strong>Message Mimic:</strong> Copy selected users' messages<br><br>
        <strong>Animation Mimic:</strong> Copy selected users' animations<br><br>
        <strong>Auto Capture:</strong> Automatically capture new users<br><br>
        <strong>Clear Users:</strong> Remove all captured users<br><br>
        <strong>Lang:</strong> Change interface language<br><br>
        <strong>Hide Panel:</strong> Minimize the control panel
      `
    },
    ca: { // 🇨🇦 Kanada
      flag: "🇨🇦",
      name: "Canada",
      panelTitle: "User Panel",
      capturedUsers: "Captured Users: {count}",
      settingsBtn: "Settings",
      guideBtn: "Guide",
      settingsTitle: "User Modes",
      settingsSave: "Save",
      settingsClose: "Close",
      follow: "Follow",
      mimic: "Message Mimic",
      anim: "Animation Mimic",
      noUsers: "No users captured, eh.",
      followBtn: "Follow: {onoff}",
      followOn: "ON",
      followOff: "OFF",
      mimicBtn: "Message Mimic: {onoff}",
      mimicOn: "ON",
      mimicOff: "OFF",
      animBtn: "Animation Mimic: {onoff}",
      animOn: "ON",
      animOff: "OFF",
      autoBtn: "Auto Capture: {onoff}",
      autoOn: "ON",
      autoOff: "OFF",
      clearBtn: "Clear Users",
      hideBtn: "Hide Panel",
      showBtn: "+",
      langBtn: "Lang",
      langDialogTitle: "Choose Language",
      guideTitle: "User Guide",
      guideContent: `
        <strong>Settings:</strong> Configure individual user modes<br><br>
        <strong>Follow:</strong> Copy selected users' movements<br><br>
        <strong>Message Mimic:</strong> Copy selected users' messages<br><br>
        <strong>Animation Mimic:</strong> Copy selected users' animations<br><br>
        <strong>Auto Capture:</strong> Automatically capture new users<br><br>
        <strong>Clear Users:</strong> Remove all captured users<br><br>
        <strong>Lang:</strong> Change interface language<br><br>
        <strong>Hide Panel:</strong> Minimize the control panel
      `
    },
    gb: { // 🇬🇧 Birleşik Krallık
      flag: "🇬🇧",
      name: "United Kingdom",
      panelTitle: "User Panel",
      capturedUsers: "Captured Users: {count}",
      settingsBtn: "Settings",
      guideBtn: "Guide",
      settingsTitle: "User Modes",
      settingsSave: "Save",
      settingsClose: "Close",
      follow: "Follow",
      mimic: "Message Mimic",
      anim: "Animation Mimic",
      noUsers: "No users captured.",
      followBtn: "Follow: {onoff}",
      followOn: "ON",
      followOff: "OFF",
      mimicBtn: "Message Mimic: {onoff}",
      mimicOn: "ON",
      mimicOff: "OFF",
      animBtn: "Animation Mimic: {onoff}",
      animOn: "ON",
      animOff: "OFF",
      autoBtn: "Auto Capture: {onoff}",
      autoOn: "ON",
      autoOff: "OFF",
      clearBtn: "Clear Users",
      hideBtn: "Hide Panel",
      showBtn: "+",
      langBtn: "Lang",
      langDialogTitle: "Choose Language",
      guideTitle: "User Guide",
      guideContent: `
        <strong>Settings:</strong> Configure individual user modes<br><br>
        <strong>Follow:</strong> Copy selected users' movements<br><br>
        <strong>Message Mimic:</strong> Copy selected users' messages<br><br>
        <strong>Animation Mimic:</strong> Copy selected users' animations<br><br>
        <strong>Auto Capture:</strong> Automatically capture new users<br><br>
        <strong>Clear Users:</strong> Remove all captured users<br><br>
        <strong>Lang:</strong> Change interface language<br><br>
        <strong>Hide Panel:</strong> Minimise the control panel
      `
    },
    nl: { // 🇳🇱 Hollanda
      flag: "🇳🇱",
      name: "Netherlands",
      panelTitle: "Gebruikerspaneel",
      capturedUsers: "Gevangen Gebruikers: {count}",
      settingsBtn: "Instellingen",
      guideBtn: "Gids",
      settingsTitle: "Gebruikersmodi",
      settingsSave: "Opslaan",
      settingsClose: "Sluiten",
      follow: "Volgen",
      mimic: "Bericht Nabootsen",
      anim: "Animatie Nabootsen",
      noUsers: "Geen gebruikers gevangen.",
      followBtn: "Volgen: {onoff}",
      followOn: "AAN",
      followOff: "UIT",
      mimicBtn: "Bericht Nabootsen: {onoff}",
      mimicOn: "AAN",
      mimicOff: "UIT",
      animBtn: "Animatie Nabootsen: {onoff}",
      animOn: "AAN",
      animOff: "UIT",
      autoBtn: "Auto Vangen: {onoff}",
      autoOn: "AAN",
      autoOff: "UIT",
      clearBtn: "Gebruikers Wissen",
      hideBtn: "Paneel Verbergen",
      showBtn: "+",
      langBtn: "Taal",
      langDialogTitle: "Kies Taal",
      guideTitle: "Gebruikersgids",
      guideContent: `
        <strong>Instellingen:</strong> Configureer individuele gebruikersmodi<br><br>
        <strong>Volgen:</strong> Kopieer bewegingen van geselecteerde gebruikers<br><br>
        <strong>Bericht Nabootsen:</strong> Kopieer berichten van geselecteerde gebruikers<br><br>
        <strong>Animatie Nabootsen:</strong> Kopieer animaties van geselecteerde gebruikers<br><br>
        <strong>Auto Vangen:</strong> Automatisch nieuwe gebruikers vangen<br><br>
        <strong>Gebruikers Wissen:</strong> Alle gevangen gebruikers verwijderen<br><br>
        <strong>Taal:</strong> Interface taal wijzigen<br><br>
        <strong>Paneel Verbergen:</strong> Het controlepaneel minimaliseren
      `
    },
    ie: { // 🇮🇪 İrlanda
      flag: "🇮🇪",
      name: "Ireland",
      panelTitle: "User Panel",
      capturedUsers: "Captured Users: {count}",
      settingsBtn: "Settings",
      guideBtn: "Guide",
      settingsTitle: "User Modes",
      settingsSave: "Save",
      settingsClose: "Close",
      follow: "Follow",
      mimic: "Message Mimic",
      anim: "Animation Mimic",
      noUsers: "No users captured.",
      followBtn: "Follow: {onoff}",
      followOn: "ON",
      followOff: "OFF",
      mimicBtn: "Message Mimic: {onoff}",
      mimicOn: "ON",
      mimicOff: "OFF",
      animBtn: "Animation Mimic: {onoff}",
      animOn: "ON",
      animOff: "OFF",
      autoBtn: "Auto Capture: {onoff}",
      autoOn: "ON",
      autoOff: "OFF",
      clearBtn: "Clear Users",
      hideBtn: "Hide Panel",
      showBtn: "+",
      langBtn: "Lang",
      langDialogTitle: "Choose Language",
      guideTitle: "User Guide",
      guideContent: `
        <strong>Settings:</strong> Configure individual user modes<br><br>
        <strong>Follow:</strong> Copy selected users' movements<br><br>
        <strong>Message Mimic:</strong> Copy selected users' messages<br><br>
        <strong>Animation Mimic:</strong> Copy selected users' animations<br><br>
        <strong>Auto Capture:</strong> Automatically capture new users<br><br>
        <strong>Clear Users:</strong> Remove all captured users<br><br>
        <strong>Lang:</strong> Change interface language<br><br>
        <strong>Hide Panel:</strong> Minimise the control panel
      `
    },
    dk: { // 🇩🇰 Danimarka
      flag: "🇩🇰",
      name: "Denmark",
      panelTitle: "Brugerpanel",
      capturedUsers: "Fangede Brugere: {count}",
      settingsBtn: "Indstillinger",
      guideBtn: "Guide",
      settingsTitle: "Brugertilstande",
      settingsSave: "Gem",
      settingsClose: "Luk",
      follow: "Følg",
      mimic: "Besked Mimik",
      anim: "Animation Mimik",
      noUsers: "Ingen brugere fanget.",
      followBtn: "Følg: {onoff}",
      followOn: "TIL",
      followOff: "FRA",
      mimicBtn: "Besked Mimik: {onoff}",
      mimicOn: "TIL",
      mimicOff: "FRA",
      animBtn: "Animation Mimik: {onoff}",
      animOn: "TIL",
      animOff: "FRA",
      autoBtn: "Auto Fang: {onoff}",
      autoOn: "TIL",
      autoOff: "FRA",
      clearBtn: "Ryd Brugere",
      hideBtn: "Skjul Panel",
      showBtn: "+",
      langBtn: "Sprog",
      langDialogTitle: "Vælg Sprog",
      guideTitle: "Brugerguide",
      guideContent: `
        <strong>Indstillinger:</strong> Konfigurer individuelle brugertilstande<br><br>
        <strong>Følg:</strong> Kopier valgte brugeres bevægelser<br><br>
        <strong>Besked Mimik:</strong> Kopier valgte brugeres beskeder<br><br>
        <strong>Animation Mimik:</strong> Kopier valgte brugeres animationer<br><br>
        <strong>Auto Fang:</strong> Automatisk fang nye brugere<br><br>
        <strong>Ryd Brugere:</strong> Fjern alle fangede brugere<br><br>
        <strong>Sprog:</strong> Skift interface sprog<br><br>
        <strong>Skjul Panel:</strong> Minimer kontrolpanelet
      `
    },
    fr: { // 🇫🇷 Fransa
      flag: "🇫🇷",
      name: "France",
      panelTitle: "Panneau Utilisateur",
      capturedUsers: "Utilisateurs Capturés: {count}",
      settingsBtn: "Paramètres",
      guideBtn: "Guide",
      settingsTitle: "Modes Utilisateur",
      settingsSave: "Sauvegarder",
      settingsClose: "Fermer",
      follow: "Suivre",
      mimic: "Imiter Messages",
      anim: "Imiter Animations",
      noUsers: "Aucun utilisateur capturé.",
      followBtn: "Suivre: {onoff}",
      followOn: "ACTIF",
      followOff: "INACTIF",
      mimicBtn: "Imiter Messages: {onoff}",
      mimicOn: "ACTIF",
      mimicOff: "INACTIF",
      animBtn: "Imiter Animations: {onoff}",
      animOn: "ACTIF",
      animOff: "INACTIF",
      autoBtn: "Capture Auto: {onoff}",
      autoOn: "ACTIF",
      autoOff: "INACTIF",
      clearBtn: "Effacer Utilisateurs",
      hideBtn: "Masquer Panneau",
      showBtn: "+",
      langBtn: "Langue",
      langDialogTitle: "Choisir la Langue",
      guideTitle: "Guide Utilisateur",
      guideContent: `
        <strong>Paramètres:</strong> Configurer les modes utilisateur individuels<br><br>
        <strong>Suivre:</strong> Copier les mouvements des utilisateurs sélectionnés<br><br>
        <strong>Imiter Messages:</strong> Copier les messages des utilisateurs sélectionnés<br><br>
        <strong>Imiter Animations:</strong> Copier les animations des utilisateurs sélectionnés<br><br>
        <strong>Capture Auto:</strong> Capturer automatiquement les nouveaux utilisateurs<br><br>
        <strong>Effacer Utilisateurs:</strong> Supprimer tous les utilisateurs capturés<br><br>
        <strong>Langue:</strong> Changer la langue de l'interface<br><br>
        <strong>Masquer Panneau:</strong> Réduire le panneau de contrôle
      `
    },
    pl: { // 🇵🇱 Polonya
      flag: "🇵🇱",
      name: "Poland",
      panelTitle: "Panel Użytkownika",
      capturedUsers: "Przechwyceni Użytkownicy: {count}",
      settingsBtn: "Ustawienia",
      guideBtn: "Przewodnik",
      settingsTitle: "Tryby Użytkownika",
      settingsSave: "Zapisz",
      settingsClose: "Zamknij",
      follow: "Śledź",
      mimic: "Naśladuj Wiadomości",
      anim: "Naśladuj Animacje",
      noUsers: "Brak przechwyconych użytkowników.",
      followBtn: "Śledź: {onoff}",
      followOn: "WŁĄCZ",
      followOff: "WYŁĄCZ",
      mimicBtn: "Naśladuj Wiadomości: {onoff}",
      mimicOn: "WŁĄCZ",
      mimicOff: "WYŁĄCZ",
      animBtn: "Naśladuj Animacje: {onoff}",
      animOn: "WŁĄCZ",
      animOff: "WYŁĄCZ",
      autoBtn: "Auto Przechwytywanie: {onoff}",
      autoOn: "WŁĄCZ",
      autoOff: "WYŁĄCZ",
      clearBtn: "Wyczyść Użytkowników",
      hideBtn: "Ukryj Panel",
      showBtn: "+",
      langBtn: "Język",
      langDialogTitle: "Wybierz Język",
      guideTitle: "Przewodnik Użytkownika",
      guideContent: `
        <strong>Ustawienia:</strong> Konfiguruj indywidualne tryby użytkownika<br><br>
        <strong>Śledź:</strong> Kopiuj ruchy wybranych użytkowników<br><br>
        <strong>Naśladuj Wiadomości:</strong> Kopiuj wiadomości wybranych użytkowników<br><br>
        <strong>Naśladuj Animacje:</strong> Kopiuj animacje wybranych użytkowników<br><br>
        <strong>Auto Przechwytywanie:</strong> Automatycznie przechwytuj nowych użytkowników<br><br>
        <strong>Wyczyść Użytkowników:</strong> Usuń wszystkich przechwyconych użytkowników<br><br>
        <strong>Język:</strong> Zmień język interfejsu<br><br>
        <strong>Ukryj Panel:</strong> Zminimalizuj panel kontrolny
      `
    },
    se: { // 🇸🇪 İsveç
      flag: "🇸🇪",
      name: "Sweden",
      panelTitle: "Användarpanel",
      capturedUsers: "Fångade Användare: {count}",
      settingsBtn: "Inställningar",
      guideBtn: "Guide",
      settingsTitle: "Användarlägen",
      settingsSave: "Spara",
      settingsClose: "Stäng",
      follow: "Följ",
      mimic: "Meddelande Mimik",
      anim: "Animation Mimik",
      noUsers: "Inga användare fångade.",
      followBtn: "Följ: {onoff}",
      followOn: "PÅ",
      followOff: "AV",
      mimicBtn: "Meddelande Mimik: {onoff}",
      mimicOn: "PÅ",
      mimicOff: "AV",
      animBtn: "Animation Mimik: {onoff}",
      animOn: "PÅ",
      animOff: "AV",
      autoBtn: "Auto Fånga: {onoff}",
      autoOn: "PÅ",
      autoOff: "AV",
      clearBtn: "Rensa Användare",
      hideBtn: "Dölj Panel",
      showBtn: "+",
      langBtn: "Språk",
      langDialogTitle: "Välj Språk",
      guideTitle: "Användarguide",
      guideContent: `
        <strong>Inställningar:</strong> Konfigurera individuella användarlägen<br><br>
        <strong>Följ:</strong> Kopiera valda användares rörelser<br><br>
        <strong>Meddelande Mimik:</strong> Kopiera valda användares meddelanden<br><br>
        <strong>Animation Mimik:</strong> Kopiera valda användares animationer<br><br>
        <strong>Auto Fånga:</strong> Automatiskt fånga nya användare<br><br>
        <strong>Rensa Användare:</strong> Ta bort alla fångade användare<br><br>
        <strong>Språk:</strong> Ändra gränssnittsspråk<br><br>
        <strong>Dölj Panel:</strong> Minimera kontrollpanelen
      `
    },
    no: { // 🇳🇴 Norveç
      flag: "🇳🇴",
      name: "Norway",
      panelTitle: "Brukerpanel",
      capturedUsers: "Fanget Brukere: {count}",
      settingsBtn: "Innstillinger",
      guideBtn: "Guide",
      settingsTitle: "Brukermoduser",
      settingsSave: "Lagre",
      settingsClose: "Lukk",
      follow: "Følg",
      mimic: "Melding Mimikk",
      anim: "Animasjon Mimikk",
      noUsers: "Ingen brukere fanget.",
      followBtn: "Følg: {onoff}",
      followOn: "PÅ",
      followOff: "AV",
      mimicBtn: "Melding Mimikk: {onoff}",
      mimicOn: "PÅ",
      mimicOff: "AV",
      animBtn: "Animasjon Mimikk: {onoff}",
      animOn: "PÅ",
      animOff: "AV",
      autoBtn: "Auto Fang: {onoff}",
      autoOn: "PÅ",
      autoOff: "AV",
      clearBtn: "Tøm Brukere",
      hideBtn: "Skjul Panel",
      showBtn: "+",
      langBtn: "Språk",
      langDialogTitle: "Velg Språk",
      guideTitle: "Brukerguide",
      guideContent: `
        <strong>Innstillinger:</strong> Konfigurer individuelle brukermoduser<br><br>
        <strong>Følg:</strong> Kopier valgte brukeres bevegelser<br><br>
        <strong>Melding Mimikk:</strong> Kopier valgte brukeres meldinger<br><br>
        <strong>Animasjon Mimikk:</strong> Kopier valgte brukeres animasjoner<br><br>
        <strong>Auto Fang:</strong> Automatisk fang nye brukere<br><br>
        <strong>Tøm Brukere:</strong> Fjern alle fangede brukere<br><br>
        <strong>Språk:</strong> Endre grensesnittspråk<br><br>
        <strong>Skjul Panel:</strong> Minimer kontrollpanelet
      `
    },
    fi: { // 🇫🇮 Finlandiya
      flag: "🇫🇮",
      name: "Finland",
      panelTitle: "Käyttäjäpaneeli",
      capturedUsers: "Vangitut Käyttäjät: {count}",
      settingsBtn: "Asetukset",
      guideBtn: "Opas",
      settingsTitle: "Käyttäjätilat",
      settingsSave: "Tallenna",
      settingsClose: "Sulje",
      follow: "Seuraa",
      mimic: "Viesti Mimikki",
      anim: "Animaatio Mimikki",
      noUsers: "Ei vangittuja käyttäjiä.",
      followBtn: "Seuraa: {onoff}",
      followOn: "PÄÄLLÄ",
      followOff: "POIS",
      mimicBtn: "Viesti Mimikki: {onoff}",
      mimicOn: "PÄÄLLÄ",
      mimicOff: "POIS",
      animBtn: "Animaatio Mimikki: {onoff}",
      animOn: "PÄÄLLÄ",
      animOff: "POIS",
      autoBtn: "Auto Vanginta: {onoff}",
      autoOn: "PÄÄLLÄ",
      autoOff: "POIS",
      clearBtn: "Tyhjennä Käyttäjät",
      hideBtn: "Piilota Paneeli",
      showBtn: "+",
      langBtn: "Kieli",
      langDialogTitle: "Valitse Kieli",
      guideTitle: "Käyttäjäopas",
      guideContent: `
        <strong>Asetukset:</strong> Määritä yksittäiset käyttäjätilat<br><br>
        <strong>Seuraa:</strong> Kopioi valittujen käyttäjien liikkeet<br><br>
        <strong>Viesti Mimikki:</strong> Kopioi valittujen käyttäjien viestit<br><br>
        <strong>Animaatio Mimikki:</strong> Kopioi valittujen käyttäjien animaatiot<br><br>
        <strong>Auto Vanginta:</strong> Vangitse automaattisesti uudet käyttäjät<br><br>
        <strong>Tyhjennä Käyttäjät:</strong> Poista kaikki vangitut käyttäjät<br><br>
        <strong>Kieli:</strong> Vaihda käyttöliittymän kieli<br><br>
        <strong>Piilota Paneeli:</strong> Pienennä hallintapaneeli
      `
    },
    tr: { // 🇹🇷 Türkiye
      flag: "🇹🇷",
      name: "Turkey",
      panelTitle: "Kullanıcı Paneli",
      capturedUsers: "Yakalanan Kullanıcı: {count}",
      settingsBtn: "Ayarlar",
      guideBtn: "Klavuz",
      settingsTitle: "Kullanıcı Modları",
      settingsSave: "Kaydet",
      settingsClose: "Kapat",
      follow: "Takip",
      mimic: "Mesaj Takliti",
      anim: "Animasyon Takliti",
      noUsers: "Kullanıcı yok!",
      followBtn: "Takip: {onoff}",
      followOn: "AÇIK",
      followOff: "KAPALI",
      mimicBtn: "Mesaj Takliti: {onoff}",
      mimicOn: "AÇIK",
      mimicOff: "KAPALI",
      animBtn: "Animasyon Takliti: {onoff}",
      animOn: "AÇIK",
      animOff: "KAPALI",
      autoBtn: "Otomatik Yakala: {onoff}",
      autoOn: "AÇIK",
      autoOff: "KAPALI",
      clearBtn: "Kullanıcıları Temizle",
      hideBtn: "Paneli Gizle",
      showBtn: "+",
      langBtn: "Dil",
      langDialogTitle: "Dil Seçin",
      guideTitle: "Kullanıcı Klavuzu",
      guideContent: `
        <strong>Ayarlar:</strong> Bireysel kullanıcı modlarını yapılandır<br><br>
        <strong>Takip:</strong> Seçili kullanıcıların hareketlerini kopyala<br><br>
        <strong>Mesaj Takliti:</strong> Seçili kullanıcıların mesajlarını kopyala<br><br>
        <strong>Animasyon Takliti:</strong> Seçili kullanıcıların animasyonlarını kopyala<br><br>
        <strong>Otomatik Yakala:</strong> Yeni kullanıcıları otomatik olarak yakala<br><br>
        <strong>Kullanıcıları Temizle:</strong> Tüm yakalanan kullanıcıları kaldır<br><br>
        <strong>Dil:</strong> Arayüz dilini değiştir<br><br>
        <strong>Paneli Gizle:</strong> Kontrol panelini küçült
      `
    },
    es: { // 🇪🇸 İspanya
      flag: "🇪🇸",
      name: "Spain",
      panelTitle: "Panel de Usuario",
      capturedUsers: "Usuarios Capturados: {count}",
      settingsBtn: "Configuración",
      guideBtn: "Guía",
      settingsTitle: "Modos de Usuario",
      settingsSave: "Guardar",
      settingsClose: "Cerrar",
      follow: "Seguir",
      mimic: "Imitar Mensajes",
      anim: "Imitar Animaciones",
      noUsers: "No hay usuarios capturados.",
      followBtn: "Seguir: {onoff}",
      followOn: "ACTIVO",
      followOff: "INACTIVO",
      mimicBtn: "Imitar Mensajes: {onoff}",
      mimicOn: "ACTIVO",
      mimicOff: "INACTIVO",
      animBtn: "Imitar Animaciones: {onoff}",
      animOn: "ACTIVO",
      animOff: "INACTIVO",
      autoBtn: "Captura Auto: {onoff}",
      autoOn: "ACTIVO",
      autoOff: "INACTIVO",
      clearBtn: "Limpiar Usuarios",
      hideBtn: "Ocultar Panel",
      showBtn: "+",
      langBtn: "Idioma",
      langDialogTitle: "Elegir Idioma",
      guideTitle: "Guía de Usuario",
      guideContent: `
        <strong>Configuración:</strong> Configurar modos de usuario individuales<br><br>
        <strong>Seguir:</strong> Copiar movimientos de usuarios seleccionados<br><br>
        <strong>Imitar Mensajes:</strong> Copiar mensajes de usuarios seleccionados<br><br>
        <strong>Imitar Animaciones:</strong> Copiar animaciones de usuarios seleccionados<br><br>
        <strong>Captura Auto:</strong> Capturar automáticamente nuevos usuarios<br><br>
        <strong>Limpiar Usuarios:</strong> Eliminar todos los usuarios capturados<br><br>
        <strong>Idioma:</strong> Cambiar idioma de la interfaz<br><br>
        <strong>Ocultar Panel:</strong> Minimizar el panel de control
      `
    },
    de: { // 🇩🇪 Almanya
      flag: "🇩🇪",
      name: "Germany",
      panelTitle: "Benutzerpanel",
      capturedUsers: "Erfasste Benutzer: {count}",
      settingsBtn: "Einstellungen",
      guideBtn: "Anleitung",
      settingsTitle: "Benutzermodi",
      settingsSave: "Speichern",
      settingsClose: "Schließen",
      follow: "Folgen",
      mimic: "Nachrichten Nachahmen",
      anim: "Animation Nachahmen",
      noUsers: "Keine Benutzer erfasst.",
      followBtn: "Folgen: {onoff}",
      followOn: "EIN",
      followOff: "AUS",
      mimicBtn: "Nachrichten Nachahmen: {onoff}",
      mimicOn: "EIN",
      mimicOff: "AUS",
      animBtn: "Animation Nachahmen: {onoff}",
      animOn: "EIN",
      animOff: "AUS",
      autoBtn: "Auto Erfassen: {onoff}",
      autoOn: "EIN",
      autoOff: "AUS",
      clearBtn: "Benutzer Löschen",
      hideBtn: "Panel Verstecken",
      showBtn: "+",
      langBtn: "Sprache",
      langDialogTitle: "Sprache Wählen",
      guideTitle: "Benutzeranleitung",
      guideContent: `
        <strong>Einstellungen:</strong> Individuelle Benutzermodi konfigurieren<br><br>
        <strong>Folgen:</strong> Bewegungen ausgewählter Benutzer kopieren<br><br>
        <strong>Nachrichten Nachahmen:</strong> Nachrichten ausgewählter Benutzer kopieren<br><br>
        <strong>Animation Nachahmen:</strong> Animationen ausgewählter Benutzer kopieren<br><br>
        <strong>Auto Erfassen:</strong> Automatisch neue Benutzer erfassen<br><br>
        <strong>Benutzer Löschen:</strong> Alle erfassten Benutzer entfernen<br><br>
        <strong>Sprache:</strong> Schnittstellensprache ändern<br><br>
        <strong>Panel Verstecken:</strong> Kontrollpanel minimieren
      `
    },
    au: { // 🇦🇺 Avustralya
      flag: "🇦🇺",
      name: "Australia",
      panelTitle: "User Panel",
      capturedUsers: "Captured Users: {count}",
      settingsBtn: "Settings",
      guideBtn: "Guide",
      settingsTitle: "User Modes",
      settingsSave: "Save",
      settingsClose: "Close",
      follow: "Follow",
      mimic: "Message Mimic",
      anim: "Animation Mimic",
      noUsers: "No users captured, mate.",
      followBtn: "Follow: {onoff}",
      followOn: "ON",
      followOff: "OFF",
      mimicBtn: "Message Mimic: {onoff}",
      mimicOn: "ON",
      mimicOff: "OFF",
      animBtn: "Animation Mimic: {onoff}",
      animOn: "ON",
      animOff: "OFF",
      autoBtn: "Auto Capture: {onoff}",
      autoOn: "ON",
      autoOff: "OFF",
      clearBtn: "Clear Users",
      hideBtn: "Hide Panel",
      showBtn: "+",
      langBtn: "Lang",
      langDialogTitle: "Choose Language",
      guideTitle: "User Guide",
      guideContent: `
        <strong>Settings:</strong> Configure individual user modes<br><br>
        <strong>Follow:</strong> Copy selected users' movements<br><br>
        <strong>Message Mimic:</strong> Copy selected users' messages<br><br>
        <strong>Animation Mimic:</strong> Copy selected users' animations<br><br>
        <strong>Auto Capture:</strong> Automatically capture new users<br><br>
        <strong>Clear Users:</strong> Remove all captured users<br><br>
        <strong>Lang:</strong> Change interface language<br><br>
        <strong>Hide Panel:</strong> Minimise the control panel
      `
    },
    nz: { // 🇳🇿 Yeni Zelanda
      flag: "🇳🇿",
      name: "New Zealand",
      panelTitle: "User Panel",
      capturedUsers: "Captured Users: {count}",
      settingsBtn: "Settings",
      guideBtn: "Guide",
      settingsTitle: "User Modes",
      settingsSave: "Save",
      settingsClose: "Close",
      follow: "Follow",
      mimic: "Message Mimic",
      anim: "Animation Mimic",
      noUsers: "No users captured.",
      followBtn: "Follow: {onoff}",
      followOn: "ON",
      followOff: "OFF",
      mimicBtn: "Message Mimic: {onoff}",
      mimicOn: "ON",
      mimicOff: "OFF",
      animBtn: "Animation Mimic: {onoff}",
      animOn: "ON",
      animOff: "OFF",
      autoBtn: "Auto Capture: {onoff}",
      autoOn: "ON",
      autoOff: "OFF",
      clearBtn: "Clear Users",
      hideBtn: "Hide Panel",
      showBtn: "+",
      langBtn: "Lang",
      langDialogTitle: "Choose Language",
      guideTitle: "User Guide",
      guideContent: `
        <strong>Settings:</strong> Configure individual user modes<br><br>
        <strong>Follow:</strong> Copy selected users' movements<br><br>
        <strong>Message Mimic:</strong> Copy selected users' messages<br><br>
        <strong>Animation Mimic:</strong> Copy selected users' animations<br><br>
        <strong>Auto Capture:</strong> Automatically capture new users<br><br>
        <strong>Clear Users:</strong> Remove all captured users<br><br>
        <strong>Lang:</strong> Change interface language<br><br>
        <strong>Hide Panel:</strong> Minimise the control panel
      `
    }
  };

  let currentLang = "us";

  function T(key, params = {}) {
    let txt = LANGS[currentLang][key] || key;
    Object.entries(params).forEach(([k, v]) => {
      txt = txt.replace(`{${k}}`, v);
    });
    return txt;
  }

  // --- NEW: Avatar Storage System ---
  const AVATAR_STORAGE_KEY = 'msp2_profile_avatars';
  let profileAvatars = {};

  // Load avatars from localStorage on script load
  function loadAvatarsFromStorage() {
    try {
      const stored = localStorage.getItem(AVATAR_STORAGE_KEY);
      if (stored) {
        profileAvatars = JSON.parse(stored);
        console.log('Avatars loaded from localStorage:', Object.keys(profileAvatars).length, 'avatars');
      }
    } catch (e) {
      console.error('Failed to load avatars from localStorage:', e);
      profileAvatars = {};
    }
  }

  // Save avatars to localStorage
  function saveAvatarsToStorage() {
    try {
      localStorage.setItem(AVATAR_STORAGE_KEY, JSON.stringify(profileAvatars));
      console.log('Avatars saved to localStorage:', Object.keys(profileAvatars).length, 'avatars');
    } catch (e) {
      console.error('Failed to save avatars to localStorage:', e);
    }
  }

  // Clear avatars from localStorage (only on page refresh)
  function clearAvatarsFromStorage() {
    try {
      localStorage.removeItem(AVATAR_STORAGE_KEY);
      profileAvatars = {};
      console.log('Avatars cleared from localStorage');
    } catch (e) {
      console.error('Failed to clear avatars from localStorage:', e);
    }
  }

  // Load avatars when script starts
  loadAvatarsFromStorage();

  // Clear avatars only on page refresh (detect if page was refreshed)
  let isPageRefresh = false;
  window.addEventListener('beforeunload', () => {
    isPageRefresh = true;
  });

  // Check if page was refreshed and clear avatars
  if (performance.navigation.type === performance.navigation.TYPE_RELOAD) {
    clearAvatarsFromStorage();
  }

  // --- Styles ---
  const style = document.createElement('style');
  style.textContent = `
    #wsPanel {
      position: fixed;
      top: 50px;
      left: 50px;
      width: 250px;
      background: rgba(34, 42, 54, 0.95);
      color: #eee;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      border-radius: 10px;
      padding: 10px;
      z-index: 9999999;
      box-shadow: 0 0 20px rgba(0,0,0,0.8);
      user-select: none;
      font-size: 12px;
      line-height: 1.4;
      display: flex;
      flex-direction: column;
      gap: 6px;
      backdrop-filter: blur(10px);
    }
    #wsPanel .drag {
      width: 100%;
      height: 20px;
      position: absolute;
      top: 0;
      left: 0;
      cursor: move;
      border-radius: 10px 10px 0 0;
      background: transparent;
      user-select: none;
      z-index: 10;
    }
    #wsPanel .msp2title {
      text-align: center;
      font-size: 16px;
      font-weight: bold;
      letter-spacing: 2px;
      color: #4da3ff;
      margin-bottom: 8px;
      margin-top: 2px;
      text-shadow: 0 2px 6px #222, 0 0 2px #21c0ff;
      font-family: 'Segoe UI', Arial, sans-serif;
      position: relative;
    }
    #wsPanel .socketAnimContainerBelowTitle {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin-bottom: 2px;
      margin-top: -3px;
      min-height: 16px;
      position: relative;
    }
    #wsPanel .socketAnimBelowTitle {
      width: 9px;
      height: 9px;
      border-radius: 50%;
      background: #e74c3c;
      box-shadow: 0 0 3px #e74c3c;
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      margin-bottom: 0;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      animation: none;
      transition: background .5s, box-shadow .5s;
    }
    #wsPanel .socketAnimBelowTitle.connected {
      background: #2ecc71;
      box-shadow: 0 0 5px #2ecc71, 0 0 1px #00ff99;
      animation: socketPulseSmall 1.2s infinite alternate;
    }
    #wsPanel .socketAnimBelowTitle.connecting {
      background: #f7ca18;
      box-shadow: 0 0 4px #f7ca18, 0 0 1px #fffbe6;
      animation: socketSpinSmall 1.2s linear infinite;
    }
    @keyframes socketPulseSmall {
      0% { box-shadow: 0 0 5px #2ecc71, 0 0 1px #00ff99; }
      100% { box-shadow: 0 0 8px #2ecc71, 0 0 3px #00ff99; }
    }
    @keyframes socketSpinSmall {
      100% { transform: rotate(360deg); }
    }
    #wsPanel .panelTitle {
      margin-bottom: 6px;
      text-align: left;
      font-size: 13px;
      font-weight: bold;
      color: #fff;
      letter-spacing: .5px;
    }
    #wsPanel .profilePickTitle {
      display:none;
    }
    #wsPanel .profilePickBox {
      display:none;
    }
    #wsPanel button {
      width: 100%;
      padding: 8px 10px;
      border: none;
      border-radius: 6px;
      font-weight: 600;
      cursor: pointer;
      color: white;
      transition: all 0.3s ease;
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 2px;
    }
    #wsPanel button:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    }
    #wsPanel button:active {
      transform: translateY(0);
    }
    #toggleFollowBtn, #toggleMessageMimicBtn, #toggleAnimBtn {
      background: linear-gradient(135deg, #566573, #34495e);
    }
    #toggleFollowBtn.active {background: linear-gradient(135deg, #27ae60, #229954);}
    #toggleMessageMimicBtn.active {background: linear-gradient(135deg, #9b59b6, #8e44ad);}
    #toggleAnimBtn.active {background: linear-gradient(135deg, #f39c12, #d35400);}
    #toggleAutoProfileBtn {
      background: linear-gradient(135deg, #3498db, #2980b9);
    }
    #toggleAutoProfileBtn.off {
      background: linear-gradient(135deg, #566573, #34495e);
    }
    #clearProfilesBtn {
      background: linear-gradient(135deg, #e74c3c, #c0392b);
    }
    #toggleLangBtn {
      background: linear-gradient(135deg, #5dade2, #2e86c1);
      margin-bottom: 2px;
    }
    #settingsBtn {
      background: linear-gradient(135deg, #7dcea0, #27ae60);
      margin-bottom: 2px;
    }
    #guideBtn {
      background: linear-gradient(135deg, #f39c12, #e67e22);
      margin-bottom: 2px;
    }
    #hidePanelBtn {
      background: linear-gradient(135deg, #7f8c8d, #95a5a6);
      margin-top: 4px;
    }
    #profileCount {
      font-weight: 600;
      color: #ecf0f1;
      text-align: center;
      user-select: none;
      font-size: 10px;
      padding: 5px 6px;
      background: rgba(52, 73, 94, 0.8);
      border-radius: 4px;
      border-left: 4px solid #3498db;
    }
    #showPanelBtn {
      position: fixed;
      top: 20px;
      right: 20px;
      width: 35px;
      height: 35px;
      background: linear-gradient(135deg, #3498db, #2980b9);
      border-radius: 50%;
      box-shadow: 0 4px 16px rgba(52, 152, 219, 0.4);
      color: white;
      font-size: 18px;
      font-weight: bold;
      line-height: 35px;
      text-align: center;
      cursor: pointer;
      user-select: none;
      z-index: 99999999;
      display: none;
      transition: all 0.3s ease;
    }
    #showPanelBtn:hover {
      transform: scale(1.1);
      box-shadow: 0 6px 20px rgba(52, 152, 219, 0.6);
    }

    /* Settings Modal */
    #settingsModal {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: rgba(34,42,54,.98);
      border-radius: 14px;
      box-shadow: 0 0 28px rgba(0,0,0,0.7);
      color: #fff;
      z-index: 99999999;
      padding: 22px 24px 18px 24px;
      display: none;
      min-width: 270px;
      max-width: 390px;
    }
    #settingsModal h4 {
      margin: 0 0 16px 0;
      text-align: center;
      font-size: 17px;
      font-weight: bold;
      color: #4da3ff;
      letter-spacing: 1px;
    }
    #settingsModal .user-list {
      max-height: 240px;
      overflow-y: auto;
      margin-bottom: 18px;
      border-radius: 10px;
      border-left: 3px solid #3498db;
      background: rgba(52,73,94,.45);
      padding: 8px 4px 6px 4px;
      box-shadow: 0 2px 8px rgba(34,42,54,0.13);
    }
    #settingsModal .user-row {
      display: flex;
      align-items: center;
      gap: 0;
      margin-bottom: 8px;
      font-size: 14px;
      padding-bottom: 2px;
      border-radius: 8px;
      background: rgba(44,62,80,0.23);
      box-shadow: 0 2px 6px rgba(44,62,80,0.09);
      transition: background .16s;
      padding-left: 5px;
      position: relative;
    }
    #settingsModal .user-row:last-child {
      margin-bottom: 0;
    }
    #settingsModal .user-row:hover {
      background: rgba(44,62,80,0.36);
    }
    #settingsModal .main-cb-wrap {
      display: flex;
      align-items: center;
      gap: 7px;
      flex: 1 1 auto;
    }
    #settingsModal .user-avatar {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      margin-right: 8px;
      border: 2px solid rgba(52,152,219,0.3);
      object-fit: cover;
    }
    #settingsModal .main-cb {
      accent-color: #21c0ff;
      transform: scale(1.2);
      margin-right: 4px;
      margin-left: 2px;
      vertical-align: -1px;
    }
    #settingsModal .user-label {
      font-size: 13.7px;
      font-weight: bold;
      color: #fff;
      letter-spacing: .1px;
      display: flex;
      align-items: center;
    }
    #settingsModal .mode-checkboxes {
      display: flex;
      gap: 7px;
      padding: 0 7px;
      min-width: 110px;
      justify-content: flex-end;
    }
    #settingsModal .mode-checkboxes label {
      font-size: 12px;
      color: #fff;
      font-weight: 500;
      background: #2c3e50;
      padding: 2px 7px 2px 2px;
      border-radius: 5px;
      cursor: pointer;
      transition: background .2s, color .2s, transform .2s;
      display: flex;
      align-items: center;
      border: 1.5px solid #3498db20;
      box-shadow: 0 1px 2px rgba(44,62,80,0.07);
      margin-bottom: 0;
    }
    #settingsModal .mode-checkboxes label input {
      margin-right: 2px;
      accent-color: #3498db;
      transform: scale(.96);
      vertical-align: -2px;
    }
    #settingsModal .mode-checkboxes label.active {
      background: linear-gradient(135deg,#27ae60,#229954);
      color: #fff;
      border: 1.5px solid #27ae60;
    }
    #settingsModal .mode-checkboxes label.anim.active {
      background: linear-gradient(135deg,#f39c12,#d35400);
      border-color: #f39c12;
    }
    #settingsModal .mode-checkboxes label.mimic.active {
      background: linear-gradient(135deg,#9b59b6,#8e44ad);
      border-color: #9b59b6;
    }
    #settingsModal .mode-checkboxes label.follow.active {
      background: linear-gradient(135deg,#21c0ff,#2980b9);
      border-color: #21c0ff;
    }
    #settingsModal .mode-checkboxes label:not(.active):hover {
      transform: scale(1.09);
      z-index: 2;
    }
    #settingsModal .mode-checkboxes label.active:hover {
      transform: scale(1.12);
    }
    #settingsModal .modal-actions {
      display: flex;
      gap: 12px;
      justify-content: center;
      margin-top: 12px;
    }
    #settingsModal button {
      padding: 8px 16px;
      font-size: 13.2px;
      border-radius: 8px;
      border: none;
      cursor: pointer;
      font-weight: bold;
      background: linear-gradient(135deg,#4da3ff,#2980b9);
      color: #fff;
      transition: background .3s;
      box-shadow: 0 2px 7px rgba(52,152,219,0.07);
    }
    #settingsModal .closeSettings {
      background: linear-gradient(135deg,#e74c3c,#c0392b);
    }
    #settingsModal .saveSettings {
      background: linear-gradient(135deg,#27ae60,#229954);
    }

    /* Language Dialog */
    #langDialog {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: rgba(34,42,54,.98);
      border-radius: 10px;
      box-shadow: 0 0 24px rgba(0,0,0,0.5);
      color: #fff;
      z-index: 99999999;
      padding: 25px 22px 18px 22px;
      display: none;
      min-width: 320px;
      max-width: 450px;
      text-align: center;
      max-height: 80vh;
      overflow-y: auto;
    }
    #langDialog h4 {
      margin-bottom: 14px;
      font-size: 16px;
      font-weight: bold;
      color: #4da3ff;
      letter-spacing: 1px;
    }
    #langDialog .lang-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
      gap: 8px;
      margin-bottom: 16px;
    }
    #langDialog .lang-btn {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 8px;
      padding: 10px 12px;
      border: none;
      border-radius: 8px;
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
      background: linear-gradient(135deg, #3498db, #2980b9);
      color: #fff;
      box-shadow: 0 2px 8px rgba(52,152,219,0.15);
      transition: all .22s cubic-bezier(.33,1.5,.68,1);
      outline: none;
      border: 2px solid transparent;
      text-align: left;
    }
    #langDialog .lang-btn .flag {
      font-size: 16px;
      min-width: 20px;
    }
    #langDialog .lang-btn.selected {
      background: linear-gradient(135deg, #27ae60, #229954);
      color: #fff;
      box-shadow: 0 2px 14px rgba(39,174,96,0.25);
      border: 2px solid #27ae60;
      transform: scale(1.05);
    }
    #langDialog .lang-btn:not(.selected):hover {
      background: linear-gradient(135deg, #3498db, #2980b9);
      color: #fff;
      border: 2px solid #2980b900;
      transform: scale(1.08);
      box-shadow: 0 4px 15px rgba(52,152,219,0.21);
    }
    #langDialog .lang-btn.selected:hover {
      background: linear-gradient(135deg, #27ae60, #229954);
      border: 2px solid #27ae60;
      color: #fff;
      transform: scale(1.1);
    }
    #langDialog .closeLang {
      background: linear-gradient(135deg,#e74c3c,#c0392b);
      margin-top: 14px;
      color: #fff;
      font-size: 14px;
      box-shadow: 0 2px 8px rgba(231,76,60,0.18);
      border: none;
      transition: transform .22s cubic-bezier(.33,1.5,.68,1), box-shadow .22s, background .22s;
      width: 100%;
      padding: 9px 0;
      border-radius: 8px;
      font-weight: 600;
      cursor: pointer;
    }
    #langDialog .closeLang:hover {
      background: linear-gradient(135deg,#e74c3c,#c0392b);
      color: #fff;
      transform: scale(1.05);
      box-shadow: 0 7px 14px rgba(231,76,60,0.22);
    }

    /* Guide Modal */
    #guideModal {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: rgba(34,42,54,.98);
      border-radius: 14px;
      box-shadow: 0 0 28px rgba(0,0,0,0.7);
      color: #fff;
      z-index: 99999999;
      padding: 25px 28px 20px 28px;
      display: none;
      min-width: 350px;
      max-width: 500px;
      max-height: 80vh;
      overflow-y: auto;
    }
    #guideModal .guide-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
      border-bottom: 1px solid rgba(255,255,255,0.1);
      padding-bottom: 12px;
    }
    #guideModal h4 {
      margin: 0;
      font-size: 18px;
      font-weight: bold;
      color: #4da3ff;
      letter-spacing: 1px;
    }
    #guideModal .close-guide {
      background: linear-gradient(135deg, #e74c3c, #c0392b);
      border: none;
      border-radius: 50%;
      width: 30px;
      height: 30px;
      color: white;
      font-size: 16px;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    #guideModal .close-guide:hover {
      transform: scale(1.1);
      box-shadow: 0 4px 12px rgba(231,76,60,0.3);
    }
    #guideModal .guide-content {
      text-align: left;
      line-height: 1.6;
      font-size: 14px;
      color: #ecf0f1;
    }
    #guideModal .guide-content strong {
      color: #4da3ff;
      font-weight: 700;
    }
  `;
  document.head.appendChild(style);

  // --- Panel HTML ---
  const panel = document.createElement('div');
  panel.id = 'wsPanel';
  panel.innerHTML = `
    <div class="drag"></div>
    <div class="msp2title">MSP2 Trolls</div>
    <div class="socketAnimContainerBelowTitle">
      <div class="socketAnimBelowTitle" id="socketAnimBelowTitle"></div>
    </div>
    <div class="panelTitle"></div>
    <div id="profileCount"></div>
    <button id="settingsBtn"></button>
    <button id="guideBtn"></button>
    <button id="toggleFollowBtn"></button>
    <button id="toggleMessageMimicBtn"></button>
    <button id="toggleAnimBtn"></button>
    <button id="toggleAutoProfileBtn" class="off"></button>
    <button id="clearProfilesBtn"></button>
    <button id="toggleLangBtn"></button>
    <button id="hidePanelBtn"></button>
  `;
  document.body.appendChild(panel);

  // Settings Modal
  const settingsModal = document.createElement('div');
  settingsModal.id = "settingsModal";
  settingsModal.innerHTML = `
    <h4></h4>
    <div class="user-list"></div>
    <div class="modal-actions">
      <button class="saveSettings"></button>
      <button class="closeSettings"></button>
    </div>
  `;
  document.body.appendChild(settingsModal);

  // Language dialog
  const langDialog = document.createElement('div');
  langDialog.id = "langDialog";
  langDialog.innerHTML = `
    <h4></h4>
    <div class="lang-grid"></div>
    <button class="closeLang">✖ Close</button>
  `;
  document.body.appendChild(langDialog);

  // Guide Modal
  const guideModal = document.createElement('div');
  guideModal.id = "guideModal";
  guideModal.innerHTML = `
    <div class="guide-header">
      <h4></h4>
      <button class="close-guide">✖</button>
    </div>
    <div class="guide-content"></div>
  `;
  document.body.appendChild(guideModal);

  // Show panel button
  const showPanelBtn = document.createElement('div');
  showPanelBtn.id = 'showPanelBtn';
  showPanelBtn.textContent = T("showBtn");
  document.body.appendChild(showPanelBtn);

  // --- DOM References ---
  const panelTitle = panel.querySelector('.panelTitle');
  const profileCountLabel = panel.querySelector('#profileCount');
  const toggleFollowBtn = panel.querySelector('#toggleFollowBtn');
  const toggleMessageMimicBtn = panel.querySelector('#toggleMessageMimicBtn');
  const toggleAnimBtn = panel.querySelector('#toggleAnimBtn');
  const toggleAutoProfileBtn = panel.querySelector('#toggleAutoProfileBtn');
  const clearProfilesBtn = panel.querySelector('#clearProfilesBtn');
  const toggleLangBtn = panel.querySelector('#toggleLangBtn');
  const hidePanelBtn = panel.querySelector('#hidePanelBtn');
  const settingsBtn = panel.querySelector('#settingsBtn');
  const guideBtn = panel.querySelector('#guideBtn');
  const dragArea = panel.querySelector('.drag');
  const socketAnimBelowTitle = panel.querySelector('#socketAnimBelowTitle');
  const settingsTitle = settingsModal.querySelector('h4');
  const settingsUserList = settingsModal.querySelector('.user-list');
  const saveSettingsBtn = settingsModal.querySelector('.saveSettings');
  const closeSettingsBtn = settingsModal.querySelector('.closeSettings');
  const langTitle = langDialog.querySelector('h4');
  const langGrid = langDialog.querySelector('.lang-grid');
  const closeLangBtn = langDialog.querySelector('.closeLang');
  const guideTitle = guideModal.querySelector('h4');
  const guideContent = guideModal.querySelector('.guide-content');
  const closeGuideBtn = guideModal.querySelector('.close-guide');

  // --- Variables ---
  const savedProfiles = [];
  let autoSaveProfilesEnabled = false;
  let isFollowing = false;
  let messageMimicEnabled = false;
  let animTaklitEnabled = false;
  let socketStatus = "disconnected";
  let userModes = {};
  let profileSessionIds = {};
  let profileLastPositions = {};

  // --- Apply User Modes ---
  function applyUserModes() {
    let followSet = new Set(), mimicSet = new Set(), animSet = new Set();
    Object.entries(userModes).forEach(([pid, mode]) => {
      if (mode.follow) followSet.add(pid);
      if (mode.mimic) mimicSet.add(pid);
      if (mode.anim)  animSet.add(pid);
    });
    window.selectedFollowIds = followSet;
    window.selectedMimicIds = mimicSet;
    window.selectedAnimIds = animSet;
  }

  // --- Language and Panel UI ---
  function updateLangUI() {
    panelTitle.textContent = T("panelTitle");
    profileCountLabel.textContent = T("capturedUsers", { count: savedProfiles.length });
    toggleFollowBtn.textContent = T("followBtn", { onoff: isFollowing ? T("followOn") : T("followOff") });
    toggleFollowBtn.classList.toggle("active", isFollowing);
    toggleMessageMimicBtn.textContent = T("mimicBtn", { onoff: messageMimicEnabled ? T("mimicOn") : T("mimicOff") });
    toggleMessageMimicBtn.classList.toggle("active", messageMimicEnabled);
    toggleAnimBtn.textContent = T("animBtn", { onoff: animTaklitEnabled ? T("animOn") : T("animOff") });
    toggleAnimBtn.classList.toggle("active", animTaklitEnabled);
    toggleAutoProfileBtn.textContent = T("autoBtn", { onoff: autoSaveProfilesEnabled ? T("autoOn") : T("autoOff") });
    toggleAutoProfileBtn.classList.toggle("off", !autoSaveProfilesEnabled);
    clearProfilesBtn.textContent = T("clearBtn");
    hidePanelBtn.textContent = T("hideBtn");
    toggleLangBtn.textContent = T("langBtn");
    showPanelBtn.textContent = T("showBtn");
    settingsBtn.textContent = T("settingsBtn");
    guideBtn.textContent = T("guideBtn");
    updateSocketAnimBelowTitle();
  }

  // --- Settings Modal ---
  function showSettingsModal() {
    settingsTitle.textContent = T("settingsTitle");
    saveSettingsBtn.textContent = T("settingsSave");
    closeSettingsBtn.textContent = T("settingsClose");

    settingsUserList.innerHTML = "";
    if (savedProfiles.length === 0) {
      settingsUserList.innerHTML = `<div style="color:#aaa;font-size:13px;text-align:center;padding:12px;">${T("noUsers")}</div>`;
    } else {
      savedProfiles.forEach((pid, idx) => {
        if (!userModes[pid]) userModes[pid] = {follow:false, mimic:false, anim:false};

        const row = document.createElement('div');
        row.className = "user-row";

        const mainCbWrap = document.createElement('div');
        mainCbWrap.className = "main-cb-wrap";
        const mainCheckbox = document.createElement('input');
        mainCheckbox.type = "checkbox";
        mainCheckbox.className = "main-cb";
        mainCheckbox.checked = userModes[pid].follow || userModes[pid].mimic || userModes[pid].anim;
        mainCheckbox.onchange = function () {
          if (!this.checked) {
            userModes[pid] = {follow:false, mimic:false, anim:false};
            row.querySelectorAll('input[type=checkbox].modcb').forEach(cb=>cb.checked=false);
            updateModeCbBg();
          }
        };

        // Create avatar element if we have the avatar for this profile
        let avatarElement = '';
        if (profileAvatars[pid]) {
          avatarElement = `<img src="${profileAvatars[pid]}" class="user-avatar" onerror="this.style.display='none'">`;
        }

        const label = document.createElement('span');
        label.className = "user-label";
        label.innerHTML = avatarElement + ` User ${idx + 1}`; // Add user number

        mainCbWrap.appendChild(mainCheckbox);
        mainCbWrap.appendChild(label);
        row.appendChild(mainCbWrap);

        const modeBoxes = document.createElement('div');
        modeBoxes.className = "mode-checkboxes";

        function makeModeBox(mode, text, colorClass) {
          const wrap = document.createElement('label');
          wrap.className = `${mode} ${colorClass}`;
          const cb = document.createElement('input');
          cb.type = "checkbox";
          cb.className = "modcb";
          cb.checked = userModes[pid][mode];
          cb.onchange = function () {
            userModes[pid][mode] = cb.checked;
            mainCheckbox.checked = userModes[pid].follow || userModes[pid].mimic || userModes[pid].anim;
            updateModeCbBg();
          };
          wrap.appendChild(cb);
          wrap.appendChild(document.createTextNode(text));
          if (userModes[pid][mode]) wrap.classList.add("active");
          return {wrap, cb};
        }

        const {wrap:followWrap, cb:cbFollow} = makeModeBox("follow", T("follow"), "follow");
        const {wrap:mimicWrap, cb:cbMimic} = makeModeBox("mimic", T("mimic"), "mimic");
        const {wrap:animWrap, cb:cbAnim} = makeModeBox("anim", T("anim"), "anim");

        modeBoxes.appendChild(followWrap);
        modeBoxes.appendChild(mimicWrap);
        modeBoxes.appendChild(animWrap);

        function updateModeCbBg() {
          [followWrap, mimicWrap, animWrap].forEach((wrap, i) => {
            const mode = ["follow","mimic","anim"][i];
            const cb = [cbFollow,cbMimic,cbAnim][i];
            if (userModes[pid][mode]) wrap.classList.add("active");
            else wrap.classList.remove("active");
          });
        }

        row.appendChild(modeBoxes);
        settingsUserList.appendChild(row);
      });
    }
    settingsModal.style.display = "block";
  }

  function hideSettingsModal() {
    settingsModal.style.display = "none";
  }

  saveSettingsBtn.onclick = () => {
    applyUserModes();
    hideSettingsModal();
  };
  closeSettingsBtn.onclick = hideSettingsModal;
  settingsBtn.onclick = showSettingsModal;

  // --- Guide Modal ---
  function showGuideModal() {
    guideTitle.textContent = T("guideTitle");
    guideContent.innerHTML = T("guideContent");
    guideModal.style.display = "block";
  }

  function hideGuideModal() {
    guideModal.style.display = "none";
  }

  guideBtn.onclick = showGuideModal;
  closeGuideBtn.onclick = hideGuideModal;

  // --- Language Dialog ---
  function createLangButtons() {
    langGrid.innerHTML = "";
    Object.entries(LANGS).forEach(([code, lang]) => {
      const btn = document.createElement('button');
      btn.className = "lang-btn";
      if (code === currentLang) btn.classList.add("selected");
      btn.innerHTML = `<span class="flag">${lang.flag}</span><span>${lang.name}</span>`;
      btn.onclick = () => {
        currentLang = code;
        updateLangUI();
        hideLangDialog();
      };
      langGrid.appendChild(btn);
    });
  }

  function showLangDialog(e) {
    langTitle.textContent = T("langDialogTitle");
    createLangButtons();
    langDialog.style.display = "block";
    if (e) e.stopPropagation();
  }

  function hideLangDialog() {
    langDialog.style.display = "none";
  }

  closeLangBtn.onclick = hideLangDialog;
  toggleLangBtn.onclick = showLangDialog;

  // --- Click Outside to Close Modals ---
  window.addEventListener("mousedown", function(e) {
    if (langDialog.style.display === "block" && !langDialog.contains(e.target) && e.target !== toggleLangBtn) {
      hideLangDialog();
    }
    if (settingsModal.style.display === "block" && !settingsModal.contains(e.target) && e.target !== settingsBtn) {
      hideSettingsModal();
    }
    if (guideModal.style.display === "block" && !guideModal.contains(e.target) && e.target !== guideBtn) {
      hideGuideModal();
    }
  });

  // --- NEW: Enhanced Fetch Interceptor for Profile ID and Avatar Capture ---
  const originalFetch = window.fetch;
  window.fetch = async function(url, options) {
    // Capture profile avatar URLs and store them persistently
    if (typeof url === 'string' && url.includes('ugc-eu.mspcdns.com/profiles/') && url.includes('/avatar/') && url.endsWith('.png')) {
      // Extract profile ID from avatar URL pattern
      const avatarRegex = /ugc-eu\.mspcdns\.com\/profiles\/([^\/]+)\//;
      const match = url.match(avatarRegex);
      if (match && match[1]) {
        const profileId = match[1];
        // Store the avatar URL for this profile ID
        profileAvatars[profileId] = url;
        saveAvatarsToStorage(); // Save to localStorage immediately
        console.log('Avatar captured and saved for profile:', profileId, url);
      }
    }

    // Original profile attributes capture logic
    if (
      autoSaveProfilesEnabled &&
      typeof url === 'string' &&
      url.includes('/profileattributes/v1/profiles/')
    ) {
      const regex = /\/profileattributes\/v1\/profiles\/([^/]+)\//;
      const match = url.match(regex);
      if (match && match[1]) {
        const profileId = match[1];
        if (!savedProfiles.includes(profileId)) {
          savedProfiles.push(profileId);
          userModes[profileId] = {follow:false, mimic:false, anim:false};
          updateProfileCount();
        }
      }
    }
    return originalFetch.apply(this, arguments);
  };

  // --- Socket Animation ---
  function updateSocketAnimBelowTitle() {
    socketAnimBelowTitle.classList.remove("connected", "connecting");
    if (socketStatus === "connected") {
      socketAnimBelowTitle.classList.add("connected");
    } else if (socketStatus === "connecting") {
      socketAnimBelowTitle.classList.add("connecting");
    } else {
      socketAnimBelowTitle.classList.remove("connected", "connecting");
    }
  }

  // --- WebSocket Hook ---
  window._allWS = [];
  const OriginalWS = window.WebSocket;
  window.WebSocket = function(url, protocols) {
    socketStatus = "connecting";
    updateSocketAnimBelowTitle();
    const ws = new OriginalWS(url, protocols);
    window._allWS.push(ws);

    ws.addEventListener('open', () => {
      socketStatus = "connected";
      updateSocketAnimBelowTitle();
    });
    ws.addEventListener('close', () => {
      socketStatus = "disconnected";
      updateSocketAnimBelowTitle();
    });
    ws.addEventListener('error', () => {
      socketStatus = "disconnected";
      updateSocketAnimBelowTitle();
    });

    ws.addEventListener('message', event => {
      if (typeof event.data !== 'string' || !event.data.startsWith('42')) return;
      let payload;
      try {
        payload = JSON.parse(event.data.slice(2));
      } catch {
        return;
      }
      if (!Array.isArray(payload)) return;
      const [type, content] = payload;

      if (content && content.messageType === '2001') {
        const profileId = content.messageContent?.profileId;
        if (!savedProfiles.includes(profileId)) return;
        if (
          userModes[profileId]?.mimic &&
          messageMimicEnabled &&
          content.messageContent?.message
        ) {
          const mimicMsg = `42["chatv2:send",{"message":"${content.messageContent.message.replace(
            /"/g,
            '\\"'
          )}"}]`;
          sendToAllWS(mimicMsg);
        }
        profileSessionIds[profileId] = content.messageContent?.sessionId || null;
      }

      if (content && content.messageType === '7103' && isFollowing) {
        const data = content.messageContent;
        const sessionId = data.sessionId;
        Object.entries(userModes).forEach(([profileId, mode]) => {
          if (mode.follow && profileSessionIds[profileId] === sessionId && data.position) {
            profileLastPositions[profileId] = data.position;
            sendToAllWS(
              `42["7003",{"position":${JSON.stringify(data.position)}}]`
            );
          }
        });
      }

      if (animTaklitEnabled) {
        if (content && content.messageType === '7105' && content.messageContent?.sessionId) {
          const sessionId = content.messageContent.sessionId;
          Object.entries(userModes).forEach(([profileId, mode]) => {
            if (mode.anim && profileSessionIds[profileId] === sessionId) {
              const mood = content.messageContent.mood;
              if (typeof mood === "string" && mood.length > 0) {
                sendToAllWS(`42["7005",{"mood":"${mood}"}]`);
              }
            }
          });
        }
        if (content && content.messageType === '7106' && content.messageContent?.sessionId) {
          const sessionId = content.messageContent.sessionId;
          Object.entries(userModes).forEach(([profileId, mode]) => {
            if (mode.anim && profileSessionIds[profileId] === sessionId) {
              const emote = content.messageContent.emote;
              const looping = !!content.messageContent.looping;
              if (typeof emote === "string" && emote.length > 0) {
                sendToAllWS(`42["7006",{"emote":"${emote}","looping":${looping}}]`);
              }
            }
          });
        }
      }
    });

    updateSocketAnimBelowTitle();
    return ws;
  };

  window.WebSocket.prototype = OriginalWS.prototype;
  Object.getOwnPropertyNames(OriginalWS).forEach(function(p) {
    if (!(p in window.WebSocket)) {
      window.WebSocket[p] = OriginalWS[p];
    }
  });

  function sendToAllWS(msg) {
    window._allWS.forEach(function(ws) {
      if (ws.readyState === OriginalWS.OPEN) {
        ws.send(msg);
      }
    });
  }

  function updateProfileCount() {
    profileCountLabel.textContent = T("capturedUsers", { count: savedProfiles.length });
  }

  // --- Panel Buttons ---
  toggleFollowBtn.onclick = function() {
    isFollowing = !isFollowing;
    updateLangUI();
  };
  toggleMessageMimicBtn.onclick = function() {
    messageMimicEnabled = !messageMimicEnabled;
    updateLangUI();
  };
  toggleAnimBtn.onclick = function() {
    animTaklitEnabled = !animTaklitEnabled;
    updateLangUI();
  };
  toggleAutoProfileBtn.onclick = function() {
    autoSaveProfilesEnabled = !autoSaveProfilesEnabled;
    updateLangUI();
  };

  // --- MODIFIED: Clear Users Button (Does NOT clear avatars) ---
  clearProfilesBtn.onclick = function() {
    savedProfiles.length = 0;
    Object.keys(userModes).forEach(function(k){delete userModes[k];});
    profileSessionIds = {};
    profileLastPositions = {};
    // NOTE: We DON'T clear profileAvatars here - they persist until page refresh
    updateLangUI();
    console.log('Users cleared but avatars preserved in memory');
  };

  hidePanelBtn.onclick = function() {
    panel.style.display = 'none';
    showPanelBtn.style.display = 'block';
  };
  showPanelBtn.onclick = function() {
    panel.style.display = 'flex';
    showPanelBtn.style.display = 'none';
  };

  // --- Drag Functionality ---
  let isDragging = false;
  let dragStartX = 0;
  let dragStartY = 0;
  let panelStartLeft = 0;
  let panelStartTop = 0;

  dragArea.addEventListener('mousedown', function(e) {
    isDragging = true;
    dragStartX = e.clientX;
    dragStartY = e.clientY;
    const rect = panel.getBoundingClientRect();
    panelStartLeft = rect.left;
    panelStartTop = rect.top;
    document.body.style.userSelect = 'none';
  });

  window.addEventListener('mouseup', function() {
    isDragging = false;
    document.body.style.userSelect = '';
  });


  window.addEventListener('mousemove', function(e) {
    if (!isDragging) return;
    let newX = panelStartLeft + (e.clientX - dragStartX);
    let newY = panelStartTop + (e.clientY - dragStartY);
    if (newX < 0) newX = 0;
    if (newY < 0) newY = 0;
    if (newX + panel.offsetWidth > window.innerWidth) newX = window.innerWidth - panel.offsetWidth;
    if (newY + panel.offsetHeight > window.innerHeight) newY = window.innerHeight - panel.offsetHeight;
    panel.style.left = newX + "px";
    panel.style.top = newY + "px";
  });

  // Initialize
  updateLangUI();
  applyUserModes();
})();
