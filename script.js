window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

    const panels = document.querySelectorAll('.panel');

    

     panels.forEach((panel) => {
         panel.addEventListener('click', (event) => {
             removeActiveClasses();
             panel.classList.add('active');
         });
     });


     function removeActiveClasses() {

        panels.forEach((panel) => {    
            panel.classList.remove('active');
        })
     }



    

});
