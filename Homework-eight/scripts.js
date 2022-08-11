let utf = document.createElement('meta')
utf.setAttribute('charset', 'UTF-8')
document.head.appendChild(utf);

//что-то не работает defer, когда его через JS добавляю, хотя сам атрибут и отображается
// let script = document.querySelector('script')
// script.setAttribute('defer' , '')

let script = document.querySelector('script')

let style = document.createElement('style')
document.head.appendChild(style)
style.innerHTML = `
* {  
    margin: 0;
    padding: 0;
    font-family: 'Arvo', serif;
}

.wrapper {
    max-width: 1280px;
    width: 100%;
    display: grid;
    grid-template-columns: 240px 1fr 240px;
    grid-template-rows: auto auto 139px;
    margin: 0 auto;
}

.title-container {
    grid-row: 1/2;
    grid-column: 2/3;
}

.first-title {
    text-align: center;
    font-weight: 600;
    font-size: 36px;
    line-height: 48px;
    color: #212121;
    margin-top: 122px;
    margin-bottom: 10px;
}

.title-container-text {
    font-size: 14px;
    line-height: 26px;
    text-align: center;
    color: #9FA3A7;
    margin-bottom: 55px;
}

.main-container {
    grid-column: 2/3;
    grid-row: 2/3;
    display: grid;
    grid-template-columns: 1fr 1fr;
    box-sizing: border-box;
    border: 1px solid #E8E9ED;
    border-radius: 20px;
}

.freelancer-container,
.studio-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.studio-container {
    background: #8F75BE;
}

.main-text-left {
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    text-align: center;
    letter-spacing: 2.4px;
    color: #9FA3A7;
    margin-bottom: 19px;
    margin-top: 81px;
}

.main-text-right {
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 2.4px;
    text-align: center;
    color: #FFC80A;
    margin-bottom: 19px;
    margin-top: 81px;
}

.main-title {
    text-align: center;
    font-size: 36px;
    line-height: 46px;
    max-width: 230px;
    margin-bottom: 25px;
}

.studio-container > .main-title {
    color: #FFFFFF;
}

.freelancer-container > .title-container-text {
    max-width: 269px;
}

.studio-container > .title-container-text {
    max-width: 269px;
    color: #FFFFFF;
}

.main-link {
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    text-align: center;
    letter-spacing: 2.4px;
    color: #212121;
    text-decoration: none;
    padding: 20px 30px;
    border: 3px solid #FFC80A;
    border-radius: 35px;
    margin-bottom: 93.5px;
    cursor: pointer;
}

.studio-container > .main-link {
    color: #FFFFFF;
}
`

let title = document.createElement('title')
title.innerHTML = 'Call_to Action'
document.head.appendChild(title)

let fonts = document.createElement('link')
fonts.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Arvo:ital,wght@0,400;0,700;1,400;1,700&display=swap')
fonts.setAttribute('rel', 'stylesheet')
document.head.appendChild(fonts)

let site = document.createElement('div')
site.setAttribute('class', 'site')
document.body.appendChild(site)

let wrapper = document.createElement('div')
wrapper.setAttribute('class', 'wrapper')
site.appendChild(wrapper);

let titleContainer = document.createElement('div')
titleContainer.setAttribute('class', 'title-container')
wrapper.appendChild(titleContainer)

let mainContainer = document.createElement('div')
mainContainer.setAttribute('class', 'main-container')
wrapper.appendChild(mainContainer)

let firstTitle = document.createElement('h2')
firstTitle.innerHTML = 'Choose Your Option'
firstTitle.setAttribute('class', 'first-title')
titleContainer.appendChild(firstTitle)

let TitleContainerText = document.createElement('p')
TitleContainerText.setAttribute('class', 'title-container-text')
TitleContainerText.innerHTML ='But I must explain to you how all this mistaken idea of denouncing '
titleContainer.appendChild(TitleContainerText)

let freeContainer = document.createElement('div')
freeContainer.setAttribute('class', 'freelancer-container')
mainContainer.appendChild(freeContainer)

let studioContainer = document.createElement('div')
studioContainer.setAttribute('class', 'studio-container')
mainContainer.appendChild(studioContainer)

let mainTextLeft = document.createElement('p')
mainTextLeft.innerHTML = 'FREELANCER'
mainTextLeft.setAttribute('class', 'main-text-left')
freeContainer.appendChild(mainTextLeft)

let mainTextRight = document.createElement('p')
mainTextRight.innerHTML = 'STUDIO'
mainTextRight.setAttribute('class', 'main-text-right')
studioContainer.appendChild(mainTextRight)

let mainTitle = document.createElement('h2')
mainTitle.innerHTML = 'Initially designed to'
mainTitle.setAttribute('class', 'main-title')
freeContainer.appendChild(mainTitle)
let mainTitleClon = mainTitle.cloneNode(true)
studioContainer.appendChild(mainTitleClon)

let mainDescription = TitleContainerText.cloneNode(true)
let mainDescriptionClone = mainDescription.cloneNode(true)

freeContainer.appendChild(mainDescription)
studioContainer.appendChild(mainDescriptionClone)

let mainLink = document.createElement('a')
mainLink.setAttribute('href', '#')
mainLink.setAttribute('class', 'main-link')
mainLink.innerHTML = 'START HERE'
let mainLinkClone = mainLink.cloneNode(true)
freeContainer.appendChild(mainLink)
studioContainer.appendChild(mainLinkClone)

