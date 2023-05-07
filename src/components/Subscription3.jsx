export default function Subscription3() {
    return (
        <section className="bg-white pt-16">
            <div className="bg-red-500">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="relative isolate flex flex-col gap-10 overflow-hidden px-6 py-24 sm:px-24 xl:flex-row xl:items-center xl:py-32">
                        <h2 className="max-w-[500px] text-3xl font-bold tracking-tight text-white sm:text-4xl xl:max-w-none xl:flex-auto">
                            Join 2M+ professionals getting the Hustle daily news brief
                        </h2>
                        <div className="bg-white p-[4px] rounded-lg">
                            <form className="w-full max-w-md">
                                <div className="flex gap-x-4">
                                    <label htmlFor="email-address" className="sr-only">
                                        Email address
                                    </label>
                                    <input
                                        id="email-address"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-white focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                                        placeholder="Enter your email"
                                    />
                                    <button
                                        type="submit"
                                        className="flex-none rounded-lg bg-red-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                                    >
                                        Join Free
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-900">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="w-full mx-auto px-6 pt-24">
                        <img src="/vercel.svg" alt="Logo" className="mx-auto w-[300px]" />
                    </div>
                </div>
            </div>
        </section>
    )
}
