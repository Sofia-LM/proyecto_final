(()=>{
    let menuButton = document.getElementById("menuButton");
    let menuBody = document.getElementById("menuBody");
    menuButton.addEventListener('click',()=>{
        menuBody.style.visibility='visible';
        menuBody.style.opacity='1';
    },false)

    let fondoMenu = document.getElementById("fondoMenu");
    fondoMenu.addEventListener('click',()=>{
        menuBody.style.visibility='hidden';
        menuBody.style.opacity='0';
    },false)    



    let menuFuncional = document.getElementById("menuFuncional");
    menuFuncional.addEventListener('click',()=>{
        menuBody.style.visibility='visible';
        menuBody.style.opacity='1';
    },false)
 





    const paraTi = document.getElementById("paraTi");
    const paraTiIcon = document.getElementById("paraTiIcon");
    const paraTiContain = document.getElementById("paraTiContain");
    paraTi.addEventListener('click',()=>{
        paraTiContain.style.visibility='visible';
        paraTiContain.style.opacity='1';
        presentacionesContain.style.visibility='hidden';
        presentacionesContain.style.opacity='0';

        otherContain.style.visibility='hidden';
        otherContain.style.opacity='0';


        paraTiIcon.style.color='#8b3dff';
        paraTiIcon.style.backgroundColor='white';

        presentacionesIcon.style.backgroundColor='rgba(236, 236, 236, 0.123)';
        presentacionesIcon.style.color='white';

        otherIcon.style.backgroundColor='rgba(236, 236, 236, 0.123)';
        otherIcon.style.color='white';
        
    },false)

    const presentaciones = document.getElementById("presentaciones");
    const presentacionesIcon = document.getElementById("presentacionesIcon");
    const presentacionesContain = document.getElementById("presentacionesContain");
    presentaciones.addEventListener('click',()=>{
        paraTiContain.style.visibility='hidden';
        paraTiContain.style.opacity='0';
        presentacionesContain.style.visibility='visible';
        presentacionesContain.style.opacity='1';

        otherContain.style.visibility='hidden';
        otherContain.style.opacity='0';

        presentacionesIcon.style.color='#ff7a3d';
        presentacionesIcon.style.backgroundColor='white';

        paraTiIcon.style.backgroundColor='rgba(236, 236, 236, 0.123)';
        paraTiIcon.style.color='white';
        otherIcon.style.backgroundColor='rgba(236, 236, 236, 0.123)';
        otherIcon.style.color='white';
    },false)

    const other = document.getElementById("other");
    const otherIcon = document.getElementById("otherIcon");
    const otherContain = document.getElementById("otherContain");
    other.addEventListener('click',()=>{
        paraTiContain.style.visibility='hidden';
        paraTiContain.style.opacity='0';
        presentacionesContain.style.visibility='hidden';
        presentacionesContain.style.opacity='0';

        otherContain.style.visibility='visible';
        otherContain.style.opacity='1';


        otherIcon.style.color='#3d40ff';
        otherIcon.style.backgroundColor='white';
        paraTiIcon.style.backgroundColor='rgba(236, 236, 236, 0.123)';
        paraTiIcon.style.color='white';
        presentacionesIcon.style.backgroundColor='rgba(236, 236, 236, 0.123)';
        presentacionesIcon.style.color='white';
    },false)



})();
