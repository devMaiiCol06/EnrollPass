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
        <section className={styles.homeHero}>
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
                            btnContext="btnMainPrincipal"
                        />
                    </Link>
                    <Link to="/guide">
                        <RegularBtn
                            btnText="Ver Guía Paso a Paso"
                            btnContext="btnMainSecondary"
                        />
                    </Link>
                </div>
            </div>
        </section>
    );

    return (
        <>
            <HeaderGlobal
                headingLogo="true"
                headerRightContent={headerRightContent}
            />
            <main className={styles.main}>
                <BgHeroGlobal heroContent={heroBgContent} />

                <section className={styles.homeContent}>
                    <section className={styles.homeSteps}>
                        <HeadingRegular
                            headingText="Proceso Simple en 3 Pasos"
                            headingDescription="Diseñado para ser intuitivo y accesible para todos los acudientes, sin importar su experiencia tecnológica"
                        />
                        <div className={styles.stepsContent}>
                            <StepCard
                                stepIcon="persons"
                                stepIconColor="var(--colorGreen)"
                                stepIconBgColor="var(--bgBadgeGreen)"
                                stepHeading="1. Registro de Acudiente"
                                stepDescription="Regístrate como acudiente responsable con tu documento de identidad. Un acudiente puede inscribir múltiples estudiantes de forma sencilla"
                            />
                            <StepCard
                                stepIcon="book-open"
                                stepIconColor="var(--colorBlue)"
                                stepIconBgColor="var(--bgBadgeBlue)"
                                stepHeading="2. Datos del Estudiante"
                                stepDescription="Completa la información del estudiante y sube los documentos requeridos de forma segura. Todo el proceso es guiado paso a paso"
                            />
                            <StepCard
                                stepIcon="shield"
                                stepIconColor="var(--colorGold)"
                                stepIconBgColor="var(--bgBadgeGold)"
                                stepHeading="3. Verificación"
                                stepDescription="Nuestro equipo administrativo verifica la información y asigna el grupo correspondiente. Recibirás confirmación inmediata"
                            />
                        </div>
                    </section>
                    <section className={styles.homeCTA}>
                        <div className={styles.ctaContent}>
                            <div
                                className={
                                    styles.ctaCard + " specialLiquidGlass"
                                }
                            >
                                <div className={styles.ctaCardIcon}>
                                    <Icon
                                        icon="gravity-ui:graduation-cap"
                                        color="var(--colorBlueHover)"
                                        width={34}
                                        height={34}
                                    />
                                </div>
                                <span className={styles.ctaCardTitle}>
                                    ¿Listo para asegurar el futuro de tu hijo?
                                </span>
                                <p className={styles.ctaCardDescription}>
                                    El proceso de inscripcion es completamente
                                    gratuito y solo toma unos minutos. Sin
                                    costos ocultos, sin complicaciones
                                </p>
                                <div className={styles.ctaCardInfo}>
                                    <div className={styles.ctaCardInfoItem}>
                                        <h2
                                            className={
                                                styles.ctaCardInfoItemTitle
                                            }
                                        >
                                            100%
                                        </h2>
                                        <p
                                            className={
                                                styles.ctaCardInfoItemText
                                            }
                                        >
                                            Gratuito
                                        </p>
                                    </div>
                                    <div className={styles.ctaCardInfoItem}>
                                        <h2
                                            className={
                                                styles.ctaCardInfoItemTitle
                                            }
                                        >
                                            10 min
                                        </h2>
                                        <p
                                            className={
                                                styles.ctaCardInfoItemText
                                            }
                                        >
                                            Promedio
                                        </p>
                                    </div>
                                    <div className={styles.ctaCardInfoItem}>
                                        <h2
                                            className={
                                                styles.ctaCardInfoItemTitle
                                            }
                                        >
                                            24/7
                                        </h2>
                                        <p
                                            className={
                                                styles.ctaCardInfoItemText
                                            }
                                        >
                                            Disponible
                                        </p>
                                    </div>
                                </div>
                                <div className={styles.ctaCardBtns}>
                                    <Link to="/guide" className={styles.ctaCardBtnsItem}>
                                        <RegularBtn
                                            btnText="Ver Guía Completa"
                                            btnContext="btnMainSecondary"
                                        />
                                    </Link>
                                    <Link to="/auth" className={styles.ctaCardBtnsItem}>
                                        <RegularBtn
                                            btnText="Comenzar Inscripción Ahora"
                                            btnIcon="arrow-right"
                                            btnContext="btnMainPrincipal"
                                        />
                                    </Link>
                                </div>
                            </div>
                            <div className={styles.ctaMoreInfo}>
                                <div
                                    className={
                                        styles.ctaMoreInfoItem +
                                        " specialLiquidGlass"
                                    }
                                >
                                    <div className={styles.ctaMoreInfoItemIcon}>
                                        <Icon
                                            icon="gravity-ui:shield"
                                            color="var(--colorGold)"
                                            width={24}
                                            height={24}
                                        />
                                    </div>
                                    <p className={styles.ctaMoreInfoItemText}>
                                        Datos Protegidos
                                    </p>
                                </div>
                                <div
                                    className={
                                        styles.ctaMoreInfoItem +
                                        " specialLiquidGlass"
                                    }
                                >
                                    <div className={styles.ctaMoreInfoItemIcon}>
                                        <Icon
                                            icon="gravity-ui:universal-access"
                                            color="var(--colorGold)"
                                            width={24}
                                            height={24}
                                        />
                                    </div>
                                    <p className={styles.ctaMoreInfoItemText}>
                                        Facil de usar
                                    </p>
                                </div>
                                <div
                                    className={
                                        styles.ctaMoreInfoItem +
                                        " specialLiquidGlass"
                                    }
                                >
                                    <div className={styles.ctaMoreInfoItemIcon}>
                                        <Icon
                                            icon="gravity-ui:seal-check"
                                            color="var(--colorGold)"
                                            width={24}
                                            height={24}
                                        />
                                    </div>
                                    <p className={styles.ctaMoreInfoItemText}>
                                        Proceso Verificado
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.blobGreen} />
                        <div className={styles.blobBlue} />
                    </section>
                </section>
            </main>
        </>
    );
}
