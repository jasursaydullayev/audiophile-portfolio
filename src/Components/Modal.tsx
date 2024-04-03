import { Link } from "react-router-dom";
import { ModalBtn, ModalFd, ModalH, ModalH1, ModalP, ModalSd } from "./ClassName";

function Modal() {
  return (
    <div>
      <label htmlFor="my_modal_7">
        <img
          className="cursor-pointer"
          src="/shape.svg"
          alt="shape-svg"
          width={23.33}
          height={20}
        />
      </label>
      <input type="checkbox" id="my_modal_7" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className={ModalFd}>
          <div className={ModalSd}>
            <h3 className={ModalH}>
              CART (0)
            </h3>
            <p className={ModalP}>
              Remove all
            </p>
          </div>
          <h1 className={ModalH1}>
            Your Cart is Empty
          </h1>
          <Link to={"/checkout"}>
            <button className={ModalBtn}>
              CHECKOUT
            </button>
          </Link>
        </div>

        <label className="modal-backdrop" htmlFor="my_modal_7">
          Close
        </label>
      </div>
    </div>
  );
}

export default Modal;
