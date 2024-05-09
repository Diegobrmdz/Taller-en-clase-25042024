function getInfo() {
    let charId = document.getElementById("charCapture").value
    let url = `https://jsonplaceholder.typicode.com/post
    /${charId}`

    console.log(charId)
    console.log(url)
    fetch(url)
        .then(res => res.json())
        .then( data => {

            console.log(data)
            let html = ` <div class="card mb-3" style="max-width: 540px;">
                            <div class="row g-0">
                                <div class="col-md-10">
                                    <div class="card-body">
                                        <h1 class="card-title"> 
                                        "Clasificación" ${data.userId} 
                                        </h1>
                                        <p class="card-text"> 
                                            ${data.id} 
                                        </p>
                                        <h2 class="card-title"> 
                                          FRASE  ${data.title}
                                        </h2>
                                        <p class="card-text">
                                            <small class="text-body-secondary">
                                             ${data.body} 
                                            </small>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>`

            document.getElementById("charContent").innerHTML = html

        })


   

     


}




