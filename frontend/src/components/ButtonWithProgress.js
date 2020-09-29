import React from 'react';

const ButtonWithProgress = (props) => {


    const {pendingApiCall,ispasswordMismatch,onClick,pageName} = props

    return (

        <div>
            <div className="col text-center" style={{ marginTop: '25px' }}>
                <button disabled={pendingApiCall || ispasswordMismatch} onClick={onClick} type="button" style={{ background: "purple", border: "purple" }} className="btn btn-info ">
                    {pendingApiCall &&
                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>}
                                    {pageName}
                                    </button>
            </div>
        </div>
    );
};

export default ButtonWithProgress;