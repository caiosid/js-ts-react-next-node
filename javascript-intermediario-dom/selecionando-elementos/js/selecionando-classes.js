function executar() {
  const obj = document.querySelector("span");
  const classes = obj.classList;

  //console.log(classes)
  //console.log(classes.length)
  //console.log(classes.contains('vermelho'))
  //classes.add("texto");
  //classes.remove('laranja')
  //classes.toggle('laranja')
  //obj.className='texto'
  classes.forEach((item) => console.log(item));
}
