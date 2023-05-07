export default function Example() {
    return (
        <div className="relative bg-black">
            <div className="md:flex mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40">
                <img
                    className="mx-auto w-[300px] h-auto"
                    src="/avatar.png"
                    alt=""
                />
                <div className="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:pl-24 lg:pr-0 xl:pl-32">
                    <p className="mt-2 text-base text-gray-200">Quien Say</p>
                    <p className="mt-6 text-base leading-7 text-gray-200">
                        Mi nombre es Axel Marazzi y soy periodista, Empecé mi carrera escribiendo sobre cómo la tecnología afecta nuestra vida cotidiana y cómo puede cambiar nuestro futuro. Hoy trabajo como jefe de producto, consultor o redactor. También hago un podcast, Idea Millonaria, y tengo una consultora que se llama bestia.media.
                        Hice o hago cosas para RED/ACCIÓN, La Nación, Revista Anfibia, el Banco Interamericano de Desarrollo, Cenital, SembraMedia, POSTA, Hipertextual, minutouno, UNO, Revista Crisis y Revista Brando, entre otros
                    </p>
                    <div className="flex mt-8 gap-x-5">
                        <a href="#" className="text-white underline">
                            Twitter
                        </a>
                        <a href="#" className="text-white underline">
                            Instagram
                        </a>
                        <a href="#" className="text-white underline">
                            Email
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
