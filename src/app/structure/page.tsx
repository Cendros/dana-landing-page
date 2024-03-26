'use client';

import Aos from "aos";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Structure() {
    const checkboxMenu = useRef<HTMLInputElement>(null);

    useEffect(() => {
        Aos.init({
            disable: 'phone',
            duration: 1000,
        });
    }, []);

    const closeMenu = () => {
        checkboxMenu.current!.checked = false;
    }

    return (
        <main>
            <div className="hero container pb-2">
                <nav className="header flex flex-row align-items-end py-5">
                    <Image
                        src="/dana.png"
                        alt="Dana"
                        width={125}
                        height={46}
                        className="mr-2 xl:mr-8 h-auto"
                    />
                    <label>
                        <input type="checkbox" ref={checkboxMenu} />
                        <span className="menu">
                            <span className="burger"></span>
                        </span>
                        <ul className="flex flex-column lg:flex-row gap-6 m-0">
                            <li><a href="#offres" className="link link-primary text-lg" onClick={closeMenu}>Offres</a></li>
                            <li><a href="#fonctionnalites" className="link link-primary text-lg" onClick={closeMenu}>Fonctionnalités</a></li>
                            <li><a href="#sorties" className="link link-primary text-lg" onClick={closeMenu}>Sorties</a></li>
                        </ul>
                    </label>
                </nav>
                <div className="flex flex-column lg:flex-row justify-content-between gap-3">
                    <div className="flex flex-column gap-3 w-full lg:w-5">
                        <h1 className="text-primary font-light my-3" data-aos="fade-right">
                            Offrez des <strong className="font-semibold">expériences uniques</strong> à votre public grâce à notre plateforme.
                        </h1>
                        <div className="flex flex-row align-items-center gap-2 pb-3" data-aos="fade-right" data-aos-delay="100">
                            <Image
                                src="/marker.png"
                                alt=""
                                width={34}
                                height={36}
                            />
                            <span className="font-italic text-blue font-medium text-lg">Caen la mer</span>
                        </div>
                    </div>
                    <div className="flex flex-column align-self-start gap-5 w-full lg:w-6">
                        <h1 className="text-primary font-italic font-light my-1 m-0 lg:ml-auto" data-aos="fade-right">
                            Restez informé
                        </h1>
                        <input type="email" placeholder="Votre e-mail" className="btn text-primary my-1" data-aos="zoom-in" />
                        <a href="#" className="btn btn-secondary my-1" data-aos="zoom-in"><span className="underline">J</span>e transmets</a>
                        <small className="text-primary" data-aos="zoom-in">En soumettant ce formulaire, j&apos;accepte de recevoir des offres marketing</small>
                    </div>
                </div>
            </div>

            <div className="bg-pink">
                <div id="offres" className="bg-dana-white big-border-top-left py-5 container" data-aos="fade-up" data-aos-delay="400">
                    <div className="pt-0 md:pt-8">
                        <h2 className="text-primary font-italic font-light">
                            Je suis une <strong className="font-semibold">STRUCTURE</strong> culturelle
                        </h2>
                        <p className="text-primary text-lg font-light m-0">En tant que structure culturelle, vous pouvez maintenant proposer vos billets sur notre plateforme. Offrez des expériences uniques à un public diversifié, tout en bénéficiant de la visibilité auprès des employés des entreprises adhérentes. Rejoignez notre réseau dès aujourd&apos;hui et participez à rendre la culture plus accessible pour tous !</p>
                        <a href="#" className="btn btn-secondary"><span className="underline">C</span>ontactez-nous</a>
                    </div>

                    <div className="py-3 md:py-7"></div>

                    <div id="fonctionnalites" className="pb-5">
                        <h2 className="text-primary font-italic font-light" data-aos="fade-right">
                            Tout réunir en un seul endroit
                        </h2>
                        <p className="text-primary text-lg font-light m-0" data-aos="fade-right" data-aos-delay="200">Toutes les sorties culturelles près de chez vous sont disponibles sur l&apos;application Dana ! Vous pouvez obtenir des informations sur la salle, l&apos;événement, acheter votre billet et consulter les détails de ce dernier.</p>
                    </div>

                    <div className="flex flex-column lg:flex-row justify-content-center gap-5 lg:gap-8 mt-3 md:mt-6">
                        <div className="flex flex-1 flex-column gap-4 align-items-center" data-aos="zoom-in" data-aos-delay="200" data-aos-anchor-placement="center-bottom">
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
                        <div className="flex flex-1 flex-column gap-4 align-items-center" data-aos="zoom-in" data-aos-delay="400" data-aos-anchor-placement="center-bottom">
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
                        <div className="flex flex-1 flex-column gap-4 align-items-center" data-aos="zoom-in" data-aos-delay="600" data-aos-anchor-placement="center-bottom">
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

                    <div className="py-3 md:py-7"></div>
                </div>
            </div>

            <div id="sorties" className="banner">
                <h2 className="text-primary font-italic font-light text-white" data-aos="fade-right">Découvrez notre sélection d&apos;événements</h2>
                <div className="flex flex-row flex-wrap">
                    <div className="flex w-6 lg:w-3">
                        <div className="p-1 lg:p-3 flex justify-content-center align-items-center relative overflow-hidden" data-aos="flip-up" data-aos-delay="200">
                            <Image
                                src="/cinema.jpg"
                                alt=""
                                width={500}
                                height={500}
                                className="w-full h-auto shadow-5 border-round-3xl"
                            />
                            <span className="text-dana-white text-xl font-semibold absolute top-50 left-50 translate-50 text-highlight">Cinéma</span>
                        </div>
                    </div>
                    <div className="flex w-6 lg:w-3">
                        <div className="p-1 lg:p-3 flex justify-content-center align-items-center relative overflow-hidden" data-aos="flip-up" data-aos-delay="400">
                            <Image
                                src="/theatre.jpg"
                                alt=""
                                width={500}
                                height={500}
                                className="w-full h-auto shadow-5 border-round-3xl"
                            />
                            <span className="text-dana-white text-xl font-semibold absolute top-50 left-50 translate-50 text-highlight">Théâtre</span>
                        </div>
                    </div>
                    <div className="flex w-6 lg:w-3">
                        <div className="p-1 lg:p-3 flex justify-content-center align-items-center relative overflow-hidden" data-aos="flip-up" data-aos-delay="600">
                            <Image
                                src="/dance.jpg"
                                alt=""
                                width={500}
                                height={500}
                                className="w-full h-auto shadow-5 border-round-3xl"
                            />
                            <span className="text-dana-white text-xl font-semibold absolute top-50 left-50 translate-50 text-highlight">Danse</span>
                        </div>
                    </div>
                    <div className="flex w-6 lg:w-3">
                        <div className="p-1 lg:p-3 flex justify-content-center align-items-center relative overflow-hidden" data-aos="flip-up" data-aos-delay="800">
                            <Image
                                src="/concert.jpg"
                                alt=""
                                width={500}
                                height={500}
                                className="w-full h-auto shadow-5 border-round-3xl"
                            />
                            <span className="text-dana-white text-xl font-semibold absolute top-50 left-50 translate-50 text-highlight">Concerts</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container bg-dana-white py-2 mockup-container">
                <div className="flex flex-column md:flex-row justify-content-center align-items-center gap-3 md:gap-8 w-full h-auto md:h-full">
                    <div className="flex w-12 md:w-6 flex-column w-full">
                        <h2 className="text-primary font-italic font-light" data-aos="fade-right">
                            Notre solution sera bientôt disponible !
                        </h2>
                        <h3 className="text-primary font-italic font-light" data-aos="fade-right">
                            Restons en <strong className="font-semibold">CONTACT</strong>
                        </h3>
                        <input type="email" placeholder="Votre e-mail" className="btn text-primary" data-aos="zoom-in" />
                        <a href="#" className="btn btn-secondary" data-aos="zoom-in"><span className="underline">J</span>e transmets</a>
                        <small className="text-primary" data-aos="zoom-in">En soumettant ce formulaire, j&apos;accepte de recevoir des offres marketing</small>
                    </div>
                    <div className="flex w-12 md:w-5 h-full">
                        <Image
                            src="/mockup.png"
                            alt=""
                            width={875}
                            height={1795}
                            className="w-full h-auto fit-contain"
                            data-aos="flip-left"
                            data-aos-anchor-placement="center-bottom"
                            data-aos-delay="500"
                        />
                    </div>
                </div>
            </div>

            <div className="footer container py-6">
                <div className="flex flex-column md:flex-row justify-content-around gap-3 md:gap-8">
                    <div className="flex flex-1 flex-column align-items-center md:align-items-start gap-3">
                        <Image
                            src="/dana.png"
                            alt="Dana"
                            width={125}
                            height={46}
                            className="h-auto"
                        />
                        <p className="text-primary text-lg">Découvrez la vie culturelle locale grâce à votre CSE d&apos;entreprise</p>
                    </div>
                    <div className="flex flex-1 flex-column align-self-start md:align-self-end gap-2">
                        <a href="#" className="text-primary">Offres</a>
                        <a href="#" className="text-primary">Fonctionnalités</a>
                        <a href="#" className="text-primary">Sorties</a>
                        <a href="#" className="text-primary">Mentions légales</a>
                    </div>
                    <div className="flex flex-1 justify-content-center align-self-center md:align-self-end gap-5 mt-3 md:mt-0">
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