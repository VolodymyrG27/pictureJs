//Example first - used css
/*
const accordion = (triggersSelector, itemSelector) => {
    const btns = document.querySelectorAll(triggersSelector),
          blocks = document.querySelectorAll(itemSelector);
    
    blocks.forEach(block => {
        block.classList.add('animated', 'fadeInDown');
    });

    btns.forEach(btn => {
        btn.addEventListener('click', function() {
            if(!this.classList.contains('active')) {
                btns.forEach(btn => {
                    btn.classList.remove('active', 'active-style')
                });
                this.classList.add('active', 'active-style');
            }
        });
    })
};
*/

//Example second - used JS animation
const accordion = (triggersSelector) => {
    const btns = document.querySelectorAll(triggersSelector);

    btns.forEach(btn => {
        btn.addEventListener('click', function() {
            this.classList.toggle('active-style');
            //звертаємось до наступного елементу на сторінці
            this.nextElementSibling.classList.toggle('active-content');

            if (this.classList.contains('active-style')) {
                this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + "px";
            } else {
                this.nextElementSibling.style.maxHeight = '0px';
            }
        });
    });

};

export default accordion;