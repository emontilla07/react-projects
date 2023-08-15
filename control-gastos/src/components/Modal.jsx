import PropTypes from 'prop-types';
import CerrarBtn from '../img/cerrar.svg';

export const Modal = ({ setModal }) => {

    const ocultarModal = () => setModal(false);

    return (
        <div className="modal">
            <div className="cerrar-modal">
                <img
                    src={ CerrarBtn }
                    alt="cerrar modal"
                    onClick={ ocultarModal }
                />
            </div>
        </div>
    )
}

Modal.propTypes = {
    setModal: PropTypes.bool.isRequired,
};