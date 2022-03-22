

const color = [
    {
        name:'green',
        code:'#2ea44f',
        url:'css/skins/green.css'
    },

    {
        name:'light blue',
        code:'#3e99f4',
        url:'css/skins/light-blue.css'
    },

    {
        name:'light green',
        code:'#0dcebd',
        url:'css/skins/light-green.css'
    },

    {
        name:'light red',
        code:'#cc3a3b',
        url:'css/skins/light-red.css'
    },

    {
        name:'light yellow',
        code:'#ff9801',
        url:'css/skins/light-yellow.css'
    }
]


$(document).ready(function(){
    setColors();
    function setColors(){
        for(let i=0; i<color.length; i++){
            const span = document.createElement("span");
                span.style.backgroundColor = color[i].code;
                $(".colors").append(span);
        }
    }

    $(".colors span").click(function(){
        const index = $(this).index();
        $(".alternate-style").attr("href", color[index].url);
    })

    // theme light & dark mode
    $(".theme-mode").change(function(){
        if($(this).val() == "light"){
            $("body").removeClass("dark")
        }
        else{
            $("body").addClass("dark")
        }
    })

    //toggle setting
    $(".s-toggle-btn").click(function(){
        $(".setting").toggleClass("open");
    })
})






