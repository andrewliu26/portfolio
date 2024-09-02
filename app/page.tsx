import { InView } from '@/components/in-view';
import { TextEffect } from "@/components/text-effect";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export default function Page() {
    return (
        <div className='h-screen w-screen overflow-auto'>
            <div className='h-screen flex flex-col items-center justify-center'>
                <TextEffect per='char' preset='fade' className={`py-6 text-center text-3xl font-bold ${poppins.className}`}>
                    Andrew Liu
                </TextEffect>
                <div className='text-center text-sm max-w-lg px-10'>
                    <p>
                        I'm a senior at Boston University studying computer science with 3+ years of experience in
                        software engineering.
                        I specialize in frontend work and UI/UX design. Scroll down to learn more about me and the work
                        I've done.
                    </p>
                </div>
            </div>
            <div className='h-screen flex flex-col items-center justify-center bg-black'>
                <InView
                    variants={{
                        hidden: { opacity: 0, y: 100, filter: 'blur(10px)' },
                        visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
                    }}
                    viewOptions={{ margin: '0px 0px -200px 0px' }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                    <div className={`text-center text-white ${poppins.className}`}>
                        <h1 className="font-bold text-2xl py-6">
                            Experience
                        </h1>
                        <p className='text-center text-sm max-w-lg px-10'>
                            Designed for developers and designers. The library leverages the
                            power of Framer Motion, with intuitive APIs that simplifies
                            creating complex animations for any project. Start building more
                            dynamic interfaces today.
                        </p>
                    </div>
                </InView>
            </div>
            <div className='h-screen flex items-center justify-center bg-gray-100'>
                <InView
                    variants={{
                        hidden: { opacity: 0, y: 100, filter: 'blur(10px)' },
                        visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
                    }}
                    viewOptions={{ margin: '0px 0px -200px 0px' }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                    <div className={`text-center ${poppins.className}`}>
                        <h1 className="font-bold text-2xl py-6">
                            Projects
                        </h1>
                        <p className='text-center text-sm max-w-lg px-10'>
                            Designed for developers and designers. The library leverages the
                            power of Framer Motion, with intuitive APIs that simplifies
                            creating complex animations for any project. Start building more
                            dynamic interfaces today.
                        </p>
                    </div>
                </InView>
            </div>
        </div>
    );
}
