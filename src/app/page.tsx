import Image from "next/image";

export default function Home() {
    return (
        <main>
            <div className="hero container">
                <div className="header flex flex-row align-items-end py-5">
                    <Image
                        src="/dana.png"
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
                        src="/marker.png"
                        alt=""
                        width={34}
                        height={36}
                    />
                    <span className="font-italic text-blue font-medium text-lg">Caen la mer</span>
                </div>
                <a href="#" className="btn btn-primary">Contactez-nous</a>
            </div>

            <div className="bg-pink">
                <div className="bg-dana-white big-border-top-left py-5 container">
                    <div className="pt-8">
                        <h2 className="text-primary font-italic font-light">
                            Offrez à vos employés<br />
                            des moments culturels <strong className="font-semibold">INOUBLIABLES</strong>
                        </h2>
                        <p className="text-primary text-lg font-light m-0">Entreprise soucieuse du bien-être de vos salariés, vous pouvez collaborer avec nous pour offrir des billets d&apos;événements culturels via votre CSE. Enrichissez leur quotidien en leur permettant d&apos;accéder facilement à une variété d&apos;activités culturelles dans l&apos;agglomération de Caen la mer, en Normandie. Contactez-nous dès aujourd&apos;hui pour en savoir plus sur nos offres et rejoignez-nous dans notre mission pour rendre la culture accessible à tous !</p>
                        <a href="#" className="btn btn-secondary"><span className="underline">C</span>ontactez-nous</a>
                    </div>

                    <div className="py-7"></div>

                    <div className="pb-5">
                        <h2 className="text-primary font-italic font-light">
                            Tout réunir en un seul endroit
                        </h2>
                        <p className="text-primary text-lg font-light m-0">Toutes les sorties culturelles près de chez vous sont disponibles sur l&apos;application Dana ! Vous pouvez obtenir des informations sur la salle, l&apos;événement, acheter votre billet et consulter les détails de ce dernier.</p>
                    </div>

                    <div className="flex flex-row justify-content-center gap-8 mt-6">
                        <div className="flex flex-1 flex-column gap-4 align-items-center">
                            <Image
                                src="/calendar.png"
                                alt=""
                                width={75}
                                height={75}
                            />
                            <div className="container-blue flex-grow-1">
                                <h3 className="font-semibold font-italic text-xl">L&apos;agenda de vos sorties</h3>
                                <p className="font-light text-sm">Un seul endroit pour retrouver toutes les sorties culturelles dans l&apos;agglomération caennaise  grâce à un agenda.</p>
                            </div>
                        </div>
                        <div className="flex flex-1 flex-column gap-4 align-items-center">
                            <Image
                                src="/marker2.png"
                                alt=""
                                width={75}
                                height={75}
                            />
                            <div className="container-pink flex-grow-1">
                                <h3 className="font-semibold font-italic text-xl">Les salles près de chez vous</h3>
                                <p className="font-light text-sm">Retrouvez les salles à proximité. Vous pouvez accéder à leurs informations pratiques : accessibilité, transports et parking.</p>
                            </div>
                        </div>
                        <div className="flex flex-1 flex-column gap-4 align-items-center">
                            <Image
                                src="/tickets.png"
                                alt=""
                                width={75}
                                height={75}
                            />
                            <div className="container-orange flex-grow-1">
                                <h3 className="font-semibold font-italic text-xl">Tous vos billets dans votre poche</h3>
                                <p className="font-light text-sm">Réservez votre billet en ligne et retrouve le sur l&apos;appli à tout moment, où que vous soyez.</p>
                            </div>
                        </div>
                    </div>

                    <div className="py-7"></div>
                    
                    <div>
                        <h2 className="text-primary font-italic font-light">Découvrez notre sélection d&apos;événements</h2>
                        <div className="flex flex-row gap-4">
                            <div className="flex flex-1 justify-content-center align-items-center relative border-round-3xl overflow-hidden shadow-5">
                                <Image
                                    src="/cinema.png"
                                    alt=""
                                    width={500}
                                    height={500}
                                    className="w-full h-auto"
                                    objectFit="cover"
                                />
                                <span className="text-dana-white text-xl font-semibold absolute top-50 left-50 translate-50">Cinéma</span>
                            </div>
                            <div className="flex flex-1 justify-content-center align-items-center relative border-round-3xl overflow-hidden shadow-5">
                                <Image
                                    src="/theatre.png"
                                    alt=""
                                    width={500}
                                    height={500}
                                    className="w-full h-auto"
                                    objectFit="cover"
                                />
                                <span className="text-dana-white text-xl font-semibold absolute top-50 left-50 translate-50">Théâtre</span>
                            </div>
                            <div className="flex flex-1 justify-content-center align-items-center relative border-round-3xl overflow-hidden shadow-5">
                                <Image
                                    src="/dance.png"
                                    alt=""
                                    width={500}
                                    height={500}
                                    className="w-full h-auto"
                                    objectFit="cover"
                                />
                                <span className="text-dana-white text-xl font-semibold absolute top-50 left-50 translate-50">Danse</span>
                            </div>
                            <div className="flex flex-1 justify-content-center align-items-center relative border-round-3xl overflow-hidden shadow-5">
                                <Image
                                    src="/concert.png"
                                    alt=""
                                    width={500}
                                    height={500}
                                    className="w-full h-auto"
                                    objectFit="cover"
                                />
                                <span className="text-dana-white text-xl font-semibold absolute top-50 left-50 translate-50">Concerts</span>
                            </div>
                        </div>
                    </div>

                    <div className="py-7"></div>
                </div>
            </div>

            <div className="banner">
                <div className="container">
                    <h2 className="font-italic font-light">
                        Je suis une <strong className="font-semibold">STRUCTURE</strong> culturelle
                    </h2>
                    <p className="text-lg font-light">En tant que structure culturelle, vous pouvez maintenant proposer vos billets sur notre plateforme. Offrez des expériences uniques à un public diversifié, tout en bénéficiant de la visibilité auprès des employés des entreprises adhérentes. Rejoignez notre réseau dès aujourd&apos;hui et participez à rendre la culture plus accessible pour tous !</p>
                    <a href="#" className="btn btn-primary"><span className="underline">C</span>ontactez-nous</a>
                </div>
            </div>

            <div className="container bg-dana-white py-2">
                <div className="flex flex-row align-items-center gap-8">
                    <div className="flex flex-column">
                        <h2 className="text-primary font-italic font-light">
                            Restons en <strong className="font-semibold">CONTACT</strong>
                        </h2>
                        <input type="email" placeholder="Votre e-mail" className="btn text-primary" />
                        <a href="#" className="btn btn-secondary"><span className="underline">J</span>e transmets</a>
                    </div>
                    <Image
                        src="/mockup.png"
                        alt=""
                        width={300}
                        height={300}
                        objectFit="contain"
                        className="w-5 h-auto"
                    />
                </div>
            </div>

            <div className="footer container py-6">
                <div className="flex flex-row justify-content-around gap-8">
                    <div className="flex flex-1 flex-column gap-3">
                        <Image
                            src="/dana.png"
                            alt="Dana"
                            width={125}
                            height={46}
                            className="mr-8"
                        />
                        <p className="text-primary text-lg">Découvrez la vie culturelle locale grâce à votre CSE d&apos;entreprise</p>
                    </div>
                    <div className="flex flex-1 flex-column align-self-end gap-2">
                        <a href="#" className="text-primary">Offres</a>
                        <a href="#" className="text-primary">Fonctionnalités</a>
                        <a href="#" className="text-primary">Sorties</a>
                        <a href="#" className="text-primary">Pour les pros</a>
                        <a href="#" className="text-primary">Mentions légales</a>
                    </div>
                    <div className="flex flex-1 justify-content-center align-self-end gap-5">
                        <Image
                            src="/twitter.png"
                            alt="Twitter"
                            width={35}
                            height={35}
                        />
                        <Image
                            src="/instagram.png"
                            alt="Instagram"
                            width={35}
                            height={35}
                        />
                        <Image
                            src="/facebook.png"
                            alt="Facebook"
                            width={35}
                            height={35}
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}