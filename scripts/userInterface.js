const logOut = document.querySelector('#logOut')
const enviosBox = document.querySelector('.envios')


logOut.addEventListener('click', ()=>{
    location.href = '../index.html'
})

class compra {
    #producto
    #precio
    #fechaCompra
    #fechaEntrega
    #direccion
    constructor (producto, precio, fechaC, fechaE, direccion){
        this.#producto = producto
        this.#precio = precio
        this.#fechaCompra = fechaC 
        this.#fechaEntrega = fechaE
        this.#direccion = direccion
    }

    get producto () {
        return this.#producto
    }
    set producto (newP) {
        this.#producto = newP
    }

    get precio () {
        return this.#precio
    }
    set precio (newP) {
        this.#precio = newP
    }

    get fechaCompra () {
        return this.#fechaCompra
    }

    get fechaEntrega () {
        return this.#fechaEntrega
    }

    get direccion () {
        return this.#direccion
    }
   
}

let compras = []

compras.push(new compra('Celular', 1000000,'2marzo', 'Calle 10 # 5-51'))
compras.push(new compra('Computador', 2000000,'5marzo', 'Avenida 19 No. 98-03, sexto piso'))
compras.push(new compra('Televisor', 5500000,'2marzo', 'Calle 53 No 10-60/46, Piso 2'))
compras.push(new compra('Escritorio', 185000,'5marzo', 'Calle 10 # 5-51'))
compras.push(new compra('Cable', 28000,'2marzo', 'Calle 9 # 9 – 62'))
compras.push(new compra('Teclado', 80000,'5marzo', 'Calle 19 # 80A-40'))
compras.push(new compra('Audífonos', 220000,'2marzo', 'Carrera 21 # 17 -63'))
compras.push(new compra('Mouse', 50000,'5marzo', 'Carrera 42 # 54-77 '))
compras.push(new compra('Monitor', 450000,'2marzo', 'Calle 100 # 11B-27'))
compras.push(new compra('Ventilador', 550000,'5marzo', 'Carrera 20 B # 29-18'))



consultar.addEventListener('click', ()=>{

    enviosBox.innerHTML = ""

    compras.forEach(compra=>{
        const cajaCompra = document.createElement('div')
        cajaCompra.classList.add('infoBox')

        const delivInfo = document.createElement('div')

        const product = document.createElement('div')
        const price = document.createElement('div')
        const date = document.createElement('div')
        const deliverDate = document.createElement('div')

        const rutas = document.createElement('button')
        const Rproblem = document.createElement('button')
        const Rentrega = document.createElement('button')
        rutas.classList.add('actionB')
        Rproblem.classList.add('actionB')
        Rentrega.classList.add('actionB')

        product.textContent = compra.producto
        price.textContent = compra.precio
        date.textContent = compra.fechaCompra
        deliverDate.textContent = compra.fechaEntrega


        delivInfo.appendChild(product)
        delivInfo.appendChild(price)
        delivInfo.appendChild(date)
        delivInfo.appendChild(deliverDate)
        rutas.textContent = 'Rutas'
        Rproblem.textContent = 'Reportar Problema'
        Rentrega.textContent = 'Reportar Entrega'

        delivInfo.childNodes.forEach(node=>{
            node.classList.add('data2')
        })
        delivInfo.classList.add('compraInfo')

        cajaCompra.appendChild(delivInfo)

        cajaCompra.appendChild(rutas)
        cajaCompra.appendChild(Rproblem)
        cajaCompra.appendChild(Rentrega)




        

        enviosBox.appendChild(cajaCompra)
    })
    
})