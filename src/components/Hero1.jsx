
export default function Hero1() {

    return (
        <section className="bg-black">
            <div className="relative isolate pt-14">
                <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:flex lg:items-center lg:gap-x-10 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
                        <h1 className="mt-10 max-w-lg text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            Level up your product skills and build a thriving creator business
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-200">
                            FREE BONUS: Get my {'"'}10 Top Lessons for Creators and Product Leaders{'"'} when you sign up
                        </p>
                        <div className="mt-10 flex items-center gap-x-6">
                            <form className="flex max-w-md">
                                <label htmlFor="email-address" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="w-full flex-auto border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-red-300 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                                    placeholder="Enter your email"
                                />
                                <button
                                    type="submit"
                                    className="flex-none bg-red-300 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                                >
                                    Subscirbe
                                </button>
                            </form>
                        </div>
                        <div className="mt-10">
                            <h3 className="text-gray-200">
                                Trusted by 42,000+ readers from:
                            </h3>
                            <div className="flex items-center">
                                <div>
                                    <img src="https://read.creatoreconomy.so/assets/images/image01.jpg?v=4fca0ef7" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow ">
                        <img src="https://read.creatoreconomy.so/assets/images/image02.png?v=4fca0ef7" className="h-[500px]" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}
