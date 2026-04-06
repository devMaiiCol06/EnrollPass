// IMPORTACIONES

import styles from '../../modules/comps_module/global_module/RegularInput.module.css'

// COMPONENTE

const RegularInput = ({typeInput, placeholderInput}) => {
    return (
        <input className={styles.RegularInput} type={typeInput} placeholder={placeholderInput} />
    );
};

export default RegularInput;