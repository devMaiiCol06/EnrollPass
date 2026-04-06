// IMPORTACIONES

import styles from "../../modules/comps_module/auth_module/AuthRegisterForm.module.css";
import InputBoxForm from "../global_comps/InputBoxForm";
import RegularBtn from "../global_comps/RegularBtn";

// COMPONENTE

const AuthRegisterForm = () => {
    return (
        <div className={styles.authLoginFormContainer}>
            <div className={styles.authFormNamesContainer}>
                <InputBoxForm
                    labelInput="Nombres"
                    typeInput="text"
                    placeholderInput="Nombres"
                />
                <InputBoxForm
                    labelInput="Apellidos"
                    typeInput="text"
                    placeholderInput="Apellidos"
                />
            </div>
            <InputBoxForm
                labelInput="Cedula de ciudadania"
                typeInput="number"
                placeholderInput="Numero de cedula"
            />
            <InputBoxForm
                labelInput="Telefono"
                typeInput="number"
                placeholderInput="Numero de telefono"
            />
            <InputBoxForm
                labelInput="Correo electronico"
                typeInput="email"
                placeholderInput="correo@ejemplo.com"
            />
            <InputBoxForm
                labelInput="Contraseña"
                typeInput="password"
                placeholderInput="Contraseña"
            />
            <InputBoxForm
                labelInput="Confirmar contraseña"
                typeInput="password"
                placeholderInput="Confirmar contraseña"
            />
            <div className={styles.authFormBtnContainer}>
                <RegularBtn btnText="Crear Cuenta" btnContext="btnAuthAction" />
            </div>
        </div>
    );
};

export default AuthRegisterForm;