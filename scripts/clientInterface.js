const logOut = document.querySelector('#logOut')
const consultar = document.querySelector('#consultar')
const comprasBox = document.querySelector('.compras')

logOut.addEventListener('click', ()=>{
    location.href = '../index.html'
})


class compra {
    #producto
    #precio
    #fechaCompra
    #fechaEntrega
    constructor (producto, precio, fechaC, fechaE){
        this.#producto = producto
        this.#precio = precio
        this.#fechaCompra = fechaC 
        this.#fechaEntrega = fechaE
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
   
}

let compras = []

compras.push(new compra('Celular', 1000000,'2marzo', '10marzo'))
compras.push(new compra('Computador', 2000000,'5marzo', '15marzo'))
compras.push(new compra('Televisor', 5500000,'2marzo', '10marzo'))
compras.push(new compra('Escritorio', 185000,'5marzo', '15marzo'))
compras.push(new compra('Cable', 28000,'2marzo', '10marzo'))
compras.push(new compra('Teclado', 80000,'5marzo', '15marzo'))
compras.push(new compra('Audífonos', 220000,'2marzo', '10marzo'))
compras.push(new compra('Mouse', 50000,'5marzo', '15marzo'))
compras.push(new compra('Monitor', 450000,'2marzo', '10marzo'))
compras.push(new compra('Ventilador', 550000,'5marzo', '15marzo'))



consultar.addEventListener('click', ()=>{

    comprasBox.innerHTML = ""

    compras.forEach(compra=>{
        const cajaCompra = document.createElement('div')
        cajaCompra.classList.add('infoBox')

        const product = document.createElement('div')
        const price = document.createElement('div')
        const date = document.createElement('div')
        const deliverDate = document.createElement('div')

        product.textContent = compra.producto
        price.textContent = compra.precio
        date.textContent = compra.fechaCompra
        deliverDate.textContent = compra.fechaEntrega


        cajaCompra.appendChild(product)
        cajaCompra.appendChild(price)
        cajaCompra.appendChild(date)
        cajaCompra.appendChild(deliverDate)

        cajaCompra.childNodes.forEach(node=>{
            node.classList.add('data')
        })

        comprasBox.appendChild(cajaCompra)
    })
    
})