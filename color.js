
const buttons = document.querySelectorAll('.button')
const nav = document.querySelector('nav')

const body = document.querySelector('body')

buttons.forEach(function(button){
    console.log(button)
    console.log(button.id)
    button.addEventListener('click',function(e){
        console.log(e)
        console.log(e.target)
        if(e.target.id === 'blue'){
            body.style.backgroundColor = '#008dcd'
            nav.style.backgroundColor = '#008dcd'
            body.style.color = 'white'
            
        }
        else if(e.target.id === 'lime'){
            body.style.backgroundColor = '#00c9a7'
            nav.style.backgroundColor = '#00c9a7'
            body.style.color = 'black'
        }
        else if(e.target.id === 'purple'){
            body.style.backgroundColor = '#845ec2'
            nav.style.backgroundColor = '#845ec2'
            body.style.color = 'white'
        }
        else if(e.target.id === 'yellow'){
            body.style.backgroundColor = '#f9f871'
            nav.style.backgroundColor = '#f9f871'
            body.style.color = 'black'
        }
    })
})