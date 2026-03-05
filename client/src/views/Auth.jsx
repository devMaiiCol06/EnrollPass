import styles from "../modules/views_module/Auth.module.css";
import "../index.css";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FeatureItem from "../components/auth_comps/FeatureItem";
import AuthLoginForm from "../components/auth_comps/authLoginForm";
import BgHeroGlobal from "../components/global_comps/BgHeroGlobal";
import AuthRegisterForm from "../components/auth_comps/authRegisterForm";
import RegularBtn from "../components/global_comps/RegularBtn";
import HeaderGlobal from "../components/global_comps/HeaderGlobal";

export default function Auth() {
    const navigate = useNavigate();
    const [showAdminInput, setShowAdminInput] = useState(false);
    const [authView, setAuthView] = useState("login");
    const [showRegister, setShowRegister] = useState(false);

    const [adminCodeServer] = useState("INDEACCESS2026");

    const handleAdminCode = (e) => {
        // e.preventDefault();
        // setAdminCode(e.target.adminCode.value);
        // fetch("/adminCodeVerificatory.php", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({ adminCode }),
        // })
        //     .then((response) => response.text())
        //     .then((data) => {
        //         console.log(data);
        //     })
        //     .catch((error) => {
        //         console.error("Error:", error);
        //     });
        e.preventDefault();
        const code = e.target.adminInputCode.value;
        if (code === adminCodeServer) {
            navigate("/admin");
        } else {
            setShowAdminInput(false);
            alert("Código incorrecto");
        }
    };

    // Variable que contiene el contenido del lado derecho del componente "HeaderGlobal"
    const headerRightContent = (
        <Link to="/guide">
            <RegularBtn
                btnText="Guia de Inscripción"
                btnContext="btnHeaderSecondary"
            />
        </Link>
    );
    // Variable con el contenido del hero para pasar como parametro al componente "BgHeroGlobal"
    const heroBgContent = (
        <div className={styles.authContent}>
            <div className={styles.cardTutorSelector}>
                <div className={styles.cardPrimaryPart}>
                    <div className={styles.cardIconContainer}>
                        <Icon
                            icon="gravity-ui:person"
                            className={styles.cardIcon}
                            style={{
                                color: "var(--textColorTertiary)",
                                fontSize: "35px",
                            }}
                        />
                    </div>
                    <h3 className={styles.cardTitle}>
                        {authView === "login"
                            ? "Iniciar Sesión"
                            : "Crear Cuenta"}
                    </h3>
                    {(authView === "register" && (
                        <p className={styles.cardDescription}>
                            Regístrate para inscribir estudiantes
                        </p>
                    )) || (
                        <p className={styles.cardDescription}>
                            Accede a tu panel de acudiente
                        </p>
                    )}
                </div>
                {authView === "register" && (
                    <>
                        <div className={styles.cardSecondaryPart}>
                            <div className={styles.featuresContainer}>
                                <FeatureItem
                                    featureIcon="1"
                                    featureText="Nueva matrícula"
                                />
                                <FeatureItem
                                    featureIcon="2"
                                    featureText="Renovar matrícula"
                                />
                                <FeatureItem
                                    featureIcon="3"
                                    featureText="Gestionar Estudiantes"
                                />
                            </div>
                        </div>
                    </>
                )}
            </div>
            <div className={styles.authFormContainer}>
                {authView === "login" ? (
                    <AuthLoginForm />
                ) : showRegister ? (
                    <AuthRegisterForm />
                ) : (
                    <div className={styles.importantMsgContainer}>
                        <h3 className={styles.importantMsgTitle}>
                            <Icon icon="gravity-ui:exclamation-shape" />A tener
                            en cuenta:
                        </h3>
                        <p className={styles.importantMsgText}>
                            La plataforma permite un registro inicial con
                            información básica. Sin embargo, para habilitar el
                            proceso de inscripción de matrículas, es obligatorio
                            completar los datos adicionales requeridos
                        </p>
                        <div
                            className={styles.importantMsgBtnContainer}
                            onClick={() => setShowRegister(true)}
                        >
                            <RegularBtn
                                btnText="Continuar"
                                btnContext="btnAuthAction"
                            />
                        </div>
                    </div>
                )}
            </div>
            <p className={styles.formChangerText}>
                {authView === "login"
                    ? "¿No tienes una cuenta de acudiente?"
                    : "¿Ya tienes una cuenta?"}
            </p>
            {(authView === "login" && (
                <p
                    onClick={() => {
                        setAuthView("register");
                        setShowRegister(false);
                        setShowAdminInput(false);
                    }}
                    className={styles.formChanger}
                >
                    Registrate Aquí
                </p>
            )) || (
                <p
                    onClick={() => {
                        setAuthView("login");
                        setShowAdminInput(false);
                        setShowRegister(false);
                    }}
                    className={styles.formChanger}
                >
                    Iniciar sesión Aquí
                </p>
            )}
            <hr className={styles.separator} />
            <div className={styles.adminContainer}>
                {!showAdminInput && (
                    <span
                        onClick={() => setShowAdminInput(true)}
                        className={styles.adminText}
                    >
                        <Icon icon="gravity-ui:ellipsis" />
                        Acceso administrativo
                    </span>
                )}
                {showAdminInput && (
                    <div className={styles.adminFormContainer}>
                        <div className={styles.adminFormHeader}>
                            <Icon
                                icon="gravity-ui:shield"
                                style={{
                                    fontSize: "20px",
                                }}
                            />
                            <p>Personal administrativo</p>
                        </div>
                        <form
                            className={styles.adminCodeForm}
                            // method="post"
                            // action="http://localhost:3000/adminCodeVerificatory.php"
                            onSubmit={handleAdminCode}
                        >
                            <label
                                className={styles.adminFormLabel}
                                htmlFor="adminCode"
                            >
                                Código de acceso Institucional
                            </label>
                            <input
                                className={styles.adminFormInput}
                                type="password"
                                name="adminInputCode"
                                id="adminInputCode"
                                placeholder="Ingrese código aquí"
                            />
                            <span
                                onClick={() => setShowAdminInput(false)}
                                className={styles.adminFormClose}
                            >
                                <Icon icon="gravity-ui:circle-xmark" />
                            </span>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );

    return (
        <>
            <div className={styles.authContainer}>
                <HeaderGlobal
                    headingLogo="true"
                    headingTitle="I.E. La Independencia"
                    headingDescription="Iniciar Sesión"
                    headerRightContent={headerRightContent}
                />
                <BgHeroGlobal heroContent={heroBgContent} />
            </div>
        </>
    );
}
