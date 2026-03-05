// IMPORTACIONES

import styles from "../modules/views_module/Guide.module.css";
import HeadingHeader from "../components/global_comps/HeadingHeader";
import RegularBtn from "../components/global_comps/RegularBtn";
import HeadingRegular from "../components/global_comps/HeadingRegular";
import StepCard from "../components/guide_comps/StepCard";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

// COMPONENTE

const Guide = () => {
    // Arreglo con la informacion de todos los pasos (estilos y contenido)
    const steps = [
        {
            icon: "gravity-ui:person-plus",
            color: "var(--bgPrincipalBtn)",
            badgeBg: "var(--bgBadgeGreen)",
            brBadge: "var(--brBadgeGreen)",
            title: "Registro de Acudiente",
            description:
                "Crea tu cuenta como acudiente responsable. Solo necesitas tu documento de identidad y ser mayor de edad.",
            details: [
                {
                    text: "Documento de identidad vigente (C.C.)",
                    icon: "gravity-ui:file-text",
                },
                {
                    text: "Ser mayor de 18 anos",
                    icon: "gravity-ui:shield-check",
                },
                {
                    text: "Correo electronico y telefono activos",
                    icon: "gravity-ui:hashtag",
                },
                {
                    text: "Puedes registrar varios estudiantes con una sola cuenta",
                    icon: "gravity-ui:sparkles",
                },
            ],
        },
        {
            icon: "gravity-ui:file-text",
            color: "var(--colorGoldHover)",
            badgeBg: "var(--bgBadgeGold)",
            brBadge: "var(--brBadgeGold)",
            title: "Datos del Estudiante",
            description:
                "Completa la informacion personal, medica y de contactos de emergencia del estudiante paso a paso.",
            details: [
                {
                    text: "Nombre completo, fecha de nacimiento, genero",
                    icon: "gravity-ui:file-text",
                },
                {
                    text: "Informacion medica: tipo de sangre, alergias, EPS",
                    icon: "gravity-ui:heart",
                },
                {
                    text: "Contactos de emergencia (minimo 1)",
                    icon: "gravity-ui:persons-lock",
                },
                {
                    text: "Grado al que aspira y direccion de residencia",
                    icon: "gravity-ui:map-pin",
                },
            ],
        },
        {
            icon: "gravity-ui:arrow-up-from-line",
            color: "var(--colorRed)",
            badgeBg: "var(--bgBadgeRed)",
            brBadge: "var(--brBadgeRed)",
            title: "Subida de Documentos",
            description:
                "Adjunta los documentos requeridos en formato PDF y la foto formal del estudiante.",
            details: [
                {
                    text: "Foto formal del estudiante (torso hacia arriba)",
                    icon: "gravity-ui:camera",
                },
                {
                    text: "Documento de identidad del estudiante (PDF)",
                    icon: "gravity-ui:file-check",
                },
                {
                    text: "Certificado de EPS o SISBEN vigente (PDF)",
                    icon: "gravity-ui:file-text",
                },
                {
                    text: "Certificado medico si hay condicion especial",
                    icon: "gravity-ui:heart",
                },
            ],
        },
        {
            icon: "gravity-ui:seal-check",
            color: "var(--bgPrincipalBtn)",
            badgeBg: "var(--bgBadgeGreen)",
            brBadge: "var(--brBadgeGreen)",
            title: "Verificacion y Asignacion",
            description:
                "Nuestro equipo administrativo revisa tu solicitud, valida los documentos y asigna un grupo disponible.",
            details: [
                {
                    text: "Revision de documentos por el equipo administrativo",
                    icon: "gravity-ui:file-check",
                },
                {
                    text: "Validacion de datos e informacion suministrada",
                    icon: "gravity-ui:circle-check",
                },
                {
                    text: "Asignacion de grupo segun disponibilidad",
                    icon: "gravity-ui:sparkles",
                },
                {
                    text: "Notificacion de confirmacion al acudiente",
                    icon: "gravity-ui:clock",
                },
            ],
        },
    ];
    // Arreglo con la informacion de todos los tips (estilos y contenido)
    const tips = [
        {
            icon: "gravity-ui:camera",
            color: "var(--bgPrincipalBtn)",
            bgBadge: "var(--bgBadgeGreen)",
            title: "Foto del estudiante",
            desc: "Fondo blanco, buena iluminacion, del torso hacia arriba. Formato JPG o PNG.",
        },
        {
            icon: "gravity-ui:file-check",
            color: "var(--colorGoldHover)",
            bgBadge: "var(--bgBadgeGold)",
            title: "Documentos en PDF",
            desc: "Todos los documentos deben ser legibles y estar en formato PDF.",
        },
        {
            icon: "gravity-ui:clock",
            color: "var(--colorRed)",
            bgBadge: "var(--bgBadgeRed)",
            title: "Tiempo de respuesta",
            desc: "La verificacion puede tomar de 1 a 3 dias habiles despues del envio.",
        },
        {
            icon: "gravity-ui:shield-check",
            color: "var(--bgPrincipalBtn)",
            bgBadge: "var(--bgBadgeGreen)",
            title: "Datos seguros",
            desc: "Tu informacion esta protegida y solo sera usada para el proceso de inscripcion.",
        },
    ];

    return (
        <div className={styles.GuideContainer}>
            <header>
                <div className={styles.headerContentLeft}>
                    <Link to={-1}>
                        <RegularBtn
                            btnContext="btnHeaderBack"
                            btnIcon="arrow-left"
                            btnText="Volver"
                        />
                    </Link>
                    <HeadingHeader
                        headingLogo="true"
                        headingTitle="Guía de Inscripción"
                        headingDescription="Proceso paso a paso"
                    />
                </div>
                <Link to="/auth">
                    <RegularBtn
                        btnContext="btnHeaderPrincipal"
                        btnText="Inscribe Ahora"
                        btnIcon="arrow-right"
                    />
                </Link>
            </header>
            <main className={styles.guideBody}>
                <section className={styles.guideHero}>
                    <span className={styles.miniTagGuide}>
                        Proceso 100% Gratuito
                    </span>
                    <HeadingRegular
                        headingText={
                            <>
                                Como inscribir a{" "}
                                <span className={styles.highlightText}>
                                    tu estudiante
                                </span>
                            </>
                        }
                        headingTextSize="4.3rem"
                        headingDescription="Sigue estos 4 sencillos pasos para completar la inscripcion de manera exitosa. Sin costos, sin complicaciones"
                    />
                    <div className={styles.blobGreen} />
                    <div className={styles.blobYellow} />
                </section>
                <section className={styles.guideContent}>
                    {steps.map((step, index) => (
                        <StepCard
                            key={index}
                            step={step}
                            index={index}
                            steps={steps}
                        />
                    ))}
                </section>
                <section className={styles.guideTips}>
                    <HeadingRegular
                        headingText="Consejos importantes"
                        headingDescription="Ten en cuenta estas recomendaciones antes de iniciar el proceso"
                    />
                    <div className={styles.tipsGrid}>
                        {tips.map((tip, index) => (
                            <div className={styles.tipCard}>
                                <div
                                    className={styles.tipIcon}
                                    style={{
                                        background: tip.bgBadge,
                                        color: tip.color,
                                    }}
                                >
                                    <Icon icon={tip.icon} />
                                </div>
                                <div>
                                    <h3 className={styles.tipTitle}>
                                        {tip.title}
                                    </h3>
                                    <p className={styles.tipDesc}>{tip.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                <section className={styles.guideWarn}>
                    <div className={styles.warnContainer}>
                        <div className={styles.warnIcon}>
                            <Icon icon="gravity-ui:triangle-exclamation" />
                        </div>
                        <div className={styles.warnContent}>
                            <h3 className={styles.warnTitle}>
                                Antes de empezar, asegurate de tener:
                            </h3>
                            <ul className={styles.warnList}>
                                <li className={styles.warnListItem}>
                                    <Icon icon="gravity-ui:circle-check" />
                                    Tu cedula de ciudadania a la mano
                                </li>
                                <li className={styles.warnListItem}>
                                    <Icon icon="gravity-ui:circle-check" />
                                    Los documentos del estudiante escaneados en
                                    PDF
                                </li>
                                <li className={styles.warnListItem}>
                                    <Icon icon="gravity-ui:circle-check" />
                                    Una foto formal y reciente del estudiante
                                </li>
                                <li className={styles.warnListItem}>
                                    <Icon icon="gravity-ui:circle-check" />
                                    Informacion medica del estudiante (tipo de
                                    sangre, EPS, alergias)
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section className={styles.guideCTA}>
                    <div className={styles.startNowContainer}>
                        <div className={styles.startNowIcon}>
                            <Icon icon="gravity-ui:graduation-cap" />
                        </div>
                        <h2 className={styles.startNowTitle}>
                            ¿Listo para inscribir a tu estudiante?
                        </h2>
                        <p className={styles.startNowDesc}>
                            Solo toma unos minutos completar el proceso. Es
                            completamente gratuito y seguro
                        </p>
                        <Link href="/auth">
                            <RegularBtn
                                btnText="Comenzar Inscripcion"
                                btnIcon="arrow-right"
                                btnContext="btnHeaderSecondary"
                            />
                        </Link>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Guide;
