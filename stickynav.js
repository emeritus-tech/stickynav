import throttle from 'lodash/throttle';
import isMobile from './utils/isMobile';

class stickynav {
    constructor({ 
        elementClass = 'sticky-nav-element', 
        scrollThreshold = 86, 
        desktopPosition = 'top',
        mobilePosition = 'bottom', 
    } = {}) {
        this.scrollThreshold = scrollThreshold;
        this.mobilePosition = mobilePosition;
        this.desktopPosition = desktopPosition;
        this.stickyElement = document.querySelector(`.${elementClass}`);
        this.isMobile = isMobile();
        this.setEvents();
    }

    setEvents() {
        window.addEventListener("scroll", throttle(() => this.onScroll(), 64), false);
    }

    showNav(){
        this.stickyElement.classList.add("sticky-nav");
        if (this.isMobile) {
            this.stickyElement.classList.add(`sticky-nav-${this.mobilePosition}`);
        } else {
            this.stickyElement.classList.add(`sticky-nav-${this.desktopPosition}`);
        }
    }

    hideNav() {
        this.stickyElement.classList.remove("sticky-nav");
        if (this.isMobile) {
            this.stickyElement.classList.remove(`sticky-nav-${this.mobilePosition}`);
        } else {
            this.stickyElement.classList.remove(`sticky-nav-${this.desktopPosition}`);
        }
    }

    onScroll() {
        if (window.pageYOffset >= this.scrollThreshold) {
            this.showNav();
        } else {
            this.hideNav();
        }
    }
}

export default stickynav;