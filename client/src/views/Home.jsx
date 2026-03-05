// IMPORTACIONES

import styles from "../modules/views_module/Home.module.css";
import RegularBtn from "../components/global_comps/RegularBtn";
import HeaderGlobal from "../components/global_comps/HeaderGlobal";
import BgHeroGlobal from "../components/global_comps/BgHeroGlobal";
import HeadingRegular from "../components/global_comps/HeadingRegular";
import MiniTag from "../components/home_comps/MiniTag";
import StepCard from "../components/home_comps/StepCard";
import { Link } from "react-router-dom";

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
        <div className={styles.homeSection1}>
            <div className={styles.homeContent}>
                <MiniTag
                    className={styles.homeContentTag}
                    tagText="Inscripciones Abiertas 2026 - Completamente Gratuita"
                    tagIcon=""
                />
                <h1 className={styles.homeContentTitle}>
                    Asegura el futuro educativo de tu hijo
                </h1>
                <p className={styles.homeContentSubTitle}>
                    Un proceso simple, seguro y completamente gratuito para
                    inscribir a tu hijo en nuestro instituto. Sin costos
                    ocultos, sin complicaciones.
                </p>
                <div className={styles.homeContentBtns}>
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
            <BgHeroGlobal heroContent={heroBgContent} />

            <div className={styles.homeSection2}>
                <HeadingRegular
                    headingText="Proceso Simple en 3 Pasos"
                    headingDescription="Diseñado para ser intuitivo y accesible para todos los acudientes, sin importar su experiencia tecnológica"
                />
                <div className={styles.stepFastTutoContainer}>
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
            </div>
        </>
    );
}
