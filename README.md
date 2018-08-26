# Cookie Consent Bar
![](https://img.shields.io/badge/version-1.0.0-orange.svg)

This code plugin allowing a website to comply with the cookie law in which alerts users about the use of cookies on your website.

### Instructions
  
Download the project file. Install `node.js` package dependencies using `bash` or `cmd`. Run `gulp build` to build distribution files in the `dist` folder.

```bash
npm install
gulp build
```

`Gulp` was used to compile and minify the `SCSS` and `JavaScript`.


## Configuration

### JSON

> Displays the consent phrase translation according to the browser's `navigator.lamguage` attribute, and if `navigator.language` does not match with any of the `lang` data below, the phrase will be translated to English language. You may also want to add more languages to the json file: `cookiebar.dat`.

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

### Color Scheme and Cookie Bar Position

> Modify `styles.scss` to change color scheme and cookie bar position in folder `src/scss`.

### Screenshot

![](https://github.com/hsbyte/cookie-bar-consent/blob/master/.md/cookiebar.jpg)


## License

Released under the [MIT licence](http://opensource.org/licenses/MIT).


## Author

- Arnold Haban
