"use client";

import { logoLinkedin, logoGithub, logoFigma } from 'ionicons/icons';
import { IonIcon } from "@ionic/react";

export default function Footer() {
    return (
        <footer className="mb-16">
            <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-700 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
                <li>
                    <a
                        className="flex items-center transition-all hover:text-neutral-900 dark:hover:text-neutral-100"
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://linkedin.com/in/andrewliu26"
                    >
                        <IonIcon icon={logoLinkedin}/>
                        <p className="ml-2 h-7">linkedin</p>
                    </a>
                </li>
                <li>
                    <a
                        className="flex items-center transition-all hover:text-neutral-900 dark:hover:text-neutral-100"
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://github.com/andrewliu26"
                    >
                        <IonIcon icon={logoGithub}/>
                        <p className="ml-2 h-7">github</p>
                    </a>
                </li>
                <li>
                    <a
                        className="flex items-center transition-all hover:text-neutral-900 dark:hover:text-neutral-100"
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://figma.com/@andrewliu26"
                    >
                        <IonIcon icon={logoFigma}/>
                        <p className="ml-2 h-7">figma</p>
                    </a>
                </li>
            </ul>
        </footer>
    )
}