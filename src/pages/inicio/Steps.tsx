import pasos_inscripcion_someel from './../../assets/images/banner/pasos_inscripcion_someel.png'

const Steps = () => {
  return (
    <div className="py-3 2xl:py-8 px-12 rounded-xl bg-seccion mb-6 flex flex-row relative overflow-hidden justify-center 2xl:justify-start gap-4">
      <div className='flex flex-col justify-center'>
        <h3 className="color-primary font-medium mb-2 text-xl">¿Cómo empiezo?</h3>
        <h2 className="title-seccion mb-5">Estás a 4 pasos de transformar tu hábito de lectura con Someel:</h2>
        <ul>
          <li className="flex text-white mb-4 items-center">
            <div className="bg-white rounded-lg lg:rounded-xl w-10 h-10 flex justify-center items-center font-bold color-secundary text-xl">1</div>
            <div className="ml-2 w-[90%]">
              <h4 className="font-medium text-xl">Selecciona tu compañero</h4>
              <p className="text-[12px]">Elige a un lector de nuestra lista según tus intereses y preferencias.</p>
            </div>
          </li>
          <li className="flex text-white mb-4 items-center">
            <div className="bg-white rounded-xl w-10 h-10 flex justify-center items-center font-bold color-secundary text-xl">2</div>
            <div className="ml-2 w-[90%]">
            <h4 className="font-medium text-xl">Escoge tu horario</h4>
              <p>Elige el día y la hora que mejor se adapten a tu rutina.</p>
            </div>
          </li>
          <li className="flex text-white mb-4 items-center">
            <div className="bg-white rounded-xl w-10 h-10 flex justify-center items-center font-bold color-secundary text-xl">3</div>
            <div className="ml-2 w-[90%]">
              <h4 className="font-medium text-xl">Registra tus datos</h4>
              <p>Completa un breve formulario para confirmar tu sesión.</p>
            </div>
          </li>
          <li className="flex text-white mb-4 items-center">
            <div className="bg-white rounded-xl w-10 h-10 flex justify-center items-center font-bold color-secundary text-xl">4</div>
            <div className="ml-2 w-[90%]">
              <h4 className="font-medium text-xl">Programa tu sesión y empieza a leer</h4>
              <p>Conéctate con tu compañero y disfruta de una experiencia de lectura compartida.</p>
            </div>
          </li>
        </ul>
      </div>
      <div className='hidden justify-center items-center  xl:flex'>
        <img src={pasos_inscripcion_someel} alt="" />
      </div>
    </div>
  )
}

export default Steps