import Image from "next/image";

export default function Home() {
    return (
        <main>
            <div className="hero container">
                <div className="header flex flex-row align-items-end py-5">
                    <Image
                        src='/dana.svg'
                        alt="Dana"
                        width={125}
                        height={46}
                        className="mr-8"
                    />
                    <nav className="flex flex-row gap-6">
                        <a href="#" className="link link-primary text-lg">Offres</a>
                        <a href="#" className="link link-primary text-lg">Fonctionnalités</a>
                        <a href="#" className="link link-primary text-lg">Sorties</a>
                        <a href="#" className="link link-primary text-lg">Pour les pros</a>
                    </nav>
                </div>
                <h1 className="text-primary font-italic font-light my-3">
                    Découvrez la vie <strong className="font-semibold">CULTURELLE</strong><br />
                    locale grâce à votre<br />
                    <strong className="font-semibold">CSE</strong> d&apos;entreprise !
                </h1>
                <div className="flex flex-row align-items-center gap-2 pb-3">
                    <Image
                        src='/marker.png'
                        alt=""
                        width={34}
                        height={36}
                    />
                    <span className="font-italic text-blue font-medium text-lg">Caen la mer</span>
                </div>
                <a href="#" className="btn btn-primary">
                    <span>Contactez-nous</span>
                </a>
            </div>
        </main>
    );
}