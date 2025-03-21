export default function SendEmail() {
    return (
        <div className="relative overflow-hidden bg-black h-[100vh] flex items-center justify-center">
            <div className="container mx-auto relative z-10">
                <div className="flex flex-col items-center justify-center text-white px-4 sm:px-0">
                    <h1 className="text-3xl font-bold mb-4 text-center">Entre em contato:</h1>
                    <form
                        action="https://formsubmit.co/hiago.roedel@grupoprominas.com.br"
                        method="POST"
                        className="w-full max-w-lg space-y-4 bg-white p-6 rounded-lg shadow-lg"
                    >
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_next" value="http://localhost:3000/" />
                        <input
                            type="email"
                            name="email"
                            placeholder="Seu email"
                            required
                            className="w-full p-3 border border-gray-300 rounded-lg text-black"
                        />
                        <textarea
                            name="message"
                            placeholder="Sua mensagem"
                            required
                            className="w-full p-3 border border-gray-300 rounded-lg h-32 text-black"
                        />
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
                        >
                            Enviar
                        </button>
                    </form>
                </div>
            </div>

            {/* Bola na lateral direita */}
            <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500 rounded-full opacity-50 sm:w-[1000px] sm:h-[1000px] md:w-[1200px] md:h-[1200px] lg:w-[1700px] lg:h-[1200px]"></div>
        </div>
    );
}
