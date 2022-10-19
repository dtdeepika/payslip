import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import ComponentToPrint from "./ComponentToPrint";

export default function List() {

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    return (
        <div>
            <ComponentToPrint ref={componentRef} />
            <div className="d-flex justify-content-between">
                <NavLink to="/dataList">
                    <button type="button" className="btn btn-secondary btn-sm" style={{ height: "26px", paddingTop: "0px",marginLeft:"50px",marginBottom:"50px" }} onClick={handlePrint}>Print</button>
                </NavLink>
            </div>
        </div>
    )
}
