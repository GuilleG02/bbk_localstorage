
const userNameFORM = document.getElementById('name');
const userEmailFORM =document.getElementById('email');
const userMessageFORM =document.getElementById('message');
const userUrlImageFORM = document.getElementById('url_image');

const sendButton = document.getElementById('button');
const clearButton = document.getElementById('clearbutton');

function onSubmit(event) {
    event.preventDefault()
    const name = userNameFORM.value;
    const email = userEmailFORM.value;
    const message = userMessageFORM.value;
    const url_image = userUrlImageFORM.value;

    //Código para añadir solo un user

    // localStorage.setItem('name',name)
    // localStorage.setItem('email',email)
    // localStorage.setItem('message',message)
    // localStorage.setItem('url_image',url_image)

    // localStorage.setItem('user', JSON.stringify({
    //     name: name,
    //     email: email,
    //     message: message,
    //     url_image: url_image,
    // }))
    

    // console.log('hola')

    //Creamos Array vacia para introducir los users y enviar luego el Array al LocalHost
    const usersArray = [];

    console.log(usersArray)

    usersArray.push({
        name: name,
        email: email,
        message: message,
        url_image: url_image
    });

    localStorage.setItem('users', JSON.stringify(usersArray));

    console.log('Usuario guardado:', { name, email, message, url_image });



   }

   sendButton.addEventListener('click', onSubmit);

//Solo un 1 user
//    const userObject = JSON.parse(localStorage.getItem('user'))
//    console.log(userObject);

const usersList = JSON.parse(localStorage.getItem('users')) || [];
console.log('Usuarios guardados: ', usersList);


function clearLocalHost(event){
    event.preventDefault()
    localStorage.clear();
}

    clearButton.addEventListener('click', clearLocalHost);






