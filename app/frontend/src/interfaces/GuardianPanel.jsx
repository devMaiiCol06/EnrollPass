// IMPORTACIONES

import styles from "../modules/views_module/GuardianPanel.module.css";
import HeaderGlobal from "../components/global_comps/HeaderGlobal";
import RegularBtn from "../components/global_comps/RegularBtn";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

// COMPONENTE

const GuardianPanel = () => {
    // DATOS

    // Variable que contiene los datos del acudiente
    const guardian = {
        firstName: "Maicol",
        secondName: "Smith",
        firstLastName: "Moreno",
        secondLastName: "Aguirre",
        cedula: 104652805,
        email: "maicolmoreno1218@gmail.com",
        phone: 3207661678,
        address: "Cll 113A - 20",
    };

    // Variable que contiene los datos de los estudiantes del acudiente
    const students = [
        {
            id: 1,
            name: "Maria Gonzalez",
            grade: "5",
            status: "approved",
            group: "A",
            photo: "../assets/images/PersonPhoto.avif",
            enrollmentDate: "15/01/2024",
            age: 10,
            bloodType: "O+",
        },
        {
            id: 2,
            name: "Carlos Gonzalez",
            status: "pending",
            grade: "3",
            photo: "../assets/images/PersonPhoto.avif",
            enrollmentDate: "20/01/2024",
            age: 8,
            bloodType: "A+",
        },
        {
            id: 2,
            name: "Emanuel Palacios Aguirre",
            status: "refused",
            grade: "2",
            photo: "../assets/images/PersonPhoto.avif",
            enrollmentDate: "20/01/2024",
            age: 8,
            bloodType: "A+",
        },
    ];

    // Variable que contiene los datos de las tarjetas de accion rapida
    const quickActionCards = [
        {
            cardTitle: "Nueva Inscripcion",
            cardDescription: "Inscribir un nuevo estudiante",
            iconName: "gravity-ui:plus",
            cardButtonText: "Nueva",
            cardContext: "quickActionCardNew",
            cardLink: "/new-enrollment",
        },
        {
            cardTitle: "Renovar Matricula",
            cardDescription: "Renovar un estudiante existente",
            iconName: "gravity-ui:arrows-rotate-right",
            cardButtonText: "Renovar",
            cardContext: "quickActionCardRenew",
            cardLink: "/renew-enrollment",
        },
        {
            cardTitle: "Cancelar Matricula",
            cardDescription: "Retirar un estudiante inscrito",
            iconName: "gravity-ui:circle-xmark",
            cardButtonText: "Cancelar",
            cardContext: "quickActionCardCancel",
        },
    ];

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

    // Estructura del componente
    return (
        <div className={styles.view}>
            <div className={styles.GuardianPanelContainer}>
                {/* Header */}
                <HeaderGlobal
                    headingLogo="true"
                    headingTitle="I.E. La Independencia"
                    headingDescription="Matriculas"
                    // headerRightContent={headerRightContent}
                />
                {/* Contenido Principal */}
                <div className={styles.guardianPanelContainer}>
                    {/* Banner de Bienvenida */}
                    <div className={styles.gpWelcomeBanner}>
                        <div className={styles.welcomeBannerWrapper}>
                            <div
                                className={
                                    styles.welcomeBanner + " specialLiquidGlass"
                                }
                            >
                                <div className={styles.welcomeText}>
                                    <p>Bienvenida de vuelta</p>
                                    <h2>
                                        {guardian.firstName +
                                            " " +
                                            guardian.secondName +
                                            " " +
                                            guardian.firstLastName +
                                            " " +
                                            guardian.secondLastName}
                                    </h2>
                                    <p>
                                        Aqui puedes gestionar las inscripciones
                                        de tus estudiantes, ver el estado de
                                        cada solicitud y registrar nuevos
                                    </p>
                                </div>
                                <div className={styles.welcomeStats}>
                                    <div className={styles.statCard}>
                                        <h1>{students.length}</h1>
                                        <p>Estudiantes</p>
                                    </div>
                                    <div className={styles.statCard}>
                                        <h1>
                                            {
                                                students.filter(
                                                    (student) =>
                                                        student.status ===
                                                        "approved",
                                                ).length
                                            }
                                        </h1>
                                        <p>Aprobados</p>
                                    </div>
                                    <div className={styles.statCard}>
                                        <h1>
                                            {
                                                students.filter(
                                                    (student) =>
                                                        student.status ===
                                                        "pending",
                                                ).length
                                            }
                                        </h1>
                                        <p>Pendientes</p>
                                    </div>
                                </div>
                                <div className={styles.blobGreen}></div>
                                <div className={styles.blobYellow}></div>
                            </div>
                        </div>
                    </div>
                    {/* Acciones Rápidas */}
                    <div className={styles.gpQuickActions}>
                        <div className={styles.quickActionsWrapper}>
                            <h3 className={styles.quickActionsTitle}>
                                Acciones Rapidas
                            </h3>
                            <div className={styles.quickActionsCards}>
                                {quickActionCards.map((action, index) => {
                                    const cardContent = (
                                        <div
                                            className={`${styles.quickActionCard} ${styles[action.cardContext]}`}
                                        >
                                            <div
                                                className={
                                                    styles.quickActionCardHeader
                                                }
                                            >
                                                <div
                                                    className={
                                                        styles.quickActionCardIcon
                                                    }
                                                >
                                                    <Icon
                                                        icon={action.iconName}
                                                        width={28}
                                                        height={28}
                                                    />
                                                </div>
                                                <div
                                                    className={
                                                        styles.quickActionCardContent
                                                    }
                                                >
                                                    <h2
                                                        className={
                                                            styles.quickActionCardTitle
                                                        }
                                                    >
                                                        {action.cardTitle}
                                                    </h2>
                                                    <p
                                                        className={
                                                            styles.quickActionCardDescription
                                                        }
                                                    >
                                                        {action.cardDescription}
                                                    </p>
                                                </div>
                                            </div>
                                            <div
                                                className={
                                                    styles.quickActionCardButton
                                                }
                                            >
                                                <p
                                                    className={
                                                        styles.quickActionCardButtonText
                                                    }
                                                >
                                                    {action.cardButtonText}
                                                </p>
                                                <div
                                                    className={
                                                        styles.quickActionCardButtonIcon
                                                    }
                                                >
                                                    <Icon
                                                        icon="gravity-ui:arrow-right"
                                                        width={14}
                                                        height={14}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    );

                                    return action.cardLink ? (
                                        <Link to={action.cardLink} key={index}>
                                            {cardContent}
                                        </Link>
                                    ) : (
                                        <div key={index}>{cardContent}</div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    {/* Lista de Estudiantes */}
                    <div className={styles.gpStudentsList}>
                        <div className={styles.studentsListWrapper}>
                            <div>
                                <div>
                                    <Icon icon="gravity-ui:persons" />
                                </div>
                                <div>
                                    <h2>Mis Estudiantes</h2>
                                    <p>
                                        {students.length} estudiante(s)
                                        registrado(s)
                                    </p>
                                </div>
                            </div>
                            {/* Lista de estudiantes AQUI */}
                            <div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                    {/* Agregar Estudiante */}
                    <div className={styles.gpAddStudent}>
                        <div className={styles.addStudentWrapper}></div>
                    </div>
                    {/* Banner de Guia */}
                    <div className={styles.gpGuide}>
                        <div className={styles.guideCard}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GuardianPanel;
