(()=>{"use strict";new class{constructor(t,i){this.menu=document.querySelector(t),this.menuList=document.querySelector(i),this.ativarMenu=this.ativarMenu.bind(this)}ativarMenu(){this.menuList.classList.toggle("ativo")}event(){this.menu.addEventListener("click",this.ativarMenu)}init(){return this.event(),this}}('[data-menu="botao"]',".menu-lista").init(),new class{constructor(t,i,e){this.principal=document.querySelector(t),this.thumbs=document.querySelectorAll(i),this.descricao=document.querySelectorAll(e),this.trocarImagem=this.trocarImagem.bind(this),this.trocarDescricao=this.trocarDescricao.bind(this)}trocarImagem(t,i){const e=t.getAttribute("src"),s=t.getAttribute("alt");this.principal.setAttribute("src",e),this.principal.setAttribute("alt",s),this.trocarDescricao(i)}trocarDescricao(t){this.descricao.forEach((t=>{t.classList.remove("ativo")})),this.descricao[t].classList.add("ativo")}event(){this.thumbs.forEach(((t,i)=>{t.addEventListener("click",(()=>this.trocarImagem(t,i)))}))}init(){return this.event(),this}}(".animal-destaque img",".animais-thumbs img",".animais-descricao section").init(),new class{constructor(t){this.dt=document.querySelectorAll(t)}ativarPergunta(){this.nextElementSibling.classList.toggle("ativo")}event(){this.dt.forEach((t=>{t.addEventListener("click",this.ativarPergunta)}))}init(){return this.event(),this}}(".perguntas dt").init(),new class{constructor(t){this.infoHorario=document.querySelector(t)}funcionamento(){this.horarios=this.infoHorario.dataset.horarios.split(",").map(Number),this.dias=this.infoHorario.dataset.dias.split(",").map(Number)}agora(){this.agora=new Date,this.horaAtual=this.agora.getHours(),this.diaAtual=this.agora.getDay()}status(){return this.horarioStatus=this.horaAtual>=this.horarios[0]&&this.horaAtual<=this.horarios[1],this.diaStatus=!!this.dias.includes(this.diaAtual),this.horarioStatus&&this.diaStatus}ativarStatus(){this.status()?this.infoHorario.classList.add("aberto"):this.infoHorario.classList.add("fechado")}init(){return this.funcionamento(),this.agora(),this.ativarStatus(),this}}(".horario").init(),new class{constructor(t,i,e){this.login=document.querySelector(t),this.modal=document.querySelector(i),this.botaoFechar=document.querySelector(e),this.toggleModal=this.toggleModal.bind(this),this.clickFora=this.clickFora.bind(this)}toggleModal(){this.modal.classList.toggle("ativo")}clickFora(t){t.target===this.modal&&this.toggleModal()}event(){this.login.addEventListener("click",this.toggleModal),this.botaoFechar.addEventListener("click",this.toggleModal),this.modal.addEventListener("click",this.clickFora)}init(){return this.event(),this}}('[data-modal="abrir"]','[data-modal="container"]','[data-modal="fechar"]').init(),new class{constructor(t){this.tooltip=document.querySelector(t),this.mouseEntrou=this.mouseEntrou.bind(this),this.mouseMoveu=this.mouseMoveu.bind(this),this.mouseSaiu=this.mouseSaiu.bind(this)}criarToolTipBox(t){const i=document.createElement("div"),e=t.getAttribute("aria-label");i.innerText=e,i.classList.add("tooltip"),document.body.appendChild(i),this.tooltipBox=i}mouseSaiu(t){this.tooltipBox.remove(),t.currentTarget.removeEventListener("mouseleave",this.mouseSaiu),t.currentTarget.removeEventListener("mousemove",this.mouseMoveu)}mouseMoveu(t){this.tooltipBox.style.top=`${t.pageY+20}px`,t.pageX+240>window.innerWidth?this.tooltipBox.style.left=t.pageX-200+"px":this.tooltipBox.style.left=`${t.pageX+20}px`}mouseEntrou(t){this.criarToolTipBox(t.currentTarget),t.currentTarget.addEventListener("mouseleave",this.mouseSaiu),t.currentTarget.addEventListener("mousemove",this.mouseMoveu)}event(){this.tooltip.addEventListener("mouseover",this.mouseEntrou)}init(){return this.event(),this}}("[data-tooltip]").init()})();