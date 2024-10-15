import React from "react";

function About() {
    return (
        <div className="relative w-full min-h-screen pb-10 bg-white dark:bg-bg_dark">
            <div className="py-5">
                <div className="flex flex-row items-center justify-between mb-7">
                    <h1 className="text-xl font-bold text-main dark:text-light_secondary">
                        About
                    </h1>
                </div>
                <div className="flex flex-col w-full gap-2 mb-5 text-xl font-medium">
                    <p>
                    السَّلَامُ عَلَيْكُمْ<br></br> Please use the form below to submit suggestions
                    </p>
                    <p>
                    <iframe title="survey" src="https://flowyform.com/form/salafiquran" width="100%" height="600"></iframe>
                    </p>
                    <p>
                        
                    </p>
                </div>
                <div className="mb-5 text-xl font-medium">
                    
                  
                </div>
                <div>
                    <p className="text-xl font-medium">
                        Please make dua that Allah Subhanahu Wa Ta’ala accepts this work and guides us upon the Methodology of the Salaf us-Saalih 
                       
                    </p>
                    
                </div>

                <div className="flex flex-col items-center justify-center w-full mt-10 text-center">
                    
                    <h1 className="text-md">
                        POWERED BY{" "}
                        <a
                            className="underline uppercase"
                            target="_blank"
                            rel="noreferrer"
                            href="https://alquran.cloud"
                        >
                            <b>alquran.cloud</b>
                        </a>
                    </h1>
                    <p className="text-sm">Version 1.0.0</p>
                </div>
            </div>
        </div>
    );
}

export default About;
