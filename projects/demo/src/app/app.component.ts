import { Component, ViewChild, HostBinding } from '@angular/core';
import { OverlayContainer } from "@angular/cdk/overlay";

/* angular material theme  */
const THEME_DARKNESS_SUFFIX = `-dark`;
/* angular material theme  */

/**
 * main app component
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'demo';
  /* angular material theme  */
  themes: string[] = [
  // "deeppurple-amber",
    "indigo-pink",
    "pink-bluegrey",
    // "purple-green",
    "joy",
    "aquapurple",
    // "green-grey",
  ];

  @HostBinding('class') activeThemeCssClass: string;
  isThemeDark = false;
  activeTheme: string;

  setMatTheme(theme: string, darkness: boolean = null) {
    localStorage.setItem('selectedTheme', theme);
    console.log(theme, darkness);
    if (darkness === null)
      darkness = this.isThemeDark;
    else if (this.isThemeDark === darkness) {
      if (this.activeTheme === theme) return;
    } else
      this.isThemeDark = darkness;

    this.activeTheme = theme;
    const cssClass = darkness === true ? theme + THEME_DARKNESS_SUFFIX : theme;
    const classList = this.overlayContainer.getContainerElement().classList;
    document.documentElement.setAttribute('class', theme);
     if (this.activeThemeCssClass) {
      if (classList.contains(this.activeThemeCssClass))
        classList.replace(this.activeThemeCssClass, cssClass);
      else
        classList.add(cssClass);
     }
      this.activeThemeCssClass = cssClass;
  }

  /* material dark themes */
  toggleDarkness() {
    this.setMatTheme(this.activeTheme, !this.isThemeDark);
  }

  @ViewChild('frameWorkPopUp') frameWorkPopUp;
 

  constructor(private overlayContainer: OverlayContainer) {


    const selectedMatTheme = localStorage.getItem('selectedTheme');
    console.log(selectedMatTheme);
    if (selectedMatTheme) {
      this.setMatTheme(selectedMatTheme, false);
    } else {
      this.setMatTheme('joy', false); // Default Theme pink-bluegrey
    }
  }

  /**
   * dispatch telemetry window unload event before browser closes
   * @param  event
   */

  ngAfterViewInit() {
    // themeing code
    const trans = () => {
      document.documentElement.classList.add('transition');
      window.setTimeout(() => {
        document.documentElement.classList.remove('transition');
      }, 1000);
    };
    const selector = document.querySelectorAll('input[name=selector]');
    for (let i = 0; i < selector.length; i++) {
      selector[i].addEventListener('change', function () {
        if (this.checked) {
          trans();
          document.documentElement.setAttribute('data-theme', this.value);
        }
      });
    }
    this.setTheme();
    // themeing code
    // dark theme
    this.getLocalTheme();
  }



  setTheme() {
    const themeColour = localStorage.getItem('layoutColour') || 'default';
    this.setSelectedThemeColour(themeColour);
    document.documentElement.setAttribute('data-theme', themeColour);
  }

  storeThemeColour(value) {
    localStorage.setItem('layoutColour', value);
  }

  setSelectedThemeColour(value) {
    const element = (<HTMLInputElement>document.getElementById(value));
    if (element) {
      element.checked = true;
    }
  }

  getLocalTheme() {
    const localDataThemeAttribute = localStorage.getItem('data-mode');
    if (localDataThemeAttribute) {
      this.setLocalTheme(localDataThemeAttribute);
    }
  }
  setLocalTheme(value: string) {
    document.documentElement.setAttribute('data-mode', value);
  }
}
