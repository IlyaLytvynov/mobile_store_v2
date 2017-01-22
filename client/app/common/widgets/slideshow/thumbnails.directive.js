/**
 * Created by IlyaLitvinov on 22.01.17.
 */
class Controller {}

const linkFunction = (scope, el, attr, controller) => {
    "use strict";
    debugger;
    const parentRect = el[0].getBoundingClientRect();
    const parentWidth = parentRect.width;
    const viewport = el[0].querySelector('.viewport');
    let children = Array.prototype.slice.call(el[0].querySelector('.slideshow__thumbnail'));

    const findActiveEl = () => {
        let index = 0;

        const activeEl = children.filter((item, i) => {
            if(item.classList.contains('slideshow__thumbnail_active')) {
                index = i;
                return true
            }
        })[0];

        return [activeEl, index];
    };



    el.on('click', (e) => {
        children = Array.prototype.slice.call(el[0].querySelector('.slideshow__thumbnail'));
        debugger;
        const [activeEl, index] = findActiveEl();//destruction

        // if (index === children.length - 1) {
        //    return true;
        // }

        if (activeEl.getBoundingClientRect().right === parentRect.right
            || activeEl.getBoundingClientRect().right  >  parentRect.right) {
            console.log("Scroll!!");
            let t = parentRect.right - activeEl.getBoundingClientRect().right;

            $(viewport).css({transform: 'translateX('+t + 'px)'});
            debugger;
        }
        console.log(activeEl.getBoundingClientRect().right);
        console.log(parentRect.right);

    });



};

const ThumbnailsDirective = () => {
    "use strict";
    return {
        restrict: 'A',
        link: linkFunction
    }
};

export {ThumbnailsDirective}
