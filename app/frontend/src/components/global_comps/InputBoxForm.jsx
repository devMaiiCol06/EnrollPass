// IMPORTACIONES

import RegularInput from '../global_comps/RegularInput'
import styles from '../../modules/comps_module/global_module/InputBoxForm.module.css'

// COMPONENTE

const InputBoxForm = ( {labelInput, typeInput, placeholderInput}) => {
    return (
        <div className={styles.InputBoxFormContainer} >
            <label>{labelInput}</label>
            <RegularInput typeInput={typeInput} placeholderInput={placeholderInput} />
        </div>
    );
};

export default InputBoxForm;