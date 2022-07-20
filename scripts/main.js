
$(document).ready(function () {

    

    const all_html_buttons = document.querySelectorAll(".execute-button");

    const restore_button = document.querySelector(".restore-c");

    const src_script = Array.of(
        'basic/variables.js',
        'basic/const.js',
        'basic/strings.js',
        'basic/functions.js',
        'basic/arrays.js',
        'basic/objects.js',
        'basic/throw_errors.js',
        'basic/destructuring.js',
        'basic/literal_objects.js',
        'basic/restandspread.js',
        'basic/arrowfunctions.js',
        'oop/prototype.js',
        'oop/prototypical_inheritance.js',
        'oop/classesandinheritance.js',
        'oop/getset.js'
    )

    all_html_buttons.forEach((element, index) => {

        element.addEventListener("click",()=>{
            try {

                let script = document.createElement("script");
                script.type = 'text/javascript'
                script.async = true;
                script.src = `scripts/${src_script[index]}`;
                let s = document.getElementsByTagName("script")[0].appendChild(script);
                s.parentNode.insertBefore(script, s);

                restore_button.classList.add('transition');
                
                restore_button.addEventListener('animationend', () => {
                    restore_button.classList.remove('transition');
                });

            } catch (error) {
                alert(error);
            }

        });

        restore_button.addEventListener("click", () => {
            location.reload();
        })


        
    });

    

});



