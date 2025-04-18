import Button from "../../components/button/Button"
import banner_img from "./../../assets/images/banner/club_lectura_banner_someel.png"

const CallToAction = () => {
  return (
    <div className="py-12 2xl:py-24 px-12 rounded-xl bg-seccion mb-6 flex flex-row relative overflow-hidden justify-center 2xl:justify-start">
      <div className="flex flex-col items-center 2xl:items-start">
        <h1 className="title-seccion mb-3 text-center 2xl:text-left">Descubre una nueva forma de leer</h1>
        <p className="text-white">Estás a un solo clic de transformar tu hábito de lectura.</p>
        <p className="text-white w-96 2xl:w-96 mb-4 text-center 2xl:text-left">Prueba nuestra Lectura Acompañada y disfruta de la experiencia de leer con compañía.</p>
        <Button text="Prueba Gratis" message="Hola, me gustaría encontrar a mi compañero de lectura ideal. Necesito ayuda para mantener el hábito y disfrutar más de mis libros."/>
      </div>
      <div className="hidden 2xl:block">
        <img src={banner_img} width={480} className="hidden xl:block 2xl:hidden absolute top-0 right-0"/>
        <img src={banner_img} width={680} className="hidden xl:hidden 2xl:block absolute top-0 right-0"/>
      </div>
    </div>
  )
}

export default CallToAction