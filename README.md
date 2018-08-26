# Cookie Consent Bar
![](https://img.shields.io/badge/version-1.0.0-orange.svg)

This code plugin allowing a website to comply with the cookie law in which alerts users about the use of cookies on your website.

### Instructions
  
Download the project file. Install dependencies using bash. Run `gulp build` to build distribution files in the `dist` folder.
```bash
npm install
gulp build
```

### Configuration

#### JSON

If `navigator.language` does not match with any of the data below, the language will default to english. You may also want to add more languages to the json file: `cookiebar.dat`.

```bash
[
  { "name": "english",
    "lang": ["en", "en-US", "en-GB", "en-AU", "en-GB", "en-CA", "en-NZ", "en-IE", "en-ZA", "en-JM", "en-BZ", "en-TT"],
    "consent": "This website uses cookies to improve your experience. By continuing to visit this site, you consent to our use of cookies.",
    "learn": "Learn more.",
    "url": "/privacy-policy.html"
  },
  { "name": "dutch",
    "lang": ["nl", "nl-BE"],
    "consent": "Deze website maakt gebruik van cookies om uw ervaring te verbeteren. Door deze site te blijven bezoeken, stemt u in met het gebruik van cookies.",
    "learn": "Kom meer te weten.",
    "url": "/privacy-policy-nl.html"
  },
  { "name": "filipino",
    "lang": ["fil"],
    "consent": "Gumagamit kami ng cookies upang mapahusay ang iyong karanasan. Sa patuloy na pagbisita sa site na ito, pinapayagan mo ang aming paggamit ng mga cookies.",
    "learn": "Matuto nang higit pa.",
    "url": "/privacy-policy-fil.html"
  },
...
```


#### Screenshot
![](https://github.com/hsbyte/cookie-bar-consent/blob/master/.md/cookiebar.jpg)

## Liability
The plugin does not assume any liability for the accuracy of the translations.

## License
Released under the [MIT licence](http://opensource.org/licenses/MIT).

## Contributor
- Arnold Haban
