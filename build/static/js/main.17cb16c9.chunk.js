(this.webpackJsonpagro_ecuador=this.webpackJsonpagro_ecuador||[]).push([[0],{45:function(e,a,t){e.exports=t(73)},50:function(e,a,t){},51:function(e,a,t){},58:function(e,a,t){},59:function(e,a,t){},60:function(e,a,t){},61:function(e,a,t){},62:function(e,a,t){},63:function(e,a,t){},64:function(e,a,t){},65:function(e,a,t){},66:function(e,a,t){},67:function(e,a,t){},68:function(e,a,t){},69:function(e,a,t){},70:function(e,a,t){},71:function(e,a,t){},73:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(22),o=t.n(c),l=(t(50),t(17)),s=t(6),m=t(9),i=r.a.createContext(),u=i.Provider,d=i.Consumer,p=r.a.createContext(),E=p.Provider,b=p.Consumer,v=r.a.createContext(),f=v.Provider,h=v.Consumer,N=t(2),g=t(3),j=t(5),O=t(4),C=t(77),I=(t(51),r.a.forwardRef((function(e,a){var t=e.children,n=e.onClick;return r.a.createElement("a",{href:"/",ref:a,onClick:function(e){e.preventDefault(),n(e)}},t)}))),y=function(e){Object(j.a)(t,e);var a=Object(O.a)(t);function t(){return Object(N.a)(this,t),a.apply(this,arguments)}return Object(g.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(C.a,null,r.a.createElement(C.a.Toggle,{as:I,id:"dropdown-custom-components"},r.a.createElement("box-icon",{name:"user"})),r.a.createElement(C.a.Toggle,{as:I,id:"InicioSesion"},r.a.createElement(s.b,{to:"/registro"},"Crear cuenta")),r.a.createElement(C.a.Toggle,{as:I,id:"Cuenta"},r.a.createElement(s.b,{to:"/micuenta"},"Mi cuenta"))))}}]),t}(n.Component),P=(t(58),r.a.forwardRef((function(e,a){var t=e.children,n=e.onClick;return r.a.createElement("a",{href:"/",ref:a,onClick:function(e){e.preventDefault(),n(e)}},t)}))),x=r.a.forwardRef((function(e,a){var t=e.children,c=e.style,o=e.className,s=e["aria-labelledby"],m=Object(n.useState)(""),i=Object(l.a)(m,1)[0];return r.a.createElement("div",{ref:a,style:c,className:o,"aria-labelledby":s},r.a.createElement("ul",{className:"list-unstyled"},r.a.Children.toArray(t).filter((function(e){return!i||e.props.children.toLowerCase().startsWith(i)}))))})),F=function(e){Object(j.a)(t,e);var a=Object(O.a)(t);function t(){return Object(N.a)(this,t),a.apply(this,arguments)}return Object(g.a)(t,[{key:"render",value:function(){return r.a.createElement(C.a,null,r.a.createElement(C.a.Toggle,{as:P,id:"dropdown-custom-components"},r.a.createElement("box-icon",{name:"menu"})),r.a.createElement(C.a.Menu,{as:x},r.a.createElement(C.a.Item,{eventKey:"1"},r.a.createElement(s.b,{to:"/micuenta"},r.a.createElement(y,null))),r.a.createElement("hr",null),r.a.createElement(C.a.Item,{eventKey:"2"},r.a.createElement(s.b,{to:"/buscador"},"Inicio")),r.a.createElement(C.a.Item,{eventKey:"3"},r.a.createElement(s.b,{to:"/about"},"Sobre nosotros")),r.a.createElement(C.a.Item,{eventKey:"4"},r.a.createElement(s.b,{to:"/contacto"},"Contacto"))))}}]),t}(n.Component),k=(t(59),function(e){Object(j.a)(t,e);var a=Object(O.a)(t);function t(e){var n;return Object(N.a)(this,t),(n=a.call(this,e)).state={},n}return Object(g.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App-header"},r.a.createElement("div",{className:"header_menu_drch"},r.a.createElement("ul",{className:"Lista_nav"},r.a.createElement("li",null,r.a.createElement(F,null)))),r.a.createElement("div",{className:"header_menu_izq"},r.a.createElement("ul",{className:"Lista_nav"},r.a.createElement(C.a,null,r.a.createElement("div",{className:"div_items"},r.a.createElement("li",null,r.a.createElement(s.b,{to:"/resumen",className:"link"},r.a.createElement("box-icon",{name:"cart-alt",size:"sm"}))))))))}}]),t}(n.Component)),A=(t(60),function(e){Object(j.a)(t,e);var a=Object(O.a)(t);function t(e){var n;return Object(N.a)(this,t),(n=a.call(this,e)).state={param1:"Consumidor",param2:"Productor"},n}return Object(g.a)(t,[{key:"render",value:function(){return r.a.createElement("article",null,r.a.createElement("div",{className:"Welcome"},r.a.createElement("div",{className:"imgWel"},r.a.createElement("img",{src:"/media/registroApp.jpg",alt:"foto",className:"imgPrincipal"})),r.a.createElement("div",{className:"Registro"},r.a.createElement("h2",{className:"welcomeMess"},"Reg\xedstrate en Farm Space"),r.a.createElement("h3",{className:"subWelcome"},"Ind\xedcanos tu perfil"),r.a.createElement("div",{className:"Prod"},r.a.createElement("img",{src:"/media/replant.png",alt:"productor",className:"imgProd"}),r.a.createElement(s.b,{to:"/iniciosesion/"+this.state.param2,className:"btnProd"},"\xbfVendes?")),r.a.createElement("div",{className:"Consum"},r.a.createElement("img",{src:"/media/organic-bag.png",alt:"consumidor",className:"imgConsum"}),r.a.createElement(s.b,{to:"/iniciosesion/"+this.state.param1,className:"btnConsum"},"\xbfCompras?")))))}}]),t}(n.Component)),D=Object(m.f)(A),_=t(25),w=t(15),S=function(e){Object(j.a)(t,e);var a=Object(O.a)(t);function t(e){var n;return Object(N.a)(this,t),(n=a.call(this,e)).state={},n}return Object(g.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:this.props.claseDiv},r.a.createElement("form",{className:this.props.claseForm},r.a.createElement("img",{className:this.props.classImage,src:this.props.src,alt:this.props.alt}),r.a.createElement("div",{className:this.props.divInput},r.a.createElement("input",{className:this.props.classInput,type:this.props.type,name:this.props.name,placeholder:this.props.placeholder,onChange:this.props.funcion,min:"0",max:"3",step:"1"}))))}}]),t}(n.Component),R=(t(61),function(e){Object(j.a)(t,e);var a=Object(O.a)(t);function t(e){var n;return Object(N.a)(this,t),(n=a.call(this,e)).mostrarProductor=function(){if("Productor"===n.state.parametro)return r.a.createElement("article",{className:"articlePerfil"},r.a.createElement("h2",{className:"tituloPerfil"},"Ingresa tus datos"),r.a.createElement("h5",{className:"rol"},"Rol como ",n.state.parametro),r.a.createElement(S,{claseDiv:"nombreDiv",claseForm:"form",divInput:"dNombreInput",classInput:"nombreInput",type:"text",name:"usuario",placeholder:"Nombre comercial",funcion:n.cambiarEstado.bind(Object(w.a)(n))}),r.a.createElement(S,{claseDiv:"emailProd",claseForm:"form",divInput:"dEmailInput",classInput:"emailInput",type:"email",name:"email",placeholder:"Email",funcion:n.cambiarEstado.bind(Object(w.a)(n))}),r.a.createElement(S,{claseDiv:"passwordProd",claseForm:"form",cassP:"passProd",p:"Contrase\xf1a",divInput:"dPassInput",classInput:"passInput",type:"password",name:"password",placeholder:"Contrase\xf1a",funcion:n.cambiarEstado.bind(Object(w.a)(n))}),r.a.createElement(s.b,{to:"/infoproductor",className:"masInfo"},r.a.createElement("p",{className:"masInfoPerfil"},"A\xf1adir m\xe1s informaci\xf3n")))},n.mostrarConsumidor=function(){if("Consumidor"===n.state.parametro)return r.a.createElement("article",{className:"articlePerfil"},r.a.createElement("h2",{className:"tituloPerfil"},"Ingrese sus datos"),r.a.createElement("h4",{className:"rol"}," Rol como ",n.state.parametro),r.a.createElement(S,{claseDiv:"nameUser",claseForm:"form",divInput:"dNombreInput",classInput:"nombreInput",type:"text",name:"usuario",placeholder:"Nombre de usuario",funcion:n.cambiarEstado.bind(Object(w.a)(n))}),r.a.createElement(S,{claseDiv:"emailUser",claseForm:"form",divInput:"dEmailInput",classInput:"emailInput",type:"email",name:"email",placeholder:"Email",funcion:n.cambiarEstado.bind(Object(w.a)(n))}),r.a.createElement(S,{claseDiv:"passwordUser",claseForm:"form",divInput:"dPassInput",classInput:"passInput",type:"password",name:"password",placeholder:"Contrase\xf1a",funcion:n.cambiarEstado.bind(Object(w.a)(n))}),r.a.createElement(s.b,{to:"/infoconsumidor",className:"masInfo"},r.a.createElement("p",{className:"masInfoPerfil"},"A\xf1adir m\xe1s informaci\xf3n")))},n.state={parametro:n.props.match.params.value,email:"",usuario:"",password:""},n.mostrarProductor=n.mostrarProductor.bind(Object(w.a)(n)),n.mostrarConsumidor=n.mostrarConsumidor.bind(Object(w.a)(n)),n}return Object(g.a)(t,[{key:"guardarContexto",value:function(e){e({userType:this.state.parametro,userName:this.state.usuario,email:this.state.email,password:this.state.password})}},{key:"cambiarEstado",value:function(e){this.setState(Object(_.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=this;return r.a.createElement(d,null,(function(a){return r.a.createElement("div",null,r.a.createElement("div",{className:"divEntrada"},e.mostrarProductor(),e.mostrarConsumidor(),r.a.createElement("div",{className:"submitForm"},r.a.createElement(s.b,{to:"/buscador"},r.a.createElement("button",{onClick:function(){return e.guardarContexto(a.metodo)},className:"btnCrear"},"Crear cuenta"))),r.a.createElement(s.b,{to:"/buscador",className:"irInicio"},"Ir al inicio")))}))}}]),t}(n.Component)),z=(t(62),function(e){Object(j.a)(t,e);var a=Object(O.a)(t);function t(){return Object(N.a)(this,t),a.apply(this,arguments)}return Object(g.a)(t,[{key:"render",value:function(){return r.a.createElement("article",null,r.a.createElement("div",{className:"fondoProductor"}),r.a.createElement("div",{className:"divInformacion"},r.a.createElement("h2",{className:"tituloPerfil"},"Complete su informacion"),r.a.createElement("h3",{className:"rol"},"Rellene los campos"),r.a.createElement(S,{claseDiv:"nombreDiv",claseForm:"form",divInput:"dNombreInput",classInput:"nombreInput",type:"text",name:"nombre",placeholder:"Introduzca su nombre"}),r.a.createElement(S,{claseDiv:"nombreDiv",claseForm:"form",divInput:"dApellidoInput",classInput:"apellidoInput",type:"text",name:"apellido",placeholder:"Introduzca sus apellidos"}),r.a.createElement(S,{claseDiv:"rzDiv",claseForm:"form",divInput:"drazonInput",classInput:"rzInput",type:"text",name:"razon social",placeholder:"Introduzca la raz\xf3n social"}),r.a.createElement(S,{claseDiv:"nComercial",claseForm:"form",divInput:"dComercialInput",classInput:"ncInput",type:"text",name:"nombre comercial",placeholder:"Introduzca su nombre comercial"}),r.a.createElement(S,{claseDiv:"cdCiiu",classForm:"form",divInput:"dActividadInput",classInput:"cdInput",type:"text",name:"codigo ciiu",placeholder:"Introduzca su c\xf3digo CIIU"}),r.a.createElement(S,{claseDiv:"cntStock",claseForm:"form",divInput:"dCantidadInput",classInput:"cantidadStock",type:"number",name:"Stock",placeholder:"Stock disponible"}),r.a.createElement(S,{claseDiv:"precioProd",claseForm:"form",divInput:"dPrecioInput",classInput:"precioProducto",type:"number",name:"precioProducto",placeholder:"Introduzca el precio de su producto"})))}}]),t}(n.Component)),M=function(e){Object(j.a)(t,e);var a=Object(O.a)(t);function t(){return Object(N.a)(this,t),a.apply(this,arguments)}return Object(g.a)(t,[{key:"render",value:function(){return r.a.createElement(d,null,(function(e){return r.a.createElement("article",null,r.a.createElement("h3",null,"Mi perfil"),r.a.createElement("div",{className:"contenedorPerfil"},r.a.createElement("div",{className:"imagen"},r.a.createElement("box-icon",{name:"user-circle",size:"lg"})),r.a.createElement("div",{className:"editar"},r.a.createElement(s.b,{to:"/editar"},r.a.createElement("button",null,"Edita tu perfil"))),r.a.createElement("hr",null),r.a.createElement("div",{className:"informacion"},r.a.createElement("div",{className:"infoNombre"},r.a.createElement("h4",{className:"nombre"},e.contexto.userName)),r.a.createElement("div",{className:"infoCiudad"},r.a.createElement("span",{className:"ciudad"},"Cumbaya"),",",r.a.createElement("span",{className:"provincia"},"Pichincha")),r.a.createElement("div",{className:"masInfo"},r.a.createElement("a",{href:"/infoconsumidor"},"A\xf1ade m\xe1s informacion sobre ti"))),r.a.createElement("hr",null)),r.a.createElement("div",{className:"cerrar"},r.a.createElement(s.b,{to:"/cerrar"}),r.a.createElement("button",null,"Cerrar Sesion")))}))}}]),t}(n.Component),B=function(e){Object(j.a)(t,e);var a=Object(O.a)(t);function t(){return Object(N.a)(this,t),a.apply(this,arguments)}return Object(g.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h4",null,"Edita tu perfil"),r.a.createElement(S,{claseDiv:"nameUser",claseForm:"form",classP:"nameParrafo",p:"Nombre de usuario",classInput:"nameInput",type:"text",name:"usuario",placeholder:"Nombre de usuario"}))}}]),t}(n.Component),T=(t(63),function(e){Object(j.a)(t,e);var a=Object(O.a)(t);function t(){return Object(N.a)(this,t),a.apply(this,arguments)}return Object(g.a)(t,[{key:"render",value:function(){return r.a.createElement("article",null,r.a.createElement("div",{className:"Welcome"},r.a.createElement("div",{className:"imgWel"},r.a.createElement("img",{src:"/media/image1.png",alt:"foto",className:"imgPrincipal"}))),r.a.createElement("div",{className:"RegistroWelcome"},r.a.createElement("h2",{className:"welcomeMess"},"Bienvenido a Farm Space"),r.a.createElement("h3",{className:"subWelcome"},"Ingresa a tu cuenta"),r.a.createElement(S,{claseDiv:"emailUserReg",claseForm:"formReg",divInput:"dEmailReg",classInput:"emailInputReg",type:"email",name:"email",placeholder:"Email"}),r.a.createElement(S,{claseDiv:"passwordUserReg",claseForm:"formReg",divInput:"dPassReg",classInput:"passInputReg",type:"password",name:"password",placeholder:"Contrase\xf1a"}),r.a.createElement("div",{className:"dIngresoCuenta"},r.a.createElement("button",{className:"btnIngreso"},"Ingreso")),r.a.createElement("div",{className:"dOlvidarCuenta"},r.a.createElement("p",{className:"olvidoCuenta"},"\xbfOlvidaste tu contrase\xf1a?")),r.a.createElement("div",{className:"dEnlaceCrearCuenta"},r.a.createElement("p",{className:"registrarCuenta"},"\xbfNo tienes una cuenta?",r.a.createElement(s.b,{to:"/registro",className:"linkRegistro"},"Reg\xedstrate")))))}}]),t}(n.Component)),W=(t(64),function(e){Object(j.a)(t,e);var a=Object(O.a)(t);function t(e){var n;return Object(N.a)(this,t),(n=a.call(this,e)).cambiarEstado=function(e){n.setState({input:e.target.value}),console.log(n.state.input)},n.state={recomendacion:[],errormessange:"",input:""},n}return Object(g.a)(t,[{key:"render",value:function(){return r.a.createElement("article",null,r.a.createElement("div",{className:"containerBuscador"},r.a.createElement("div",{className:"divFormBusca"},r.a.createElement("form",{className:"formulario_busqueda"},r.a.createElement("div",{className:"buscador_principal"},r.a.createElement("label",{htmlFor:"busquedaArticulos",className:"etq_busca_articulo"},r.a.createElement("div",{className:"caja_buscador"},r.a.createElement("div",null,r.a.createElement("input",{className:"input_buscador","aria-autocomplete":"list",autoComplete:"off",autoCorrect:"off",spellCheck:"false",id:"bigsearch",name:"buscador",placeholder:"Busca tus productos",required:"",onChange:this.cambiarEstado})),r.a.createElement("div",{className:"btn_buscador"},r.a.createElement(s.b,{to:"/articulos/"+this.state.input},r.a.createElement("box-icon",{name:"search",size:"sm"})))))),this.state.errormessage?r.a.createElement("p",null,this.state.errormessage):"")),r.a.createElement("div",{className:"divRecomendacion"})))}}]),t}(n.Component)),U=(t(65),function(e){Object(j.a)(t,e);var a=Object(O.a)(t);function t(e){var n;return Object(N.a)(this,t),(n=a.call(this,e)).mostrarImagenes=function(){return"CACAO"===n.state.url?("/media/FotoAlimentos/cacao.jpg"!==n.state.img&&n.setState({img:"/media/FotoAlimentos/cacao.jpg"}),r.a.createElement("div",{className:"imagenes"},"l",r.a.createElement("img",{src:"/media/FotoAlimentos/cacao.jpg",className:"imgProductos",alt:"productos"}))):"NARANJAS"===n.state.url?("/media/FotoAlimentos/Naranjas.jpeg"!==n.state.img&&n.setState({img:"/media/FotoAlimentos/Naranjas.jpeg"}),r.a.createElement("div",{className:"imagenes"},r.a.createElement("img",{src:"/media/FotoAlimentos/Naranjas.jpeg",className:"imgProductos",alt:"productos"}))):"PAPA"===n.state.url?("/media/FotoAlimentos/papas.jpg"!==n.state.img&&n.setState({img:"/media/FotoAlimentos/papas.jpg"}),r.a.createElement("div",{className:"imagenes"},r.a.createElement("img",{src:"/media/FotoAlimentos/papas.jpg",className:"imgProductos",alt:"productos"}))):void 0},n.state={nombreComercial:n.props.datos.razonSocial,nombre:n.props.datos.Producto,precios:n.props.datos.PrecioProducto,canton:n.props.datos.DescripcionCanton,cantidad:1,url:n.props.parametro,img:""},n}return Object(g.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(h,null,(function(a){return r.a.createElement("article",null,r.a.createElement("div",{className:"body_articulo"},r.a.createElement("div",{className:"container_art"},r.a.createElement("div",{className:"nombreProductor"},r.a.createElement("p",{className:"productor"},e.state.nombreComercial)),e.mostrarImagenes(),r.a.createElement("hr",null),r.a.createElement("div",{className:"productos"},r.a.createElement("h3",{className:"precios"},"$",e.state.precios),r.a.createElement("h2",{className:"nombre"},e.state.nombre),r.a.createElement("div",{className:"direccion"},r.a.createElement(s.b,{to:"/ubicacion"},r.a.createElement("box-icon",{name:"map",size:"xs"}),r.a.createElement("p",{className:"canton"},e.state.canton)))),r.a.createElement("div",{className:"separacion"}),r.a.createElement("div",{className:"btnProductos"},r.a.createElement(s.b,{to:"/pedidos"},r.a.createElement("img",{src:"/media/ShoppingBag.svg",alt:"shopping cart"}),r.a.createElement("button",{className:"agregar",onClick:function(){return a.metodo(e.state)}},"A\xd1ADIR"))))))}))}}]),t}(n.Component)),q=(t(66),function(e){Object(j.a)(t,e);var a=Object(O.a)(t);function t(e){var n;return Object(N.a)(this,t),(n=a.call(this,e)).state={productos:[],params:n.props.input},n}return Object(g.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("http://localhost:3000/buscarProducto/CULTIVO DE ".concat(this.props.match.params.producto,".")).then((function(e){return e.json()})).then((function(a){return e.setState({productos:a})}))}},{key:"render",value:function(){var e=this;return r.a.createElement("section",null,r.a.createElement("div",{className:"seccion"},this.state.productos.map((function(a){return r.a.createElement(U,{datos:a,parametro:e.props.match.params.producto,key:a.id})}))))}}]),t}(n.Component)),L=t(42),V=t(20),$=(t(67),function(e){Object(j.a)(t,e);var a=Object(O.a)(t);function t(e){var n;return Object(N.a)(this,t),(n=a.call(this,e)).state={},n}return Object(g.a)(t,[{key:"render",value:function(){return r.a.createElement(b,null,(function(e){return r.a.createElement(h,null,(function(a){return r.a.createElement("article",null,r.a.createElement("div",{className:"containerCompra"},r.a.createElement("div",{className:"headCompra"},r.a.createElement("div",{className:"logosHead"},r.a.createElement(s.b,{to:"/articulos/Maiz"},r.a.createElement("img",{src:"/media/flecha.svg",alt:"Flecha izquierda",className:"flecha"})),r.a.createElement("button",{className:"btnMeGusta"},r.a.createElement("img",{src:"/media/love.svg",alt:"Me gusta",className:"meGusta"}))),r.a.createElement("div",{className:"carritoImg"},r.a.createElement("img",{className:"imgProductoCarrito",src:a.contexto.img,alt:"producto"}))),r.a.createElement("div",{className:"bodyCompra"},r.a.createElement("div",{className:"compra_info"},r.a.createElement("div",{className:"compra_info_precio"},r.a.createElement("span",{className:"precio"},"$",a.contexto.precios,"/"),r.a.createElement("span",{className:"cantidad"},"kilo")),r.a.createElement("div",{className:"compra_info_nombre"},r.a.createElement("a",{href:"/pedidos",className:"nombre_pedido"},a.contexto.nombre))),r.a.createElement("div",{className:"linea_accion_compra"},r.a.createElement("button",{className:"menos",onClick:function(){return a.metodo(Object(V.a)(Object(V.a)({},a.contexto),{},{cantidad:a.contexto.cantidad-1}))}},r.a.createElement("img",{src:"/media/Group2.svg",alt:"Boton menos",className:"btnMenos"})),r.a.createElement("div",{className:"cantidad_input"},r.a.createElement("input",{className:"cantidad_compra",type:"text",value:a.contexto.cantidad,name:"cantidad_producto",min:"1",max:"9"})),r.a.createElement("button",{className:"mas",onClick:function(){return a.metodo(Object(V.a)(Object(V.a)({},a.contexto),{},{cantidad:a.contexto.cantidad+1}))}},r.a.createElement("img",{src:"/media/Group.svg",alt:"Boton m\xe1s",className:"btnMas"})),r.a.createElement("div",{className:"compra_final"},r.a.createElement("button",{className:"btnAddToCart",onClick:function(){return e.metodo([].concat(Object(L.a)(e.contexto),[a.contexto]))}},"A\xf1adir producto"))))))}))}))}}]),t}(n.Component));t(68);var G=function(){return r.a.createElement(b,null,(function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"mensajeCompra"},e.contexto.map((function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"infoCompraFinal"},r.a.createElement("div",null,r.a.createElement("img",{src:e.img,alt:e.img,className:"imgCompraFinal"})),r.a.createElement("div",{className:"tituloCompraFinal"},r.a.createElement("h5",{className:"productoCompraFinal"},e.nombre)),r.a.createElement("div",{className:"dPrecioCompraFinal"},r.a.createElement("h5",{className:"precioCompraFinal"},"PRECIO"),r.a.createElement("p",{className:"money"},"$ ",e.precios))),r.a.createElement("div",{className:"subtotalCompraFinal"},r.a.createElement("h3",{className:"subtotalCompraFinal"},"SUBTOTAL"),r.a.createElement("p",null,"$ ",parseInt(e.cantidad)+parseFloat(e.precios))),r.a.createElement("button",{className:"vaciar"},"Vaciar Carrito"))})),r.a.createElement("button",{className:"btnInicio"},"Ir a inicio")))}))},K=function(e){Object(j.a)(t,e);var a=Object(O.a)(t);function t(){return Object(N.a)(this,t),a.apply(this,arguments)}return Object(g.a)(t,[{key:"render",value:function(){return r.a.createElement(d,null,(function(e){return r.a.createElement("article",null,r.a.createElement("div",{className:"Contacto"},r.a.createElement("h3",null,"Hola",r.a.createElement("span",{className:""},e.contexto.userName),"\xbfen qu\xe9 podemos ayudarte?"),r.a.createElement("p",null,"Por favor, elige la mejor opci\xf3n"),r.a.createElement("div",{className:"Prod"},r.a.createElement(s.b,{to:"/clienteprod"},"Contacto para productores")),r.a.createElement("div",{className:"Consume"},r.a.createElement(s.b,{to:"/clientecons"},"Contacto para consumidores"))))}))}}]),t}(n.Component),J=function(e){Object(j.a)(t,e);var a=Object(O.a)(t);function t(){return Object(N.a)(this,t),a.apply(this,arguments)}return Object(g.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null)}}]),t}(n.Component),H=function(e){Object(j.a)(t,e);var a=Object(O.a)(t);function t(){return Object(N.a)(this,t),a.apply(this,arguments)}return Object(g.a)(t,[{key:"render",value:function(){return r.a.createElement("article",null,r.a.createElement("h3",null,"Escr\xedbenos tus dudas"),r.a.createElement(S,{claseDiv:"nameContact",claseForm:"form",classP:"nameParrafo",p:"Nombre",classInput:"nameInput",type:"text",name:"usuario",placeholder:"Nombre"}),r.a.createElement(S,{claseDiv:"emailContact",claseForm:"form",classP:"emailParrafo",p:"Email",classInput:"emailInput",type:"email",name:"email",placeholder:"Email"}),r.a.createElement(S,{claseDiv:"comentarioContact",claseForm:"form",classP:"comentarioParrafo",p:"Deje sus comentarios",classInput:"comentarioInput",type:"textarea",name:"comentarios",placeholder:"Escriba aqu\xed"}),r.a.createElement("div",{className:"envioContact"},r.a.createElement("input",{type:"submit",value:"Env\xede sus comentarios "})))}}]),t}(n.Component),Q=function(e){Object(j.a)(t,e);var a=Object(O.a)(t);function t(){return Object(N.a)(this,t),a.apply(this,arguments)}return Object(g.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Sobre nosotros"))}}]),t}(n.Component),X=(t(69),function(e){Object(j.a)(t,e);var a=Object(O.a)(t);function t(){return Object(N.a)(this,t),a.apply(this,arguments)}return Object(g.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"fondo"},r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:"/",component:T}),r.a.createElement(m.a,{exact:!0,path:"/registro",component:D}),r.a.createElement(m.a,{exact:!0,path:"/iniciosesion/:value",component:R}),r.a.createElement(m.a,{exact:!0,path:"/infoproductor",component:z}),r.a.createElement(m.a,{exact:!0,path:"/micuenta",component:M}),r.a.createElement(m.a,{exact:!0,path:"/editar",component:B}),r.a.createElement(m.a,{exact:!0,path:"/buscador",component:W}),r.a.createElement(m.a,{exact:!0,path:"/articulos/:producto",component:q}),r.a.createElement(m.a,{exact:!0,path:"/resumen",component:G}),r.a.createElement(m.a,{exact:!0,path:"/pedidos",component:$}),r.a.createElement(m.a,{exact:!0,path:"/contacto",component:K}),r.a.createElement(m.a,{exact:!0,path:"/clienteprod",component:J}),r.a.createElement(m.a,{exact:!0,path:"/clientecons",component:H}),r.a.createElement(m.a,{excat:!0,path:"/about",component:Q})))}}]),t}(n.Component)),Y=(t(70),function(e){Object(j.a)(t,e);var a=Object(O.a)(t);function t(){return Object(N.a)(this,t),a.apply(this,arguments)}return Object(g.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("div",{className:"logosFooter"},r.a.createElement("box-icon",{type:"logo",name:"facebook-circle"}),r.a.createElement("box-icon",{name:"instagram",type:"logo"})),r.a.createElement("div",{className:"enlacesFooter"},r.a.createElement("a",{href:"/",className:"enlaceFoot"},"Aviso legal"),r.a.createElement("a",{href:"/",className:"enlaceFoot"},"Pol\xedtica de condicones"))))}}]),t}(n.Component)),Z=(t(71),t(72),function(e){Object(j.a)(t,e);var a=Object(O.a)(t);function t(){return Object(N.a)(this,t),a.apply(this,arguments)}return Object(g.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"imgCargando"},r.a.createElement("img",{src:"/media/Splash.svg",alt:"Logo empresa"})))}}]),t}(n.Component));var ee=function(){var e=Object(n.useState)({userType:"",isLoggedIn:!1,userName:"",email:"",password:""}),a=Object(l.a)(e,2),t=a[0],c=a[1],o=Object(n.useState)([{id:"2",productor:"Finca Valpara\xedso",img:"/media/68.jpg",nombre:"Maiz",precios:"1.1",direccion:"C// MEDARDO SILVA",canton:"Quito",cantidad:1}]),i=Object(l.a)(o,2),d=i[0],p=i[1],b=Object(n.useState)(""),v=Object(l.a)(b,2),h=v[0],N=v[1];return r.a.createElement("div",{className:"App"},r.a.createElement(E,{value:{contexto:d,metodo:p}},r.a.createElement(f,{value:{contexto:h,metodo:N}},r.a.createElement(u,{value:{contexto:t,metodo:c}},r.a.createElement(n.Suspense,{fallback:r.a.createElement(Z,null)},r.a.createElement(s.a,null,r.a.createElement("header",null,r.a.createElement(m.c,null,r.a.createElement(k,null))),r.a.createElement("main",null,r.a.createElement(m.c,null,r.a.createElement(X,null))),r.a.createElement("footer",null,r.a.createElement(Y,null))))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ee,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[45,1,2]]]);
//# sourceMappingURL=main.17cb16c9.chunk.js.map