function wppLink() {
    numBalanca = parseInt(document.getElementById('qntItem1').textContent);
    numEspumador = parseInt(document.getElementById('qntItem2').textContent);
    numCafeteira = parseInt(document.getElementById('qntItem3').textContent);
    numCoador = parseInt(document.getElementById('qntItem4').textContent);
    numMoido = parseInt(document.getElementById('qntItem5').textContent);
    numGraos = parseInt(document.getElementById('qntItem6').textContent);

    textMoido = ''+numMoido+'+pacote(s)+de+caf%C3%A9+mo%C3%ADdo'
    textGraos = ''+numGraos+'+pacote(s)+de+caf%C3%A9+em+gr%C3%A3os'
    textBalanca = '' + numBalanca + '+balan%C3%A7a(s)';
    textEspumador = '' + numEspumador + '+espumador(es)';
    textCafeteira = '' + numCafeteira + '+cafeteira(s)';
    textCoador = '' + numCoador + '+coador(es)';

    produtos = [numMoido, numGraos, numBalanca, numEspumador, numCafeteira, numCoador];
    links = [textMoido, textGraos, textBalanca, textEspumador, textCafeteira, textCoador];
    linksEnviar = []

    for (index = 0; index < produtos.length; index++) {
        produtos[index]

        if (produtos[index] > 0) {
            linksEnviar.push(links[index])
        } else {
            links[index] = ''
        }
    }

    if (linksEnviar.length > 1) {
        let lastItem = linksEnviar.pop();
        let formattedText = linksEnviar.join(', ') + ' e ' + lastItem;
        url = "https://wa.me/559838777054?text=Ol%C3%A1,%20estou%20interessado%20em%20" + formattedText + '.';
    } else {

        url = "https://wa.me/559838777054?text=Ol%C3%A1,%20estou%20interessado%20em%20" + linksEnviar.join('%20') + '.';
    }


    window.open(url, '_blank');
}

function abrirRangerItems(id) {
    btnAbrir = document.getElementById('item-range'+ id)
    range = document.getElementById('range-item' + id)
    numRange = document.getElementById('numRangeItem' + id)

    btnAbrir.style.display = 'none'
    range.style.display = 'flex'
    setTimeout(() => {
        range.style.opacity = 1;
    }, 10);
    num = parseInt(numRange.textContent)
    num = 1
    numRange.textContent = num;

    atualizarTotalItems()
    atualizarLista(id)
}

function diminuirNumItems(id) {
    btnAbrir = document.getElementById('item-range' + id)
    range = document.getElementById('range-item' + id)
    numHtml = document.getElementById('numRangeItem' + id)

    num = parseInt(numHtml.textContent)
    num--
    numHtml.textContent = num;
    if (num == 0) {
        range.style.display = 'none'
        range.style.opacity = 0
        btnAbrir.style.display = 'flex'

        num = parseInt(numHtml.textContent)
        num = 0
        numHtml.textContent = num;
    }

    atualizarTotalItems()
    atualizarLista(id)
}

function aumentarNumItems(id) {
    btnAbrir = document.getElementById('item-range' + id)
    range = document.getElementById('range-item' + id)
    numHtml = document.getElementById('numRangeItem' + id)

    num = parseInt(numHtml.textContent)
    num++
    numHtml.textContent = num;

    atualizarTotalItems()
    atualizarLista(id)
}

function atualizarTotalItems() {
    numBalanca = parseInt(document.getElementById('numRangeItem1').textContent);
    numEspumador = parseInt(document.getElementById('numRangeItem2').textContent);
    numCafeteira = parseInt(document.getElementById('numRangeItem3').textContent);
    numCoador = parseInt(document.getElementById('numRangeItem4').textContent);
    numMoido = parseInt(document.getElementById('numRangeItem5').textContent);
    numGraos = parseInt(document.getElementById('numRangeItem6').textContent);
    
    carrinho = (numBalanca) + (numEspumador) + (numCafeteira) + (numCoador) + (numMoido) + (numGraos)
    carrinhoNum = document.getElementById('qntCarrinho')
    carrinhoNum.textContent = carrinho

    total = (numBalanca * acharPreco(1)) + (numEspumador * acharPreco(2)) + (numCafeteira * acharPreco(3)) + (numCoador * acharPreco(4)) + (numMoido * acharPreco(5)) + (numGraos * acharPreco(6));
    totalHtml = document.getElementById('totalItems');
    totalHtml.textContent = `R$ ${total.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

}

function acharPreco(id) {
    precoHtml = parseFloat(document.getElementById('precoItem' + id).textContent.replace('R$', '').replace(',', '.').trim());
    return precoHtml;
}

function atualizarLista(id) {
    numBalanca = parseInt(document.getElementById('numRangeItem' + id).textContent);

    numBalancaCarrinho = document.getElementById('qntItem' + id)
    numBalancaCarrinho.textContent = numBalanca

    shopRange = document.getElementById('shopRange' + id)

    if (numBalanca > 0) {
        shopRange.style.display = 'block'
    } else {
        shopRange.style.display = 'none'
    }
    

}

function acharQuantidade(id){
    num = parseInt(document.getElementById('numRangeItem' + id))
    return num
}

function mostrarCarrinho(){
    modal = document.getElementById('divItems')
    if (modal.style.display === '' || modal.style.display === 'none') { 
        modal.style.display = 'flex';
        setTimeout(() => {
            modal.style.opacity = 1;
        }, 10);
    } else {
        modal.style.display = 'none';
        modal.style.opacity = 0;
        
    }
}

