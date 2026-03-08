// IMPORTACIONES

import styles from "../modules/views_module/Home.module.css";
import RegularBtn from "../components/global_comps/RegularBtn";
import HeaderGlobal from "../components/global_comps/HeaderGlobal";
import BgHeroGlobal from "../components/global_comps/BgHeroGlobal";
import HeadingRegular from "../components/global_comps/HeadingRegular";
import MiniTag from "../components/home_comps/MiniTag";
import StepCard from "../components/home_comps/StepCard";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

// COMPONENTE

export default function Home() {
    // Variable que contiene el contenido del lado derecho del componente "HeaderGlobal"
    const headerRightContent = (
        <div className={styles.homeHeaderBtns}>
            <Link to="/guide">
                <RegularBtn
                    btnText="Guia de Inscripción"
                    btnContext="btnHeaderSecondary"
                />
            </Link>
            <Link to="/auth">
                <RegularBtn
                    btnText="Iniciar Sesión"
                    btnIcon="arrow-right"
                    btnContext="btnHeaderPrincipal"
                />
            </Link>
        </div>
    );
    // Variable con el contenido del hero para pasar como parametro al componente "BgHeroGlobal"
    const heroBgContent = (
        <div className={styles.homeHero}>
            <div className={styles.heroContent}>
                <MiniTag
                    className={styles.heroTag}
                    tagText="Inscripciones Abiertas 2026 - Completamente Gratuita"
                    tagIcon=""
                />
                <h1 className={styles.heroTitle}>
                    Asegura el futuro educativo de tu hijo
                </h1>
                <p className={styles.heroSubtitle}>
                    Un proceso simple, seguro y completamente gratuito para
                    inscribir a tu hijo en nuestro instituto. Sin costos
                    ocultos, sin complicaciones.
                </p>
                <div className={styles.heroBtns}>
                    <Link to="/auth">
                        <RegularBtn
                            btnText="Comenzar Inscripción Gratuita"
                            btnIcon="arrow-right"
                            btnContext="btnHomePrincipal"
                        />
                    </Link>
                    <Link to="/guide">
                        <RegularBtn
                            btnText="Ver Guía Paso a Paso"
                            btnContext="btnHomeSecondary"
                        />
                    </Link>
                </div>
            </div>
        </div>
    );

    return (
        <>
            <HeaderGlobal
                headingLogo="true"
                headingTitle="I.E. La Independencia"
                headingDescription="Matriculas"
                headerRightContent={headerRightContent}
            />
            <main>
                <BgHeroGlobal heroContent={heroBgContent} />

                <section className={styles.homeContent}>
                    <HeadingRegular
                        headingText="Proceso Simple en 3 Pasos"
                        headingDescription="Diseñado para ser intuitivo y accesible para todos los acudientes, sin importar su experiencia tecnológica"
                    />
                    <div className={styles.stepsContainer}>
                        <StepCard
                            stepIcon="persons"
                            stepIconColor="var(--bgPrincipalBtn)"
                            stepIconBgColor="#dcfce7"
                            stepHeading="1. Registro de Acudiente"
                            stepDescription="Regístrate como acudiente responsable con tu documento de identidad. Un acudiente puede inscribir múltiples estudiantes de forma sencilla"
                        />
                        <StepCard
                            stepIcon="book-open"
                            stepIconColor="var(--colorGold)"
                            stepIconBgColor="#fef9c3ac"
                            stepHeading="2. Datos del Estudiante"
                            stepDescription="Completa la información del estudiante y sube los documentos requeridos de forma segura. Todo el proceso es guiado paso a paso"
                        />
                        <StepCard
                            stepIcon="shield"
                            stepIconColor="var(--bgPrincipalBtn)"
                            stepIconBgColor="#dcfce7"
                            stepHeading="3. Verificación"
                            stepDescription="Nuestro equipo administrativo verifica la información y asigna el grupo correspondiente. Recibirás confirmación inmediata"
                        />
                    </div>
                    <div className={styles.homeCTA}>
                        <section className={styles.ctaCard}>
                            <div className={styles.ctaCardIcon}>
                                <Icon Icon="gravity-ui:graduation-cap" />
                            </div>
                            <span className={styles.ctaCardTitle}>
                                ¿Listo para asegurar el futuro de tu hijo?
                            </span>
                            <p className={styles.ctaCardDescription}>
                                El proceso de inscripcion es completamente
                                gratuito y solo toma unos minutos. Sin costos
                                ocultos, sin complicaciones.
                            </p>
                            <div className={styles.ctaCardInfo}>
                                <div className={styles.ctaCardInfoItem}>
                                    <h2 className={styles.ctaCardInfoItemTitle}>
                                        100%
                                    </h2>
                                    <p className={styles.ctaCardInfoItemText}>
                                        Gratuito
                                    </p>
                                </div>
                                <div className={styles.ctaCardInfoItem}>
                                    <h2 className={styles.ctaCardInfoItemTitle}>
                                        10 min
                                    </h2>
                                    <p className={styles.ctaCardInfoItemText}>
                                        Promedio
                                    </p>
                                </div>
                                <div className={styles.ctaCardInfoItem}>
                                    <h2 className={styles.ctaCardInfoItemTitle}>
                                        24/7
                                    </h2>
                                    <p className={styles.ctaCardInfoItemText}>
                                        Disponible
                                    </p>
                                </div>
                            </div>
                            <div className={styles.ctaCardBtns}>
                                <RegularBtn
                                    btnText="Comenzar Inscripción Ahora"
                                    btnIcon="arrow-right"
                                    btnContext="btnHomePrincipal"
                                />
                                <RegularBtn
                                    btnText="Ver Guía Completa"
                                    btnContext="btnHomeSecondary"
                                />
                            </div>
                        </section>
                        <section className={styles.ctaMoreInfo}>
                            <div className={styles.ctaMoreInfoItem}>
                                <div className={styles.ctaMoreInfoItemIcon}>
                                    <Icon Icon="gravity-ui:shield" />
                                </div>
                                <p className={styles.ctaMoreInfoItemText}>
                                    Datos Protegidos
                                </p>
                            </div>
                            <div className={styles.ctaMoreInfoItem}>
                                <div className={styles.ctaMoreInfoItemIcon}>
                                    <Icon Icon="gravity-ui:cursor-click" />
                                </div>
                                <p className={styles.ctaMoreInfoItemText}>
                                    Facil de usar
                                </p>
                            </div>
                            <div className={styles.ctaMoreInfoItem}>
                                <div className={styles.ctaMoreInfoItemIcon}>
                                    <Icon Icon="gravity-ui:shield-check" />
                                </div>
                                <p className={styles.ctaMoreInfoItemText}>
                                    Proceso Verificado
                                </p>
                            </div>
                        </section>
                    </div>
                </section>
            </main>
        </>
    );
}
