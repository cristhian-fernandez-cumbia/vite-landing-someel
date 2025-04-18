import Button from "../button/Button"
import Carousel from "../carousel/Carousel";
import carlos_someel from "./../../assets/images/coaches/coach_carlos_someel.png";
import sandra_someel from "./../../assets/images/coaches/coach_sandra_someel.png";
import thalia_someel from "./../../assets/images/coaches/coach_thalia_someel.png";
import junior_someel from "./../../assets/images/coaches/coach_junior_someel.png";

const Banner = () => {

  const cardsData = [
    {
      imageUrl: carlos_someel,
      name: "Carlos Mauriola",
      passion: "Me apasiona las aventuras",
    },
    {
      imageUrl: sandra_someel,
      name: "Sandra Martinez",
      passion: "Me apasiona la ciencia ficción",
    },
    {
      imageUrl: thalia_someel,
      name: "Gueidy Chavez",
      passion: "Me apasiona el misterio",
    },
    {
      imageUrl: junior_someel,
      name: "Junior Barboza",
      passion: "Me apasiona la historia",
    },
    {
      imageUrl: "https://letymind.com/wp-content/uploads/2024/10/h-1.webp",
      name: "Antony De la Cruz",
      passion: "Me apasiona el emprendimiento",
    },
  ];

  return (
    <main className="p-8 flex flex-col items-center justify-center">
      <h1 className="text-center">Encuentra a tu compañero</h1>
      <h1 className="text-center">de Lectura Ideal</h1>
      <p className="mt-4 text-center md:w-[600px] mb-4 text-white">
        ¿Te cuesta mantener el hábito de lectura? Encuentra a tu compañero ideal que te motivará, te explicará lo leído y te ayudará a terminar esos libros que siempre quisiste.
      </p>
      <Button text="Prueba Gratis" message="Hola, me gustaría encontrar a mi compañero de lectura ideal. Necesito ayuda para mantener el hábito y disfrutar más de mis libros."/>

      <div className="mt-6 w-full max-w-[1500px]">
        <Carousel cardsData={cardsData} />
      </div>
    </main>
  );
}

export default Banner