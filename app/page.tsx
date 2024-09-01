import Spline from '@splinetool/react-spline/next';

export default function Home() {
    return (
        <main style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <div style={{ backgroundColor: 'black', height: '100vh', width: '100%' }}>
                <Spline
                    scene="https://prod.spline.design/i025hk0Vkw7V-Kgr/scene.splinecode"
                />
            </div>
        </main>
    );
}
