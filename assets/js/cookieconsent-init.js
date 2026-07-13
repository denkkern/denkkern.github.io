CookieConsent.run({
  guiOptions: {
    consentModal: {
      layout: 'box',
      position: 'bottom right',
      equalWeightButtons: true,
      flipButtons: false
    },
    preferencesModal: {
      layout: 'box',
      equalWeightButtons: true,
      flipButtons: false
    }
  },
  categories: {
    necessary: {
      readOnly: true
    },
    analytics: {}
  },
  language: {
    default: 'en',
    translations: {
      en: {
        consentModal: {
          title: 'We use cookies',
          description: 'We use cookies to make this site work and, with your consent, to understand how it is used so we can improve it.',
          acceptAllBtn: 'Accept all',
          acceptNecessaryBtn: 'Reject all',
          showPreferencesBtn: 'Manage preferences'
        },
        preferencesModal: {
          title: 'Cookie preferences',
          acceptAllBtn: 'Accept all',
          acceptNecessaryBtn: 'Reject all',
          savePreferencesBtn: 'Save preferences',
          closeIconLabel: 'Close',
          sections: [
            {
              title: 'Strictly necessary',
              description: 'These cookies are required for the site to function and cannot be switched off.',
              linkedCategory: 'necessary'
            },
            {
              title: 'Analytics',
              description: 'These cookies help us understand how visitors use the site so we can improve it.',
              linkedCategory: 'analytics'
            }
          ]
        }
      }
    }
  }
});
