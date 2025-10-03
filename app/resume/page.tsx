function Resume() {
    return (
        <div className="flex justify-center items-center p-4">
            <div className="flex flex-col space-y-4 max-w-3xl text-sm">
                {/* Header */}
                <section className="text-center">
                    <h2 className="text-3xl font-bold">Karim Chehab</h2>
                    <p>Frontend Engineer</p>
                    <p>Masr Al Gadida, Cairo, Egypt | +20 1008408815 | <span className="text-info">karimchehab2018@gmail.com</span></p>
                    <ul className="inline-flex items-center space-x-2">
                        <li>
                            <a href="https://www.linkedin.com/in/karim-chehab-75a0b5318/" target="_blank" className="text-info link">LinkedIn</a>
                        </li>
                        <li>
                            <a href="https://github.com/KarimChehab2003" target="_blank" className="text-info link">GitHub</a>
                        </li>
                        <li>
                            <a href="https://karimos.vercel.app/" target="_blank" className="text-info link">Portfolio</a>
                        </li>
                    </ul>
                </section>

                {/* Professional Summary */}
                <section>
                    <h3 className="font-bold uppercase text-center">Professional Summary</h3>
                    <div className="divider my-0"></div>
                    <p>Junior frontend engineer with 1+ year of hands-on experience in React and Typescript, eager to contribute to performant and maintainable web applications and to further develop expertise in Next.js and modern frontend frameworks.
                    </p>
                </section>

                {/* Education */}
                <section>
                    <h3 className="font-bold uppercase text-center">Education</h3>
                    <div className="divider my-0"></div>
                    <div className="flex justify-between items-center font-bold">
                        <p>Ain Shams University & University of East London</p>
                        <p>2021-2025</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p>Bachelor&apos;s Dual Degree in Computer & Information Sciences</p>
                        <p>GPA: 3.726</p>
                    </div>
                </section>

                {/* Work Experience */}
                <section>
                    <h3 className="font-bold uppercase text-center">Work Experience</h3>
                    <div className="divider my-0"></div>
                    <div className="flex justify-between items-center font-bold">
                        <p>Frontend Engineer | Codera (Startup) </p>
                        <p>August 2025 - August 2025</p>
                    </div>
                    <ul className="list-disc list-inside mx-2">
                        <li>Designed and implemented Codera’s custom frontend website with a responsive, maintainable codebase, delivering features quickly in a fast-paced startup environment.</li>
                    </ul>
                </section>

                {/* Core Skills */}
                <section>
                    <h3 className="font-bold uppercase text-center">Core Skills</h3>
                    <div className="divider my-0"></div>
                    <ul className="list-disc list-inside mx-2">
                        <li><span className="font-bold">Frontend:</span> React, Next.js, TypeScript, Javascript, HTML5, CSS3, TailwindCSS, Zustand, React Query</li>
                        <li><span className="font-bold">Tooling:</span> Git, GitHub, Firebase, Supabase, RESTful APIs</li>
                        <li><span className="font-bold">Additional Knowledge:</span> Node.js, Express.js, Git/version control workflow, Selenium automation, OOP</li>
                        <li><span className="font-bold">Soft Skills:</span> Remote collaboration, problem-solving, clear documentation, adaptability, time management</li>
                        <li><span className="font-bold">Spoken Languages:</span> Arabic (Native), English (Professional Proficiency C1), French (Intermediate)</li>
                    </ul>
                </section>

                {/* Projects */}
                <section>
                    <h3 className="font-bold uppercase text-center">Projects</h3>
                    <div className="divider my-0"></div>
                    <ul className="space-y-4">
                        <li className="space-y-1">
                            <div className="flex justify-between items-center">
                                <p className="font-bold">The Normality - Anomaly Spotting Game<span className="italic font-normal"> - Next.js, Typescript, Zustand, Tailwind CSS, daisyUI</span></p>
                                <p className="font-bold">September 2025</p>
                            </div>
                            <ul className="list-disc list-inside mx-2">
                                <li>Created an interactive game with server-defined anomalies, client-side randomization, and smooth round-start animations (Framer Motion).</li>
                                <li>
                                    <div className="inline-flex gap-2">
                                        <a href="https://github.com/KarimChehab2003/the-normality" target="_blank" className="link text-info">GitHub Repository</a>
                                        <a href="https://the-normality.vercel.app/" target="_blank" className="link text-info">Live Demo</a>
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li className="space-y-1">
                            <div className="flex justify-between items-center">
                                <p className="font-bold">Next.js E-Commerce Store<span className="italic font-normal"> - Next.js, Typescript, Zustand, Tailwind CSS, daisyUI</span></p>
                                <p className="font-bold">September 2025</p>
                            </div>
                            <ul className="list-disc list-inside mx-2">
                                <li>Built a responsive store with category filtering, dynamic cart, and SEO optimization.</li>
                                <li>Achieved 95+ Lighthouse performance score and sub-second navigation with Next.js routing</li>
                                <li>
                                    <div className="inline-flex gap-2">
                                        <a href="https://github.com/KarimChehab2003/e-commerce-nextjs" target="_blank" className="link text-info">GitHub Repository</a>
                                        <a href="https://e-commerce-nextjs-karim-chehab.vercel.app/" target="_blank" className="link text-info">Live Demo</a>
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li className="space-y-1">
                            <div className="flex justify-between items-center">
                                <p className="font-bold">Personal Finance Manager<span className="italic font-normal"> - React.js, Typescript, Zustand, React Query, Tailwind CSS, Firebase</span></p>
                                <p className="font-bold">August 2025</p>
                            </div>
                            <ul className="list-disc list-inside mx-2">
                                <li>Developed a web app to track income/expenses with real-time updates and data persistence.</li>
                                <li>Connected to Firebase for real-time API-driven updates, handling JSON data efficiently.</li>
                                <li>
                                    <div className="inline-flex gap-2">
                                        <a href="https://github.com/KarimChehab2003/personal-finance-manager" target="_blank" className="link text-info">GitHub Repository</a>
                                        <a href="https://karimchehab2003.github.io/personal-finance-manager/" target="_blank" className="link text-info">Live Demo</a>
                                    </div>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    );
}

export default Resume;