// IMPORTACIONES

import styles from "../modules/views_module/Home.module.css";
import RegularBtn from "../components/global_comps/RegularBtn";
import MiniTag from "../components/home_comps/MiniTag";
import { Link } from "react-router-dom";

// COMPONENTE

export default function Home() {
    return (
        <div className={styles.homeContainer}>
            <div className={styles.homeHeader}>
                <div className={styles.homeHeaderContent}>
                    <img
                        className={styles.homeHeaderImg}
                        src="../../IndeAccess_Logotipo.png"
                        alt="Logo IndeAccess"
                    />
                    <div className={styles.homeHeaderTexts}>
                        <p className={styles.homeHeaderTitle}>
                            I.E. La Independencia
                        </p>
                        <p className={styles.homeHeaderSubTitle}>Matriculas</p>
                    </div>
                </div>
                <div className={styles.homeHeaderBtns}>
                    <Link to="/guide">
                        <RegularBtn
                            btnText="Guia de Inscripción"
                            btnContext="btnHeaderSecondary"
                            // btnBg="btnBgSecondary"
                        />
                    </Link>
                    <Link to="/auth">
                        <RegularBtn
                            btnText="Iniciar Sesión"
                            btnIcon="arrow-right"
                            btnContext="btnHeaderPrincipal"
                            // btnBg="btnBgPrincipal"
                        />
                    </Link>
                </div>
            </div>
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
                            // btnBg="btnBgPrincipal"
                        />
                    </Link>
                    <Link to="/guide">
                        <RegularBtn
                            btnText="Ver Guía Paso a Paso"
                            btnContext="btnHomeSecondary"
                            // btnBg="btnBgSecondary"
                        />
                    </Link>
                </div>
            </div>
            {/* <div className={styles.homeAdminBtn}>
                <Link to="/auth?admin=true">
                    <div className={styles.homeAdminBtnIcon}>
                        <Icon icon="gravity-ui:gear" />
                    </div>
                </Link>
            </div> */}
        </div>
    );
}
