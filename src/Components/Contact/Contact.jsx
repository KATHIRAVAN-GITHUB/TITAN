const Contact = () => {
    return (
        <>
            <section className=" py-10 bg-hero mt-[70px]" id="contact">
                <div className="2xl:container mx-auto h-[100%]">

                    <div className="w-[90%] mx-auto grid grid-col-1 h-[100%] gap-6">
                        <div className="flex flex-col justify-center items-center">
                            <p className="font-[Roboto] font-extrabold text-[40px] leading-[60px] text-yellow-500">
                                Contact</p>
                            <p className="font-[Roboto] font-medium text-[20px] leading-[32px] text-black">Feel free to
                                Contact
                                me
                                by submitting the form below and I will get back to you as soon as possible</p>
                        </div>

                        <div
                            className="w-[55%] mx-auto grid grid-cols-1 justify-center items-center shadow-xl border border-black bg-white p-4 rounded-lg space-y-4">

                            <div className="space-y-1">
                                <p className="font-[Roboto] font-bold text-[14px] leading-[21px] text-[#666666]">Name</p>
                                <input autoComplete="given-name"
                                    className="block w-full rounded-md bg-[#F1F1F0] px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                    type="text" />
                            </div>

                            <div className="space-y-1">
                                <p className="font-[Roboto] font-bold text-[14px] leading-[21px] text-[#666666]">Email</p>
                                <input autoComplete="email"
                                    className="block w-full rounded-md bg-[#F1F1F0] px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                    name="email" type="email" />
                            </div>

                            <div className="space-y-1">
                                <p className="font-[Roboto] font-bold text-[14px] leading-[21px] text-[#666666]">Message</p>
                                <textarea
                                    className="block w-full rounded-md bg-[#F1F1F0] px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                    rows="3"></textarea>
                            </div>

                            <div className="flex flex-row justify-end">
                                <button
                                    className="hover:translate-y-2 hover:transition hover:ease-in-out font-[Roboto] font-bold text-[16px] leading-[24px] bg-[#BDA000] text-white px-7 py-3 rounded-lg">
                                    SUBMIT
                                </button>
                            </div>

                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}

export default Contact