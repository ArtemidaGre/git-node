var m_b = document.getElementById('112')
var s_b = document.getElementById('111')

const mainf = {
    developer: 'Aztec_bx',
    dev_coutry: 'Russia',
    dev_age: 14,
    dev_city: 'Yaroslavl',
    dev_info: function(){
        console.log(`hi, its developer my name is ${this.developer}, im ${this.dev_age} years old, from ${this.dev_coutry},${this.dev_city}. I hope you like this site :)`)
    }
}

const button_f = {
    first_button: function(){
        console.log('first button has been activated')
    },
    second_button: function(){
        console.log('second button has been activated')
    }
    
}

const main_buttons = {
    indexP: function (){
        window.open('/', '_self')
    },
    indexPa: function (){
        window.open('/', '_self')
    },
    infoP: function (){
        window.open('info', '_self')
    },
    infoPa: function (){
        window.open('../info', '_self')
    },
    projP: function (){
        window.open('proj', '_self')
    },
    projPa: function (){
        window.open('../proj', '_self')
    },
    blogP: function(){
        window.open('blog', '_self')
    },
    blogPa: () => {
        window.open('../blog', '_self')
    }
}

const version = {
    curent: '2.6',
    next: '2.7',
    version_test: function(){
        alert(`now you see ${this.curent_version}, next is ${this.next_version}`)
    }
}

const console = {
    print: (to_print) =>{alert(to_print)}
}

const VideoControls = {
    start: (id) =>{document.getElementById(id).play()},
    pause: (id) =>{document.getElementById(id).pause()},
    volP: (id) =>{document.getElementById(id).volume += 0.1},
    volM: (id) =>{document.getElementById(id).volume -= 0.1}
}