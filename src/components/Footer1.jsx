export default function Footer1() {
    return (
        <footer className="bg-white" aria-labelledby="footer-heading">
            <div className="mx-auto max-w-7xl px-6 pb-8 sm:pt-24 lg:px-8">
                <div className="pt-8 lg:flex lg:items-center lg:justify-between">
                    <div>
                        <img src="/vercel.svg" alt="logo" className="h-20 w-20" />
                        <p className="mt-2 text-sm leading-6 text-gray-600">
                            Workspaces of inspiring creatives, sent every Saturday and Sunday morning.
                        </p>
                    </div>
                    <form className="mt-6 sm:flex sm:max-w-md lg:mt-0">
                        <label htmlFor="email-address" className="sr-only">
                            Email address
                        </label>
                        <input
                            type="email"
                            name="email-address"
                            id="email-address"
                            autoComplete="email"
                            required
                            className="w-full min-w-0 appearance-none rounded-md border-0 bg-white px-3 py-1.5 text-base text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:w-56 sm:text-sm sm:leading-6"
                            placeholder="Enter your email"
                        />
                        <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
                            <button
                                type="submit"
                                className="flex w-full items-center justify-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                            >
                                Subscribe for free
                            </button>
                        </div>
                    </form>
                </div>
                <div className="mt-8 border-t border-gray-900/10 pt-8 md:flex md:items-center md:justify-between">
                    <div className="flex space-x-6 md:order-1 text-gray-500 text-xs">
                        <a href="">
                            Spaces
                        </a>
                        <a href="">
                            About
                        </a>
                        <a href="">
                            Submit a Workspace
                        </a>
                        <a href="">
                            RSS
                        </a>
                    </div>
                    <div className="uppercase text-gray-500 text-md md:order-2">
                        Published by Loops
                    </div>
                    <p className="mt-8 text-xs leading-5 text-gray-500 md:order-3 md:mt-0">
                        &copy; 2023 Workspaces, Inc. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
