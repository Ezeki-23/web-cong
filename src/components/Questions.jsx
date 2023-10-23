import ItemsContainer from "../components/Footer/ItemsContainer";
import SocialIcons from "../components/Footer/SocialIcons";
import { Icons } from "../components/Footer/Menus";

function Pregs () {
    return (
        <>
        <section className="bg-white dark:bg-gray-200">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <h2 className="mt-12 text-4xl text-center tracking-tight font-extrabold text-gray-900 dark:text-gray-900">Preguntas frecuentes que nos llegan</h2>
        </div>
        <div className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
    <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
      <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
      <img className="sm:w-28 sm:h-28 w-20 h-20 rounded-full" src="sabado.jpg" />
      </div>
      <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 className="text-gray-900 text-lg title-font font-medium mb-2">¿Por qué adoran en en día sábado y no en domingo?</h2>
        <p className="leading-relaxed text-base text-justify">Nos verás reunidos y adorando en el día sábado porque Dios nos ordena trabajar seis días y reposar y santificar el séptimo día sábado de la semana (Éxodo 20:8-11). Dios sabe que la humanidad se olvida del día que él señaló para adorarlo como creador de todo lo que existe, por eso nos dice “acuérdate” del día de reposo (Éxodo 20:8). Él estableció este día como SANTO en el Génesis cuando no existían razas, naciones ni religiones (Génesis 2:1-4), por tanto es para toda la humanidad a través de todos los tiempos independientemente de cualquier factor humano. Dios no cambia, él es inmutable (Santiago 1:17).</p>
      </div>
    </div>
    <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
      <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 className="text-gray-900 text-lg title-font font-medium mb-2">¿Por qué se llaman "Adventistas del Séptimo Día"?</h2>
        <p className="leading-relaxed text-base">El nombre de nuestra iglesia se debe a que creemos en el advenimiento (segunda aparición) de nuestro Señor Jesucristo en las nubes del cielo con poder y gloria para poner fin a este mundo de pecado y rebelión contra el gobierno de Dios (Mateo 24:44, Apocalipsis 1:7). El término "del séptimo día" alude al punto explicado arriba.</p>
      </div>
      <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
        <img className="sm:w-28 sm:h-28 w-20 h-20 rounded-full" src="venida.jpeg" />
      </div>
    </div>
    <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
      <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
      <img className="sm:w-28 sm:h-28 w-20 h-20 rounded-full" src="jesus.jpeg" />
      </div>
      <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 className="text-gray-900 text-lg title-font font-medium mb-2">¿Son una iglesia cristiana? ¿tienen algo que ver con los evangélicos?</h2>
        <p className="leading-relaxed text-base">Somos una iglesia cristiana que basa sus creencias únicamente en la Biblia. No tenemos nada que ver con las iglesias cristianas evangélicas o pentecostales de la zona, ni tampoco somos ramas de éstas. </p>
      </div>
    </div>
    <div className="text-center mt-8">
      <a href="https://www.adventistas.org/es/institucional">
      <button className="text-white bg-orange-300 hover:bg-orange-500 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2">Quiero saber más</button>
      </a>
    </div>
    </div>
    </div>
    </section>
            <footer className="bg-orange-900 text-white">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7">
        <h1
          className="md:text-4xl text-xl md:mb-0 mb-6 lg:leading-normal font-semibold
         md:w-2/5"
        >
          <span className=" text-yellow-300">¡Gracias</span> por pasar por aquí!
        </h1>
      </div>
      <ItemsContainer />
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-2 text-gray-400 text-sm pb-8"
      >
        <span>© 2023 Congregación Nueva Esperanza. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
        <SocialIcons Icons={Icons} />
      </div>
    </footer>
    </>
    )
}

export default Pregs
