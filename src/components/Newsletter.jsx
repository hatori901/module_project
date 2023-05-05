export default function Newsletter() {
    return (
        <div className="bg-white py-8 sm:py-10">
            <div className="mx-auto sm:px-6 lg:px-8">
                <div className="relative isolate overflow-hidden bg-yellow-200 px-6 py-24 shadow-2xl sm:px-24 xl:py-32">
                    <h2 className="uppercase mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-black sm:text-2xl my-2">
                        SIGN UP
                    </h2>
                    <h1 className="uppercase mx-auto max-w-2xl text-center text-6xl font-bold tracking-tight text-black sm:text-6xl my-2">
                        GIVE IT A TRY
                    </h1>
                    <p className="mx-auto mt-2 max-w-xl text-left text-lg leading-8 text-black font-bold font-mono">
                        we stay up to date on the latest term sheets, twitter drama, and news stories so you don{"'"}t have to
                    </p>
                    <div className="w-full lg:w-1/2 py-2 px-2 mt-10 mx-auto bg-gradient-to-r from-red-200 to-sky-400">
                        <form className="mx-auto flex gap-x-4">
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="w-full flex-auto border-0 bg-white px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                            />
                            <button
                                type="submit"
                                className="flex-none w-[100px] md:w-[200px] px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm"
                            >
                                Try It
                            </button>
                        </form>
                    </div>
                    <div className="w-full lg:w-1/2 mx-auto my-10 font-mono flex items-center justify-around">
                        <div>
                            important News
                        </div>
                        <div>
                            Helpful resources
                        </div>
                        <div>
                            bad vibes
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}