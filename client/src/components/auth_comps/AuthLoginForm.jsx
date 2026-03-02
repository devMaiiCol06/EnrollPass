// IMPORTACIONES

import InputBoxForm from '../global_comps/InputBoxForm'
import styles from '../../modules/comps_module/auth_module/AuthLoginForm.module.css'
import RegularBtn from '../global_comps/RegularBtn'

// COMPONENTE

const AuthLoginForm = () => {
    return (
        <div className={styles.authLoginFormContainer}>
            <InputBoxForm
                labelInput="Correo Electronico"
                typeInput="email"
                placeholderInput="correo@egemplo.com"
            />
            <InputBoxForm
                labelInput="Contraseña"
                typeInput="password"
                placeholderInput="Contraseña"
            />
            <div className={styles.authFormBtnContainer}>
                <RegularBtn btnText="Iniciar Sesión" btnContext="btnAuthAction" />
            </div>
        </div>
    );
};

export default AuthLoginForm;