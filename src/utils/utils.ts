const getActualDate = () => {
  const fechaActual = new Date()
  const dia = String(fechaActual.getDay()).padStart(2, '0')
  const mes = String(fechaActual.getMonth()).padStart(2, '0')
  const anno = fechaActual.getFullYear()
  const hora = String(fechaActual.getHours()).padStart(2, '0')
  const minutos = String(fechaActual.getMinutes()).padStart(2, '0')  
  
  return `${dia}/${mes}/${anno} ${hora}:${minutos}`
}

export { getActualDate };
