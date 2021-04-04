'use strict'

const Modal = ({handleClose, show, children }) => {
	const showHideClassName = show ? "modal d-block" : "modal d-none";

	return (
		<div className={showHideClassName}>
			<div className="modal-dialog" role="document">
				<div className="modal-content">
					<div className="modal-body">
						{children}
						<a className="modal-close" onClick={handleClose}>close</a>
					</div>
				</div>
			</div>
		</div>
	);
};
